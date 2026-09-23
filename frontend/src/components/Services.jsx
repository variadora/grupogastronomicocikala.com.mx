import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useI18n } from "../i18n";

const IMAGES = [
  "https://images.unsplash.com/photo-1503810473512-f64b56827964?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
  "https://images.unsplash.com/photo-1592085198739-ffcad7f36b54?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
  "https://images.pexels.com/photos/9415582/pexels-photo-9415582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=1000",
  "https://images.unsplash.com/photo-1563865436874-9aef32095fad?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200",
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] } }),
};

const Card = ({ item, img, i, className }) => (
  <motion.div
    variants={fadeUp}
    custom={i}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-60px" }}
    data-testid={`service-card-${i}`}
    className={`group relative overflow-hidden rounded-2xl border border-[#212D24] bg-[#0E1410] ${className}`}
  >
    <div className="absolute inset-0 z-0">
      <img
        src={img}
        alt={item.t}
        className="h-full w-full object-cover opacity-30 transition-[transform,opacity] duration-700 group-hover:scale-110 group-hover:opacity-45"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0A] via-[#0A0B0A]/70 to-[#0A0B0A]/20" />
    </div>

    <div className="relative z-10 flex h-full flex-col justify-between p-7 md:p-8">
      <div className="flex items-start justify-between">
        <span className="font-display text-sm font-bold text-[#C84C32] tracking-widest">{item.tag}</span>
        <ArrowUpRight
          size={22}
          className="text-[#8b948b] transition-[transform,color] duration-300 group-hover:text-[#C84C32] group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </div>
      <div className="mt-16">
        <h3 className="font-display text-2xl md:text-[1.7rem] font-bold text-[#F2F0E9] mb-3 leading-tight">
          {item.t}
        </h3>
        <p className="text-sm text-[#D4DACF] leading-relaxed max-w-md">{item.d}</p>
      </div>
    </div>
  </motion.div>
);

export const Services = () => {
  const { t } = useI18n();
  const items = t.services.items;

  return (
    <section id="servicios" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="eyebrow text-[#C84C32] mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[#C84C32]" />
              {t.services.eyebrow}
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              data-testid="services-title"
              className="font-display font-bold tracking-[-0.02em] leading-[1.02] text-4xl sm:text-5xl lg:text-6xl text-[#F2F0E9] max-w-[18ch]"
            >
              {t.services.title}
            </motion.h2>
          </div>
          <motion.p variants={fadeUp} custom={2} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-sm text-[#8b948b] leading-relaxed lg:text-right">
            {t.services.sub}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 auto-rows-[300px] md:auto-rows-[340px]">
          <Card item={items[0]} img={IMAGES[0]} i={0} className="md:col-span-7 md:row-span-1" />
          <Card item={items[1]} img={IMAGES[1]} i={1} className="md:col-span-5 md:row-span-1" />
          <Card item={items[2]} img={IMAGES[2]} i={2} className="md:col-span-5 md:row-span-1" />
          <Card item={items[3]} img={IMAGES[3]} i={3} className="md:col-span-7 md:row-span-1" />
        </div>
      </div>
    </section>
  );
};
