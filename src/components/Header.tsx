"use client";

import { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, locale, toggleLocale } = useLanguage();

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface-glass backdrop-blur-md border-b border-border-muted shadow-sm h-20">
      <div className="flex justify-between items-center max-w-container-max mx-auto px-margin-desktop h-full">
        <div className="flex items-center">
          <Image
            alt="MalikaTech"
            className="h-10"
            src="/Logo.png"
            width={160}
            height={40}
            style={{ width: "auto" }}
            unoptimized
            priority
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a
            className="font-label-mono text-label-mono text-on-surface-variant hover:text-secondary transition-colors duration-300"
            href="#products"
          >
            {t.nav.products}
          </a>
          <a
            className="font-label-mono text-label-mono text-on-surface-variant hover:text-secondary transition-colors duration-300"
            href="#services"
          >
            {t.nav.services}
          </a>
          <a
            className="font-label-mono text-label-mono text-on-surface-variant hover:text-secondary transition-colors duration-300"
            href="#portfolio"
          >
            {t.nav.portfolio}
          </a>

          {/* Language Toggle */}
          <button
            onClick={toggleLocale}
            aria-label="Toggle language"
            className="font-label-mono text-xs border border-border-muted rounded-full px-3 py-1 text-on-surface-variant hover:border-secondary hover:text-secondary transition-all duration-300"
          >
            {locale === "id" ? "EN" : "ID"}
          </button>

          <a
            className="bg-secondary-container text-on-secondary-container px-6 py-2 rounded-full font-button text-button hover:scale-95 transition-transform"
            href="#contact"
          >
            {t.nav.contact}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-on-surface focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">
            {isMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-[#0f172a]/95 border-b border-border-muted backdrop-blur-md md:hidden flex flex-col items-center gap-6 py-8 z-40 transition-all">
          <a
            className="font-label-mono text-label-mono text-on-surface-variant hover:text-secondary transition-colors duration-300"
            href="#products"
            onClick={() => setIsMenuOpen(false)}
          >
            {t.nav.products}
          </a>
          <a
            className="font-label-mono text-label-mono text-on-surface-variant hover:text-secondary transition-colors duration-300"
            href="#services"
            onClick={() => setIsMenuOpen(false)}
          >
            {t.nav.services}
          </a>
          <a
            className="font-label-mono text-label-mono text-on-surface-variant hover:text-secondary transition-colors duration-300"
            href="#portfolio"
            onClick={() => setIsMenuOpen(false)}
          >
            {t.nav.portfolio}
          </a>
          <button
            onClick={() => { toggleLocale(); setIsMenuOpen(false); }}
            className="font-label-mono text-xs border border-border-muted rounded-full px-4 py-1.5 text-on-surface-variant hover:border-secondary hover:text-secondary transition-all"
          >
            {locale === "id" ? "Switch to English" : "Ganti ke Indonesia"}
          </button>
          <a
            className="bg-secondary-container text-on-secondary-container px-8 py-3 rounded-full font-button text-button hover:scale-95 transition-transform"
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
          >
            {t.nav.contact}
          </a>
        </div>
      )}
    </nav>
  );
}
