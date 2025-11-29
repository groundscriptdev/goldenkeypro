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
      title: "Apertura de Empresas y Cuentas",
      subtitle: "Constitución de sociedades y apertura bancaria",
      description: "Servicios integrales para la formación de empresas en Panamá con ventajas fiscales y apertura de cuentas bancarias multinivel.",
      icon: <Building className="w-8 h-8 text-jade-green" />,
      features: [
        "Sociedades anónimas con privacidad",
        "Cuentas bancarias multi-divisa",
        "Sistema fiscal territorial",
        "Protección de activos internacionales"
      ],
      component: <OpenAccClient locale={locale} />,
      color: "from-blue-50 to-white"
    },
    {
      id: "real-state",
      title: "Bienes Raíces",
      subtitle: "Inversión inmobiliaria y residencia",
      description: "Asesoría completa para inversión inmobiliaria en Panamá, incluyendo propiedades de lujo y opciones para obtener residencia.",
      icon: <Home className="w-8 h-8 text-jade-green" />,
      features: [
        "Propiedades en zonas premium",
        "Inversión desde USD 300,000",
        "Residencia mediante inmuebles",
        "Plusvalía garantizada"
      ],
      component: <RealState locale={locale} />,
      color: "from-green-50 to-white"
    },
    {
      id: "accounting",
      title: "Contabilidad y Sociedades",
      subtitle: "Gestión contable para empresas",
      description: "Servicios contables especializados para sociedades panameñas con estándares internacionales y optimización fiscal.",
      icon: <Calculator className="w-8 h-8 text-jade-green" />,
      features: [
        "Contabilidad bajo NIIF",
        "Declaraciones anuales",
        "Gestión fiscal territorial",
        "Reportes corporativos"
      ],
      component: <Accounting locale={locale} />,
      color: "from-purple-50 to-white"
    },
    {
      id: "visa-pensionado",
      title: "Visa de Pensionado",
      subtitle: "Residencia para jubilados",
      description: "Programa especial para jubilados con beneficios exclusivos, descuentos y ventajas fiscales en Panamá.",
      icon: <Award className="w-8 h-8 text-jade-green" />,
      features: [
        "Pensión mínima de $1,000",
        "Descuentos del 15-50%",
        "Exención de impuestos",
        "Servicios médicos preferenciales"
      ],
      component: <VisaPensionado locale={locale} />,
      color: "from-yellow-50 to-white"
    },
    {
      id: "visa-inversionista",
      title: "Visa de Inversionista",
      subtitle: "Residencia por inversión",
      description: "Obtenga residencia panameña mediante inversión inmobiliaria o depósitos bancarios con camino a la ciudadanía.",
      icon: <Globe className="w-8 h-8 text-jade-green" />,
      features: [
        "Inversión desde USD 300,000",
        "Residencia permanente",
        "Camino a la ciudadanía",
        "Incluir familia dependiente"
      ],
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
              Nuestros Servicios
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              Soluciones integrales para su inversión y residencia en Panamá
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Panama Golden Key ofrece servicios especializados para inversionistas internacionales que buscan establecerse en Panamá, desde la constitución de empresas hasta la obtención de residencia.
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
                      <span className="font-medium">Conocer más</span>
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
              ¿Por qué elegir Panama Golden Key?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Users className="w-6 h-6 text-jade-green" />,
                  title: "Equipo Trilingüe",
                  description: "Atención en español, inglés y mandarín"
                },
                {
                  icon: <Shield className="w-6 h-6 text-jade-green" />,
                  title: "Seguridad Jurídica",
                  description: "Protección total de sus inversiones"
                },
                {
                  icon: <TrendingUp className="w-6 h-6 text-jade-green" />,
                  title: "Resultados Comprobados",
                  description: "Más de 10 años de experiencia"
                },
                {
                  icon: <Star className="w-6 h-6 text-jade-green" />,
                  title: "Servicio Premium",
                  description: "Atención personalizada y exclusiva"
                }
              ].map((benefit, index) => (
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