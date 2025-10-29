'use client';

import { useTranslations } from 'next-intl';
import { Home, TrendingUp, Users, CreditCard } from 'lucide-react';

export function ValueProposition() {
  const t = useTranslations('home');

  const features = [
    {
      icon: <Home className="w-8 h-8" />,
      title: t('features.residency.title'),
      description: t('features.residency.description'),
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: t('features.investment.title'),
      description: t('features.investment.description'),
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: t('features.family.title'),
      description: t('features.family.description'),
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: t('features.citizenship.title'),
      description: t('features.citizenship.description'),
    },
  ];

  return (
    <section className="py-20 bg-jade-green/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-brand text-jade-green font-bold mb-4">
            {t('value_prop_title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('value_prop_subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-jade-green">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-jade-green mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}