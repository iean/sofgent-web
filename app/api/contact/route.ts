import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

type LegacyPayload = {
   name?: string;
   email?: string;
   phone?: string;
   subject?: string;
   message?: string;
};

type DiscoveryPayload = {
   name?: string;
   company?: string;
   timeline?: string;
   productIdea?: string;
};

type NormalizedPayload = {
   name: string;
   subject: string;
   html: string;
   whatsappMessage: string;
};

const normalizePayload = (
   payload: LegacyPayload & DiscoveryPayload
): NormalizedPayload | null => {
   if (
      payload.name &&
      payload.company &&
      payload.timeline &&
      payload.productIdea
   ) {
      return {
         name: payload.name,
         subject: `Discovery Request: ${payload.company}`,
         html: `
           <h2>New Discovery Call Request</h2>
           <p><strong>Name:</strong> ${payload.name}</p>
           <p><strong>Company:</strong> ${payload.company}</p>
           <p><strong>Timeline:</strong> ${payload.timeline}</p>
           <p><strong>Product Idea:</strong></p>
           <p>${payload.productIdea}</p>
           <hr>
           <p><em>Sent from the SofGent contact form.</em></p>
         `,
         whatsappMessage: `New Discovery Call Request\n\nName: ${payload.name}\nCompany: ${payload.company}\nTimeline: ${payload.timeline}\n\nProduct Idea:\n${payload.productIdea}`,
      };
   }

   if (
      payload.name &&
      payload.email &&
      payload.phone &&
      payload.subject &&
      payload.message
   ) {
      return {
         name: payload.name,
         subject: `Contact Form: ${payload.subject}`,
         html: `
           <h2>New Contact Form Submission</h2>
           <p><strong>Name:</strong> ${payload.name}</p>
           <p><strong>Email:</strong> ${payload.email}</p>
           <p><strong>Phone:</strong> ${payload.phone}</p>
           <p><strong>Subject:</strong> ${payload.subject}</p>
           <p><strong>Message:</strong></p>
           <p>${payload.message}</p>
           <hr>
           <p><em>Sent from the SofGent website.</em></p>
         `,
         whatsappMessage: `New Contact Form Submission\n\nName: ${payload.name}\nEmail: ${payload.email}\nPhone: ${payload.phone}\nSubject: ${payload.subject}\n\nMessage:\n${payload.message}`,
      };
   }

   return null;
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
      const payload = (await request.json()) as LegacyPayload & DiscoveryPayload;
      const normalizedPayload = normalizePayload(payload);

      if (!normalizedPayload) {
         return NextResponse.json(
            { error: "Required form fields are missing" },
            { status: 400 }
         );
      }

      const transporter = nodemailer.createTransport({
         service: "gmail",
         auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
         },
      });

      await transporter.sendMail({
         from: process.env.EMAIL_USER,
         to: "support@sofgent.com",
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
      console.error("Error sending email:", error);
      return NextResponse.json(
         { error: "Failed to send email" },
         { status: 500 }
      );
   }
}
