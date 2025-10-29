'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';

export function HeroSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const locale = useLocale();
  const t = useTranslations('home');

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-jade-green/90 to-jade-green/70 z-10" />
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/panama-skyline.jpg), linear-gradient(135deg, #1B3D36 0%, #2d5f54 100%)'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Language switcher for hero */}
          <div className="flex justify-center mb-8">
            <LanguageSwitcher />
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-brand text-white font-bold mb-6 leading-tight">
            {t('hero_title')}
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gold mb-10 max-w-3xl mx-auto leading-relaxed">
            {t('hero_subtitle')}
          </p>

          {/* Key Benefits */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <CheckCircle className="w-5 h-5 text-gold" />
              <span className="text-white font-medium">142+ {t('stats.visa_free_countries')}</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <CheckCircle className="w-5 h-5 text-gold" />
              <span className="text-white font-medium">{t('stats.roi_rate')}</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <CheckCircle className="w-5 h-5 text-gold" />
              <span className="text-white font-medium">{t('stats.medical_savings')}</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              asChild
              size="lg"
              className="bg-gold text-jade-green hover:bg-gold/90 font-brand text-lg px-8 py-4"
            >
              <Link href={`/${locale}/contact`}>
                {t('hero_cta')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-jade-green font-brand text-lg px-8 py-4"
              onClick={handleVideoPlay}
            >
              <Play className="mr-2 w-5 h-5" />
              {t('watch_video')}
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-white/80">
            <div className="flex items-center space-x-2">
              <span className="text-3xl font-bold text-gold">98%</span>
              <span className="text-sm">{t('stats.success_rate')}</span>
            </div>
            <div className="hidden md:block w-px h-8 bg-white/30"></div>
            <div className="flex items-center space-x-2">
              <span className="text-3xl font-bold text-gold">500+</span>
              <span className="text-sm">{t('happy_clients')}</span>
            </div>
            <div className="hidden md:block w-px h-8 bg-white/30"></div>
            <div className="flex items-center space-x-2">
              <span className="text-3xl font-bold text-gold">15+</span>
              <span className="text-sm">{t('years_experience')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoPlaying && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setIsVideoPlaying(false)}
        >
          <div className="relative w-full max-w-4xl mx-4">
            <button
              className="absolute -top-12 right-0 text-white hover:text-gold transition-colors"
              onClick={() => setIsVideoPlaying(false)}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
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

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center text-white/60 animate-bounce">
          <span className="text-sm mb-2">{t('scroll_down')}</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}