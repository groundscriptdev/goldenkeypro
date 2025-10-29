'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function CallToAction() {
  const locale = useLocale();
  const t = useTranslations('home');

  return (
    <section className="py-20 bg-jade-green text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-brand text-white font-bold mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-gold/90 mb-8">
            {t('cta.subtitle')}
          </p>
          
          <Button
            asChild
            size="lg"
            className="bg-gold text-jade-green hover:bg-gold/90 font-brand text-lg px-8 py-4"
          >
            <Link href={`/${locale}/contact`}>
              {t('cta.button')}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}