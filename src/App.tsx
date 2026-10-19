import React, { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { SymptomChecker } from "./components/SymptomChecker";
import { WhatIsIt } from "./components/WhatIsIt";
import { FourPillars } from "./components/FourPillars";
import { TableOfContents } from "./components/TableOfContents";
import { TargetAudience } from "./components/TargetAudience";
import { PricingSection } from "./components/PricingSection";
import { FaqSection } from "./components/FaqSection";
import { Footer } from "./components/Footer";
import { PurchaseNotification } from "./components/PurchaseNotification";
import { StickyCta } from "./components/StickyCta";
import { BookPreviewModal } from "./components/BookPreviewModal";
import { AmbientBackground } from "./components/AmbientBackground";
import { ScrollProgressBar } from "./components/ScrollProgressBar";

export default function App() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <div className="relative min-h-screen text-[#1E2923] flex flex-col font-sans selection:bg-[#2D5A43] selection:text-white bg-transparent">
      {/* Living Animated Ambient Background (Botanical Sage, Chamomile & Warm Sand) */}
      <AmbientBackground />

      {/* Dynamic Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Top Header & Navigation */}
      <Header />

      {/* Main Sales Page Content with Scroll Animations */}
      <main className="flex-grow">
        {/* Hero Section with 3D Book Visual & Primary Offer */}
        <Hero onOpenPreview={() => setIsPreviewOpen(true)} />

        {/* Interactive Symptom Self-Assessment */}
        <SymptomChecker />

        {/* 1. Was ist das? */}
        <WhatIsIt />

        {/* 2. Was löst es? (Die 4 Säulen & Wochenplan) */}
        <FourPillars />

        {/* 30-Seiten Inhaltsübersicht & Bonus-Materialien */}
        <TableOfContents onOpenPreview={() => setIsPreviewOpen(true)} />

        {/* 3. Für wen ist es? (Und für wen NICHT?) */}
        <TargetAudience />

        {/* Pricing Offer & Hotmart Checkout */}
        <PricingSection />

        {/* FAQ - Häufig gestellte Fragen */}
        <FaqSection />
      </main>

      {/* Footer with Medical Disclaimer & Social Media Buttons */}
      <Footer />

      {/* Bottom-Left Realtime Purchase Confirmation Notifications */}
      <PurchaseNotification />

      {/* Sticky Fast-Checkout Bar on Scroll */}
      <StickyCta />

      {/* Interactive Modal for Looking Inside the Book */}
      <BookPreviewModal
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
      />
    </div>
  );
}
