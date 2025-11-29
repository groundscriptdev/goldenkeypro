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

interface GoldenVisaProps {
  locale?: string;
}

export default function GoldenVisa({ locale }: GoldenVisaProps) {
  const t = useTranslations("golden_visa");

  const strategicAdvantages = [
    {
      icon: <MapPin className="w-6 h-6 text-jade-green" />,
      title: "Puente Estratégico",
      description: "Conexión natural entre dos océanos y tres continentes",
    },
    {
      icon: <Globe className="w-6 h-6 text-jade-green" />,
      title: "Acceso Hemisférico",
      description: "Mercado dinámico de más de 625 millones de consumidores",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-jade-green" />,
      title: "Crecimiento Sostenido",
      description: "Economía dolarizada con desarrollo acelerado",
    },
  ];

  const exclusivePrivileges = [
    {
      icon: <IDCard className="w-8 h-8 text-jade-green" />,
      title: "Residencia Permanente Inmediata",
      description: "Sin períodos probatorios ni incertidumbres temporales",
    },
    {
      icon: <Clock className="w-8 h-8 text-jade-green" />,
      title: "Vía Expedita hacia la Ciudadanía",
      description: "Naturalización garantizada en 5 años con pasaporte que ofrece acceso libre de visa a 142 destinos globales",
    },
    {
      icon: <Users className="w-8 h-8 text-jade-green" />,
      title: "Inclusión Familiar Integral",
      description: "Cobertura completa para cónyuge, hijos dependientes y padres bajo tutela",
    },
    {
      icon: <Plane className="w-8 h-8 text-jade-green" />,
      title: "Flexibilidad de Residencia Física",
      description: "Diseñado para empresarios que mantienen operaciones asiáticas mientras expanden su presencia americana",
    },
    {
      icon: <Shield className="w-8 h-8 text-jade-green" />,
      title: "Sin Restricciones de Nacionalidad",
      description: "Programa completamente abierto para ciudadanos chinos de cualquier provincia",
    },
  ];

  const investmentOptions = [
    {
      icon: <Building className="w-8 h-8 text-jade-green" />,
      title: "Inmobiliaria Premium",
      amount: "USD $300,000",
      description: "En propiedades de alta valorización",
      features: [
        "Propiedades con potencial de plusvalía",
        "Ubicaciones estratégicas en zonas de desarrollo",
        "Opciones residenciales y comerciales",
        "Gestión profesional incluida",
      ],
    },
    {
      icon: <Banknote className="w-8 h-8 text-jade-green" />,
      title: "Depósito Bancario Estratégico",
      amount: "USD $700,000",
      description: "Por 3 años en instituciones Tier 1",
      features: [
        "Instituciones bancarias de primer nivel",
        "Tasas competitivas garantizadas",
        "Capital seguro y protegido",
        "Liquidez al vencimiento",
      ],
    },
    {
      icon: <PieChart className="w-8 h-8 text-jade-green" />,
      title: "Portafolio de Valores",
      amount: "USD $500,000",
      description: "En instrumentos bursátiles panameños",
      features: [
        "Diversificación automática",
        "Gestión profesional de activos",
        "Potencial de rendimiento superior",
        "Liquidez y flexibilidad",
      ],
    },
  ];

  const processSteps = [
    {
      step: "1",
      title: "Consulta estratégica inicial",
      description: "Evaluación personalizada y diseño de estrategia",
      icon: <Lightbulb className="w-6 h-6 text-jade-green" />,
    },
    {
      step: "2",
      title: "Estructuración óptima de la inversión",
      description: "Identificación de la alternativa ideal según sus objetivos",
      icon: <Target className="w-6 h-6 text-jade-green" />,
    },
    {
      step: "3",
      title: "Preparación documental",
      description: "Asistencia completa en la recopilación y legalización de documentos",
      icon: <FileText className="w-6 h-6 text-jade-green" />,
    },
    {
      step: "4",
      title: "Transacción segura",
      description: "Supervisión legal de la inversión calificada",
      icon: <Shield className="w-6 h-6 text-jade-green" />,
    },
    {
      step: "5",
      title: "Presentación migratoria",
      description: "Gestión directa ante el Servicio Nacional de Migración",
      icon: <Briefcase className="w-6 h-6 text-jade-green" />,
    },
    {
      step: "6",
      title: "Obtención de residencia temporal",
      description: "Mientras se procesa la permanente",
      icon: <Calendar className="w-6 h-6 text-jade-green" />,
    },
    {
      step: "7",
      title: "Seguimiento hasta carné definitivo",
      description: "Generalmente en 3-4 meses",
      icon: <Award className="w-6 h-6 text-jade-green" />,
    },
  ];

  const requiredDocumentation = [
    {
      icon: <IDCard className="w-5 h-5 text-jade-green" />,
      title: "Pasaporte vigente",
      description: "Con mínimo 6 meses de validez",
    },
    {
      icon: <Scale className="w-5 h-5 text-jade-green" />,
      title: "Certificación de antecedentes penales",
      description: "De su país de origen (apostillada)",
    },
    {
      icon: <FileText className="w-5 h-5 text-jade-green" />,
      title: "Documentación de inversión",
      description: "Comprobante de la inversión calificada",
    },
    {
      icon: <Heart className="w-5 h-5 text-jade-green" />,
      title: "Certificado médico",
      description: "Emitido por médico panameño",
    },
    {
      icon: <DollarSign className="w-5 h-5 text-jade-green" />,
      title: "Declaración jurada",
      description: "De medios económicos",
    },
    {
      icon: <UserCheck className="w-5 h-5 text-jade-green" />,
      title: "Fotografías",
      description: "Cinco fotografías tamaño carné",
    },
    {
      icon: <Handshake className="w-5 h-5 text-jade-green" />,
      title: "Poder legal",
      description: "A favor de nuestro despacho",
    },
  ];

  const differentialValue = [
    {
      icon: <Target className="w-6 h-6 text-jade-green" />,
      title: "Análisis pre-calificatorio",
      description: "Evaluamos su elegibilidad antes de iniciar el proceso",
    },
    {
      icon: <Shield className="w-6 h-6 text-jade-green" />,
      title: "Diligencia debida en inversiones",
      description: "Verificación exhaustiva de oportunidades de inversión",
    },
    {
      icon: <Users className="w-6 h-6 text-jade-green" />,
      title: "Coordinación multidisciplinaria",
      description: "Colaboración con asesores fiscales, inmobiliarios y financieros",
    },
    {
      icon: <Home className="w-6 h-6 text-jade-green" />,
      title: "Gestión integral post-residencia",
      description: "Desde apertura bancaria hasta educación internacional",
    },
    {
      icon: <Award className="w-6 h-6 text-jade-green" />,
      title: "Seguimiento para ciudadanía",
      description: "Planificación estratégica para naturalización",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-jade-green-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <Globe className="w-16 h-16 text-amber-200 mx-auto mb-4" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              GOLDEN VISA
            </h1>
            <h2 className="text-2xl md:text-3xl font-light mb-4 text-white">
              La Llave Dorada hacia la Libertad Global
            </h2>
            <p className="text-xl md:text-2xl mb-4 text-amber-100">
              Panamá como Puerta de Entrada Estratégica a las Américas
            </p>
            <p className="text-lg font-medium text-amber-200">
              Para Familias Chinas Visionarias que Redefinen el Éxito Generacional
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-jade-green mb-8">
                La Nueva Ruta de la Seda Patrimonial: Del Pacífico Asiático al Corazón de las Américas
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-6 mb-12">
              <p className="text-lg text-gray-700 leading-relaxed">
                En la era dorada de la diversificación patrimonial global, las familias empresariales más sofisticadas de China han comprendido una verdad fundamental: la verdadera riqueza trasciende las fronteras geográficas. Para estos visionarios, una segunda o tercera residencia no representa simplemente un activo inmobiliario, sino la llave maestra que abre las puertas de todo un hemisferio de oportunidades.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Panama Golden Key comprende íntimamente las aspiraciones de las familias de alto patrimonio chinas: ustedes no buscan meramente un refugio fiscal, sino una plataforma de expansión continental que posicione a sus herederos en el epicentro del crecimiento hemisférico. Panamá, el puente natural entre dos océanos y tres continentes, emerge como la jurisdicción que sus asesores patrimoniales han estado buscando.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Desde esta posición estratégica, su familia obtendrá acceso privilegiado a un mercado dinámico de más de 625 millones de consumidores, desde las economías avanzadas de Norteamérica hasta los mercados emergentes de Sudamérica, pasando por el vibrante ecosistema centroamericano y caribeño.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {strategicAdvantages.map((advantage, index) => (
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

      {/* Qualified Investor Visa Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-jade-green mb-12 text-center">
              La Visa de Inversionista Calificado: Un camino privilegiado
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-6 mb-12">
              <p className="text-lg text-gray-700 leading-relaxed">
                A diferencia de otros programas migratorios, la Visa de Inversionista Calificado ofrece una ruta acelerada y directa hacia la residencia permanente mediante una inversión significativa en el país. Este programa, diseñado para atraer capital productivo y talento internacional, coloca al solicitante en una posición privilegiada desde el primer día.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Lo más destacable es que este programa está abierto a nacionales de cualquier país del mundo, sin restricciones por nacionalidad, ofreciendo una alternativa poderosa para quienes no califican bajo el programa de Países Amigos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Citizenship Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-jade-green mb-6 text-center">
              Ciudadanía Global para la Élite Empresarial
            </h2>
            <h3 className="text-2xl font-semibold text-center mb-12 text-gray-700">
              Más Allá de la Residencia Convencional: Una Estrategia Hemisférica
            </h3>
            
            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-lg text-gray-700 leading-relaxed">
                A diferencia de los programas tradicionales del Caribe o Europa, el programa panameño ofrece a las familias chinas algo verdaderamente excepcional: acceso inmediato y privilegiado a tres continentes desde una sola inversión estratégica. Con un capital mínimo de USD $300,000, usted no adquiere simplemente una residencia; obtiene las credenciales para operar como ciudadano global en el hemisferio más dinámico del mundo.
              </p>
            </div>

            <div className="space-y-6">
              {exclusivePrivileges.map((privilege, index) => (
                <div key={index} className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg border-l-4 border-amber-600">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {privilege.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        {privilege.title}
                      </h3>
                      <p className="text-gray-700">
                        {privilege.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investment Options Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-jade-green mb-12 text-center">
              Opciones de Inversión Calificada
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {investmentOptions.map((option, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-amber-600 mb-4">
                    <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
                      {option.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {option.title}
                  </h3>
                  <div className="bg-jade-green text-white px-4 py-2 rounded-lg inline-block mb-4">
                    <span className="text-lg font-bold">{option.amount}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{option.description}</p>
                  <div className="space-y-2">
                    {option.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-jade-green flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-jade-green mb-6 text-center">
              El proceso: precisión y eficiencia
            </h2>
            <p className="text-xl text-center mb-12 text-gray-700">
              Nuestro despacho ha perfeccionado un proceso que maximiza probabilidades de éxito:
            </p>
            
            <div className="space-y-6">
              {processSteps.map((step, index) => (
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
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Required Documentation Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-jade-green mb-6 text-center">
              Documentación esencial para el proceso
            </h2>
            <p className="text-xl text-center mb-12 text-gray-700">
              Para un trámite exitoso se requiere:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {requiredDocumentation.map((doc, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {doc.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">{doc.title}</h4>
                      <p className="text-gray-600 text-sm">{doc.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Differential Value Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-jade-green mb-6 text-center">
              Nuestro valor diferencial: Experiencia transformada en resultados
            </h2>
            <p className="text-xl text-center mb-12 text-gray-700">
              Como firma especializada en migración por inversión, ofrecemos:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {differentialValue.map((value, index) => (
                <div key={index} className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-lg">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">
                        {value.title}
                      </h3>
                      <p className="text-gray-700">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Personal Invitation Section */}
      <section className="py-16 bg-jade-green-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
              Una invitación personal
            </h2>
            <div className="space-y-6 mb-8">
              <p className="text-lg leading-relaxed text-gray-200">
                Las extraordinarias transformaciones que Panamá está experimentando representan una ventana de oportunidad histórica. Los inversionistas que actúan hoy no solo aseguran condiciones migratorias privilegiadas, sino que posicionan su capital estratégicamente para capturar el valor generado por el desarrollo acelerado del país.
              </p>
              <p className="text-lg leading-relaxed text-gray-200">
                Le invitamos a una conversación personalizada donde exploraremos cómo el programa de Inversionista Calificado puede convertirse en la piedra angular de su estrategia de internacionalización personal y patrimonial.
              </p>
            </div>
            <p className="text-sm text-gray-400 italic">
              Este artículo tiene propósitos informativos y no constituye asesoramiento legal. Cada situación requiere análisis individualizado según circunstancias particulares y normativa vigente.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}