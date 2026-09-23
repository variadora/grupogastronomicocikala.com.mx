import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import { useI18n } from "../i18n";

const IMAGES = [
  "https://images.pexels.com/photos/9415582/pexels-photo-9415582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=800",
  "https://images.unsplash.com/photo-1586201375761-83865001e31c?crop=entropy&cs=srgb&fm=jpg&q=85&w=1000",
  "https://images.unsplash.com/photo-1563865436874-9aef32095fad?crop=entropy&cs=srgb&fm=jpg&q=85&w=1000",
  "https://images.unsplash.com/photo-1556910103-1c02745aae4d?crop=entropy&cs=srgb&fm=jpg&q=85&w=1000",
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] } }),
};

export const Products = () => {
  const { t } = useI18n();

  const go = () => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="productos" className="relative py-28 md:py-40 bg-[#0E1410] border-y border-[#212D24]">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="eyebrow text-[#C84C32] mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[#C84C32]" />
              {t.products.eyebrow}
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              data-testid="products-title"
              className="font-display font-bold tracking-[-0.02em] leading-[0.98] text-5xl sm:text-6xl lg:text-7xl text-[#F2F0E9]"
            >
              {t.products.title}
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-5 max-w-md text-[#8b948b] leading-relaxed">
              {t.products.sub}
            </motion.p>
          </div>
          <motion.button
            variants={fadeUp}
            custom={2}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            data-testid="products-cta"
            onClick={go}
            className="group inline-flex items-center gap-2 self-start rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-[#F2F0E9] hover:border-[#C84C32] hover:text-[#C84C32] transition-colors"
          >
            {t.products.cta}
            <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.products.items.map((p, i) => (
            <motion.div
              key={p.t}
              variants={fadeUp}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
              data-testid={`product-card-${i}`}
              className="group relative overflow-hidden rounded-2xl border border-[#212D24] aspect-[4/5]"
            >
              <img
                src={IMAGES[i]}
                alt={p.t}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 backdrop-blur-md border border-white/15 transition-colors group-hover:bg-[#C84C32] group-hover:border-[#C84C32]">
                <Plus size={16} className="text-white" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display text-xl font-bold text-[#F2F0E9] mb-1">{p.t}</h3>
                <p className="text-sm text-[#D4DACF] opacity-0 translate-y-2 transition-[opacity,transform] duration-400 group-hover:opacity-100 group-hover:translate-y-0">
                  {p.d}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
