"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { ArrowRight, Play, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";

export function HeroSectionMinimal() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const locale = useLocale();
  const t = useTranslations("home");

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };
  return (
    <section className="hero-minimal">
      {/* Enhanced Background with subtle gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-jade-green/3 via-transparent to-gold/3 z-10" />
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(/images/panama-skyline.jpg), linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
          }}
        />
        <div className="absolute inset-0 bg-white/40 backdrop-blur-sm" />
      </div>

      {/* Enhanced Content */}
      <div className="hero-content-minimal">
        {/* Language switcher for hero */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <LanguageSwitcher />
        </div>

        {/* Enhanced Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-brand text-jade-green font-bold mb-6 leading-tight animate-slide-up">
          {t("hero_title")}
        </h1>

        {/* Enhanced Subheadline */}
        <p
          className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up"
          style={{ animationDelay: "0.1s" }}
        >
          {t("hero_subtitle")}
        </p>

        {/* Enhanced Key Benefits */}
        <div
          className="flex flex-wrap justify-center gap-4 mb-16 animate-slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-sm border border-gray-100">
            <CheckCircle className="w-5 h-5 text-jade-green flex-shrink-0" />
            <span className="text-gray-700 font-medium whitespace-nowrap">
              142+ {t("stats.visa_free_countries")}
            </span>
          </div>
          <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-sm border border-gray-100">
            <CheckCircle className="w-5 h-5 text-jade-green flex-shrink-0" />
            <span className="text-gray-700 font-medium whitespace-nowrap">
              {t("stats.roi_rate")}
            </span>
          </div>
          <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-sm border border-gray-100">
            <CheckCircle className="w-5 h-5 text-jade-green flex-shrink-0" />
            <span className="text-gray-700 font-medium whitespace-nowrap">
              {t("stats.medical_savings")}
            </span>
          </div>
        </div>

        {/* Enhanced CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-6 justify-center mb-20 animate-slide-up"
          style={{ animationDelay: "0.3s" }}
        >
          <Button
            asChild
            size="lg"
            className="btn-primary-minimal text-lg px-10 py-4"
          >
            <Link href={`/${locale}/contact`}>
              {t("hero_cta")}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="btn-outline-minimal text-lg px-10 py-4"
            onClick={handleVideoPlay}
          >
            <Play className="mr-2 w-5 h-5" />
            {t("watch_video")}
          </Button>
        </div>

        {/* Enhanced Trust Indicators */}
        <div
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 text-gray-600 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="flex items-center space-x-3">
            <span className="text-4xl font-bold text-jade-green">98%</span>
            <span className="text-sm font-medium whitespace-nowrap">
              {t("stats.success_rate")}
            </span>
          </div>
          <div className="hidden md:block w-px h-8 bg-gray-300"></div>
          <div className="flex items-center space-x-3">
            <span className="text-4xl font-bold text-jade-green">500+</span>
            <span className="text-sm font-medium whitespace-nowrap">
              {t("happy_clients")}
            </span>
          </div>
          <div className="hidden md:block w-px h-8 bg-gray-300"></div>
          <div className="flex items-center space-x-3">
            <span className="text-4xl font-bold text-jade-green">15+</span>
            <span className="text-sm font-medium whitespace-nowrap">
              {t("years_experience")}
            </span>
          </div>
        </div>
      </div>

      {/* Enhanced Video Modal */}
      {isVideoPlaying && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setIsVideoPlaying(false)}
        >
          <div className="relative w-full max-w-5xl mx-4 animate-scale-in">
            <button
              className="absolute -top-14 right-0 text-white hover:text-gold transition-colors"
              onClick={() => setIsVideoPlaying(false)}
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Panama Golden Key Video"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center text-gray-500 animate-float">
          <span className="text-sm mb-2 font-medium">{t("scroll_down")}</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
