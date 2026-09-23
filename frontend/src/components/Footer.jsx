import React from "react";
import { Logo } from "./Logo";
import { useI18n } from "../i18n";
import { scrollToId } from "../lib/scroll";

const navLinks = [
  { id: "nosotros", key: "about" },
  { id: "servicios", key: "services" },
  { id: "productos", key: "products" },
  { id: "contacto", key: "contact" },
];

export const Footer = () => {
  const { t } = useI18n();
  const year = new Date().getFullYear();
  const go = (id) => scrollToId(id);

  return (
    <footer className="relative border-t border-[#212D24] bg-[#0A0B0A]" data-testid="footer">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-5 max-w-xs text-sm text-[#8b948b] leading-relaxed">
              GRUPO GASTRONÓMICO CIKALA, S.A.S. de C.V. — {t.footer.tagline}
            </p>
          </div>

          <div className="md:col-span-4 md:col-start-8">
            <p className="eyebrow text-[#5b655c] mb-5">{t.footer.nav}</p>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => go(l.id)}
                    data-testid={`footer-${l.key}`}
                    className="text-sm text-[#D4DACF] hover:text-[#C84C32] transition-colors"
                  >
                    {t.nav[l.key]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-1 md:col-start-12">
            <p className="eyebrow text-[#5b655c] mb-5">{t.footer.legal}</p>
            <ul className="space-y-3 text-sm text-[#D4DACF]">
              <li className="hover:text-[#C84C32] transition-colors cursor-pointer whitespace-nowrap">{t.footer.privacy}</li>
              <li className="hover:text-[#C84C32] transition-colors cursor-pointer">{t.footer.terms}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#212D24] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#5b655c]">© {year} Grupo Gastronómico Cikala. {t.footer.rights}</p>
          <p className="font-serif-accent italic text-[#5b655c] text-sm">Premium wholesale gastronomy</p>
        </div>
      </div>
    </footer>
  );
};
