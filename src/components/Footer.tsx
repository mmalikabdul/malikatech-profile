"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-surface py-12 border-t border-border-muted bg-surface-container-lowest">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter max-w-container-max mx-auto px-margin-desktop">
        <div className="space-y-4">
          <div className="flex items-center">
            <Image
              alt="MalikaTech"
              className="h-8 w-auto"
              src="/Logo.png"
              width={120}
              height={32}
              unoptimized
            />
          </div>
          <p className="text-sm text-on-surface-variant">{t.footer.tagline}</p>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-tertiary">{t.footer.solutions}</h4>
          <ul className="space-y-3 font-label-mono text-sm">
            <li><a className="text-on-surface-variant hover:text-secondary transition-colors" href="#">QNext Queue</a></li>
            <li><a className="text-on-surface-variant hover:text-secondary transition-colors" href="#">MalikaDesk</a></li>
            <li><a className="text-on-surface-variant hover:text-secondary transition-colors" href="#">Visitor Management</a></li>
            <li><a className="text-on-surface-variant hover:text-secondary transition-colors" href="#">Public Dashboard</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-tertiary">{t.footer.company}</h4>
          <ul className="space-y-3 font-label-mono text-sm">
            <li><a className="text-on-surface-variant hover:text-secondary transition-colors" href="#">{t.footer.privacy}</a></li>
            <li><a className="text-on-surface-variant hover:text-secondary transition-colors" href="#">{t.footer.terms}</a></li>
            <li><a className="text-on-surface-variant hover:text-secondary transition-colors" href="#">{t.footer.careers}</a></li>
            <li><a className="text-on-surface-variant hover:text-secondary transition-colors" href="#">{t.footer.support}</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-tertiary">{t.footer.newsletter}</h4>
          <p className="text-xs text-on-surface-variant mb-4">{t.footer.newsletter_desc}</p>
          <div className="flex">
            <input
              className="bg-code-bg border border-border-muted rounded-l-lg px-4 py-2 w-full focus:outline-none focus:border-secondary text-on-surface text-sm"
              placeholder={t.footer.newsletter_placeholder}
              type="text"
            />
            <button className="bg-secondary-container text-on-secondary-container px-4 rounded-r-lg hover:scale-95 transition-transform" aria-label="Subscribe">
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-container-max mx-auto px-margin-desktop mt-12 pt-8 border-t border-border-muted flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs font-label-mono text-on-surface-variant">{t.footer.copyright}</p>
        <div className="flex gap-6">
          <a className="text-xs font-label-mono text-on-surface-variant hover:text-secondary" href="#">{t.footer.twitter}</a>
          <a className="text-xs font-label-mono text-on-surface-variant hover:text-secondary" href="#">{t.footer.linkedin}</a>
          <a className="text-xs font-label-mono text-on-surface-variant hover:text-secondary" href="#">{t.footer.github}</a>
        </div>
      </div>
    </footer>
  );
}
