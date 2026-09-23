import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useI18n } from "../i18n";
import { scrollToId } from "../lib/scroll";

const HERO_IMG =
  "https://images.pexels.com/photos/4253133/pexels-photo-4253133.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1200&w=1800";

const lineReveal = {
  hidden: { y: "110%" },
  show: (i) => ({
    y: "0%",
    transition: { duration: 1, delay: 0.5 + i * 0.14, ease: [0.16, 1, 0.3, 1] },
  }),
};

const Line = ({ children, i, accent }) => (
  <span className="block overflow-hidden">
    <motion.span
      variants={lineReveal}
      custom={i}
      initial="hidden"
      animate="show"
      className={`block ${accent ? "font-serif-accent italic font-medium text-[#C84C32]" : ""}`}
    >
      {children}
    </motion.span>
  </span>
);

export const Hero = () => {
  const { t } = useI18n();

  const go = (id) => scrollToId(id);

  return (
    <section id="inicio" className="relative min-h-screen w-full overflow-hidden flex flex-col justify-end">
      {/* Background */}
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0"
      >
        <img src={HERO_IMG} alt="Cocina profesional Cikala" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0A0B0A]" />
        <div className="absolute inset-0 bg-[#0A0B0A]/30" />
      </motion.div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 md:px-10 pb-16 md:pb-24 pt-32">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          data-testid="hero-eyebrow"
          className="eyebrow text-[#C84C32] mb-6 flex items-center gap-3"
        >
          <span className="h-px w-8 bg-[#C84C32]" />
          {t.hero.eyebrow}
        </motion.p>

        <h1
          data-testid="hero-title"
          className="font-display font-extrabold tracking-[-0.02em] leading-[0.94] text-[13vw] sm:text-[10vw] md:text-[7.5vw] lg:text-[6.5rem] text-[#F2F0E9] max-w-[15ch]"
        >
          <Line i={0}>{t.hero.line1}</Line>
          <Line i={1} accent>{t.hero.line2}</Line>
          <Line i={2}>{t.hero.line3}</Line>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col lg:flex-row lg:items-end justify-between gap-8"
        >
          <p className="max-w-xl text-[#D4DACF] text-base md:text-lg leading-relaxed text-balance">
            {t.hero.sub}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              data-testid="hero-cta-primary"
              onClick={() => go("contacto")}
              className="group inline-flex items-center gap-2 rounded-full bg-[#C84C32] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[#b03e27] transition-colors"
            >
              {t.hero.ctaPrimary}
              <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <button
              data-testid="hero-cta-secondary"
              onClick={() => go("servicios")}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-[#F2F0E9] hover:border-[#C84C32] hover:text-[#C84C32] transition-colors"
            >
              {t.hero.ctaSecondary}
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="relative z-10 mx-auto w-full max-w-[1400px] px-6 md:px-10 pb-8 flex items-center gap-3 text-[#8b948b]"
      >
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
          <ArrowDown size={16} />
        </motion.div>
        <span className="eyebrow text-[0.6rem]">{t.hero.scroll}</span>
      </motion.div>
    </section>
  );
};
