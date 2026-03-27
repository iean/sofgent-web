import React from "react";
import Link from "next/link";
import { ArrowRight, Database, Code2, Network, ChevronRight, Layers, Workflow, Server, ShieldCheck, Zap, Cog, CheckCircle2, Rocket, Building2, Briefcase } from "lucide-react";
import Footer from "@/app/components/Layout/Footer/Footer";
import Header from "@/app/components/Layout/Header/Header";
import HeroSlider from "@/app/components/home/HeroSlider";
import type { Metadata } from "next";

export const metadata: Metadata = {
   title: "SofGent | Premium AI Product Studio",
   description: "We build production-ready AI products, SaaS platforms, and internal tools in 2-4 weeks.",
};

const services = [
   {
      icon: Database,
      title: "AI Document Automation",
      pitch: "Turn your documents into structured data automatically",
      description: "We build OCR pipelines, extraction logic, and validation schemas to replace manual data entry for financial, legal, and operational documents.",
      proof: "Processing 50k+ documents daily for clients",
      tags: ["OCR + Extraction", "Validation", "Structured Output"],
   },
   {
      icon: Layers,
      title: "AI SaaS MVP Builder",
      pitch: "We turn your idea into a working SaaS in 14 days",
      description: "From database architecture to full-stack frontend and AI integration, we launch your core product so you can acquire users and raise capital.",
      proof: "Delivered 12+ production MVPs last year",
      tags: ["Full SaaS", "AI Features", "Deployed System"],
   },
   {
      icon: Workflow,
      title: "Internal AI Tools",
      pitch: "Replace manual workflows with AI systems",
      description: "Stop relying on spreadsheets and disjointed apps. We build secure internal dashboards and automated workflows powered by your proprietary data.",
      proof: "Reduced manual operations by up to 80%",
      tags: ["Dashboards", "Automation", "AI Workflows"],
   },
];

const portfolio = [
   {
      title: "AI Knowledge Platform",
      category: "Internal Tooling",
      desc: "Turned isolated company wikis and PDFs into a centralized RAG assistant.",
   },
   {
      title: "Bank Document Automation",
      category: "Fintech Data Pipeline",
      desc: "Automated the extraction of KYB/KYC documents directly into core banking tables.",
   },
   {
      title: "Multi-tenant E-commerce Builder",
      category: "SaaS Infrastructure",
      desc: "Built the core provisioning engine for dynamic store creation and inventory management.",
   },
   {
      title: "RAG / Document Intelligence",
      category: "AI Workflow",
      desc: "Deployed a secure, permission-aware semantic search pipeline for legal teams.",
   },
];

const process = [
   {
      week: "Week 1",
      title: "Architecture & Design",
      desc: "We map the database schemas, API routes, UX flow, and AI integration points before writing code.",
   },
   {
      week: "Week 2",
      title: "Core Build & AI Logic",
      desc: "We construct the backend infrastructure, train/connect the AI models, and build the frontend interface.",
   },
   {
      week: "Week 3",
      title: "Testing & Deployment",
      desc: "We perform security checks, optimize queries, deploy to production, and hand over the keys.",
   },
];

