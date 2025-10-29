'use client';

import { useTranslations } from 'next-intl';
import { TrendingUp, Users, DollarSign, Award } from 'lucide-react';

export function Statistics() {
  const t = useTranslations('home');

  const stats = [
    {
      icon: Users,
      value: '500+',
      label: t('stats.happy_clients'),
      description: t('stats.clients_description'),
    },
    {
      icon: DollarSign,
      value: '5-7%',
      label: t('stats.roi_rate'),
      description: t('stats.roi_description'),
    },
    {
      icon: Award,
      value: '142+',
      label: t('stats.visa_free_countries'),
      description: t('stats.countries_description'),
    },
    {
      icon: TrendingUp,
      value: '98%',
      label: t('stats.success_rate'),
      description: t('stats.success_description'),
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-brand text-jade-green font-bold mb-4">
            {t('stats.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('stats.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg border border-gold/20 hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-jade-green" />
              </div>
              <div className="text-3xl font-bold text-jade-green mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-foreground mb-2">
                {stat.label}
              </div>
              <p className="text-sm text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}