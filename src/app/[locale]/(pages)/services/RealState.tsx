"use client";

import { useTranslations } from "next-intl";
import {
  Building,
  DollarSign,
  Home,
  TrendingUp,
  Shield,
  Users,
  Globe,
  CheckCircle,
  Star,
  MapPin,
  Award,
  Briefcase,
  Target,
  Lightbulb,
  Handshake,
  FileText,
  Clock,
  ArrowRight,
} from "lucide-react";

interface RealStateProps {
  locale?: string;
}

export default function RealState({ locale }: RealStateProps) {
  const t = useTranslations("services_page");

  const luxuryAreas = [
    {
      name: "Punta Pacífica",
      description: "Torres exclusivas frente al mar con rentas elevadas y constante plusvalía",
      icon: <Star className="w-5 h-5 text-jade-green" />,
    },
    {
      name: "Santa María Golf & Country Club",
      description: "Villas y condominios de lujo con campo de golf, alta demanda de ejecutivos",
      icon: <Globe className="w-5 h-5 text-jade-green" />,
    },
    {
      name: "Costa del Este",
      description: "Sede regional de multinacionales, excelente opción para inversión con alquiler continuo",
      icon: <Building className="w-5 h-5 text-jade-green" />,
    },
  ];

  const midRangeAreas = [
    {
      name: "San Francisco",
      description: "Plusvalía comprobada y excelente ubicación",
      icon: <TrendingUp className="w-5 h-5 text-jade-green" />,
    },
    {
      name: "Avenida Balboa",
      description: "Vistas y ubicación inmejorable en el corazón de la ciudad",
      icon: <MapPin className="w-5 h-5 text-jade-green" />,
    },
    {
      name: "Amador Causeway",
      description: "Potencial turístico y residencial con vistas impresionantes",
      icon: <Home className="w-5 h-5 text-jade-green" />,
    },
    {
      name: "Panamá Oeste",
      description: "Nuevas infraestructuras y comunidades planificadas en crecimiento",
      icon: <Building className="w-5 h-5 text-jade-green" />,
    },
  ];

  const megaProjects = [
    {
      name: "Línea 3 del Metro",
      description: "Conexión directa con Panamá Oeste, aumentando el valor de propiedades en la zona",
      icon: <Target className="w-6 h-6 text-jade-green" />,
    },
    {
      name: "Cuarto Puente sobre el Canal",
      description: "Nueva conexión que mejorará la accesibilidad y valor del suelo",
      icon: <Bridge className="w-6 h-6 text-jade-green" />,
    },
    {
      name: "Nuevas carreteras y ampliación costera",
      description: "Mejora de infraestructura que impulsará el desarrollo inmobiliario",
      icon: <ArrowRight className="w-6 h-6 text-jade-green" />,
    },
    {
      name: "Proyecto nacional de tren",
      description: "Planificado para conectar todo el país, generando nuevas oportunidades",
      icon: <Train className="w-6 h-6 text-jade-green" />,
    },
  ];

  const legalAdvantages = [
    {
      title: "Seguridad Jurídica",
      description: "El Registro Público protege la propiedad de forma transparente",
      icon: <Shield className="w-6 h-6 text-jade-green" />,
    },
    {
      title: "Beneficios Fiscales",
      description: "Exoneración del impuesto de inmueble para nuevas construcciones",
      icon: <DollarSign className="w-6 h-6 text-jade-green" />,
    },
    {
      title: "Contratos claros",
      description: "Cumplimiento garantizado ideal para inversionistas extranjeros",
      icon: <FileText className="w-6 h-6 text-jade-green" />,
    },
  ];

  const companyAdvantages = [
    {
      title: "Equipo Trilingüe Especializado",
      description: "Coordinadores nativos en mandarín que facilitan la comunicación en cada etapa",
      icon: <Users className="w-6 h-6 text-jade-green" />,
    },
    {
      title: "Comprensión profunda del cliente chino",
      description: "Conocimiento de regulaciones sobre salida de capital y estructuración patrimonial",
      icon: <Lightbulb className="w-6 h-6 text-jade-green" />,
    },
    {
      title: "Acceso a oportunidades únicas",
      description: "Proyectos exclusivos antes de lanzamiento y propiedades aptas para programas migratorios",
      icon: <Star className="w-6 h-6 text-jade-green" />,
    },
    {
      title: "Acompañamiento integral llave en mano",
      description: "Desde el análisis hasta la integración a comunidades locales",
      icon: <Handshake className="w-6 h-6 text-jade-green" />,
    },
  ];

  return (
    <>
      <section id="real-state" className="py-16 bg-gradient-to-br from-jade-green/10 to-white scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <Building className="w-16 h-16 text-jade-green mx-auto mb-4" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-jade-green mb-6">
              BIENES RAÍCES
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              Panama Golden Key | Guía Definitiva para Inversionistas Chinos
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Residencia a través de inversión inmobiliaria | Asesoría para ciudadanos chinos | Compra de propiedades en Panamá
            </p>
          </div>
        </div>
      </section>

      {/* Why Panama Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-jade-green mb-6">
                ¿Por qué Panamá es la nueva tendencia entre inversionistas chinos?
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                En los últimos años, Panamá se ha consolidado como uno de los destinos más atractivos para la inversión internacional, especialmente entre inversionistas y familias de origen chino que buscan:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                { icon: <TrendingUp className="w-8 h-8" />, text: "Diversificación de activos" },
                { icon: <Home className="w-8 h-8" />, text: "Propiedades estables con buena rentabilidad" },
                { icon: <Shield className="w-8 h-8" />, text: "Un segundo hogar en un país seguro" },
                { icon: <FileText className="w-8 h-8" />, text: "Residencia a través de inversión" },
                { icon: <Globe className="w-8 h-8" />, text: "Acceso futuro a ciudadanía panameña" },
                { icon: <Award className="w-8 h-8" />, text: "Calidad de vida excepcional" },
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-4 p-6 bg-jade-green/5 rounded-lg hover:bg-jade-green/10 transition-colors">
                  <div className="flex-shrink-0 text-jade-green">
                    {item.icon}
                  </div>
                  <p className="text-gray-700 font-medium">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-jade-green mb-4 text-center">
                Panama Golden Key
              </h3>
              <p className="text-center text-gray-700 mb-6">
                Líder en Panamá especializada en movilidad internacional, reubicación y adquisición de bienes raíces para inversionistas chinos. Nuestro servicio combina:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  "Asesoría inmobiliaria profesional",
                  "Consultoría migratoria estratégica",
                  "Equipo trilingüe (mandarín – inglés – español)",
                  "Acompañamiento de principio a fin",
                ].map((service, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-jade-green flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Opportunities Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-jade-green mb-12 text-center">
              1. Oportunidades en el Mercado Inmobiliario de Panamá
            </h2>

            {/* Luxury Segment */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                A. Segmento de Lujo: Panamá como centro residencial premium en América Latina
              </h3>
              <p className="text-gray-600 mb-8">
                Áreas que destacan por su alta demanda y valor sostenible:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {luxuryAreas.map((area, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex items-center mb-4">
                      <div className="mr-3">{area.icon}</div>
                      <h4 className="text-lg font-semibold text-gray-800">{area.name}</h4>
                    </div>
                    <p className="text-gray-600 text-sm">{area.description}</p>
                  </div>
                ))}
              </div>

              <div className="bg-jade-green/10 p-6 rounded-lg">
                <h4 className="font-semibold text-jade-green mb-3">Ventajas para el inversionista chino:</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {[
                    "Rentabilidad anual superior al 5%",
                    "Estabilidad del dólar estadounidense",
                    "Propiedades ideales para programas migratorios",
                  ].map((advantage, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-jade-green flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{advantage}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Mid Range Segment */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                B. Segmento Medio: El motor del mercado panameño
              </h3>
              <p className="text-gray-600 mb-8">
                Zonas estratégicas con fuerte crecimiento:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {midRangeAreas.map((area, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex items-center mb-4">
                      <div className="mr-3">{area.icon}</div>
                      <h4 className="text-lg font-semibold text-gray-800">{area.name}</h4>
                    </div>
                    <p className="text-gray-600 text-sm">{area.description}</p>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-gray-700">
                  <strong>Rango de inversión típico:</strong> entre $150,000 y $350,000, ideal para inversionistas jóvenes y familias que buscan combinar vivienda e inversión.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Residency Through Investment Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-jade-green mb-12 text-center">
              2. Cómo la inversión inmobiliaria permite obtener la residencia panameña
            </h2>

            <p className="text-gray-600 mb-8 text-center max-w-4xl mx-auto">
              Panamá ofrece diversos programas migratorios para quienes invierten en bienes raíces, siendo los más utilizados por ciudadanos chinos:
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-jade-green/10 to-white p-8 rounded-lg">
                <h3 className="text-xl font-bold text-jade-green mb-4">
                  A. Visa de Inversionista Calificado (Qualified Investor Program)
                </h3>
                <p className="text-gray-600 mb-4">El camino más rápido hacia la residencia panameña.</p>
                <div className="space-y-3">
                  {[
                    "Inversión mínima: USD 300,000 en bienes raíces",
                    "Aprobación rápida entre 30 y 90 días",
                    "Obtención de residencia permanente desde el primer momento",
                    "Posibilidad de incluir a dependientes (esposa/o, hijos, padres)",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-jade-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg">
                <h3 className="text-xl font-bold text-blue-800 mb-4">
                  B. Ventajas de obtener residencia en Panamá para ciudadanos chinos
                </h3>
                <div className="space-y-3">
                  {[
                    "Estabilidad económica en USD",
                    "Entorno seguro para mudanza familiar",
                    "Acceso a escuelas internacionales",
                    "Facilita viajes globales",
                    "Plataforma ideal para negocios en América Latina",
                  ].map((advantage, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <Star className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{advantage}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mega Projects Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-jade-green mb-12 text-center">
              3. Megaproyectos que impulsan el incremento del valor inmobiliario
            </h2>

            <p className="text-gray-600 mb-8 text-center max-w-4xl mx-auto">
              Panamá está ejecutando obras que transformarán el país y elevarán el valor de las propiedades, especialmente en zonas estratégicas:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {megaProjects.map((project, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {project.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">{project.name}</h4>
                      <p className="text-gray-600 text-sm">{project.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-yellow-50 p-6 rounded-lg">
              <p className="text-gray-700 text-center">
                <strong>Estos desarrollos generan incrementos significativos en la plusvalía, un punto clave para los inversionistas chinos que buscan retornos seguros.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Legal and Tax Advantages Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-jade-green mb-12 text-center">
              4. Ventajas legales y fiscales para inversionistas extranjeros
            </h2>

            <p className="text-gray-600 mb-8 text-center max-w-4xl mx-auto">
              Panamá ofrece un marco jurídico seguro y atractivo:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {legalAdvantages.map((advantage, index) => (
                <div key={index} className="text-center p-6 bg-jade-green/5 rounded-lg hover:bg-jade-green/10 transition-colors">
                  <div className="flex justify-center mb-4">
                    {advantage.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{advantage.title}</h3>
                  <p className="text-gray-600 text-sm">{advantage.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-green-50 p-6 rounded-lg">
              <p className="text-gray-700 text-center">
                <strong>Ideal para inversionistas extranjeros que requieren seguridad total.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Panama Golden Key Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-jade-green mb-12 text-center">
              5. Por qué los inversionistas chinos eligen Panama Golden Key
            </h2>

            <p className="text-gray-600 mb-8 text-center max-w-4xl mx-auto">
              Somos una firma especializada en atender exclusivamente al mercado chino de alto y medio patrimonio. Nuestro enfoque:
            </p>

            <div className="space-y-8">
              {companyAdvantages.map((advantage, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {advantage.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">{advantage.title}</h3>
                      <p className="text-gray-600">{advantage.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investment Strategy Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-jade-green mb-12 text-center">
              6. Estrategia de inversión recomendada para ciudadanos chinos
            </h2>

            <p className="text-gray-600 mb-8 text-center">
              Panama Golden Key recomienda seguir una estrategia profesional basada en el análisis del mercado panameño:
            </p>

            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Identificar el objetivo principal",
                  description: "residencia, rentabilidad, segunda vivienda, o diversificación.",
                },
                {
                  step: "2",
                  title: "Seleccionar la zona adecuada",
                  description: "lujo, medio, o zonas emergentes impulsadas por infraestructura.",
                },
                {
                  step: "3",
                  title: "Realizar due diligence completo",
                  description: "títulos, impuestos, gravámenes, historial del proyecto.",
                },
                {
                  step: "4",
                  title: "Gestión poscompra",
                  description: "administración, alquiler, mantenimiento y revalorización.",
                },
              ].map((step, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-jade-green/5 rounded-lg">
                  <div className="flex-shrink-0 w-8 h-8 bg-jade-green text-white rounded-full flex items-center justify-center font-bold">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{step.title}</h3>
                    <p className="text-gray-600">– {step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-br from-jade-green to-jade-green/90 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Panamá es el próximo destino estratégico para el inversionista chino moderno
            </h2>
            <p className="text-xl mb-8">
              Panamá combina:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                "Estabilidad política",
                "Economía dolarizada",
                "Mercado inmobiliario sólido",
                "Programas migratorios rápidos",
                "Excelente calidad de vida",
                "Seguridad para familias",
              ].map((feature, index) => (
                <div key={index} className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm text-jade-green-800">{feature}</span>
                </div>
              ))}
            </div>
            <div className="bg-white/10 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">
                Panama Golden Key es su socio de confianza
              </h3>
              <p className="text-lg">
                Para acompañarlo en cada etapa del proceso, desde la selección del inmueble hasta la obtención de su residencia panameña.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Iconos adicionales que necesito importar
const Bridge = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const Train = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);