export default function Home() {
   return (
      <main className="min-h-screen bg-slate-50 selection:bg-cyan-500/20 selection:text-cyan-900">
         <Header />

         {/* HERO SECTION - Dark/Navy AI Technical Motif */}
         <section className="relative pt-[220px] md:pt-[260px] pb-24 md:pb-32 overflow-hidden bg-slate-950 text-white">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(20,50,60,0.5),transparent_70%)]" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
            
            {/* Minimal Background Grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

            <div className="theme-container relative z-10 w-full max-w-[1600px] mx-auto">
               <div className="grid lg:grid-cols-[0.9fr_1.1fr] xl:grid-cols-[0.85fr_1.15fr] gap-16 lg:gap-20 xl:gap-32 items-center">
                  
                  {/* Left Content */}
                  <div className="max-w-2xl">
                     <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-cyan-400 mb-8 backdrop-blur-md">
                        <Server className="w-4 h-4" />
                        Premium AI Product Studio
                     </div>
                     
                     <h1 className="text-5xl md:text-[64px] lg:text-[72px] font-bold leading-[1.05] tracking-tight text-white mb-6">
                        Build your AI product in <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-200 whitespace-nowrap">2–4 weeks.</span>
                     </h1>
                     
                     <p className="text-xl md:text-2xl font-medium text-slate-300 mb-4">
                        From idea to production-ready system.
                     </p>
                     
                     <p className="text-base md:text-lg text-slate-400 leading-relaxed mb-10 max-w-[90%] font-light">
                        SofGent builds production-ready AI systems, SaaS platforms, document automation tools, and internal business software fast.
                     </p>
                     
                     <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 md:gap-6 mt-12 w-full md:w-auto">
                        <Link href="https://calendly.com/sofgent" target="_blank" className="inline-flex w-full sm:w-auto items-center justify-center bg-cyan-500 text-slate-950 px-8 py-4 rounded-xl font-bold transition-all hover:bg-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                           Book a Free Strategy Call <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                        <Link href="#portfolio" className="inline-flex items-center justify-center bg-white/5 text-white px-8 py-4 rounded-xl font-bold border border-white/10 transition-all hover:bg-white/10">
                           See Our Work
                        </Link>
                     </div>
                  </div>

                  {/* Right Image/Graphic Area - Architecture Diagram Motif Slider */}
                  <HeroSlider />
               </div>
            </div>
         </section>

         {/* WHAT WE DO SECTION */}
         <section className="py-24 md:py-32 bg-slate-50 relative border-t border-slate-200">
            <div className="theme-container">

               {/* Outcome Strip */}
               <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 md:gap-4 lg:gap-6 mb-16 p-4 rounded-[2rem] bg-white border border-slate-200 shadow-sm w-full relative z-10">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-600 bg-slate-50 px-4 py-2.5 rounded-xl border border-slate-100"><Zap className="w-4 h-4 text-amber-500" /> 2–4 week delivery</div>
                  <div className="hidden lg:block w-1.5 h-1.5 rounded-full bg-slate-300" />
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-600 bg-slate-50 px-4 py-2.5 rounded-xl border border-slate-100"><Cog className="w-4 h-4 text-cyan-500" /> Reduce manual work by up to 80%</div>
                  <div className="hidden lg:block w-1.5 h-1.5 rounded-full bg-slate-300" />
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-600 bg-slate-50 px-4 py-2.5 rounded-xl border border-slate-100"><Network className="w-4 h-4 text-teal-500" /> AI-ready systems from day one</div>
                  <div className="hidden lg:block w-1.5 h-1.5 rounded-full bg-slate-300" />
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-600 bg-slate-50 px-4 py-2.5 rounded-xl border border-slate-100"><Rocket className="w-4 h-4 text-purple-500" /> Production-ready (no demos)</div>
               </div>

               <div className="mb-16 md:mb-20 max-w-3xl">
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">Expertise matching your ambitions.</h2>
                  <p className="text-xl text-slate-600">We do not build generic landing pages. We build technically complex systems with clear business ROI.</p>
               </div>

               <div className="grid lg:grid-cols-3 gap-8">
                  {services.map((service, idx) => (
                     <div key={idx} className="flex flex-col p-8 md:p-10 rounded-[2.5rem] bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-cyan-500/30 transition-all duration-300 group hover:-translate-y-1">
                        
                        <div className="flex items-center gap-5 border-b border-slate-100 pb-6 mb-6">
                           <div className="w-16 h-16 rounded-2xl bg-cyan-50 text-cyan-600 border border-cyan-100 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300 shadow-sm">
                              <service.icon className="w-7 h-7" />
                           </div>
                           <div>
                              <h3 className="text-2xl font-bold tracking-tight text-slate-900 leading-tight">{service.title}</h3>
                           </div>
                        </div>

                        <h4 className="text-sm font-bold uppercase tracking-wider text-brand mb-4">{service.pitch}</h4>
                        <p className="text-base text-slate-600 flex-grow leading-relaxed mb-8">{service.description}</p>
                        
                        <div className="mt-auto pt-6 border-t border-slate-50">
                           <div className="flex items-center gap-2 mb-5">
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{service.proof}</span>
                           </div>

                           <div className="flex flex-wrap gap-2">
                              {service.tags.map((tag) => (
                                 <span key={tag} className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-600">
                                    {tag}
                                 </span>
                              ))}
                           </div>
                        </div>
                     </div>
                  ))}
               </div>

               {/* WHO THIS IS FOR & PROCESS */}
               <div className="mt-20 lg:mt-32 max-w-5xl mx-auto">
                  <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 border-b border-slate-200 pb-20">
                     <div className="flex flex-col">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-8">Who We Work With</h3>
                        <div className="space-y-6">
                           <div className="flex items-center gap-4 bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
                              <div className="w-12 h-12 bg-cyan-50 rounded-xl flex items-center justify-center shrink-0">
                                 <Building2 className="w-6 h-6 text-cyan-600" />
                              </div>
                              <span className="text-slate-800 font-bold">Founders scaling SaaS products & MVPs</span>
                           </div>
                           <div className="flex items-center gap-4 bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
                              <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center shrink-0">
                                 <Briefcase className="w-6 h-6 text-teal-600" />
                              </div>
                              <span className="text-slate-800 font-bold">Fintech & legal teams replacing manual workflows</span>
                           </div>
                           <div className="flex items-center gap-4 bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
                              <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center shrink-0">
                                 <Network className="w-6 h-6 text-purple-600" />
                              </div>
                              <span className="text-slate-800 font-bold">Enterprises preparing legacy data for AI adoption</span>
                           </div>
                        </div>
                     </div>
                     
                     <div className="pl-0 lg:pl-12 lg:border-l lg:border-slate-200 flex flex-col justify-center">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-8">How We Deliver</h3>
                        <div className="flex flex-col gap-10 relative">
                           {/* connecting line */}
                           <div className="absolute top-6 bottom-6 left-6 w-0.5 bg-slate-200 z-0" />
                           <div className="flex items-center gap-6 relative z-10">
                              <div className="w-12 h-12 rounded-full border-4 border-slate-50 bg-slate-900 text-white font-bold text-base flex items-center justify-center shrink-0 shadow-md">1</div>
                              <span className="text-slate-800 font-bold text-lg">Architecture & Planning</span>
                           </div>
                           <div className="flex items-center gap-6 relative z-10">
                              <div className="w-12 h-12 rounded-full border-4 border-slate-50 bg-cyan-500 text-white font-bold text-base flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(6,182,212,0.4)] scale-110">2</div>
                              <span className="text-slate-800 font-bold text-lg">Build Core System & Data Layer</span>
                           </div>
                           <div className="flex items-center gap-6 relative z-10">
                              <div className="w-12 h-12 rounded-full border-4 border-slate-50 bg-teal-500 text-white font-bold text-base flex items-center justify-center shrink-0 shadow-md">3</div>
                              <span className="text-slate-800 font-bold text-lg">Deploy with Scalable AI Workflows</span>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               {/* WHY SOFGENT STRIP */}
               <div className="max-w-5xl mx-auto mt-20 bg-[radial-gradient(ellipse_at_top_right,rgba(6,182,212,0.15),transparent_60%),linear-gradient(to_bottom_right,#0f172a,#1e293b)] rounded-[2.5rem] p-10 md:p-14 shadow-2xl flex flex-col md:flex-row items-center gap-12 relative overflow-hidden border border-slate-800">
                  <div className="absolute inset-0 bg-grid-paper opacity-5 pointer-events-none mix-blend-overlay" />
                  <div className="flex-1 relative z-10">
                     <h3 className="text-3xl font-bold text-white mb-6 leading-tight">We look beyond just code. We design systems that <span className="text-cyan-400">actually work in production.</span></h3>
                     <ul className="space-y-4">
                        <li className="flex items-center gap-3 text-slate-300 font-medium"><CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" /> Full-stack + AI + DevOps in one team</li>
                        <li className="flex items-center gap-3 text-slate-300 font-medium"><CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0" /> Built for real business workflows & scale</li>
                        <li className="flex items-center gap-3 text-slate-300 font-medium"><CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" /> Architecture first, no fragile prototypes</li>
                     </ul>
                  </div>
                  <div className="w-32 h-32 shrink-0 rounded-[2rem] bg-slate-900 border border-white/10 flex items-center justify-center relative z-10 shadow-[0_0_40px_rgba(6,182,212,0.2)]">
                     <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-[2rem]" />
                     <Code2 className="w-12 h-12 text-cyan-300 relative z-10" />
                  </div>
               </div>

               {/* CTA SECTION */}
               <div className="text-center mt-32 max-w-2xl mx-auto pb-10">
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-10">Have a use case in mind?</h2>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                     <Link href="https://calendly.com/sofgent" target="_blank" className="w-full sm:w-auto inline-flex items-center justify-center bg-cyan-500 text-slate-950 px-10 py-5 rounded-2xl font-bold text-lg transition-all hover:bg-cyan-400 shadow-[0_0_40px_rgba(6,182,212,0.25)] hover:shadow-[0_0_50px_rgba(6,182,212,0.4)] hover:-translate-y-1">
                        Book AI Strategy Call
                     </Link>
                     <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center bg-white text-slate-900 px-10 py-5 rounded-2xl font-bold text-lg border-2 border-slate-200 shadow-sm transition-all hover:bg-slate-50 hover:border-slate-300">
                        Discuss Your Project
                     </Link>
                  </div>
               </div>

            </div>
         </section>

         {/* PROCESS SECTION */}
         <section className="py-24 md:py-32 bg-slate-950 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-paper opacity-10 pointer-events-none invert mix-blend-overlay" />
            <div className="relative z-10 theme-container">
               <div className="max-w-3xl text-center mx-auto mb-20">
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">Launch fast, without breaking things.</h2>
                  <p className="text-xl text-slate-400">Our structured 3-week delivery model ensures you go to market with a stable, scalable foundation.</p>
               </div>

               <div className="grid lg:grid-cols-3 gap-8 relative">
                  {/* Connecting line on desktop */}
                  <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-px bg-white/10" />

                  {process.map((step, idx) => (
                     <div key={idx} className="relative z-10 flex flex-col items-center text-center p-8">
                        <div className="w-24 h-24 rounded-full bg-slate-900 border-4 border-slate-950 flex flex-col items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.15)] mb-8 relative">
                           {/* Outer glow ring indicating progress */}
                           <svg className="absolute inset-0 w-full h-full -rotate-90">
                              <circle cx="48" cy="48" r="46" fill="transparent" stroke="rgba(6,182,212,0.2)" strokeWidth="2" />
                              <circle cx="48" cy="48" r="46" fill="transparent" stroke="#06b6d4" strokeWidth="2" strokeDasharray="300" strokeDashoffset={300 - (300 * ((idx + 1)/3))} className="transition-all duration-1000 ease-out" />
                           </svg>
                           <span className="text-sm font-bold text-cyan-400">{step.week}</span>
                        </div>
                        <h3 className="text-2xl font-bold tracking-tight text-white mb-4">{step.title}</h3>
                        <p className="text-base text-slate-400 leading-relaxed max-w-sm">{step.desc}</p>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* PROOF / PORTFOLIO SECTION */}
         <section id="portfolio" className="py-24 md:py-32 bg-white">
            <div className="theme-container">
               <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-20">
                  <div className="max-w-3xl">
                     <p className="text-brand font-bold uppercase tracking-widest text-sm mb-4">Proven Architecture</p>
                     <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">What we’ve shipped to production.</h2>
                  </div>
                  <Link href="/case-studies" className="inline-flex items-center font-bold text-brand hover:text-brand/80 transition-colors">
                     Explore all case studies <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
               </div>

               <div className="grid md:grid-cols-2 gap-8">
                  {portfolio.map((item, idx) => (
                     <div key={idx} className="group relative overflow-hidden rounded-[2.5rem] bg-slate-50 border border-slate-200 p-8 md:p-12 hover:border-brand/30 hover:shadow-lg transition-all">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-slate-200/50 rounded-full blur-3xl -mr-20 -mt-20 group-hover:bg-cyan-100 transition-colors duration-500" />
                        
                        <div className="relative z-10">
                           <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">{item.category}</p>
                           <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-4">{item.title}</h3>
                           <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-md">{item.desc}</p>
                           
                           <div className="inline-flex items-center text-sm font-bold text-brand transition-colors">
                              View Architecture <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* WHY SOFGENT */}
         <section className="py-24 md:py-32 bg-white">
            <div className="theme-container">
               <div className="rounded-[3rem] border border-slate-200 bg-slate-50 p-10 md:p-16 lg:p-20 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,rgba(50,109,109,0.05),transparent_60%)] pointer-events-none" />
                  
                  <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-16 relative z-10">
                     <div className="flex flex-col justify-center">
                        <p className="text-sm font-bold uppercase tracking-widest text-brand mb-6">Why SofGent</p>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
                           We speak code,<br/>architecture, and business.
                        </h2>
                     </div>
                     <div className="grid sm:grid-cols-2 gap-10">
                        <div>
                           <ShieldCheck className="w-10 h-10 text-brand mb-5" />
                           <h3 className="text-xl font-bold text-slate-900 mb-3">Speed Without Tech Debt</h3>
                           <p className="text-slate-600 leading-relaxed">Most agencies build fragile MVPs. We engineer scalable data models and secure infrastructure from day one, allowing you to launch in weeks and seamlessly pivot or scale later.</p>
                        </div>
                        <div>
                           <Workflow className="w-10 h-10 text-brand mb-5" />
                           <h3 className="text-xl font-bold text-slate-900 mb-3">ROI-Driven Automation</h3>
                           <p className="text-slate-600 leading-relaxed">We don&apos;t just write code—we solve operational bottlenecks. We map your specific market workflows and deploy automation that slashes overhead costs and improves gross margins.</p>
                        </div>
                        <div>
                           <Server className="w-10 h-10 text-brand mb-5" />
                           <h3 className="text-xl font-bold text-slate-900 mb-3">Predictable Model</h3>
                           <p className="text-slate-600 leading-relaxed">Stop paying for endless hourly billing with unaligned incentives. We operate with fixed-scope delivery sprints, offering absolute clarity on technical deliverables and business value.</p>
                        </div>
                        <div>
                           <Code2 className="w-10 h-10 text-brand mb-5" />
                           <h3 className="text-xl font-bold text-slate-900 mb-3">End-to-End Capabilities</h3>
                           <p className="text-slate-600 leading-relaxed">Avoid the friction of managing fractured teams. From complex AI semantic routing to polished user interfaces and backend orchestration, we deliver the complete product under one roof.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* FINAL CTA SECTION */}
         <section className="py-24">
            <div className="theme-container">
               <div className="relative overflow-hidden rounded-[3rem] border border-cyan-900/50 bg-slate-950 px-8 py-20 md:px-20 md:py-32 shadow-2xl text-center">
                  <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.15),transparent_40%)] pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(50,109,109,0.3),transparent_40%)] pointer-events-none" />
                  
                  <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
                     <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8">
                        <Database className="w-8 h-8 text-cyan-400" />
                     </div>
                     <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-8">
                        Have an idea, workflow, or product to launch?
                     </h2>
                     <p className="text-xl text-slate-300 mb-12 font-light">
                        Let’s turn it into a working AI system.
                     </p>
                     
                     <Link href="/contact" className="inline-flex items-center justify-center bg-cyan-500 text-slate-950 px-10 py-5 rounded-xl font-bold text-lg hover:bg-cyan-400 transition-all shadow-[0_0_40px_rgba(6,182,212,0.4)] hover:shadow-[0_0_60px_rgba(6,182,212,0.6)] hover:-translate-y-1">
                        Book a Free Strategy Call
                     </Link>
                  </div>
               </div>
            </div>
         </section>

         <Footer />
      </main>
   );
}
