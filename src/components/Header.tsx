import React, { useState } from "react";
import { Sparkles, ShieldCheck, ArrowRight, Menu, X, BookOpen } from "lucide-react";
import { CHECKOUT_URL, PRICE } from "../data/productData";

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Notification Bar */}
      <div className="bg-[#214332] text-[#E8F3EC] py-2 px-4 text-xs font-medium text-center flex items-center justify-center gap-2 tracking-wide border-b border-[#2C5741]">
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
        </span>
        <span>
          Wissenschaftlicher PDF-Praxisleitfaden • Sofort-Download nach Kauf • Sonderaktion nur{" "}
          <strong className="text-white underline decoration-emerald-400 font-bold">
            {PRICE} €
          </strong>
        </span>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-40 bg-[#FAF6EE]/85 backdrop-blur-md border-b border-[#DDD3C2]/80 transition-all">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          {/* Logo & Title */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-[#2D5A43] flex items-center justify-center text-white shadow-md shadow-[#2D5A43]/20 group-hover:scale-105 transition-transform">
              <BookOpen className="w-5 h-5 text-emerald-200" />
            </div>
            <div>
              <span className="font-display font-bold text-lg text-[#1A3326] block leading-tight">
                Reizdarmsyndrom
              </span>
              <span className="text-[11px] font-medium tracking-wider text-[#5A7365] uppercase block">
                Praxisleitfaden • 30 Seiten
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#385044]">
            <a href="#vorteile" className="hover:text-[#2D5A43] transition-colors">
              Was löst es?
            </a>
            <a href="#inhalt" className="hover:text-[#2D5A43] transition-colors">
              Blick ins Buch
            </a>
            <a href="#zielgruppe" className="hover:text-[#2D5A43] transition-colors">
              Für wen?
            </a>
            <a href="#faq" className="hover:text-[#2D5A43] transition-colors">
              FAQ
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#2D5A43] hover:bg-[#234734] text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-md shadow-[#2D5A43]/20 hover:shadow-lg hover:shadow-[#2D5A43]/30 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Jetzt für {PRICE} € sichern</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#2D5A43] hover:bg-[#EAE4DC]"
            aria-label="Navigation öffnen"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FAF8F5] border-b border-[#E6E1D8] px-4 pt-3 pb-6 space-y-3">
            <a
              href="#vorteile"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-[#2D5A43]"
            >
              Was löst es? (Die 4 Säulen)
            </a>
            <a
              href="#inhalt"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-[#2D5A43]"
            >
              Inhalt & Blick ins Buch
            </a>
            <a
              href="#zielgruppe"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-[#2D5A43]"
            >
              Für wen ist der Leitfaden?
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-[#2D5A43]"
            >
              Häufige Fragen (FAQ)
            </a>
            <div className="pt-2">
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#2D5A43] text-white py-3 rounded-xl font-semibold text-center shadow"
              >
                <span>Jetzt für {PRICE} € bestellen</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
