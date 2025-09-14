"use client";
import { useState } from "react";
import { BiEnvelope, BiPhone } from "react-icons/bi";
import SocialFollow from "./SocialFollow";

interface FormData {
   name: string;
   email: string;
   phone: string;
   subject: string;
   message: string;
}
// Form validation
const validateField = (name: keyof FormData, value: string) => {
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   const phoneRegex = /^\d{10}$/;  // Validates 10-digit phone numbers
 
   switch (name) {
     case 'name':
       return value.length < 2 ? 'Name must be at least 2 characters' : '';
     case 'email':
       return !value ? 'Email is required' : 
              !emailRegex.test(value) ? 'Invalid email format' : '';
     case 'phone':
       return !value ? 'Phone is required' : 
              !phoneRegex.test(value) ? 'Phone must be 10 digits' : '';
     case 'subject':
       return value.length < 3 ? 'Subject must be at least 3 characters' : '';
     case 'message':
       return value.length < 10 ? 'Message must be at least 10 characters' : '';
     default:
       return '';
   }
 };
 
export default function ContactForm() {
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
   });
   const [errors, setErrors] = useState({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
   });

   const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
   ) => {
      const field = e.target.name as keyof FormData;
      const value = e.target.value;
      setFormData((prev) => ({ ...prev, [field]: value }));
      const err = validateField(field, value);
      setErrors((prev) => ({ ...prev, [field]: err }));
   };

   const [isSubmitting, setIsSubmitting] = useState(false);
   const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      
      // Check if there are any validation errors
      const hasErrors = Object.values(errors).some(error => error !== '');
      if (hasErrors) {
         return;
      }

      setIsSubmitting(true);
      setSubmitStatus('idle');

      try {
         const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
         });

         if (response.ok) {
            setSubmitStatus('success');
            // Reset form after successful submission
            setFormData({
               name: "",
               email: "",
               phone: "",
               subject: "",
               message: "",
            });
            setErrors({
               name: "",
               email: "",
               phone: "",
               subject: "",
               message: "",
            });
         } else {
            setSubmitStatus('error');
         }
      } catch (error) {
         console.error('Error submitting form:', error);
         setSubmitStatus('error');
      } finally {
         setIsSubmitting(false);
      }
   };

   return (
      <section className="py-16 md:py-[130px]">
         <div className="theme-container w-full mx-auto grid grid-cols-7 lg:grid-cols-12 gap-y-16 lg:gap-y-0 lg:gap-x-[70px]">
            {/* <!-- address start  --> */}
            <div className="col-span-7 lg:col-span-5">
               <h1 className="font-semibold text-main-black text-[35px]">
                  Contact Us
               </h1>
               <p className="text-paragraph mt-[30px]">
                  We peel back the layers uncertainty, uncovering hidden truths
                  that lie beneath the surface of our reality.
               </p>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-[70px] mt-10">
                  <div className="col-span-1">
                     <h2 className="flex gap-2.5 items-center">
                        <BiEnvelope className="text-2xl text-brand" />{" "}
                        <a href="mailto:support@sofgent.com">
                           support@sofgent.com
                        </a>
                     </h2>
                  </div>
                  <div className="col-span-1">
                     <h2 className="flex gap-2.5 items-center">
                        <BiPhone className="text-2xl text-brand" />{" "}
                        <a href="tel:0123456789">0123456789</a>
                     </h2>
                  </div>
               </div>
               <hr className="border-brand/10 mt-11 mb-[50px]" />
               <SocialFollow />
            </div>

            {/* <!-- contact form start --> */}
            <div className="col-span-7">
               <div className="border border-brand/10 bg-gray rounded-[10px] p-4 md:p-[50px]">
                  <h1 className="text-[30px] tracking-tight font-semibold text-main-black pb-6">
                     Send Us Message
                  </h1>
                  <p className="text-paragraph mb-[30px]">
                     Your email address will not be published. Required fields
                     are marked *
                  </p>
                  <form
                     onSubmit={handleSubmit}
                     className="grid grid-cols-6 md:grid-cols-12 gap-[30px]">
                     <div className="col-span-6">
                        <input
                           onChange={handleChange}
                           name="name"
                           type="text"
                           placeholder="Full Name"
                        className="h-[30px] w-full focus:outline-none border-b border-brand/10 focus:border-brand bg-transparent"
                     />
                     {errors.name && (
                        <p className="text-red-500">{errors.name}</p>
                        )}
                     </div>
                     <div className="col-span-6">
                        <input
                           onChange={handleChange}
                        name="email"
                        type="email"
                        placeholder="Email"
                        className="h-[30px] w-full focus:outline-none border-b border-brand/10 focus:border-brand bg-transparent"
                     />
                     {errors.email && (
                           <p className="text-red-500">{errors.email}</p>
                        )}
                     </div>
                     <div className="col-span-6">
                        <input
                           onChange={handleChange}
                        name="phone"
                        type="text"
                        placeholder="Phone Number"
                        className="h-[30px] w-full focus:outline-none border-b border-brand/10 focus:border-brand bg-transparent"
                     />
                     {errors.phone && (
                        <p className="text-red-500">{errors.phone}</p>
                     )}
                     </div>
                     <div className="col-span-6">
                     <input
                        onChange={handleChange}
                        name="subject"
                        type="email"
                        placeholder="Subject"
                        className="h-[30px] w-full focus:outline-none border-b border-brand/10 focus:border-brand bg-transparent"
                     />
                     {errors.subject && (
                        <p className="text-red-500">{errors.subject}</p>
                        )}
                     </div>
                     <div className="col-span-12">
                        <textarea
                        onChange={handleChange}
                        name="message"
                           placeholder="Comments"
                           className="w-full focus:outline-none border-b border-brand/10 focus:border-brand bg-transparent h-[83px]"
                        ></textarea>
                        {errors.message && (
                           <p className="text-red-500">{errors.message}</p>
                        )}
                     </div>
                     <div className="col-span-6 md:col-span-12">
                        <button
                           type="submit"
                           disabled={isSubmitting}
                           className="rounded-full inline-block px-5 py-2.5 overflow-hidden group bg-brand relative hover:bg-gradient-to-r hover:from-[#5ca979] text-white transition-all ease-out duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                           <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-72 ease"></span>
                           <span className="relative">
                              {isSubmitting ? 'Sending...' : 'Send Message'}
                           </span>
                        </button>
                        
                        {/* Status Messages */}
                        {submitStatus === 'success' && (
                           <div className="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
                              Thank you! Your message has been sent successfully.
                           </div>
                        )}
                        {submitStatus === 'error' && (
                           <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                              Sorry! There was an error sending your message. Please try again.
                           </div>
                        )}
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </section>
   );
}
