import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// WhatsApp notification function
async function sendWhatsAppNotification(formData: { name: string; email: string; phone: string; subject: string; message: string }) {
  const whatsappNumber = process.env.WHATSAPP_NUMBER; // Your WhatsApp number (e.g., +8801537740365)
  const whatsappApiUrl = process.env.WHATSAPP_API_URL; // Your WhatsApp API endpoint
  
  if (!whatsappNumber || !whatsappApiUrl) {
    console.log('WhatsApp configuration missing');
    return;
  }

  const message = `🔔 *New Contact Form Submission*

👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
📱 *Phone:* ${formData.phone}
📋 *Subject:* ${formData.subject}

💬 *Message:*
${formData.message}

---
*Sent from SofGent Website*`;

  try {
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
  } catch (error) {
    console.error('Failed to send WhatsApp notification:', error);
    throw error;
  }
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Create transporter (you'll need to configure this with your email service)
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or your preferred email service
      auth: {
        user: process.env.EMAIL_USER, // your email
        pass: process.env.EMAIL_PASS, // your email password or app password
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'support@sofgent.com',
      subject: `Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr>
        <p><em>This email was sent from the contact form on your website.</em></p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

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
