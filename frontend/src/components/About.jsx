import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useI18n } from "../i18n";

const ABOUT_IMG =
  "https://images.pexels.com/photos/4487383/pexels-photo-4487383.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1100&w=900";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] } }),
};

export const About = () => {
  const { t } = useI18n();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="nosotros" ref={ref} className="relative py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="eyebrow text-[#C84C32] mb-6 flex items-center gap-3"
        >
          <span className="h-px w-8 bg-[#C84C32]" />
          {t.about.eyebrow}
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              data-testid="about-title"
              className="font-display font-bold tracking-[-0.02em] leading-[1.02] text-4xl sm:text-5xl lg:text-6xl text-[#F2F0E9] max-w-[16ch]"
            >
              {t.about.title}
            </motion.h2>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            <motion.p variants={fadeUp} custom={1} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-lg text-[#F2F0E9] leading-relaxed">
              {t.about.lead}
            </motion.p>
            <motion.p variants={fadeUp} custom={2} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-base text-[#8b948b] leading-relaxed">
              {t.about.body}
            </motion.p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-5 relative overflow-hidden rounded-2xl h-[340px] md:h-[460px] border border-[#212D24]"
          >
            <motion.img
              style={{ y: imgY }}
              src={ABOUT_IMG}
              alt="Equipo Cikala en almacén"
              className="absolute inset-0 h-[116%] w-full object-cover -top-[8%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0A]/70 to-transparent" />
          </motion.div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {t.about.pillars.map((p, i) => (
              <motion.div
                key={p.t}
                variants={fadeUp}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                data-testid={`about-pillar-${i}`}
                className="flex flex-col justify-between rounded-2xl border border-[#212D24] bg-[#0E1410] p-6 hover:border-[#C84C32]/50 transition-colors group"
              >
                <span className="font-display text-3xl font-bold text-[#C84C32]">0{i + 1}</span>
                <div className="mt-10">
                  <h3 className="font-display text-xl font-bold text-[#F2F0E9] mb-2">{p.t}</h3>
                  <p className="text-sm text-[#8b948b] leading-relaxed">{p.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
