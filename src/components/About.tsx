"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="fade-up relative">
          <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden border border-border-muted shadow-2xl">
            <Image
              alt="Founder Portrait"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-750"
              src="/Founder.png"
              width={600}
              height={800}
            />
          </div>
          {/* Floating Quote Widget */}
          <div className="absolute -bottom-10 -right-10 glass-card p-8 rounded-2xl hidden md:block max-w-xs">
            <p className="font-label-mono text-secondary text-xs mb-2">{t.about.expert_label}</p>
            <p className="text-sm font-medium italic">
              &quot;{t.about.expert_quote}&quot;
            </p>
          </div>
        </div>

        <div className="fade-up" style={{ transitionDelay: "200ms" }}>
          <h2 className="font-headline-lg text-headline-lg mb-6">
            {t.about.heading_1} <span className="text-secondary">{t.about.heading_accent}</span>
          </h2>
          <p className="text-on-surface-variant mb-6 text-lg">{t.about.description}</p>
          <div className="space-y-8">
            {t.about.points.map((point, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-secondary flex items-center justify-center font-label-mono text-secondary">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <h5 className="font-bold">{point.title}</h5>
                  <p className="text-sm text-on-surface-variant">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
