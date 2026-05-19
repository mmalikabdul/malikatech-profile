"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    const body = new URLSearchParams();
    body.append("form-name", "contact");
    body.append("name", formData.name);
    body.append("email", formData.email);
    body.append("project-type", formData.projectType);
    body.append("message", formData.message);
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", projectType: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Netlify Form submission error:", err);
      setStatus("error");
    }
  };

  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative overflow-hidden" id="contact">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-secondary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative z-10">
        {/* Info Column */}
        <div className="fade-up visible">
          <h2 className="font-headline-lg text-headline-lg mb-6">
            {t.contact.heading_1} <span className="text-secondary">{t.contact.heading_accent}</span>
          </h2>
          <p className="text-on-surface-variant text-lg mb-10 max-w-md">{t.contact.description}</p>
          <div className="space-y-6">
            <a className="flex items-center gap-4 group" href="mailto:hello@malikatech.com">
              <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center group-hover:border-secondary transition-all">
                <span className="material-symbols-outlined text-secondary">mail</span>
              </div>
              <div>
                <p className="text-xs text-on-surface-variant font-label-mono uppercase">{t.contact.email_label}</p>
                <p className="font-bold text-on-surface group-hover:text-secondary transition-colors">hello@malikatech.com</p>
              </div>
            </a>
            <a className="flex items-center gap-4 group" href="https://wa.me/6281234567890" target="_blank" rel="noreferrer">
              <div className="w-12 h-12 rounded-xl glass-card flex items-center justify-center group-hover:border-secondary transition-all">
                <span className="material-symbols-outlined text-secondary">chat</span>
              </div>
              <div>
                <p className="text-xs text-on-surface-variant font-label-mono uppercase">{t.contact.wa_label}</p>
                <p className="font-bold text-on-surface group-hover:text-secondary transition-colors">+62 812-3456-7890</p>
              </div>
            </a>
          </div>
        </div>

        {/* Form Column */}
        <div className="fade-up visible glass-card p-8 md:p-10 rounded-3xl" style={{ transitionDelay: "200ms" }}>
          <form name="contact" method="POST" onSubmit={handleSubmit} className="space-y-6" id="contact-form">
            <input type="hidden" name="form-name" value="contact" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-label-mono text-on-surface-variant uppercase">{t.contact.label_name}</label>
                <input
                  name="name" value={formData.name} onChange={handleChange} required
                  className="w-full bg-code-bg border border-border-muted rounded-xl px-4 py-3 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                  placeholder={t.contact.placeholder_name} type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-label-mono text-on-surface-variant uppercase">{t.contact.label_email}</label>
                <input
                  name="email" value={formData.email} onChange={handleChange} required
                  className="w-full bg-code-bg border border-border-muted rounded-xl px-4 py-3 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                  placeholder="email@perusahaan.com" type="email"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-label-mono text-on-surface-variant uppercase">{t.contact.label_project}</label>
              <select
                name="projectType" value={formData.projectType} onChange={handleChange}
                className="w-full bg-code-bg border border-border-muted rounded-xl px-4 py-3 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all appearance-none"
              >
                {t.contact.project_options.map((opt, i) => (
                  <option key={i} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-label-mono text-on-surface-variant uppercase">{t.contact.label_message}</label>
              <textarea
                name="message" value={formData.message} onChange={handleChange} required
                className="w-full bg-code-bg border border-border-muted rounded-xl px-4 py-3 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary transition-all"
                placeholder={t.contact.placeholder_message} rows={4}
              ></textarea>
            </div>
            {status === "success" && <p className="text-green-400 text-sm font-semibold">{t.contact.success}</p>}
            {status === "error" && <p className="text-red-400 text-sm font-semibold">{t.contact.error}</p>}
            <button
              disabled={status === "submitting"}
              className="w-full bg-secondary-container text-on-secondary-container py-4 rounded-xl font-button text-button hover:shadow-[0_0_20px_rgba(247,148,29,0.4)] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              type="submit"
            >
              {status === "submitting" ? t.contact.btn_sending : (
                <>{t.contact.btn_submit} <span className="material-symbols-outlined text-sm">send</span></>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
