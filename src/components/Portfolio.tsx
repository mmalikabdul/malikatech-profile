"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const portfolioMeta = [
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCHp2QLehtx60txR2YTiPEOVYDbAmNFldvlHjopLROSu8bOMBslrcz79vii69MThxNrfA9QgRAI0DatBARlt20x215S0z0tjWNi5P0NY1tt2z9KgzKOuxaGcZl9vtIuzl7Ud8ULGBD4hOrTio5RmB59RO8FvMjzTCmJ1uiZ-Za6wWVDlOmPaKZTer26_B0qxstL0PfSNWkElPu0EjrBH8vtb_4CaKRcsrh2NxoAFVi2669Mpr1ZgUFRBNLuoFiBnWLKBRCCRGvvgOI",
    tags: ["Vue.js", "Node.js", "Redis"],
    mockupName: "TICKETING_DASHBOARD_V2.APP",
  },
  {
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQ6kfJ2KhEpx2dN3Zn0m7tb4jMEFGnKFYVEQUvfOZ4d95VUXPeuSkfCvOHvtixVVCNevkxajHXJhQ3Dtvz_yQh0dNpfIVEKg9E67igsJY-Ai0z7KELj2sYza5MyZslhn4GBGPQt9JOkn2_LrVWQocTaccn_gl6jL05cMJ5VLOxBxDkgJSZ2rEWE70QY74Qe1u7sMsm0W2-pEMkw7B21uJloaoS-G7hK1F9e7fAhOfryY20QTNr3wNHjXZ2BNYdEoZBiT0XZvFp5O4",
    tags: ["React Native", "MySQL", "WebSocket"],
    mockupName: "QNEXT_PATIENT_HUB.EXE",
    isReverse: true,
  },
];

export default function Portfolio() {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto" id="portfolio">
      <div className="text-center mb-16">
        <h2 className="font-headline-lg text-headline-lg mb-4">
          {t.portfolio.heading_1} <span className="text-secondary">{t.portfolio.heading_accent}</span>
        </h2>
        <p className="text-on-surface-variant max-w-2xl mx-auto">{t.portfolio.subtitle}</p>
      </div>
      <div className="space-y-32">
        {t.portfolio.items.map((item, idx) => {
          const meta = portfolioMeta[idx];
          return (
            <div key={idx} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className={`lg:col-span-7 fade-up visible ${meta.isReverse ? "order-1 lg:order-2" : ""}`}>
                <div className="relative group">
                  <div className="absolute -inset-4 bg-secondary/10 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative bg-code-bg rounded-2xl border border-border-muted shadow-2xl overflow-hidden">
                    <div className="terminal-header p-3 flex justify-between items-center">
                      <div className="flex gap-2">
                        <div className="dot bg-[#ff5f56]"></div>
                        <div className="dot bg-[#ffbd2e]"></div>
                        <div className="dot bg-[#27c93f]"></div>
                      </div>
                      <div className="text-[10px] font-label-mono opacity-40">{meta.mockupName}</div>
                    </div>
                    <Image
                      alt={item.title}
                      className="w-full aspect-[16/10] object-cover"
                      src={meta.image}
                      width={800}
                      height={500}
                    />
                  </div>
                </div>
              </div>
              <div className={`lg:col-span-5 fade-up visible ${meta.isReverse ? "order-2 lg:order-1" : ""}`}>
                <span className="text-secondary font-label-mono text-sm mb-4 block">{item.sector}</span>
                <h3 className="text-3xl font-bold mb-6">{item.title}</h3>
                <p className="text-on-surface-variant mb-8">{item.desc}</p>
                <div className="flex gap-4">
                  {meta.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-3 py-1 rounded bg-white/5 border border-border-muted text-xs font-label-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
