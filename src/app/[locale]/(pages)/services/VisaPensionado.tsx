"use client";

import { useTranslations } from "next-intl";
import {
  Users,
  Shield,
  DollarSign,
  Home,
  Plane,
  Utensils,
  Film,
  Heart,
  FileText,
  CheckCircle,
  Globe,
  Building,
  Cloud,
  MapPin,
  Clock,
  Award,
  Target,
  Lightbulb,
  Handshake,
  CreditCard,
  Car,
  ShoppingBag,
  Phone,
  Zap,
  Pill,
  Hotel,
  Stethoscope,
  UserCheck,
  Briefcase,
  ArrowRight,
  Star,
  Calendar,
} from "lucide-react";

interface VisaPensionadoProps {
  locale?: string;
}

export default function VisaPensionado({ locale }: VisaPensionadoProps) {
  const t = useTranslations("services_page");

  const panamaAdvantages = [
    {
      icon: <Shield className="w-6 h-6 text-jade-green" />,
      title: "Estabilidad política y económica",
      description: "Una democracia consolidada con más de 30 años de crecimiento continuo.",
    },
    {
      icon: <DollarSign className="w-6 h-6 text-jade-green" />,
      title: "Moneda dolarizada",
      description: "Sin riesgo cambiario para quienes reciben pensiones en dólares.",
    },
    {
      icon: <Building className="w-6 h-6 text-jade-green" />,
      title: "Infraestructura de primer nivel",
      description: "Hospitales afiliados con Johns Hopkins y Cleveland Clinic; internet de alta velocidad; centros comerciales modernos.",
    },
    {
      icon: <Cloud className="w-6 h-6 text-jade-green" />,
      title: "Clima privilegiado",
      description: "Desde el eterno verano de las playas hasta el fresco perpetuo de las tierras altas de Boquete.",
    },
    {
      icon: <Users className="w-6 h-6 text-jade-green" />,
      title: "Comunidades de expatriados establecidas",
      description: "Encontrará miles de compatriotas que han tomado la misma decisión.",
    },
    {
      icon: <Plane className="w-6 h-6 text-jade-green" />,
      title: "Proximidad geográfica",
      description: "Vuelos directos de 3-5 horas a las principales ciudades norteamericanas.",
    },
  ];

  const taxBenefits = [
    {
      icon: <DollarSign className="w-5 h-5 text-jade-green" />,
      title: "Exención de impuestos sobre ingresos extranjeros",
      description: "Sus pensiones, inversiones y otros ingresos generados fuera de Panamá están 100% libres de impuestos.",
    },
    {
      icon: <Home className="w-5 h-5 text-jade-green" />,
      title: "Exención de impuestos en importación de menaje de casa",
      description: "Traiga sus pertenencias personales libres de aranceles (hasta $10,000).",
    },
    {
      icon: <Car className="w-5 h-5 text-jade-green" />,
      title: "Importación de vehículo libre de impuestos",
      description: "Cada dos años puede importar un vehículo nuevo sin pagar aranceles.",
    },
    {
      icon: <Building className="w-5 h-5 text-jade-green" />,
      title: "Exención de impuesto sobre propiedad",
      description: "Durante los primeros 15-20 años para construcciones nuevas.",
    },
  ];

  const discountBenefits = [
    {
      icon: <Zap className="w-5 h-5 text-jade-green" />,
      discount: "25%",
      category: "servicios públicos",
      examples: "Electricidad, agua, telefonía",
    },
    {
      icon: <Utensils className="w-5 h-5 text-jade-green" />,
      discount: "25%",
      category: "restaurantes",
      examples: "Incluyendo cadenas internacionales",
    },
    {
      icon: <Hotel className="w-5 h-5 text-jade-green" />,
      discount: "30-50%",
      category: "hoteles durante días de semana",
      examples: "Mejores tarifas en hospedaje",
    },
    {
      icon: <Plane className="w-5 h-5 text-jade-green" />,
      discount: "25%",
      category: "boletos aéreos",
      examples: "Aerolíneas con oficinas en Panamá",
    },
    {
      icon: <Home className="w-5 h-5 text-jade-green" />,
      discount: "15%",
      category: "préstamos hipotecarios",
      examples: "Para vivienda principal",
    },
    {
      icon: <Stethoscope className="w-5 h-5 text-jade-green" />,
      discount: "20%",
      category: "servicios médicos",
      examples: "10% adicional en medicamentos recetados",
    },
    {
      icon: <Film className="w-5 h-5 text-jade-green" />,
      discount: "Variable",
      category: "entretenimiento",
      examples: "Cines, teatros, eventos deportivos",
    },
  ];

  const processSteps = [
    {
      step: "1",
      title: "Evaluación preliminar",
      description: "Verificamos que cumpla con los requisitos básicos antes de iniciar cualquier trámite.",
      icon: <UserCheck className="w-6 h-6 text-jade-green" />,
    },
    {
      step: "2",
      title: "Recopilación documental",
      description: "Le guiamos en la obtención de cada documento necesario, tanto en su país de origen como en Panamá.",
      icon: <FileText className="w-6 h-6 text-jade-green" />,
    },
    {
      step: "3",
      title: "Autenticación de documentos",
      description: "Supervisamos el proceso de apostilla o legalización consular, asegurando que todo cumpla con los estándares panameños.",
      icon: <Shield className="w-6 h-6 text-jade-green" />,
    },
    {
      step: "4",
      title: "Preparación del expediente",
      description: "Organizamos meticulosamente su documentación para una presentación óptima.",
      icon: <Briefcase className="w-6 h-6 text-jade-green" />,
    },
    {
      step: "5",
      title: "Presentación ante Migración",
      description: "Nuestros abogados presentan personalmente su solicitud ante las autoridades.",
      icon: <Users className="w-6 h-6 text-jade-green" />,
    },
    {
      step: "6",
      title: "Trámite de carné de residente",
      description: "Una vez aprobada la solicitud, gestionamos su documento de identidad permanente.",
      icon: <CreditCard className="w-6 h-6 text-jade-green" />,
    },
    {
      step: "7",
      title: "Servicios post-aprobación",
      description: "Desde apertura de cuentas bancarias hasta búsqueda de vivienda, facilitamos su transición a la vida panameña.",
      icon: <Handshake className="w-6 h-6 text-jade-green" />,
    },
  ];

  const requirements = [
    {
      icon: <DollarSign className="w-5 h-5 text-jade-green" />,
      title: "Pensión vitalicia mínima de $1,000 mensuales",
      description: "De fuente gubernamental o privada reconocida.",
    },
    {
      icon: <CreditCard className="w-5 h-5 text-jade-green" />,
      title: "Pasaporte con al menos 6 meses de vigencia",
      description: "Documento de viaje válido.",
    },
    {
      icon: <Shield className="w-5 h-5 text-jade-green" />,
      title: "Certificado de antecedentes penales apostillado",
      description: "De los últimos 5 años.",
    },
    {
      icon: <Heart className="w-5 h-5 text-jade-green" />,
      title: "Certificado médico emitido por médico panameño",
      description: "Estado de salud actual.",
    },
    {
      icon: <Home className="w-5 h-5 text-jade-green" />,
      title: "Comprobante de domicilio en su país de origen",
      description: "Dirección residencial verificable.",
    },
    {
      icon: <UserCheck className="w-5 h-5 text-jade-green" />,
      title: "Seis fotografías tamaño carné con fondo blanco",
      description: "Recientes y en buen estado.",
    },
    {
      icon: <FileText className="w-5 h-5 text-jade-green" />,
      title: "Poder notarial a favor de nuestro despacho",
      description: "Para representarlo legalmente.",
    },
  ];

  const companyApproach = [
    {
      icon: <Target className="w-6 h-6 text-jade-green" />,
      title: "Consultas iniciales",
      description: "Exploramos sus necesidades específicas sin compromiso.",
    },
    {
      icon: <Phone className="w-6 h-6 text-jade-green" />,
      title: "Comunicación constante",
      description: "Actualizaciones semanales sobre el avance de su trámite.",
    },
    {
      icon: <Briefcase className="w-6 h-6 text-jade-green" />,
      title: "Paquetes integrales",
      description: "Desde la orientación inicial hasta la instalación completa.",
    },
    {
      icon: <Globe className="w-6 h-6 text-jade-green" />,
      title: "Atención bilingüe",
      description: "Todo nuestro equipo es perfectamente bilingüe.",
    },
    {
      icon: <Users className="w-6 h-6 text-jade-green" />,
      title: "Contactos con la comunidad",
      description: "Conexión con grupos de expatriados y recursos locales.",
    },
    {
      icon: <Shield className="w-6 h-6 text-jade-green" />,
      title: "Apoyo post-residencia",
      description: "Seguimos disponibles después de obtener su visa.",
    },
  ];

  const postVisaServices = [
    {
      icon: <CreditCard className="w-5 h-5 text-jade-green" />,
      title: "Apertura de cuentas bancarias",
    },
    {
      icon: <Home className="w-5 h-5 text-jade-green" />,
      title: "Adquisición de propiedades",
    },
    {
      icon: <Users className="w-5 h-5 text-jade-green" />,
      title: "Contratación de personal doméstico",
    },
    {
      icon: <Heart className="w-5 h-5 text-jade-green" />,
      title: "Registro en sistemas de salud",
    },
    {
      icon: <MapPin className="w-5 h-5 text-jade-green" />,
      title: "Orientación sobre comunidades y clubes de expatriados",
    },
  ];

  return (
    <>
      <section id="visa-pensionado" className="py-16 bg-gradient-to-br from-jade-green/10 to-white scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <Award className="w-16 h-16 text-jade-green mx-auto mb-4" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-jade-green mb-6">
              Visa de Pensionado en Panamá
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              Su Puerta de Entrada al Paraíso del Retiro
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
                Mientras contempla el siguiente capítulo de su vida, una pregunta fundamental emerge: ¿dónde disfrutar plenamente de esos años dorados por los que tanto ha trabajado? Si está leyendo esto desde su hogar en Estados Unidos, Canadá o China permítame presentarle una opción que miles de sus compatriotas ya han descubierto: Panamá, un país que ha perfeccionado el arte de dar la bienvenida a jubilados internacionales.
              </p>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mt-4">
                En Panamá Golden Key nos especializamos en migración panameña acompañando a personas como usted en su transición hacia una nueva vida, podemos afirmar que el Programa de Visa de Pensionado de Panamá permanece como el más atractivo del hemisferio occidental. Más que un simple permiso de residencia, es un abrazo de bienvenida a su nueva comunidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Panama Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-jade-green mb-12 text-center">
              ¿Por qué Panamá es el destino ideal para su retiro?
            </h2>
            <p className="text-gray-600 mb-8 text-center max-w-4xl mx-auto">
              Antes de adentrarnos en los aspectos técnicos, permítame compartir por qué tantos norteamericanos eligen nuestro país:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {panamaAdvantages.map((advantage, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {advantage.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">{advantage.title}</h3>
                      <p className="text-gray-600 text-sm">{advantage.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tax Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-jade-green mb-12 text-center">
              El Programa de Visa de Pensionado: Beneficios excepcionales
            </h2>
            <p className="text-gray-600 mb-8 text-center max-w-4xl mx-auto">
              Lo que verdaderamente distingue a Panamá es su Programa de Visa de Pensionado, diseñado específicamente para atraer a jubilados internacionales mediante beneficios tangibles:
            </p>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Beneficios fiscales:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {taxBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4 p-6 bg-jade-green/5 rounded-lg hover:bg-jade-green/10 transition-colors">
                    <div className="flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">{benefit.title}</h4>
                      <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discount Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Programa de Descuentos para Jubilados ("Ley de Descuentos"):
            </h3>
            <p className="text-gray-600 mb-8 text-center max-w-4xl mx-auto">
              Estos beneficios son legalmente garantizados y ampliamente respetados en todo el país, sin necesidad de negociaciones especiales.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {discountBenefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="flex-shrink-0">
                        {benefit.icon}
                      </div>
                      <span className="text-2xl font-bold text-jade-green">{benefit.discount}</span>
                    </div>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">{benefit.category}</h4>
                  <p className="text-gray-600 text-sm">{benefit.examples}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-jade-green mb-12 text-center">
              El proceso paso a paso: Simplicidad y certeza
            </h2>
            <p className="text-gray-600 mb-8 text-center max-w-4xl mx-auto">
              Nuestro despacho ha refinado un proceso que minimiza complejidades:
            </p>

            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors">
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

      {/* Requirements Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-jade-green mb-12 text-center">
              Requisitos documentales: Claridad y precisión
            </h2>
            <p className="text-gray-600 mb-8 text-center max-w-4xl mx-auto">
              Para calificar para el Programa de Visa de Pensionado necesitará:
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
                <strong>Nota importante:</strong> Si su pensión es menor a $1,000 pero supera los $750, puede calificar combinándola con una inversión inmobiliaria en Panamá.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Approach Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-jade-green mb-12 text-center">
              Nuestro Enfoque: Experiencia centrada en el cliente
            </h2>
            <p className="text-gray-600 mb-8 text-center max-w-4xl mx-auto">
              Nuestro despacho comprende que esta decisión trasciende lo legal; es un cambio de vida. Por eso ofrecemos:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {companyApproach.map((approach, index) => (
                <div key={index} className="text-center p-6 bg-jade-green/5 rounded-lg hover:bg-jade-green/10 transition-colors">
                  <div className="flex justify-center mb-4">
                    {approach.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{approach.title}</h3>
                  <p className="text-gray-600 text-sm">{approach.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Post Visa Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-jade-green mb-12 text-center">
              Más allá de la visa: Construyendo su nueva vida
            </h2>
            <p className="text-gray-600 mb-8 text-center max-w-4xl mx-auto">
              Una vez obtenida su residencia, le apoyamos en aspectos prácticos como:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {postVisaServices.map((service, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex-shrink-0">
                    {service.icon}
                  </div>
                  <p className="text-gray-700 text-sm font-medium">{service.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-jade-green to-jade-green/90 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              El momento de actuar es ahora
            </h2>
            <p className="text-lg mb-8 leading-relaxed">
              En un mundo cada vez más incierto, Panamá ofrece un refugio de estabilidad y calidad de vida. Miles de jubilados norteamericanos ya han descubierto este secreto. Como frecuentemente comentan nuestros clientes: "Mi único arrepentimiento es no haber venido antes."
            </p>
            <div className="bg-white/10 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">
                Lo invitamos a contactarnos para una consulta personalizada
              </h3>
              <p className="text-lg mb-6">
                Donde evaluaremos su situación específica y responderemos todas sus preguntas sobre este fascinante programa migratorio.
              </p>
              <div className="flex items-center justify-center space-x-2">
                <Handshake className="w-6 h-6" />
                <span className="font-semibold">Comience su nueva vida hoy</span>
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
              Este artículo tiene fines informativos y no constituye asesoramiento legal. Cada situación requiere evaluación individualizada según circunstancias particulares.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}