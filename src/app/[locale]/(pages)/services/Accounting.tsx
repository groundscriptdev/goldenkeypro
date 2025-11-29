"use client";

import { useTranslations } from "next-intl";
import {
  Calculator,
  FileText,
  TrendingUp,
  Shield,
  Globe,
  CheckCircle,
  Building,
  Users,
  BookOpen,
  PieChart,
  Briefcase,
  DollarSign,
  Scale,
  Clock,
  ArrowRight,
  Target,
  Lightbulb,
  Handshake,
  BarChart3,
  Receipt,
  CreditCard,
  Banknote,
  FileCheck,
  ClipboardList,
  Calendar,
  Award,
  Star,
} from "lucide-react";

interface AccountingProps {
  locale?: string;
}

export default function Accounting({ locale }: AccountingProps) {
  const t = useTranslations("services_page");

  const accountingFeatures = [
    {
      icon: <Globe className="w-6 h-6 text-jade-green" />,
      title: "Principio de territorialidad fiscal",
      description: "Solo se grava la renta generada dentro del territorio panameño, permitiendo una planificación eficiente para operaciones internacionales.",
    },
    {
      icon: <Scale className="w-6 h-6 text-jade-green" />,
      title: "Adopción de estándares internacionales",
      description: "Las normas contables panameñas siguen los principios de las NIIF (Normas Internacionales de Información Financiera), facilitando la consolidación con estructuras globales.",
    },
    {
      icon: <Target className="w-6 h-6 text-jade-green" />,
      title: "Requisitos diferenciados",
      description: "La intensidad de las obligaciones contables varía según el perfil operativo de la sociedad, siendo más ligeras para entidades holding o de inversión pasiva.",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-jade-green" />,
      title: "Enfoque en sustancia económica",
      description: "El sistema privilegia la realidad económica de las transacciones sobre su forma jurídica, permitiendo estructuras eficientes pero sólidas.",
    },
  ];

  const operationalRequirements = [
    {
      icon: <FileText className="w-5 h-5 text-jade-green" />,
      title: "Contabilidad completa según NIIF",
    },
    {
      icon: <Receipt className="w-5 h-5 text-jade-green" />,
      title: "Declaración anual de rentas",
    },
    {
      icon: <DollarSign className="w-5 h-5 text-jade-green" />,
      title: "Devolución de impuestos",
    },
    {
      icon: <PieChart className="w-5 h-5 text-jade-green" />,
      title: "Informes de dividendos y participación de utilidades",
    },
    {
      icon: <Users className="w-5 h-5 text-jade-green" />,
      title: "Registros de nómina (planilla) y obligaciones laborales",
    },
    {
      icon: <Building className="w-5 h-5 text-jade-green" />,
      title: "Informes para tasas municipales y patentes comerciales",
    },
  ];

  const holdingRequirements = [
    {
      icon: <BookOpen className="w-5 h-5 text-jade-green" />,
      title: "Registros contables básicos de activos y transacciones",
    },
    {
      icon: <FileCheck className="w-5 h-5 text-jade-green" />,
      title: "Actas corporativas de operaciones significativas",
    },
    {
      icon: <BarChart3 className="w-5 h-5 text-jade-green" />,
      title: "Informes de sustancia económica (para jurisdicciones que lo requieran)",
    },
    {
      icon: <ClipboardList className="w-5 h-5 text-jade-green" />,
      title: "Declaraciones informativas (sin necesariamente generar impuesto)",
    },
  ];

  const processSteps = [
    {
      step: "1",
      title: "Evaluación inicial",
      description: "Análisis de la estructura y operaciones de su sociedad para determinar requisitos específicos.",
      icon: <Target className="w-6 h-6 text-jade-green" />,
    },
    {
      step: "2",
      title: "Diseño del sistema contable",
      description: "Configuración de catálogo de cuentas y procesos adaptados a su actividad.",
      icon: <Calculator className="w-6 h-6 text-jade-green" />,
    },
    {
      step: "3",
      title: "Recolección documental periódica",
      description: "Sistemas seguros para transmisión de comprobantes y documentación relevante.",
      icon: <FileText className="w-6 h-6 text-jade-green" />,
    },
    {
      step: "4",
      title: "Procesamiento y clasificación",
      description: "Registro contable con criterios fiscales optimizados.",
      icon: <BarChart3 className="w-6 h-6 text-jade-green" />,
    },
    {
      step: "5",
      title: "Generación de reportes",
      description: "Estados financieros mensuales, trimestrales o anuales según necesidades.",
      icon: <TrendingUp className="w-6 h-6 text-jade-green" />,
    },
    {
      step: "6",
      title: "Preparación de declaraciones",
      description: "Gestión de obligaciones fiscales territoriales y municipales aplicables.",
      icon: <Receipt className="w-6 h-6 text-jade-green" />,
    },
    {
      step: "7",
      title: "Reuniones de revisión",
      description: "Sesiones periódicas para analizar resultados y planificar estrategias.",
      icon: <Users className="w-6 h-6 text-jade-green" />,
    },
  ];

  const requiredDocumentation = [
    {
      icon: <CreditCard className="w-5 h-5 text-jade-green" />,
      title: "Extractos bancarios de cuentas corporativas",
    },
    {
      icon: <Receipt className="w-5 h-5 text-jade-green" />,
      title: "Facturas de gastos operativos",
    },
    {
      icon: <FileText className="w-5 h-5 text-jade-green" />,
      title: "Contratos de prestación de servicios o compraventa",
    },
    {
      icon: <Briefcase className="w-5 h-5 text-jade-green" />,
      title: "Actas de junta directiva para decisiones significativas",
    },
    {
      icon: <ArrowRight className="w-5 h-5 text-jade-green" />,
      title: "Documentación de transferencias entre partes relacionadas",
    },
    {
      icon: <BarChart3 className="w-5 h-5 text-jade-green" />,
      title: "Informes de valoración de activos cuando aplique",
    },
  ];

  return (
    <>
      <section id="accounting" className="py-16 bg-gradient-to-br from-jade-green/10 to-white scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <Calculator className="w-16 h-16 text-jade-green mx-auto mb-4" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-jade-green mb-6">
              Servicios de Contabilidad para Sociedades Anónimas en Panamá
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              Guía Estratégica para Inversionistas, Empresarios y Emprendedores Extranjeros
            </h2>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                En el dinámico panorama empresarial internacional, Panamá destaca no solo por su canal emblemático, sino por ofrecer un ecosistema de negocios que combina flexibilidad regulatoria con cumplimiento de estándares globales. Para quienes han dado el paso estratégico de constituir una sociedad anónima panameña, el manejo contable no representa una simple obligación formal, sino una pieza fundamental en la optimización de su inversión.
              </p>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mt-4">
                Como firma especializada en derecho corporativo y servicios complementarios, compartimos esta guía esencial sobre los servicios contables para sociedades anónimas en Panamá, diseñada especialmente para inversionistas, empresarios y emprendedores internacionales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accounting Framework Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-jade-green mb-12 text-center">
              La contabilidad en Panamá: Un equilibrio entre flexibilidad y cumplimiento
            </h2>
            <p className="text-gray-600 mb-8 text-center max-w-4xl mx-auto">
              El marco contable panameño ofrece características distintivas que lo posicionan favorablemente en comparación con otras jurisdicciones:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {accountingFeatures.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">{feature.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Obligations by Profile Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-jade-green mb-12 text-center">
              Obligaciones contables según el perfil de su sociedad
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Operational Societies */}
              <div className="bg-gradient-to-br from-jade-green/10 to-white p-8 rounded-lg">
                <div className="flex items-center mb-6">
                  <Building className="w-8 h-8 text-jade-green mr-3" />
                  <h3 className="text-xl font-bold text-gray-800">
                    Para sociedades operativas en Panamá:
                  </h3>
                </div>
                <div className="space-y-4">
                  {operationalRequirements.map((req, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        {req.icon}
                      </div>
                      <p className="text-gray-700 text-sm">{req.title}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Holding/International Investment */}
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg">
                <div className="flex items-center mb-6">
                  <Globe className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-800">
                    Para sociedades holding o de inversión internacional:
                  </h3>
                </div>
                <div className="space-y-4">
                  {holdingRequirements.map((req, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        {req.icon}
                      </div>
                      <p className="text-gray-700 text-sm">{req.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-jade-green mb-12 text-center">
              El proceso práctico: Simplicidad y eficiencia
            </h2>
            <p className="text-gray-600 mb-8 text-center max-w-4xl mx-auto">
              Hemos refinado nuestro proceso para minimizar la carga administrativa para usted:
            </p>

            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-jade-green text-white rounded-full flex items-center justify-center font-bold">
                        {step.step}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-3">
                        <div className="mr-3">{step.icon}</div>
                        <h3 className="text-lg font-semibold text-gray-800">{step.title}</h3>
                      </div>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-jade-green mb-12 text-center">
              Documentación requerida para gestión contable eficiente
            </h2>
            <p className="text-gray-600 mb-8 text-center max-w-4xl mx-auto">
              Para mantener registros óptimos, necesitaremos:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {requiredDocumentation.map((doc, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-jade-green/5 rounded-lg hover:bg-jade-green/10 transition-colors">
                  <div className="flex-shrink-0 mt-1">
                    {doc.icon}
                  </div>
                  <p className="text-gray-700 text-sm">{doc.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-jade-green mb-6">
              Próximos pasos: Hacia una gestión contable optimizada
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Le invitamos a una consulta inicial donde evaluaremos las necesidades específicas de su sociedad panameña y diseñaremos un programa contable a medida que maximice beneficios y minimice cargas administrativas.
            </p>
            
            <div className="bg-gradient-to-r from-jade-green to-jade-green/90 p-8 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-4">
                La contabilidad de su sociedad panameña puede y debe ser más que un centro de costos
              </h3>
              <p className="text-lg mb-6">
                Una herramienta estratégica para potenciar su inversión internacional. Permítanos mostrarle cómo.
              </p>
              <div className="flex items-center justify-center space-x-2">
                <Handshake className="w-6 h-6" />
                <span className="font-semibold">Consulte con nuestros expertos hoy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm text-gray-600 italic">
              Este artículo tiene carácter informativo y no constituye asesoramiento profesional. Cada situación requiere análisis individualizado considerando circunstancias particulares y normativa vigente.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}