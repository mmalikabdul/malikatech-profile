"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Stats() {
  const { t } = useLanguage();
  const values = ["10+", "1000+", "99.9%", "24/7"];

  return (
    <section className="py-16 border-y border-border-muted bg-surface-container-lowest/50">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        <p className="text-center text-on-surface-variant font-label-mono text-sm mb-12 uppercase tracking-widest">
          {t.stats.tagline}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {values.map((value, index) => (
            <div key={index} className="fade-up visible">
              <p className="text-4xl font-bold text-secondary mb-2">{value}</p>
              <p className="text-sm font-label-mono text-on-surface-variant">
                {t.stats.labels[index]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
