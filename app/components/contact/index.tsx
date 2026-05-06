"use client";

import { useState } from "react";

interface FormData {
   name: string;
   company: string;
   timeline: string;
   productIdea: string;
   website: string;
}

type FormErrors = Record<Exclude<keyof FormData, "website">, string>;

const validateField = (name: keyof FormData, value: string) => {
   switch (name) {
      case "name":
         return value.trim().length < 2
            ? "Name must be at least 2 characters"
            : "";
      case "company":
         return value.trim().length < 2
            ? "Company must be at least 2 characters"
            : "";
      case "timeline":
         return value.trim().length < 2
            ? "Please share your timeline"
            : "";
      case "productIdea":
         return value.trim().length < 20
            ? "Please share a bit more detail about the product idea"
            : "";
      default:
         return "";
   }
};

const INITIAL_FORM_DATA: FormData = {
   name: "",
   company: "",
   timeline: "",
   productIdea: "",
   website: "",
};

export default function ContactForm() {
   const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);

   const [errors, setErrors] = useState<FormErrors>({
      name: "",
      company: "",
      timeline: "",
      productIdea: "",
   });

   const [isSubmitting, setIsSubmitting] = useState(false);
   const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
      "idle"
   );
   const [submitMessage, setSubmitMessage] = useState<string>("");

   const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
   ) => {
      const field = e.target.name as keyof FormData;
      const value = e.target.value;

      setFormData((prev) => ({ ...prev, [field]: value }));
      setErrors((prev) => ({ ...prev, [field]: validateField(field, value) }));
   };

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      // Honeypot — if the hidden "website" field has any value, silently
      // accept the submission (so bots get a 200) but skip the network call.
      if (formData.website.trim().length > 0) {
         setSubmitStatus("success");
         setSubmitMessage(
            "Thanks. Your details have been sent. We'll be in touch shortly."
         );
         setFormData(INITIAL_FORM_DATA);
         return;
      }

      const nextErrors = {
         name: validateField("name", formData.name),
         company: validateField("company", formData.company),
         timeline: validateField("timeline", formData.timeline),
         productIdea: validateField("productIdea", formData.productIdea),
      };

      setErrors(nextErrors);

      if (Object.values(nextErrors).some(Boolean)) {
         setSubmitStatus("error");
         setSubmitMessage("Please fix the highlighted fields and try again.");
         return;
      }

      setIsSubmitting(true);
      setSubmitStatus("idle");
      setSubmitMessage("");

      try {
         const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
         });

         if (!response.ok) {
            const payload = (await response.json().catch(() => null)) as
               | { error?: string }
               | null;

            if (response.status === 429) {
               setSubmitStatus("error");
               setSubmitMessage(
                  "You've sent several requests recently. Please try again in an hour."
               );
               return;
            }
            if (response.status === 400) {
               setSubmitStatus("error");
               setSubmitMessage(
                  payload?.error ||
                     "Some details look off. Please review the form and try again."
               );
               return;
            }
            throw new Error(payload?.error || "Failed to submit form");
         }

         setSubmitStatus("success");
         setSubmitMessage(
            "Thanks. Your details have been sent. We'll be in touch shortly."
         );
         setFormData(INITIAL_FORM_DATA);
      } catch (error) {
         console.error("Error submitting form:", error);
         setSubmitStatus("error");
         setSubmitMessage(
            "There was a problem sending your details. Please try again."
         );
      } finally {
         setIsSubmitting(false);
      }
   };

   return (
      <section className="p-8 md:p-12 h-full flex flex-col justify-center">
         <div className="border-b border-slate-100 pb-8">
            <p className="text-sm font-bold uppercase tracking-widest text-primary">
               Quick Intake
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
               Share your product idea
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
               Keep it short. We only need enough context to prepare for a
               useful first conversation.
            </p>
         </div>

         <form onSubmit={handleSubmit} className="mt-8 grid gap-6 flex-grow" noValidate>
            {/* Honeypot field — hidden from users + screen readers, real bots fill it */}
            <input
               onChange={handleChange}
               value={formData.website}
               name="website"
               type="text"
               tabIndex={-1}
               autoComplete="off"
               className="absolute left-[-9999px] h-0 w-0 opacity-0"
               aria-hidden="true"
            />

            <div>
               <label htmlFor="contact-name" className="mb-2.5 block text-sm font-bold text-slate-700">
                  Name
               </label>
               <input
                  id="contact-name"
                  onChange={handleChange}
                  value={formData.name}
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your name"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "contact-name-error" : undefined}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-3.5 text-slate-900 transition-colors focus:border-primary focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary/10"
               />
               {errors.name ? (
                  <p
                     id="contact-name-error"
                     className="mt-2.5 text-sm font-medium text-red-500">
                     {errors.name}
                  </p>
               ) : null}
            </div>

            <div>
               <label htmlFor="contact-company" className="mb-2.5 block text-sm font-bold text-slate-700">
                  Company
               </label>
               <input
                  id="contact-company"
                  onChange={handleChange}
                  value={formData.company}
                  name="company"
                  type="text"
                  autoComplete="organization"
                  placeholder="Company name"
                  aria-invalid={Boolean(errors.company)}
                  aria-describedby={
                     errors.company ? "contact-company-error" : undefined
                  }
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-3.5 text-slate-900 transition-colors focus:border-primary focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary/10"
               />
               {errors.company ? (
                  <p
                     id="contact-company-error"
                     className="mt-2.5 text-sm font-medium text-red-500">
                     {errors.company}
                  </p>
               ) : null}
            </div>

            <div>
               <label htmlFor="contact-timeline" className="mb-2.5 block text-sm font-bold text-slate-700">
                  Timeline
               </label>
               <input
                  id="contact-timeline"
                  onChange={handleChange}
                  value={formData.timeline}
                  name="timeline"
                  type="text"
                  placeholder="For example: ASAP, 4 weeks, this quarter"
                  aria-invalid={Boolean(errors.timeline)}
                  aria-describedby={
                     errors.timeline ? "contact-timeline-error" : undefined
                  }
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-3.5 text-slate-900 transition-colors focus:border-primary focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary/10"
               />
               {errors.timeline ? (
                  <p
                     id="contact-timeline-error"
                     className="mt-2.5 text-sm font-medium text-red-500">
                     {errors.timeline}
                  </p>
               ) : null}
            </div>

            <div>
               <label htmlFor="contact-product-idea" className="mb-2.5 block text-sm font-bold text-slate-700">
                  Product Idea
               </label>
               <textarea
                  id="contact-product-idea"
                  onChange={handleChange}
                  value={formData.productIdea}
                  name="productIdea"
                  placeholder="What are you building, and where do you need help?"
                  aria-invalid={Boolean(errors.productIdea)}
                  aria-describedby={
                     errors.productIdea ? "contact-product-idea-error" : undefined
                  }
                  className="min-h-[160px] w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-3.5 text-slate-900 transition-colors focus:border-primary focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary/10 resize-y"
               />
               {errors.productIdea ? (
                  <p
                     id="contact-product-idea-error"
                     className="mt-2.5 text-sm font-medium text-red-500">
                     {errors.productIdea}
                  </p>
               ) : null}
            </div>

            <div className="pt-4">
               <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-2xl bg-primary px-8 py-3.5 text-sm font-bold text-primary-foreground shadow-[0_8px_20px_rgba(6,182,212,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-400 hover:shadow-[0_12px_25px_rgba(6,182,212,0.35)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0">
                  {isSubmitting ? "Sending..." : "Send details"}
               </button>

               <div aria-live="polite" aria-atomic="true">
                  {submitStatus === "success" && submitMessage ? (
                     <div
                        role="status"
                        className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-sm font-medium text-emerald-800">
                        {submitMessage}
                     </div>
                  ) : null}

                  {submitStatus === "error" && submitMessage ? (
                     <div
                        role="alert"
                        className="mt-6 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm font-medium text-red-800">
                        {submitMessage}
                     </div>
                  ) : null}
               </div>
            </div>
         </form>
      </section>
   );
}
