
"use client";

import { useTranslations } from "next-intl";
import {
  Globe,
  DollarSign,
  Building,
  CreditCard,
  Home,
  Users,
  CheckCircle,
  Shield,
  Target,
  Lightbulb,
  Handshake,
  FileText,
  Clock,
  ArrowRight,
  Star,
  Briefcase,
  Plane,
  Banknote,
  PieChart,
  Award,
  TrendingUp,
  UserCheck,
  CreditCard as IDCard,
  Scale,
  Calendar,
  MapPin,
  Heart,
  Baby,
} from "lucide-react";

interface VisaInversionistaProps {
  locale?: string;
}

export default function VisaInversionista({ locale }: VisaInversionistaProps) {
  const t = useTranslations("services_page");

  const panamaAdvantages = [
    {
      icon: <MapPin className="w-6 h-6 text-jade-green" />,
      title: "Posición estratégica",
      description: "Puente natural entre América del Norte y del Sur",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-jade-green" />,
      title: "Estabilidad económica",
      description: "Economía dolarizada con crecimiento sostenido",
    },
    {
      icon: <Shield className="w-6 h-6 text-jade-green" />,
      title: "Políticas migratorias amigables",
      description: "Sistema diseñado para atraer inversionistas",
    },
  ];

  const investmentOptions = [
    {
      icon: <Banknote className="w-8 h-8 text-jade-green" />,
      title: "Depósito a Plazo Fijo",
      subtitle: "定期存款",
      amount: "USD 300,000",
      description: "Abrir una cuenta bancaria en un banco panameño con un plazo fijo mínimo de 3 años.",
      requirements: [
        "Cuenta bancaria en banco panameño",
        "Plazo fijo de USD 300,000",
        "Plazo mínimo de 3 años",
        "Fondos de propiedad personal (no de empresa)",
      ],
    },
    {
      icon: <Building className="w-8 h-8 text-jade-green" />,
      title: "Inversión en Bienes Raíces",
      subtitle: "房产投资",
      amount: "USD 300,000",
      description: "Adquirir una propiedad en Panamá con valor mínimo de USD 300,000.",
      requirements: [
        "Propiedad con valor mínimo de USD 300,000",
        "Registrada a tu nombre o sociedad/fundación",
        "Ideal para vivir, rentar o plusvalía",
        "Diversificación patrimonial",
      ],
    },
    {
      icon: <PieChart className="w-8 h-8 text-jade-green" />,
      title: "Opción Mixta",
      subtitle: "混合方式",
      amount: "USD 300,000",
      description: "Combinar propiedad más plazo fijo bancario, siempre que la suma total sea mínimo USD 300,000.",
      requirements: [
        "Combinación de propiedad y depósito",
        "Suma total mínima de USD 300,000",
        "Flexibilidad para diversificar inversión",
        "Opción personalizada según preferencias",
      ],
    },
  ];

  const requirements = [
    {
      icon: <IDCard className="w-5 h-5 text-jade-green" />,
      title: "Pasaporte chino vigente",
      description: "Con vigencia mínima de 6 meses",
    },
    {
      icon: <Scale className="w-5 h-5 text-jade-green" />,
      title: "Antecedentes penales emitidos en China",
      description: "Certificado oficial de antecedentes",
    },
    {
      icon: <Shield className="w-5 h-5 text-jade-green" />,
      title: "Prueba del origen lícito del dinero",
      description: "Documentación que demuestre legalidad de fondos",
    },
    {
      icon: <FileText className="w-5 h-5 text-jade-green" />,
      title: "Documentos financieros de la inversión",
      description: "Propiedad o depósito bancario",
    },
    {
      icon: <UserCheck className="w-5 h-5 text-jade-green" />,
      title: "Fotografías tamaño pasaporte",
      description: "Recientes y en buen estado",
    },
    {
      icon: <FileText className="w-5 h-5 text-jade-green" />,
      title: "Formulario migratorio firmado",
      description: "Documentación oficial completa",
    },
  ];

  const residencyPath = [
    {
      step: "1",
      title: "Residencia provisional",
      duration: "2 años",
      description: "Primera etapa del proceso migratorio",
      icon: <Clock className="w-6 h-6 text-jade-green" />,
    },
    {
      step: "2",
      title: "Residencia permanente",
      duration: "Al finalizar 2 años",
      description: "Transición a residencia definitiva",
      icon: <Award className="w-6 h-6 text-jade-green" />,
    },
    {
      step: "3",
      title: "Ciudadanía panameña",
      duration: "Varios años después",
      description: "Posible acceso al pasaporte panameño",
      icon: <IDCard className="w-6 h-6 text-jade-green" />,
    },
    {
      step: "4",
      title: "Ciudadanía automática para hijos",
      duration: "Al nacer en Panamá",
      description: "Hijos nacidos en Panamá obtienen ciudadanía",
      icon: <Baby className="w-6 h-6 text-jade-green" />,
    },
  ];

  const visaAdvantages = [
    {
      icon: <Users className="w-5 h-5 text-jade-green" />,
      title: "Disponible para ciudadanos chinos sin restricciones",
    },
    {
      icon: <Briefcase className="w-5 h-5 text-jade-green" />,
      title: "No necesitas empleo en Panamá",
    },
    {
      icon: <Shield className="w-5 h-5 text-jade-green" />,
      title: "No requiere patrocinador ni empresa empleadora",
    },
    {
      icon: <DollarSign className="w-5 h-5 text-jade-green" />,
      title: "Inversión segura, flexible y en tu control",
    },
    {
      icon: <Heart className="w-5 h-5 text-jade-green" />,
      title: "Permite traer a tu familia inmediata (cónyuge e hijos)",
    },
    {
      icon: <Target className="w-5 h-5 text-jade-green" />,
      title: "Es una vía realista para obtener residencia permanente y eventualmente ciudadanía",
    },
  ];

  const practicalTips = [
    {
      icon: <Handshake className="w-6 h-6 text-jade-green" />,
      title: "Trabaja con Panama Golden Key",
      description: "Tenemos experiencia con casos de ciudadanos chinos. Profesionales que hablan inglés, mandarín y cantones.",
    },
    {
      icon: <FileText className="w-6 h-6 text-jade-green" />,
      title: "Prepara documentación con anticipación",
      description: "Ten toda tu documentación china apostillada con anticipación (este paso toma tiempo en China).",
    },
    {
      icon: <Plane className="w-6 h-6 text-jade-green" />,
      title: "Planifica tu viaje a Panamá",
      description: "Obtén la visa de turista y prepárate para firmar documentos y realizar trámites presenciales (te acompañamos en ese proceso).",
    },
  ];

  const panamaBenefits = [
    {
      icon: <Shield className="w-6 h-6 text-jade-green" />,
      title: "Sistema migratorio amigable",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-jade-green" />,
      title: "Entorno económico estable",
    },
    {
      icon: <Users className="w-6 h-6 text-jade-green" />,
      title: "Comunidad china grande y bien establecida",
    },
    {
      icon: <MapPin className="w-6 h-6 text-jade-green" />,
      title: "Cercanía con Estados Unidos y América del Sur",
    },
    {
      icon: <Target className="w-6 h-6 text-jade-green" />,
      title: "Camino claro hacia la residencia definitiva y ciudadanía",
    },
  ];

  return (
    <>
      <section id="visa-inversionista" className="py-16 bg-gradient-to-br from-jade-green/10 to-white scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <Globe className="w-16 h-16 text-jade-green mx-auto mb-4" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-jade-green mb-6">
              Visa por Solvencia Económica en Panamá
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              Guía Completa para Ciudadanos Chinos
            </h2>
            <p className="text-xl text-gray-600 mb-4">
              巴拿马经济实力签证
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                En los últimos años, Panamá se ha convertido en uno de los destinos más atractivos para ciudadanos chinos que desean vivir, invertir o establecer una segunda residencia en América Latina. Su posición estratégica, estabilidad económica y políticas migratorias amigables lo convierten en una excelente opción para quienes buscan un nuevo comienzo fuera de Asia.
              </p>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mt-4">
                Entre todas las opciones, una de las más populares es la Visa por Solvencia Económica, conocida por muchos inversionistas chinos como la 经济实力签证. Hoy te explico de manera sencilla cómo funciona, qué requisitos tiene y por qué es una de las vías más seguras para obtener residencia en Panamá.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {panamaAdvantages.map((advantage, index) => (
                <div key={index} className="text-center p-6 bg-jade-green/5 rounded-lg hover:bg-jade-green/10 transition-colors">
                  <div className="flex justify-center mb-4">
                    {advantage.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{advantage.title}</h3>
                  <p className="text-gray-600 text-sm">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What is Visa Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-jade-green mb-12 text-center">
              ¿Qué es la Visa por Solvencia Económica？
            </h2>
            <p className="text-xl text-gray-600 mb-4 text-center">
              经济实力签证详解
            </p>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Es un tipo de residencia panameña diseñada para personas que pueden demostrar capacidad económica mediante una inversión.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Lo más atractivo es que no necesitas conseguir un trabajo, no requiere nacionalidades específicas y no impone cupos limitados. Es decir, los ciudadanos chinos califican sin restricciones.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Esta visa te otorga primero una residencia provisional por 2 años, y luego puedes solicitar la residencia permanente. Tras cinco años más de residencia continua, es posible acceder a la ciudadanía panameña y obtener el pasaporte panameño que permite viajar sin visa a más de 142 incluyendo toda Europa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Options Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-jade-green mb-12 text-center">
              Modalidades de Inversión（投资方式）
            </h2>
            <p className="text-gray-600 mb-8 text-center max-w-4xl mx-auto">
              La Visa por Solvencia Económica ofrece tres caminos, muy flexibles, dependiendo de tu preferencia como inversor.
            </p>

            <div className="space-y-8">
              {investmentOptions.map((option, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      {option.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-4">
                        <h3 className="text-2xl font-bold text-gray-800 mr-4">{option.title}</h3>
                        <span className="text-lg text-gray-600 font-medium">{option.subtitle}</span>
                      </div>
                      <div className="bg-jade-green text-white px-4 py-2 rounded-lg inline-block mb-4">
                        <span className="text-xl font-bold">{option.amount}</span>
                      </div>
                      <p className="text-gray-600 mb-6 leading-relaxed">{option.description}</p>
                      <div className="space-y-2">
                        {option.requirements.map((req, reqIndex) => (
                          <div key={reqIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-jade-green flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{req}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-jade-green mb-12 text-center">
              Requisitos principales para ciudadanos chinos（中国公民需要的主要文件）
            </h2>
            <p className="text-gray-600 mb-8 text-center max-w-4xl mx-auto">
              Aunque el proceso es bastante sencillo, Panamá exige ciertos documentos básicos:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {requirements.map((req, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {req.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">{req.title}</h4>
                      <p className="text-gray-600 text-sm">{req.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-blue-50 p-6 rounded-lg">
              <p className="text-gray-700 text-center">
                <strong>Nota importante:</strong> Todos los documentos chinos deben venir apostillados o autenticados por el Consulado panameño.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Residency Path Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-jade-green mb-12 text-center">
              Camino hacia la Residencia Permanente y la Ciudadanía（获得永久居留与国籍的途径）
            </h2>

            <div className="space-y-6">
              {residencyPath.map((step, index) => (
                <div key={index} className="flex items-start space-x-6 p-6 bg-jade-green/5 rounded-lg hover:bg-jade-green/10 transition-colors">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-jade-green text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <div className="mr-3">{step.icon}</div>
                      <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
                      <span className="ml-3 text-jade-green font-medium">{step.duration}</span>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gradient-to-r from-jade-green/10 to-blue-50 p-6 rounded-lg">
              <p className="text-gray-700 text-center">
                <strong>Para familias chinas que desean una "puerta abierta" al continente americano, este camino es particularmente atractivo.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visa Advantages Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-jade-green mb-12 text-center">
              Ventajas de la Visa por Solvencia Económica（签证优势）
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {visaAdvantages.map((advantage, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex-shrink-0">
                    {advantage.icon}
                  </div>
                  <div className="flex items-start space-x-2">
                    <Star className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-sm">{advantage.title}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-blue-50 p-6 rounded-lg">
              <p className="text-gray-700 text-sm leading-relaxed">
                En comparación con otras visas panameñas, esta ofrece menos costes gubernamentales en comparación con la Golden Visa (Visa de Inversionista Calificado), pero el camino al pasaporte es más largo por los 2 años de residencia provisional iniciales versus la residencia directa que otorga la Golden Visa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Tips Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-jade-green mb-12 text-center">
              Consejos Prácticos antes de Iniciar（申请前建议）
            </h2>

            <div className="space-y-6">
              {practicalTips.map((tip, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {tip.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">{tip.title}</h3>
                      <p className="text-gray-600">{tip.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-jade-green mb-12 text-center">
              Panamá es una excelente opción para ciudadanos chinos
            </h2>
            <p className="text-lg text-gray-600 mb-8 text-center max-w-4xl mx-auto leading-relaxed">
              La Visa por Solvencia Económica es una puerta abierta para quienes buscan estabilidad, movilidad internacional, oportunidades de inversión y una vía segura hacia la residencia permanente en América Latina.
            </p>
            <p className="text-lg text-gray-600 mb-8 text-center max-w-4xl mx-auto leading-relaxed">
              Si estás buscando un plan de emigración estratégico, Panamá ofrece:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {panamaBenefits.map((benefit, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <p className="text-gray-700 font-medium">{benefit.title}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-jade-green to-jade-green/90 p-8 rounded-lg text-white text-center">
              <h3 className="text-2xl font-bold mb-4">
                Perfecto para familias, inversionistas, empresarios y profesionales chinos
              </h3>
              <p className="text-lg mb-6">
                que desean expandir sus opciones en el exterior.
              </p>
              <div className="flex items-center justify-center space-x-2">
                <Handshake className="w-6 h-6" />
                <span className="font-semibold">Comienza tu proceso hoy</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}