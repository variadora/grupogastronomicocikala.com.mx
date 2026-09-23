import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { useI18n } from "../i18n";
import { scrollToId } from "../lib/scroll";

const links = [
  { id: "nosotros", key: "about" },
  { id: "servicios", key: "services" },
  { id: "productos", key: "products" },
  { id: "contacto", key: "contact" },
];

export const Navbar = () => {
  const { t, lang, toggle } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,backdrop-filter,border-color,padding] duration-500 ${
        scrolled
          ? "bg-black/60 backdrop-blur-xl border-b border-white/10 py-3"
          : "bg-transparent border-b border-transparent py-5"
      }`}
    >
      <nav className="mx-auto max-w-[1400px] px-6 md:px-10 flex items-center justify-between">
        <button data-testid="nav-logo" onClick={() => go("inicio")} className="cursor-pointer">
          <Logo />
        </button>

        <div className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <button
              key={l.id}
              data-testid={`nav-${l.key}`}
              onClick={() => go(l.id)}
              className="text-sm text-[#D4DACF] hover:text-[#F2F0E9] transition-colors relative group"
            >
              {t.nav[l.key]}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#C84C32] transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            data-testid="lang-toggle"
            onClick={toggle}
            className="flex items-center gap-1 text-xs font-bold rounded-full border border-white/15 px-3 py-1.5 hover:border-[#C84C32] transition-colors"
          >
            <span className={lang === "es" ? "text-[#C84C32]" : "text-[#8b948b]"}>ES</span>
            <span className="text-[#4a534b]">/</span>
            <span className={lang === "en" ? "text-[#C84C32]" : "text-[#8b948b]"}>EN</span>
          </button>

          <button
            data-testid="nav-cta"
            onClick={() => go("contacto")}
            className="hidden md:inline-flex items-center rounded-full bg-[#C84C32] px-5 py-2 text-sm font-semibold text-white hover:bg-[#b03e27] transition-colors"
          >
            {t.nav.cta}
          </button>

          <button
            data-testid="mobile-menu-btn"
            onClick={() => setOpen((o) => !o)}
            className="md:hidden text-[#F2F0E9] p-1"
            aria-label="menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-black/80 backdrop-blur-xl border-t border-white/10"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {links.map((l) => (
                <button
                  key={l.id}
                  data-testid={`mobile-nav-${l.key}`}
                  onClick={() => go(l.id)}
                  className="text-left text-lg font-display font-bold text-[#F2F0E9]"
                >
                  {t.nav[l.key]}
                </button>
              ))}
              <button
                onClick={() => go("contacto")}
                className="mt-2 rounded-full bg-[#C84C32] px-5 py-3 text-sm font-semibold text-white text-center"
              >
                {t.nav.cta}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
