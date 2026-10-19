import React from "react";
import {
  Instagram,
  Facebook,
  Youtube,
  AtSign,
  Share2,
  Video,
  ShieldCheck,
  AlertTriangle,
  Lock,
  Heart,
  BookOpen,
} from "lucide-react";
import { SOCIAL_LINKS, CHECKOUT_URL, PRICE } from "../data/productData";

export const Footer: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Instagram":
        return <Instagram className="w-5 h-5 text-[#E1306C]" />;
      case "Facebook":
        return <Facebook className="w-5 h-5 text-[#1877F2]" />;
      case "Youtube":
        return <Youtube className="w-5 h-5 text-[#FF0000]" />;
      case "Video": // TikTok
        return <Video className="w-5 h-5 text-neutral-900" />;
      case "Share2": // Kwai
        return <Share2 className="w-5 h-5 text-[#FF5A00]" />;
      case "AtSign": // Threads
        return <AtSign className="w-5 h-5 text-neutral-900" />;
      default:
        return <Share2 className="w-5 h-5" />;
    }
  };

  return (
    <footer className="bg-[#14231B] text-[#DCE7E1] pt-16 pb-28 border-t border-[#233B2E]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Disclaimer Banner */}
        <div className="bg-[#1A2E24] border border-[#2D503D] rounded-2xl p-6 sm:p-8 mb-12 shadow-inner">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="p-3 bg-amber-500/10 text-amber-300 rounded-xl border border-amber-500/20 flex-shrink-0">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-base mb-1">
                Wichtiger medizinischer Hinweis
              </h4>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Dieser Ratgeber ersetzt keine ärztliche Beratung oder medizinische Untersuchung. 
                Die Inhalte dienen ausschließlich der Information, Bildung und Unterstützung im Alltag. 
                Bei anhaltenden, akuten oder unklaren Beschwerden konsultieren Sie bitte umgehend eine Ärztin 
                oder einen Arzt Ihres Vertrauens.
              </p>
            </div>
          </div>
        </div>

        {/* Social Media Contact Buttons Section */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs uppercase tracking-wider font-semibold text-[#8EB8A1] bg-[#1B3326] px-3.5 py-1.5 rounded-full mb-3">
            Offizielle Kanäle & Kontakt
          </span>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
            Vernetze dich mit uns
          </h3>
          <p className="text-sm sm:text-base text-neutral-300 max-w-xl mx-auto mb-8">
            Folge unseren Social-Media-Kanälen für tägliche Inspiration, Gesundheitstipps und Neuigkeiten:
          </p>

          {/* Social Buttons Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
            {SOCIAL_LINKS.map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 p-3 sm:p-3.5 bg-[#1B3026] hover:bg-white text-neutral-200 hover:text-neutral-900 rounded-xl border border-[#2A4637] hover:border-white shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <div className="p-2 rounded-lg bg-[#253E32] group-hover:bg-neutral-100 transition-colors flex-shrink-0">
                  {getIcon(item.icon)}
                </div>
                <div className="text-left overflow-hidden">
                  <div className="text-xs font-bold leading-tight truncate">
                    {item.name}
                  </div>
                  <div className="text-[11px] text-neutral-400 group-hover:text-neutral-600 truncate">
                    {item.handle}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#233B2E] my-10"></div>

        {/* Bottom Metadata & Guarantee */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-xs text-neutral-400">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1B3026] flex items-center justify-center text-emerald-400 border border-[#2D503D]">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="font-semibold text-white text-sm">
                Reizdarmsyndrom E-Book
              </div>
              <div>Praxisleitfaden • 30 Seiten PDF • {PRICE} €</div>
            </div>
          </div>

          <div className="flex justify-start md:justify-center items-center gap-6">
            <div className="flex items-center gap-1.5 text-neutral-300">
              <Lock className="w-4 h-4 text-emerald-400" />
              <span>Sichere 256-Bit SSL-Verschlüsselung</span>
            </div>
            <div className="flex items-center gap-1.5 text-neutral-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Hotmart Käuferschutz</span>
            </div>
          </div>

          <div className="text-left md:text-right text-neutral-400">
            <p>© {new Date().getFullYear()} Karin Zeit. Alle Rechte vorbehalten.</p>
            <p className="mt-1">
              Erstellt mit Liebe für mehr Wohlbefinden und Lebensqualität.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
