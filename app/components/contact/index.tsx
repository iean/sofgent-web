"use client";

import { useState } from "react";

interface FormData {
   name: string;
   company: string;
   timeline: string;
   productIdea: string;
}

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

export default function ContactForm() {
   const [formData, setFormData] = useState<FormData>({
      name: "",
      company: "",
      timeline: "",
      productIdea: "",
   });

   const [errors, setErrors] = useState<FormData>({
      name: "",
      company: "",
      timeline: "",
      productIdea: "",
   });

   const [isSubmitting, setIsSubmitting] = useState(false);
   const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
      "idle"
   );

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

      const nextErrors = {
         name: validateField("name", formData.name),
         company: validateField("company", formData.company),
         timeline: validateField("timeline", formData.timeline),
         productIdea: validateField("productIdea", formData.productIdea),
      };

      setErrors(nextErrors);

      if (Object.values(nextErrors).some(Boolean)) {
         return;
      }

      setIsSubmitting(true);
      setSubmitStatus("idle");

      try {
         const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
         });

         if (!response.ok) {
            throw new Error("Failed to submit form");
         }

         setSubmitStatus("success");
         setFormData({
            name: "",
            company: "",
            timeline: "",
            productIdea: "",
         });
      } catch (error) {
         console.error("Error submitting form:", error);
         setSubmitStatus("error");
      } finally {
         setIsSubmitting(false);
      }
   };

   return (
      <section className="p-7 md:p-9">
         <div className="border-b border-slate-200 pb-6">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand">
               Quick Intake
            </p>
            <h2 className="mt-4 text-24 font-semibold tracking-[-0.03em] text-slate-950 md:text-[34px]">
               Share your product idea
            </h2>
            <p className="mt-4 text-[16px] leading-8 text-slate-600">
               Keep it short. We only need enough context to prepare for a
               useful first conversation.
            </p>
         </div>

         <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
            <div>
               <label className="mb-2 block text-sm font-medium text-slate-700">
                  Name
               </label>
               <input
                  onChange={handleChange}
                  value={formData.name}
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-brand focus:bg-white focus:outline-none"
               />
               {errors.name ? (
                  <p className="mt-2 text-sm text-red-500">{errors.name}</p>
               ) : null}
            </div>

            <div>
               <label className="mb-2 block text-sm font-medium text-slate-700">
                  Company
               </label>
               <input
                  onChange={handleChange}
                  value={formData.company}
                  name="company"
                  type="text"
                  placeholder="Company name"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-brand focus:bg-white focus:outline-none"
               />
               {errors.company ? (
                  <p className="mt-2 text-sm text-red-500">{errors.company}</p>
               ) : null}
            </div>

            <div>
               <label className="mb-2 block text-sm font-medium text-slate-700">
                  Timeline
               </label>
               <input
                  onChange={handleChange}
                  value={formData.timeline}
                  name="timeline"
                  type="text"
                  placeholder="For example: ASAP, 4 weeks, this quarter"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-brand focus:bg-white focus:outline-none"
               />
               {errors.timeline ? (
                  <p className="mt-2 text-sm text-red-500">{errors.timeline}</p>
               ) : null}
            </div>

            <div>
               <label className="mb-2 block text-sm font-medium text-slate-700">
                  Product Idea
               </label>
               <textarea
                  onChange={handleChange}
                  value={formData.productIdea}
                  name="productIdea"
                  placeholder="What are you building, and where do you need help?"
                  className="min-h-[160px] w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-brand focus:bg-white focus:outline-none"
               />
               {errors.productIdea ? (
                  <p className="mt-2 text-sm text-red-500">
                     {errors.productIdea}
                  </p>
               ) : null}
            </div>

            <div>
               <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(50,109,109,0.2)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#285b5b] disabled:cursor-not-allowed disabled:opacity-60">
                  {isSubmitting ? "Sending..." : "Send details"}
               </button>

               {submitStatus === "success" ? (
                  <div className="mt-4 rounded-2xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
                     Thanks. Your details have been sent successfully.
                  </div>
               ) : null}

               {submitStatus === "error" ? (
                  <div className="mt-4 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                     There was a problem sending your details. Please try again.
                  </div>
               ) : null}
            </div>
         </form>
      </section>
   );
}
