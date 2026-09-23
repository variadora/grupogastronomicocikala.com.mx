import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "sonner";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { useI18n } from "../i18n";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] } }),
};

export const Contact = () => {
  const { t } = useI18n();
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [loading, setLoading] = useState(false);

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${API}/contact`, form);
      toast.success(t.contact.success);
      setForm({ name: "", email: "", company: "", message: "" });
    } catch (err) {
      toast.error(t.contact.error);
    } finally {
      setLoading(false);
    }
  };

  const inputCls =
    "w-full bg-transparent border-b border-[#2a382e] py-3.5 text-[#F2F0E9] placeholder:text-[#5b655c] focus:border-[#C84C32] focus:outline-none transition-colors";

  const info = [
    { icon: MapPin, label: t.contact.address },
    { icon: Phone, label: t.contact.phone },
    { icon: Mail, label: t.contact.mail },
  ];

  return (
    <section id="contacto" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20">
        <div className="lg:col-span-5">
          <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="eyebrow text-[#C84C32] mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-[#C84C32]" />
            {t.contact.eyebrow}
          </motion.p>
          <motion.h2
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            data-testid="contact-title"
            className="font-display font-bold tracking-[-0.02em] leading-[0.95] text-6xl sm:text-7xl lg:text-8xl text-[#F2F0E9]"
          >
            {t.contact.title}
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-6 max-w-md text-[#8b948b] leading-relaxed">
            {t.contact.sub}
          </motion.p>

          <motion.div variants={fadeUp} custom={3} initial="hidden" whileInView="show" viewport={{ once: true }} className="mt-12 space-y-5">
            <p className="eyebrow text-[#5b655c]">{t.contact.infoTitle}</p>
            {info.map((it) => (
              <div key={it.label} className="flex items-center gap-4 text-[#D4DACF]">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#212D24] bg-[#0E1410]">
                  <it.icon size={16} className="text-[#C84C32]" />
                </span>
                <span className="text-sm">{it.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.form
          variants={fadeUp}
          custom={2}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          data-testid="contact-form"
          onSubmit={onSubmit}
          className="lg:col-span-7 rounded-2xl border border-[#212D24] bg-[#0E1410] p-7 md:p-10 flex flex-col gap-7"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
            <div>
              <label className="eyebrow text-[#5b655c] mb-2 block">{t.contact.name}</label>
              <input data-testid="contact-name" name="name" required value={form.name} onChange={onChange} className={inputCls} placeholder="—" />
            </div>
            <div>
              <label className="eyebrow text-[#5b655c] mb-2 block">{t.contact.company}</label>
              <input data-testid="contact-company" name="company" value={form.company} onChange={onChange} className={inputCls} placeholder="—" />
            </div>
          </div>
          <div>
            <label className="eyebrow text-[#5b655c] mb-2 block">{t.contact.email}</label>
            <input data-testid="contact-email" name="email" type="email" required value={form.email} onChange={onChange} className={inputCls} placeholder="—" />
          </div>
          <div>
            <label className="eyebrow text-[#5b655c] mb-2 block">{t.contact.message}</label>
            <textarea data-testid="contact-message" name="message" required rows={4} value={form.message} onChange={onChange} className={`${inputCls} resize-none`} placeholder="—" />
          </div>

          <button
            data-testid="contact-submit"
            type="submit"
            disabled={loading}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#C84C32] px-8 py-4 text-sm font-semibold text-white hover:bg-[#b03e27] transition-colors disabled:opacity-60 self-start"
          >
            {loading ? t.contact.sending : t.contact.submit}
            {!loading && <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />}
          </button>
        </motion.form>
      </div>
    </section>
  );
};
