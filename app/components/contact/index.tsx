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
      <section className="p-8 md:p-12 h-full flex flex-col justify-center">
         <div className="border-b border-slate-100 pb-8">
            <p className="text-sm font-bold uppercase tracking-widest text-brand">
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

         <form onSubmit={handleSubmit} className="mt-8 grid gap-6 flex-grow">
            <div>
               <label className="mb-2.5 block text-sm font-bold text-slate-700">
                  Name
               </label>
               <input
                  onChange={handleChange}
                  value={formData.name}
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-3.5 text-slate-900 transition-colors focus:border-brand focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand/10"
               />
               {errors.name ? (
                  <p className="mt-2.5 text-sm font-medium text-red-500">{errors.name}</p>
               ) : null}
            </div>

            <div>
               <label className="mb-2.5 block text-sm font-bold text-slate-700">
                  Company
               </label>
               <input
                  onChange={handleChange}
                  value={formData.company}
                  name="company"
                  type="text"
                  placeholder="Company name"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-3.5 text-slate-900 transition-colors focus:border-brand focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand/10"
               />
               {errors.company ? (
                  <p className="mt-2.5 text-sm font-medium text-red-500">{errors.company}</p>
               ) : null}
            </div>

            <div>
               <label className="mb-2.5 block text-sm font-bold text-slate-700">
                  Timeline
               </label>
               <input
                  onChange={handleChange}
                  value={formData.timeline}
                  name="timeline"
                  type="text"
                  placeholder="For example: ASAP, 4 weeks, this quarter"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-3.5 text-slate-900 transition-colors focus:border-brand focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand/10"
               />
               {errors.timeline ? (
                  <p className="mt-2.5 text-sm font-medium text-red-500">{errors.timeline}</p>
               ) : null}
            </div>

            <div>
               <label className="mb-2.5 block text-sm font-bold text-slate-700">
                  Product Idea
               </label>
               <textarea
                  onChange={handleChange}
                  value={formData.productIdea}
                  name="productIdea"
                  placeholder="What are you building, and where do you need help?"
                  className="min-h-[160px] w-full rounded-xl border border-slate-200 bg-slate-50 px-5 py-3.5 text-slate-900 transition-colors focus:border-brand focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand/10 resize-y"
               />
               {errors.productIdea ? (
                  <p className="mt-2.5 text-sm font-medium text-red-500">
                     {errors.productIdea}
                  </p>
               ) : null}
            </div>

            <div className="pt-4">
               <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-2xl bg-brand px-8 py-3.5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(50,109,109,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#285b5b] hover:shadow-[0_12px_25px_rgba(50,109,109,0.35)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0">
                  {isSubmitting ? "Sending..." : "Send details"}
               </button>

               {submitStatus === "success" ? (
                  <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-sm font-medium text-emerald-800">
                     Thanks. Your details have been sent successfully. We will be in touch shortly.
                  </div>
               ) : null}

               {submitStatus === "error" ? (
                  <div className="mt-6 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-sm font-medium text-red-800">
                     There was a problem sending your details. Please try again.
                  </div>
               ) : null}
            </div>
         </form>
      </section>
   );
}
