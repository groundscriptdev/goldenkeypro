'use client';

import { useTranslations } from 'next-intl';
import { TrendingUp, Users, DollarSign, Award } from 'lucide-react';

export function StatisticsMinimal() {
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Enhanced Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-brand text-jade-green font-bold mb-6">
            {t('stats.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('stats.subtitle')}
          </p>
        </div>

        {/* Enhanced Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-card-minimal animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-jade-green/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-jade-green group-hover:scale-110 transition-all duration-300">
                <stat.icon className="w-8 h-8 text-jade-green group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="stat-number-minimal">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-gray-800 mb-3">
                {stat.label}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}