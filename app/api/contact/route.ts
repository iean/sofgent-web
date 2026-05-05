import { NextRequest, NextResponse } from "next/server";
import { escapeHtml } from "@/lib/escape";
import { CONTACT_TO_EMAIL } from "@/lib/constants";
import { limitContactSubmissions } from "@/lib/ratelimit";
import {
   DiscoverySchema,
   LegacySchema,
   type DiscoveryPayload,
   type LegacyPayload,
} from "@/lib/schemas/contact";
import nodemailer from "nodemailer";

type NormalizedPayload = {
   subject: string;
   html: string;
   whatsappMessage: string;
};

const sanitizePayload = <T extends Record<string, string>>(payload: T): T =>
   Object.fromEntries(
      Object.entries(payload).map(([key, value]) => [key, escapeHtml(value)])
   ) as T;

const normalizePayload = (
   payload: DiscoveryPayload | LegacyPayload
): NormalizedPayload => {
   if ("company" in payload) {
      const safePayload = sanitizePayload({
         name: payload.name,
         company: payload.company,
         timeline: payload.timeline,
         productIdea: payload.productIdea,
      });

      return {
         subject: `Discovery Request: ${safePayload.company}`,
         html: `
           <h2>New Discovery Call Request</h2>
           <p><strong>Name:</strong> ${safePayload.name}</p>
           <p><strong>Company:</strong> ${safePayload.company}</p>
           <p><strong>Timeline:</strong> ${safePayload.timeline}</p>
           <p><strong>Product Idea:</strong></p>
           <p>${safePayload.productIdea}</p>
           <hr>
           <p><em>Sent from the SofGent contact form.</em></p>
         `,
         whatsappMessage: `New Discovery Call Request\n\nName: ${safePayload.name}\nCompany: ${safePayload.company}\nTimeline: ${safePayload.timeline}\n\nProduct Idea:\n${safePayload.productIdea}`,
      };
   }

   const safePayload = sanitizePayload({
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
      subject: payload.subject,
      message: payload.message,
   });

   return {
      subject: `Contact Form: ${safePayload.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${safePayload.name}</p>
        <p><strong>Email:</strong> ${safePayload.email}</p>
        <p><strong>Phone:</strong> ${safePayload.phone}</p>
        <p><strong>Subject:</strong> ${safePayload.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${safePayload.message}</p>
        <hr>
        <p><em>Sent from the SofGent website.</em></p>
      `,
      whatsappMessage: `New Contact Form Submission\n\nName: ${safePayload.name}\nEmail: ${safePayload.email}\nPhone: ${safePayload.phone}\nSubject: ${safePayload.subject}\n\nMessage:\n${safePayload.message}`,
   };
};

const parsePayload = (payload: unknown): DiscoveryPayload | LegacyPayload => {
   const discovery = DiscoverySchema.safeParse(payload);

   if (discovery.success) {
      return discovery.data;
   }

   const legacy = LegacySchema.safeParse(payload);

   if (legacy.success) {
      return legacy.data;
   }

   throw new Error("Invalid contact payload");
};

async function sendWhatsAppNotification(message: string) {
   const whatsappNumber = process.env.WHATSAPP_NUMBER;
   const whatsappApiUrl = process.env.WHATSAPP_API_URL;

   if (!whatsappNumber || !whatsappApiUrl) {
      return;
   }

   const response = await fetch(whatsappApiUrl, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify({
         to: whatsappNumber,
         message,
      }),
   });

   if (!response.ok) {
      throw new Error(`WhatsApp API error: ${response.status}`);
   }
}

export async function POST(request: NextRequest) {
   try {
      const ip =
         request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
         request.headers.get("x-real-ip") ||
         "anon";
      const rateLimit = await limitContactSubmissions(`contact:${ip}`);

      if (!rateLimit.success) {
         return NextResponse.json(
            { error: "Too many submissions. Please try again later." },
            { status: 429 }
         );
      }

      const body = (await request.json()) as unknown;
      const payload = parsePayload(body);
      const normalizedPayload = normalizePayload(payload);

      const transporter = nodemailer.createTransport({
         service: "gmail",
         auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
         },
      });

      await transporter.sendMail({
         from: process.env.EMAIL_USER,
         to: CONTACT_TO_EMAIL,
         subject: normalizedPayload.subject,
         html: normalizedPayload.html,
      });

      try {
         await sendWhatsAppNotification(normalizedPayload.whatsappMessage);
      } catch (whatsappError) {
         console.error("WhatsApp notification failed:", whatsappError);
      }

      return NextResponse.json(
         { message: "Email sent successfully" },
         { status: 200 }
      );
   } catch (error) {
      if (error instanceof Error && error.message === "Invalid contact payload") {
         return NextResponse.json(
            { error: "Invalid contact submission." },
            { status: 400 }
         );
      }

      console.error("Error sending email:", error);
      return NextResponse.json(
         { error: "Failed to send email." },
         { status: 500 }
      );
   }
}
