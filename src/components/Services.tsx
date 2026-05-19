"use client";

import { useLanguage } from "@/context/LanguageContext";

const serviceMeta = [
  { icon: "web", color: "text-secondary", borderColor: "hover:border-secondary" },
  { icon: "dashboard_customize", color: "text-tertiary", borderColor: "hover:border-tertiary" },
  { icon: "api", color: "text-secondary", borderColor: "hover:border-secondary" },
  { icon: "automation", color: "text-tertiary", borderColor: "hover:border-tertiary" },
  { icon: "palette", color: "text-secondary", borderColor: "hover:border-secondary" },
  { icon: "terminal", color: "text-tertiary", borderColor: "hover:border-tertiary" },
  { icon: "analytics", color: "text-secondary", borderColor: "hover:border-secondary" },
  { icon: "cloud_done", color: "text-tertiary", borderColor: "hover:border-tertiary" },
];

export default function Services() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-surface-container-low/30 relative" id="services">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg mb-4">
            {t.services.heading_1}{" "}
            <span className="text-secondary">{t.services.heading_accent}</span>
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">{t.services.subtitle}</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {t.services.items.map((service, index) => {
            const meta = serviceMeta[index];
            return (
              <div
                key={index}
                className={`glass-card p-6 rounded-2xl group transition-all duration-300 ${meta.borderColor}`}
              >
                <div className={`mb-4 ${meta.color} group-hover:scale-110 transition-transform duration-300`}>
                  <span className="material-symbols-outlined text-4xl">{meta.icon}</span>
                </div>
                <h4 className="font-bold mb-2">{service.title}</h4>
                <p className="text-xs text-on-surface-variant">{service.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
