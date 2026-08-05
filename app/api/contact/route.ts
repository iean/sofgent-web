import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

const ContactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(200),
  email: z.string().trim().min(1, 'Email is required').email('Invalid email').max(320),
  phone: z.string().trim().max(50).optional().default(''),
  subject: z.string().trim().min(1, 'Subject is required').max(300),
  message: z.string().trim().min(1, 'Message is required').max(5000),
  // Honeypot: a real visitor never sees or fills this field. If it's non-empty, it's a bot.
  // Deliberately unconstrained here — a bot filling it with anything must still parse
  // successfully so the handler can detect it and respond with a fake "success".
  company_website: z.string().optional().default(''),
});

// Best-effort in-memory rate limit — resets whenever the serverless instance
// cools down. Not a substitute for a shared store (e.g. Upstash) at scale,
// but stops naive scripted bursts against a warm instance for free.
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const RATE_LIMIT_MAX = 5;
const rateLimitHits = new Map<string, { count: number; windowStart: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitHits.get(ip);

  if (!entry || now - entry.windowStart > RATE_LIMIT_WINDOW_MS) {
    rateLimitHits.set(ip, { count: 1, windowStart: now });
    return false;
  }

  entry.count += 1;
  return entry.count > RATE_LIMIT_MAX;
}

function getClientIp(request: NextRequest): string {
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) return forwardedFor.split(',')[0].trim();
  return request.headers.get('x-real-ip') ?? 'unknown';
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

type ContactFormData = { name: string; email: string; phone: string; subject: string; message: string };

// WhatsApp notification function
async function sendWhatsAppNotification(formData: ContactFormData) {
  const whatsappNumber = process.env.WHATSAPP_NUMBER; // Your WhatsApp number (e.g., +8801537740365)
  const whatsappApiUrl = process.env.WHATSAPP_API_URL; // Your WhatsApp API endpoint

  if (!whatsappNumber || !whatsappApiUrl) {
    console.log('WhatsApp configuration missing');
    return;
  }

  const message = `🔔 *New Contact Form Submission*

👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
📱 *Phone:* ${formData.phone || 'Not provided'}
📋 *Subject:* ${formData.subject}

💬 *Message:*
${formData.message}

---
*Sent from SofGent Website*`;

  const response = await fetch(whatsappApiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      to: whatsappNumber,
      message: message,
    }),
  });

  if (!response.ok) {
    throw new Error(`WhatsApp API error: ${response.status}`);
  }

  console.log('WhatsApp notification sent successfully');
}

// Branded confirmation email sent back to the person who submitted the form.
function buildAutoReplyHtml(name: string): string {
  const safeName = escapeHtml(name.split(' ')[0] || name);
  return `
    <div style="font-family: -apple-system, Segoe UI, Roboto, sans-serif; max-width: 480px; margin: 0 auto; padding: 32px 0;">
      <div style="background: #0c0c0c; padding: 28px 32px; border-radius: 14px 14px 0 0;">
        <span style="color: #fff; font-size: 18px; font-weight: 700; letter-spacing: -0.02em;">SofGent</span>
      </div>
      <div style="background: #ffffff; border: 1px solid #e6e6e6; border-top: none; padding: 32px; border-radius: 0 0 14px 14px;">
        <h1 style="font-size: 20px; color: #0c0c0c; margin: 0 0 12px;">Thanks, ${safeName} — we got it.</h1>
        <p style="font-size: 14px; color: #4a4a4a; line-height: 1.65; margin: 0 0 16px;">
          Your message is in our queue. We&rsquo;ll review it and get back to you within one business day to scope your project and book a call.
        </p>
        <p style="font-size: 14px; color: #4a4a4a; line-height: 1.65; margin: 0 0 24px;">
          In the meantime, feel free to reply directly to this email if anything else comes to mind.
        </p>
        <p style="font-size: 13px; color: #9a9a9a; margin: 0;">— The SofGent team</p>
      </div>
    </div>
  `;
}

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request);
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const parsed = ContactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message ?? 'Invalid form data' },
        { status: 400 }
      );
    }

    const { name, email, phone, subject, message, company_website } = parsed.data;

    // Honeypot tripped — silently report success so bots don't learn to adapt.
    if (company_website) {
      console.log('Honeypot tripped, dropping submission silently', { ip });
      return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    }

    const safe = {
      name: escapeHtml(name),
      email: escapeHtml(email),
      phone: escapeHtml(phone),
      subject: escapeHtml(subject),
      message: escapeHtml(message).replace(/\n/g, '<br>'),
    };

    // Provider-agnostic SMTP. Defaults target Microsoft 365 (smtp.office365.com,
    // 587 STARTTLS); override SMTP_HOST/SMTP_PORT/SMTP_SECURE for any other provider.
    const smtpHost = process.env.SMTP_HOST || 'smtp.office365.com';
    const smtpPort = Number(process.env.SMTP_PORT || 587);
    const smtpSecure = process.env.SMTP_SECURE
      ? process.env.SMTP_SECURE === 'true'
      : smtpPort === 465; // 465 = implicit TLS, 587 = STARTTLS
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      requireTLS: !smtpSecure, // force STARTTLS on 587 (required by Microsoft 365)
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Internal notification — escaped values only.
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'contact@sofgent.com',
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${safe.name}</p>
        <p><strong>Email:</strong> ${safe.email}</p>
        <p><strong>Phone:</strong> ${safe.phone || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${safe.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${safe.message}</p>
        <hr>
        <p><em>This email was sent from the contact form on your website.</em></p>
      `,
    });

    // Branded auto-reply to the submitter — best effort, doesn't fail the request.
    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: "We've got your message — SofGent",
        html: buildAutoReplyHtml(name),
      });
    } catch (autoReplyError) {
      console.error('Auto-reply email failed:', autoReplyError);
    }

    // Send WhatsApp notification
    try {
      await sendWhatsAppNotification({ name, email, phone, subject, message });
    } catch (whatsappError) {
      console.error('WhatsApp notification failed:', whatsappError);
      // Don't fail the entire request if WhatsApp fails
    }

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
