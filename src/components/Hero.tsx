"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  const [typedText, setTypedText] = useState("");
  const fullText = "Initializing MalikaTech Ecosystem...";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const glowSpheres = document.querySelectorAll<HTMLDivElement>(".glow-sphere");
      const x = e.clientX;
      const y = e.clientY;
      glowSpheres.forEach((sphere, index) => {
        const speed = (index + 1) * 0.02;
        sphere.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="pt-40 pb-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative z-10">
      <div className="glow-sphere top-0 -left-40"></div>
      <div className="glow-sphere top-1/2 -right-40"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="fade-up visible" id="hero-text">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-secondary text-secondary font-label-mono text-xs mb-6 uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
            </span>
            {t.hero.badge}
          </div>

          <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg mb-6 leading-tight">
            {t.hero.h1_1}{" "}
            <span className="text-secondary">{t.hero.h1_accent}</span>
          </h1>
          <p className="text-on-surface-variant text-lg md:text-xl mb-10 max-w-xl">
            {t.hero.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded-xl font-button text-button flex items-center gap-2 hover:shadow-[0_0_20px_rgba(247,148,29,0.4)] transition-all"
              href="#products"
            >
              {t.hero.cta_explore}{" "}
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
            <a
              className="glass-card px-8 py-4 rounded-xl font-button text-button hover:bg-white/5"
              href="#contact"
            >
              {t.hero.cta_contact}
            </a>
          </div>
        </div>

        <div className="relative fade-up visible" id="hero-visual">
          <div className="relative rounded-2xl overflow-hidden border border-border-muted shadow-2xl bg-code-bg">
            <div className="terminal-header p-3 flex justify-between items-center">
              <div className="flex gap-2">
                <div className="dot bg-[#ff5f56]"></div>
                <div className="dot bg-[#ffbd2e]"></div>
                <div className="dot bg-[#27c93f]"></div>
              </div>
              <div className="text-[10px] font-label-mono opacity-40">{typedText}</div>
            </div>
            <div className="p-4 md:p-8">
              <Image
                alt="Dashboard Mockup"
                className="rounded-lg border border-border-muted shadow-lg opacity-90 w-full h-auto"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCix0m9cdLH5obKkadX-KtUzVVvqLNBnqqb5KjplNxRkY91MTBBJfbeB2mb3O_MzMRCGsRQQQpka7AXV1-B6yBROR2Xx54dLSMD0P03aBDuCV8WBoSPLUqeAFnJuT0ai_bFDFjQcUbTEeXVnEJaigCU9tnXeitJimbfTr7jcKUjBzd4EwRBJyag9-1gFej-XAop0vdwIylesnpSR1y-avz4GOM8maToNMWmmDfCXPG3jnedDsBZcxafEd8fyaZyiMCoNNfO6peP3ws"
                width={800}
                height={500}
                style={{ height: "auto" }}
                priority
              />
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 md:-left-12 glass-card p-6 rounded-2xl hidden md:block">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-lg bg-secondary/20 text-secondary">
                <span className="material-symbols-outlined">analytics</span>
              </div>
              <div>
                <p className="text-xs text-on-surface-variant font-label-mono">{t.hero.efficiency}</p>
                <p className="text-xl font-bold">+240%</p>
              </div>
            </div>
            <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-secondary w-3/4"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
