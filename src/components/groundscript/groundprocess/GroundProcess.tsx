"use client";

import { useState } from "react";
import { Check, FileText, Building2, Send, ThumbsUp, CreditCard, User } from "lucide-react";
import { useTranslations } from "next-intl";

interface Step {
  id: number;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  duration: string;
  details?: {
    title: string;
    duration: string;
    checklist: string[];
  };
}

export function GroundProcess() {
  const t = useTranslations('ground_process');
  const [currentStep, setCurrentStep] = useState(1);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [hoveredButton, setHoveredButton] = useState<'primary' | 'secondary' | null>(null);

  const steps: Step[] = [
    {
      id: 1,
      title: t('steps.1.title'),
      subtitle: t('steps.1.subtitle'),
      icon: <FileText className="w-5 h-5" />,
      duration: t('steps.1.duration'),
      details: {
        title: t('steps.1.details_title'),
        duration: t('steps.1.duration'),
        checklist: [
          t('steps.1.checklist.0'),
          t('steps.1.checklist.1'),
          t('steps.1.checklist.2')
        ]
      }
    },
    {
      id: 2,
      title: t('steps.2.title'),
      subtitle: t('steps.2.subtitle'),
      icon: <Building2 className="w-5 h-5" />,
      duration: t('steps.2.duration'),
      details: {
        title: t('steps.2.details_title'),
        duration: t('steps.2.duration'),
        checklist: [
          t('steps.2.checklist.0'),
          t('steps.2.checklist.1'),
          t('steps.2.checklist.2')
        ]
      }
    },
    {
      id: 3,
      title: t('steps.3.title'),
      subtitle: t('steps.3.subtitle'),
      icon: <Send className="w-5 h-5" />,
      duration: t('steps.3.duration'),
      details: {
        title: t('steps.3.details_title'),
        duration: t('steps.3.duration'),
        checklist: [
          t('steps.3.checklist.0'),
          t('steps.3.checklist.1'),
          t('steps.3.checklist.2')
        ]
      }
    },
    {
      id: 4,
      title: t('steps.4.title'),
      subtitle: t('steps.4.subtitle'),
      icon: <ThumbsUp className="w-5 h-5" />,
      duration: t('steps.4.duration'),
      details: {
        title: t('steps.4.details_title'),
        duration: t('steps.4.duration'),
        checklist: [
          t('steps.4.checklist.0'),
          t('steps.4.checklist.1'),
          t('steps.4.checklist.2')
        ]
      }
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white ">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-jade-green mb-4 font-brand">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid relative grid-process mx-auto p-11">
          {/* Steps Timeline */}
          <div className="">
            <div className=" bg-white rounded-xl p-6 shadow-lg">
              <div className="flex flex-col gap-4">
                {steps.map((step, index) => {
                  const isActive = step.id === currentStep;
                  const isPast = step.id < currentStep;
                  const isHovered = hoveredStep === step.id;
                  
                  return (
                    <div key={step.id} className="relative">
                      <div
                        className={`
                          flex items-start gap-4 p-4 rounded-xl cursor-pointer transition-all duration-200
                          ${isActive 
                            ? 'bg-jade-green/10 border-2 border-jade-green' 
                            : isHovered 
                              ? 'bg-gray-50' 
                              : 'bg-transparent'
                          }
                        `}
                        onClick={() => setCurrentStep(step.id)}
                        onMouseEnter={() => setHoveredStep(step.id)}
                        onMouseLeave={() => setHoveredStep(null)}
                      >
                        {/* Icon Circle */}
                        <div
                          className={`
                            w-12 h-12 rounded-full  flex items-center justify-center flex-shrink-0 transition-all duration-200
                            ${isActive 
                              ? ' text-white groundgreen-bg shadow-lg' 
                              : isPast 
                                ? 'ground-jade-full text-white' 
                                : 'bg-gray-200 text-gray-500'
                            }
                          `}
                        >
                          {isPast && !isActive ? (
                            <Check className="w-5 h-5" />
                          ) : (
                            step.icon
                          )}
                        </div>
                        
                        {/* Step Info */}
                        <div className="flex-1 min-w-0">
                          <p className="text-base font-semibold text-gray-900 mb-1">
                            {step.title}
                          </p>
                          <p className="text-sm text-gray-600 opacity-60">
                            {step.subtitle}
                          </p>
                        </div>

                        {/* Step Number */}
                        <div className={`
                          text-xs font-bold px-3 py-1 rounded-full
                          ${isActive 
                            ? 'bg-jade-green text-white' 
                            : 'bg-gray-100 text-gray-500'
                          }
                        `}>
                          {step.id}
                        </div>
                      </div>

                      {/* Connector Line */}
                      {index < steps.length - 1 && (
                        <div className="h-4 flex justify-start ml-10">
                          <div
                            className={`
                              w-0.5 h-full
                              ${isPast ? 'bg-gray-800' : 'bg-gray-200'}
                            `}
                          />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Info Card */}
          <div className="">
            <div className="ground-box-fix groundgreen-bg bg-white rounded-xl p-6 shadow-lg sticky top-6">
              <div className="mb-6">
                <div className="inline-block px-3 py-1 bg-jade-green/10 rounded-full text-xs font-semibold text-jade-green mb-4">
                  {t('step_counter', { current: currentStep, total: steps.length })}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
                  {steps[currentStep - 1].details?.title}
                </h3>
                <p className="text-sm text-gray-600 opacity-70">
                  {t('estimated_duration', { duration: steps[currentStep - 1].details?.duration })}
                </p>
              </div>
              
              <div className="border-t border-gray-100 pt-5 mb-6">
                <p className="text-xs font-semibold text-gray-600 opacity-60 uppercase tracking-wider mb-4">
                  {t('checklist_title')}
                </p>
                <div className="flex flex-col gap-3">
                  {steps[currentStep - 1].details?.checklist.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-jade-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-jade-green" />
                      </div>
                      <span className="text-sm text-gray-900 leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <button
                  className={`
                    w-full font-medium py-2.5 px-4 rounded-lg border transition-all duration-200
                    ${hoveredButton === 'secondary' 
                      ? 'bg-gray-800 text-white border-gray-800' 
                      : 'bg-white text-gray-800 border-gray-800'
                    }
                  `}
                  onMouseEnter={() => setHoveredButton('secondary')}
                  onMouseLeave={() => setHoveredButton(null)}
                >
                  {t('more_info')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
