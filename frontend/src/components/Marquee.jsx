import React from "react";
import { useI18n } from "../i18n";

export const Marquee = () => {
  const { t } = useI18n();
  const items = [...t.marquee, ...t.marquee];

  return (
    <section className="relative py-8 md:py-10 border-y border-[#212D24] bg-[#0E1410] overflow-hidden" data-testid="marquee">
      <div className="marquee-track">
        {items.map((word, i) => (
          <span key={i} className="flex items-center">
            <span className="font-display font-bold text-2xl md:text-4xl text-[#F2F0E9] px-8 tracking-tight">
              {word}
            </span>
            <span className="text-[#C84C32] text-2xl md:text-4xl">✳</span>
          </span>
        ))}
      </div>
    </section>
  );
};
