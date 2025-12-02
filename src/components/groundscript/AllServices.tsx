"use client";

import { useTranslations } from "next-intl";
import { 
  Building, 
  DollarSign, 
  Calculator, 
  Award, 
  Globe,
  ArrowRight,
  Star,
  Shield,
  Users,
  Home,
  FileText,
  TrendingUp,
  CheckCircle
} from "lucide-react";
import OpenAccClient from "@/app/[locale]/(pages)/services/OpenAccClient";
import RealState from "@/app/[locale]/(pages)/services/RealState";
import Accounting from "@/app/[locale]/(pages)/services/Accounting";
import VisaPensionado from "@/app/[locale]/(pages)/services/VisaPensionado";
import VisaInversionista from "@/app/[locale]/(pages)/services/VisaInversionista";

interface AllServicesProps {
  locale?: string;
  showFullServices?: boolean;
}

export default function AllServices({ locale, showFullServices = false }: AllServicesProps) {
  const t = useTranslations("services_page");

  const services = [
    {
      id: "open-acc-client",
      title: t("services_grid.open_acc_client.title"),
      subtitle: t("services_grid.open_acc_client.subtitle"),
      description: t("services_grid.open_acc_client.description"),
      icon: <Building className="w-8 h-8 text-jade-green" />,
      features: t.raw("services_grid.open_acc_client.features") as string[],
      component: <OpenAccClient locale={locale} />,
      color: "from-blue-50 to-white"
    },
    {
      id: "real-state",
      title: t("services_grid.real_state.title"),
      subtitle: t("services_grid.real_state.subtitle"),
      description: t("services_grid.real_state.description"),
      icon: <Home className="w-8 h-8 text-jade-green" />,
      features: t.raw("services_grid.real_state.features") as string[],
      component: <RealState locale={locale} />,
      color: "from-green-50 to-white"
    },
    {
      id: "accounting",
      title: t("services_grid.accounting.title"),
      subtitle: t("services_grid.accounting.subtitle"),
      description: t("services_grid.accounting.description"),
      icon: <Calculator className="w-8 h-8 text-jade-green" />,
      features: t.raw("services_grid.accounting.features") as string[],
      component: <Accounting locale={locale} />,
      color: "from-purple-50 to-white"
    },
    {
      id: "visa-pensionado",
      title: t("services_grid.visa_pensionado.title"),
      subtitle: t("services_grid.visa_pensionado.subtitle"),
      description: t("services_grid.visa_pensionado.description"),
      icon: <Award className="w-8 h-8 text-jade-green" />,
      features: t.raw("services_grid.visa_pensionado.features") as string[],
      component: <VisaPensionado locale={locale} />,
      color: "from-yellow-50 to-white"
    },
    {
      id: "visa-inversionista",
      title: t("services_grid.visa_inversionista.title"),
      subtitle: t("services_grid.visa_inversionista.subtitle"),
      description: t("services_grid.visa_inversionista.description"),
      icon: <Globe className="w-8 h-8 text-jade-green" />,
      features: t.raw("services_grid.visa_inversionista.features") as string[],
      component: <VisaInversionista locale={locale} />,
      color: "from-red-50 to-white"
    }
  ];

  if (showFullServices) {
    return (
      <div className="space-y-0">
        {services.map((service) => (
          <div key={service.id}>
            {service.component}
          </div>
        ))}
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-jade-green/10 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-jade-green mb-6">
              {t("hero.title")}
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              {t("hero.subtitle")}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t("hero.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={service.id} 
                  className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10 p-8 h-full flex flex-col">
                    {/* Icon */}
                    <div className="flex items-center justify-center w-16 h-16 bg-jade-green/10 rounded-full mb-6 group-hover:bg-jade-green/20 transition-colors">
                      {service.icon}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-jade-green transition-colors">
                      {service.title}
                    </h3>
                    
                    {/* Subtitle */}
                    <p className="text-sm font-medium text-jade-green mb-4">
                      {service.subtitle}
                    </p>
                    
                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-jade-green flex-shrink-0" />
                          <span className="text-xs text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* CTA Button */}
                    <button className="flex items-center justify-center space-x-2 w-full py-3 px-4 bg-jade-green text-white rounded-lg hover:bg-jade-green/90 transition-colors group-hover:scale-105 transform duration-300">
                      <span className="font-medium">{t("cta_button")}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-jade-green mb-12 text-center">
              {t("benefits.title")}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {(t.raw("benefits.items") as any[]).map((benefit: any, index: number) => (
                <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

     
    </>
  );
}