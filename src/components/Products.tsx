"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const productMeta = [
  {
    icon: "confirmation_number",
    iconColor: "text-secondary",
    borderColor: "hover:border-secondary",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUplGbTDbkD8SPw6VP7TwNoG5jCHR-8KwHVXIBG7qGpQNIpHecz_trIE_A7rYidfYDXbLvWyMIvB2HdC1d69oJ7HxKw1nnqM4XS3Ewo6HcJhiCCc3JyqyHzaFN5oRr5M8SHP2DpJUXf_YoNrqq8KlFHI_wJRjcMpXNAyHXaK35fh8rM_lI9hz5BgZlMBf6IZe-ensgvfZ7nZAMaFsvaQoO3OZ6lWM-2vUY9eASDp-P4FV4rv1A6ausRS2MTa2UEt0-no_OKILMa8I",
    btnStyle: "border-secondary text-secondary hover:bg-secondary hover:text-on-secondary-container",
    grad: "from-secondary/20",
  },
  {
    icon: "support_agent",
    iconColor: "text-tertiary",
    borderColor: "hover:border-tertiary",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuANQ3UZERMLKA-YLY6X8_XyBoQfmrGQeiMtCmvsXK5QoEtMy8sixeDBJKf28NGVgjm0TnR4J2s0h2-f0QDPKik6nbYxlc7zDmofFaQRktd3J0LmmOQsZtzfj7UY-sjNVDJXtxvhR2sSW8lH2CXBxYrW5aP92O5TFbmT8qQQ3MnpVRQIBc1q3da-6j21KXdTun02e1QkJhP17KKYr08iVbf2Qk9Ho1EQbmkRDgy9oex8m8dA4o2ttXtatPTZIdeAs9bkMu1Rhmk3uiU",
    btnStyle: "border-tertiary text-tertiary hover:bg-tertiary hover:text-on-tertiary",
    grad: "from-tertiary/20",
  },
  {
    icon: "person_add",
    iconColor: "text-purple-400",
    borderColor: "hover:border-purple-400",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuALHsbCe9P83qffzHq8PFUHcQBNUzDi-n-8UDwQW5CyN2CZCD8TRV7pdQbZilCX9nTyodnF1oadK32skyLhB4GHiHtzSH7qF_0Co9o15-Cy7kuWw4BP8WmfDaaKI2zSdCk0M1C0SSFHxK-dRSEW7X-u4tcgAa6bEwS1F_dVHhqef_HYhL9y9I-Z4DMUeFfEEe0wf6BTHnVJcAiDeBWgGCvji64tMRGBIHRykdaztrRQ4rnbKRzpgDqSsTf0mZy9CKOJJuo1603Leiw",
    btnStyle: "border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white",
    grad: "from-purple-500/20",
  },
];

export default function Products() {
  const { t } = useLanguage();
  const items = t.products.items;

  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto" id="products">
      <div className="mb-16">
        <h2 className="font-headline-lg text-headline-lg mb-4">
          {t.products.heading_1}{" "}
          <span className="text-secondary">{t.products.heading_accent}</span>{" "}
          {t.products.heading_2}
        </h2>
        <p className="text-on-surface-variant max-w-2xl">{t.products.subtitle}</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
        {items.map((product, idx) => {
          const meta = productMeta[idx];
          return (
            <div
              key={idx}
              className={`glass-card p-8 rounded-2xl flex flex-col h-full group transition-all duration-300 ${meta.borderColor}`}
            >
              <div className="h-48 mb-8 rounded-xl overflow-hidden bg-code-bg border border-border-muted relative">
                <div className={`absolute inset-0 bg-gradient-to-tr ${meta.grad} to-transparent`}></div>
                <Image
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={meta.image}
                  width={400}
                  height={200}
                />
              </div>
              <h3 className="text-2xl font-bold mb-3 flex items-center justify-between">
                {product.title}{" "}
                <span className={`material-symbols-outlined ${meta.iconColor}`}>{meta.icon}</span>
              </h3>
              <p className="text-on-surface-variant text-sm mb-6 flex-grow">{product.desc}</p>
              <ul className="space-y-3 mb-8 text-sm font-label-mono">
                {product.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-2">
                    <span className={`material-symbols-outlined ${meta.iconColor} text-lg`}>check_circle</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-lg border font-button text-button transition-all duration-300 ${meta.btnStyle}`}>
                {t.products.learn_more}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
