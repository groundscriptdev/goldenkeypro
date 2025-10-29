'use client';

import { useTranslations } from 'next-intl';
import { Home, TrendingUp, Users, CreditCard } from 'lucide-react';

export function ValuePropositionMinimal() {
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
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        {/* Enhanced Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-brand text-jade-green font-bold mb-6">
            {t('value_prop_title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('value_prop_subtitle')}
          </p>
        </div>
        
        {/* Enhanced Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card-minimal animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="feature-icon-minimal">
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-jade-green mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>


        {/* Enhanced Features Grid - Variación 2: Grid 2x2 con tarjetas verticales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={`v2-${index}`}
              className="bg-gradient-to-br from-jade-green/5 to-emerald-green/5 p-8 rounded-2xl border border-jade-green/10 hover:border-jade-green/30 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <div className="feature-icon-minimal mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-jade-green mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Features Grid - Variación 3: Grid 4 columnas en desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={`v3-${index}`}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <div className="feature-icon-minimal mx-auto mb-4">
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-jade-green mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Features Grid - Variación 4: Grid con diseño asimétrico */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={`v4-${index}`}
              className={`
                ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}
                ${index === 1 ? 'lg:col-span-2' : ''}
                bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up
                ${index === 0 ? 'p-8' : ''}
              `}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`${index === 0 ? 'text-center' : 'text-left'}`}>
                <div className={`feature-icon-minimal ${index === 0 ? 'mx-auto mb-6 w-20 h-20' : 'mb-4'} flex items-center justify-center`}>
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                <h3 className={`font-semibold text-jade-green mb-3 ${index === 0 ? 'text-2xl' : 'text-lg'}`}>
                  {feature.title}
                </h3>
                <p className={`text-gray-600 leading-relaxed ${index === 0 ? 'text-base' : 'text-sm'}`}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Features Grid - Variación 5: Grid con tarjetas horizontales */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={`v5-${index}`}
              className="flex items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 animate-slide-up border-l-4 border-jade-green"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="feature-icon-minimal mr-6 flex-shrink-0">
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-jade-green mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}