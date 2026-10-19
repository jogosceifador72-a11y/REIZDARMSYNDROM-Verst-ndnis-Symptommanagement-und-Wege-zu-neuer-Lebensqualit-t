import React, { useState, useEffect } from "react";
import { CheckCircle2, X } from "lucide-react";
import { RECENT_PURCHASES } from "../data/productData";
import coverImg from "../assets/images/reizdarm_cover_1792178076208.jpg";

export const PurchaseNotification: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (isDismissed) return;

    // Show initial notification after 3.5 seconds
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 3500);

    return () => clearTimeout(initialTimer);
  }, [isDismissed]);

  useEffect(() => {
    if (isDismissed) return;

    let hideTimer: ReturnType<typeof setTimeout>;
    let nextTimer: ReturnType<typeof setTimeout>;

    if (isVisible) {
      // Keep visible for 5 seconds
      hideTimer = setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    } else {
      // Pause 7 seconds before showing next
      nextTimer = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % RECENT_PURCHASES.length);
        setIsVisible(true);
      }, 7000);
    }

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(nextTimer);
    };
  }, [isVisible, isDismissed]);

  if (isDismissed) return null;

  const current = RECENT_PURCHASES[currentIndex];

  return (
    <div
      aria-live="polite"
      className={`fixed bottom-5 left-5 z-50 max-w-sm transition-all duration-500 ease-out transform ${
        isVisible
          ? "translate-y-0 opacity-100 scale-100 pointer-events-auto"
          : "translate-y-6 opacity-0 scale-95 pointer-events-none"
      }`}
    >
      <div className="relative flex items-center gap-3.5 bg-white/95 backdrop-blur-md p-3.5 pr-8 rounded-2xl shadow-xl border border-[#2D5A43]/15 text-[#1E2923]">
        {/* Book mini thumbnail */}
        <div className="relative flex-shrink-0 w-12 h-15 rounded-md overflow-hidden shadow-sm border border-neutral-200">
          <img
            src={coverImg}
            alt="Reizdarmsyndrom E-Book"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0.5 right-0.5 w-3 h-3 bg-emerald-500 rounded-full border border-white"></div>
        </div>

        {/* Info text */}
        <div className="flex-1 min-w-0 pr-1">
          <div className="flex items-center gap-1.5 mb-0.5">
            <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-emerald-100 text-emerald-700">
              <CheckCircle2 className="w-3.5 h-3.5" />
            </span>
            <span className="text-xs font-bold tracking-wide text-emerald-800 uppercase">
              Kauf bestätigt
            </span>
          </div>
          <p className="text-xs font-semibold text-neutral-800 truncate">
            {current.detail}
          </p>
          <p className="text-[11px] text-neutral-500 flex items-center gap-1 mt-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            {current.time} • Sofortzugang per E-Mail
          </p>
        </div>

        {/* Close Button */}
        <button
          onClick={() => setIsDismissed(true)}
          className="absolute top-2.5 right-2.5 text-neutral-400 hover:text-neutral-700 transition p-1 rounded-full hover:bg-neutral-100"
          title="Schließen"
          aria-label="Benachrichtigung schließen"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
