import type { ServiceView } from "@/lib/sanity/content";

export default function ServiceTechStack({ service }: { service: ServiceView }) {
   if (!service.techStack || service.techStack.length === 0) return null;

   return (
      <section className="bg-white py-16 md:py-20 border-b border-slate-100">
         <div className="theme-container">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-primary mb-6">
               Tech Stack
            </p>
            <ul className="flex flex-wrap gap-3">
               {service.techStack.map((tech) => (
                  <li
                     key={tech}
                     className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700">
                     {tech}
                  </li>
               ))}
            </ul>
         </div>
      </section>
   );
}
