'use client';

import { useTranslations } from 'next-intl';
import { Home, TrendingUp, Users, CreditCard } from 'lucide-react';
import { GroundContainerBg } from "@/components/groundscript/GroundContainerBg";
import CompPowerCard from "@/components/groundscript/amalgama/CompPowerCard";

export function GroundValuePropositionMinimal() {
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
  ];

  const features_ = [
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
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative">
      <GroundContainerBg/>
      
      <div className="z-index-normal container mx-auto px-6">
        {/* Enhanced Header */}
        <div className="text-center mb-1 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-brand text-jade-green font-bold mb-0">
            {t('value_prop_title')}
          </h2>
          <p className="text-xl text-gray-600  mx-auto leading-relaxed mb-10">
            {t('value_prop_subtitle')}
          </p>
        </div>
        
        <section className="relative">
          {/* Enhanced Features Grid - Variación 1: Grid 2x2 estándar */}
        <div className="grid-cards-groundscript flex flex-wrap justify-between gap-8 mb-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className=" ground-box-fix feature-card-minimal animate-slide-up p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="feature-icon-minimal flex-shrink-0 mb-2 ground-jade-full">
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-jade-green mb-1 text-left">
                    {feature.title}
                  </h3>
                
                </div>
                
              </div>
              <div> 
                  <p className="text-gray-600 leading-relaxed text-left">
                    {feature.description}
                  </p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative flex justify-center items-center mb-4 ">
          <div className="relative h-[500px] w-full flex justify-center items-center">
            <CompPowerCard />
          </div>
        </div>

        <div className="grid-cards-groundscript flex flex-wrap justify-between gap-8 mb-4">
          {features_.map((feature, index) => (
            <div
              key={index}
              className=" ground-box-fix feature-card-minimal animate-slide-up p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="feature-icon-minimal flex-shrink-0 mb-2 ground-jade-full">
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-jade-green mb-1 text-left">
                    {feature.title}
                  </h3>
                
                </div>
                
              </div>
              <div> 
                  <p className="text-gray-600 leading-relaxed text-left">
                    {feature.description}
                  </p>
              </div>
            </div>
          ))}
        </div>

        </section>
        

      </div>
      
    </section>
  );
}