"use client";
import { useState } from "react";

const ArrowRight = () => (
  <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2 6.5h9M7.5 3l3.5 3.5L7.5 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

const fieldBase =
  "w-full text-[14px] text-[#0c0c0c] rounded-[10px] px-3.5 py-3 bg-white transition-all outline-none focus:border-[#326d6d] focus:ring-2 focus:ring-[rgba(50,109,109,0.12)]";

export default function ContactFormModern() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", company: "", need: "AI Product / MVP development", budget: "Not sure yet", message: "", company_website: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const set = (k: string, v: string) => setForm((p) => ({ ...p, [k]: v }));

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    const payload = {
      name: `${form.firstName} ${form.lastName}`.trim(),
      email: form.email,
      phone: form.phone,
      subject: `${form.need}${form.company ? ` — ${form.company}` : ""}`,
      message: `Budget: ${form.budget}\n\n${form.message}`,
      company_website: form.company_website,
    };
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-[16px] bg-white p-10 flex flex-col items-center text-center" style={{ border: "1px solid #e6e6e6" }}>
        <div className="w-[54px] h-[54px] rounded-[14px] flex items-center justify-center mb-4 text-white" style={{ background: "#326d6d" }}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M20 6 9 17l-5-5" /></svg>
        </div>
        <h3 className="text-[18px] font-bold tracking-[-0.02em] text-[#0c0c0c] mb-1.5">Thanks — we&apos;re on it.</h3>
        <p className="text-[14px] text-[#6a6a6a] max-w-[320px]">We&apos;ll be in touch within one business day to book your call.</p>
      </div>
    );
  }

  return (
    <div className="rounded-[16px] bg-white p-8" style={{ border: "1px solid #e6e6e6" }}>
      <h3 className="text-[18px] font-bold tracking-[-0.02em] text-[#0c0c0c] mb-5">Start your project</h3>
      <form onSubmit={onSubmit}>
        {/* Honeypot — invisible to real users, bots tend to auto-fill any field they find */}
        <div aria-hidden="true" style={{ position: "absolute", width: 0, height: 0, overflow: "hidden", opacity: 0 }}>
          <label htmlFor="company_website">Company website</label>
          <input
            id="company_website"
            name="company_website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={form.company_website}
            onChange={(e) => set("company_website", e.target.value)}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4"><label className="block text-[12.5px] font-semibold text-[#1a1a1a] mb-1.5">First name</label><input required value={form.firstName} onChange={(e) => set("firstName", e.target.value)} placeholder="Jane" className={fieldBase} style={{ border: "1px solid #e6e6e6" }} /></div>
          <div className="mb-4"><label className="block text-[12.5px] font-semibold text-[#1a1a1a] mb-1.5">Last name</label><input value={form.lastName} onChange={(e) => set("lastName", e.target.value)} placeholder="Doe" className={fieldBase} style={{ border: "1px solid #e6e6e6" }} /></div>
        </div>
        <div className="mb-4"><label className="block text-[12.5px] font-semibold text-[#1a1a1a] mb-1.5">Work email</label><input required type="email" value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="jane@company.com" className={fieldBase} style={{ border: "1px solid #e6e6e6" }} /></div>
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4"><label className="block text-[12.5px] font-semibold text-[#1a1a1a] mb-1.5">Phone</label><input value={form.phone} onChange={(e) => set("phone", e.target.value)} placeholder="+44 …" className={fieldBase} style={{ border: "1px solid #e6e6e6" }} /></div>
          <div className="mb-4"><label className="block text-[12.5px] font-semibold text-[#1a1a1a] mb-1.5">Company</label><input value={form.company} onChange={(e) => set("company", e.target.value)} placeholder="Company name" className={fieldBase} style={{ border: "1px solid #e6e6e6" }} /></div>
        </div>
        <div className="mb-4"><label className="block text-[12.5px] font-semibold text-[#1a1a1a] mb-1.5">What do you need?</label>
          <select value={form.need} onChange={(e) => set("need", e.target.value)} className={fieldBase} style={{ border: "1px solid #e6e6e6" }}>
            <option>AI Product / MVP development</option><option>AI Document Automation</option><option>AI Integration &amp; Automation</option><option>Not sure yet — let&apos;s talk</option>
          </select>
        </div>
        <div className="mb-4"><label className="block text-[12.5px] font-semibold text-[#1a1a1a] mb-1.5">Budget range</label>
          <select value={form.budget} onChange={(e) => set("budget", e.target.value)} className={fieldBase} style={{ border: "1px solid #e6e6e6" }}>
            <option>Under $10k</option><option>$10k – $25k</option><option>$25k – $50k</option><option>$50k+</option><option>Not sure yet</option>
          </select>
        </div>
        <div className="mb-4"><label className="block text-[12.5px] font-semibold text-[#1a1a1a] mb-1.5">Tell us about the project</label><textarea value={form.message} onChange={(e) => set("message", e.target.value)} placeholder="What problem are you solving? Any timeline or constraints?" className={`${fieldBase} resize-y`} style={{ border: "1px solid #e6e6e6", minHeight: "110px" }} /></div>
        <button type="submit" disabled={status === "submitting"} className="w-full inline-flex items-center justify-center gap-2 text-[14px] font-semibold text-white px-5 py-3.5 rounded-[8px] transition-all hover:opacity-90 disabled:opacity-60" style={{ background: "#326d6d" }}>
          {status === "submitting" ? "Sending…" : <>Request my scoped plan <ArrowRight /></>}
        </button>
        {status === "error" && <p className="text-[12.5px] text-[#e11d48] mt-3 text-center">Something went wrong. Please email support@sofgent.com.</p>}
        <p className="text-[12px] text-[#9a9a9a] mt-3.5 text-center">We&apos;ll never share your details. NDAs available on request.</p>
      </form>
    </div>
  );
}
