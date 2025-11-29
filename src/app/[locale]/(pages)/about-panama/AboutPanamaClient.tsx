"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Titulos } from '@/components/groundscript/subheader';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Globe,
  DollarSign,
  Shield,
  Heart,
  MapPin,
  Users,
  Train,
  Building,
  TrendingUp,
  Clock,
  CheckCircle,
  Star,
  Home,
  Plane,
  Award,
  Zap,
} from "lucide-react";
import Link from "next/link";

interface AboutPanamaClientProps {
  locale: string;
}

export function AboutPanamaClient({ locale }: AboutPanamaClientProps) {
  const t = useTranslations("about_panama");
  const tMedical = useTranslations("medical_tourism");
  const commonT = useTranslations("common");
  const [activeTab, setActiveTab] = useState("location");

  // Handle tab click with smooth scroll
  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    const element = document.getElementById(tabId);
    if (element) {
      const offset = 120; // Height of nav + some padding
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // About Panama Data
  const strategicFeatures = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: t("strategic_location.hub_americas"),
      description: "Strategic position connecting North and South America",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: t("strategic_location.canal"),
      description: "Home to the iconic Panama Canal, a global trade route",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: t("strategic_location.connectivity"),
      description: "Excellent air connectivity with direct flights worldwide",
    },
  ];

  const economicBenefits = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: t("economic_benefits.dollarized_economy"),
      description: "USD as official currency, eliminating exchange rate risk",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: t("economic_benefits.banking_center"),
      description: "International banking center with robust financial services",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: t("economic_benefits.free_trade"),
      description: "Multiple free trade zones with tax incentives",
    },
  ];

  const taxAdvantages = [
    {
      title: t("tax_advantages.no_foreign_income"),
      description: "No taxes on foreign-sourced income for residents",
    },
    {
      title: t("tax_advantages.no_property_tax"),
      description: "Property tax exemptions for 20 years on new constructions",
    },
    {
      title: t("tax_advantages.no_capital_gains"),
      description: "No capital gains tax on certain investments and property sales",
    },
  ];

  const qualityOfLife = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: t("quality_of_life.healthcare"),
      description: "World-class healthcare system with international standards",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: t("quality_of_life.education"),
      description: "International schools and universities with English instruction",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: t("quality_of_life.safety"),
      description: "Safe and secure environment with stable political system",
    },
  ];

  const infrastructureProjects = [
    {
      icon: <Train className="w-8 h-8" />,
      title: "Metro Line 3",
      subtitle: "Panama's Mass Transit Expansion",
      investment: "$2.5 Billion",
      completion: "2026",
      impact: "45-minute connectivity across metro area",
      appreciation: "40-60% property value increase",
      color: "bg-blue-500 groundgreen-bg-blue",
      features: [
        "Connects Panama City to west side",
        "Stops at key residential and commercial areas",
        "Integration with existing metro system",
        "Reduced traffic congestion by 30%",
      ],
      investmentOpportunities: [
        "Properties near metro stations",
        "Commercial development around stops",
        "Residential projects in connected areas",
        "Mixed-use developments",
      ],
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Fourth Bridge",
      subtitle: "Panama Canal Atlantic Crossing",
      investment: "$1.8 Billion",
      completion: "2029",
      impact: "Spans Panama Canal at Atlantic entrance",
      opportunities: "Reduces traffic congestion by 40%",
      color: "bg-green-500 groundgreen-bg-blue-2",
      features: [
        "4-lane highway with pedestrian paths",
        "Connects Colón Province to Panama City",
        "Improved logistics and trade flow",
        "Enhanced regional connectivity",
      ],
      investmentOpportunities: [
        "Development corridors along bridge access",
        "Logistics and warehousing facilities",
        "Commercial centers near bridge entrances",
        "Residential projects in connected areas",
      ],
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Cross-Country Railway",
      subtitle: "Atlantic-Pacific Connection",
      investment: "$3.7 Billion",
      impact: "High-speed passenger and cargo transport",
      potential: "Integration with Canal operations",
      color: "bg-purple-500 groundgreen-bg-blue",
      features: [
        "Cross-country railway system",
        "Connects Atlantic and Pacific coasts",
        "High-speed passenger and cargo transport",
        "Integration with Panama Canal operations",
      ],
      investmentOpportunities: [
        "Properties along railway routes",
        "Development around railway stations",
        "Logistics and industrial parks",
        "Commercial and residential mixed-use",
      ],
    },
  ];

  // Medical Tourism Data
  const costComparisons = [
    {
      procedure: tMedical("cost_comparison.stem_cell.procedure"),
      usa: tMedical("cost_comparison.stem_cell.usa"),
      china: tMedical("cost_comparison.stem_cell.china"),
      panama: tMedical("cost_comparison.stem_cell.panama"),
      savings: tMedical("cost_comparison.stem_cell.savings"),
      savingsPercent: "50-60%",
    },
    {
      procedure: tMedical("cost_comparison.anti_aging.procedure"),
      usa: tMedical("cost_comparison.anti_aging.usa"),
      china: tMedical("cost_comparison.anti_aging.china"),
      panama: tMedical("cost_comparison.anti_aging.panama"),
      savings: tMedical("cost_comparison.anti_aging.savings"),
      savingsPercent: "70-80%",
    },
    {
      procedure: tMedical("cost_comparison.neurological.procedure"),
      usa: tMedical("cost_comparison.neurological.usa"),
      china: tMedical("cost_comparison.neurological.china"),
      panama: tMedical("cost_comparison.neurological.panama"),
      savings: tMedical("cost_comparison.neurological.savings"),
      savingsPercent: "60-70%",
    },
  ];

  const qualityFeatures = [
    {
      icon: <Building className="w-6 h-6" />,
      title: tMedical("quality_care.accreditation"),
      description: "JCI-accredited hospitals with international standards",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: tMedical("quality_care.specialists"),
      description: "Bilingual medical specialists trained abroad",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: tMedical("quality_care.technology"),
      description: "Latest medical technology and equipment",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: tMedical("quality_care.recovery"),
      description: "Tropical recovery environment with world-class facilities",
    },
  ];

  const treatments = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: tMedical("treatments.stem_cell"),
      description: "Advanced stem cell therapies for various conditions",
      benefits: [
        "Regenerative medicine",
        "Anti-aging applications",
        "Chronic pain relief",
      ],
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: tMedical("treatments.anti_aging"),
      description: "Comprehensive anti-aging and wellness treatments",
      benefits: ["Hormone therapy", "Aesthetic procedures", "Preventive care"],
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: tMedical("treatments.neurological"),
      description: "Advanced neurological treatments and rehabilitation",
      benefits: ["Stroke recovery", "Neuro-rehabilitation", "Pain management"],
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: tMedical("treatments.orthopedic"),
      description: "Orthopedic surgeries and sports medicine",
      benefits: [
        "Joint replacement",
        "Sports injuries",
        "Arthroscopic surgery",
      ],
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: tMedical("treatments.cardiac"),
      description: "Cardiac procedures and heart health treatments",
      benefits: [
        "Cardiac surgery",
        "Diagnostic procedures",
        "Preventive cardiology",
      ],
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: tMedical("treatments.cosmetic"),
      description: "Cosmetic and plastic surgery procedures",
      benefits: [
        "Facial procedures",
        "Body contouring",
        "Non-surgical treatments",
      ],
    },
  ];

  return (
    <>
      <Titulos
        titleKey="title"
        descriptionKey="subtitle"
        translationNamespace="about_panama"
        backgroundImage="/images/four.jpg"
        tabs={[
          /* { id: "location", labelKey: "strategic_location.title" }, */
          { id: "real_estate", labelKey: "real_estate_tab" },
          { id: "infrastructure", labelKey: "infrastructure_tab" },
          { id: "medical_tourism", labelKey: "medical_tourism" },
          { id: "investment", labelKey: "investment_tab" }
        ]}
        defaultActiveTab="real_estate"
        activeTab={activeTab}
        onTabChange={handleTabClick}
      />

      {/* Strategic Location */}
      {/* <section id="location" className="py-16 bg-white scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-brand text-jade-green font-bold mb-4">
                {t("strategic_location.title")}
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {t("strategic_location.description")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {strategicFeatures.map((feature, index) => (
                <Card
                  key={index}
                  className="text-center border-jade-green/10 hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-jade-green/10 rounded-full flex items-center justify-center mx-auto mb-4 text-jade-green">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-lg">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 bg-jade-green/10 rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-semibold text-jade-green mb-4">
                    Why Panama's Location Matters
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-jade-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-gray-700">
                        Time zone bridge between Americas and Asia
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-jade-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-gray-700">
                        Hub for international business and trade
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-jade-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-gray-700">
                        Gateway to Latin American markets
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="w-32 h-32 bg-jade-green/20 rounded-full flex items-center justify-center mx-auto">
                    <Globe className="w-16 h-16 text-jade-green" />
                  </div>
                  <p className="mt-4 text-sm text-gray-600">
                    Panama connects the world through its strategic position
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Real Estate Market */}
      <section id="real_estate" className="py-16 bg-jade-green/5 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-brand text-jade-green font-bold mb-4">
                EL MERCADO INMOBILIARIO PANAMEÑO
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Una Mirada al Mercado de Lujo y Segmento Medio
              </p>
            </div>

            <div className="mb-12">
              <p className="text-center text-gray-700 max-w-4xl mx-auto mb-8">
                El dinámico mercado inmobiliario de Panamá sigue presentando excelentes oportunidades para el inversionista local, con un sólido desempeño tanto en el segmento de lujo como en propiedades de rango medio. Como abogados especializados en bienes raíces, observamos tendencias positivas que benefician a compradores y vendedores panameños por igual.
              </p>
            </div>

            {/* Luxury Sector */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-jade-green mb-6 text-center">
                Sector de Lujo: Exclusividad con Valor Agregado
              </h3>
              <p className="text-center text-gray-700 max-w-4xl mx-auto mb-8">
                El mercado de lujo panameño ha mostrado una notable resiliencia y continúa atrayendo a inversionistas locales sofisticados.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <Card className="border-jade-green/10 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-jade-green/10 rounded-full flex items-center justify-center mx-auto mb-4 text-jade-green">
                      <Building className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-lg text-center">Punta Pacífica</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center">
                      Con sus icónicos rascacielos y vistas panorámicas al océano, sigue siendo el epítome del lujo urbano.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-jade-green/10 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-jade-green/10 rounded-full flex items-center justify-center mx-auto mb-4 text-jade-green">
                      <Home className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-lg text-center">Santa María Golf & Country Club</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center">
                      Combina residencias exclusivas con amenidades de primer nivel y un estilo de vida resort.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-jade-green/10 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-jade-green/10 rounded-full flex items-center justify-center mx-auto mb-4 text-jade-green">
                      <TrendingUp className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-lg text-center">Costa del Este</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center">
                      Consolida su posición como distrito financiero y residencial premium con nuevos desarrollos corporativos y residenciales.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-white rounded-lg p-6 border border-jade-green/10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <div>
                    <h4 className="font-semibold text-jade-green mb-3">Características del Sector de Lujo</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-jade-green rounded-full"></div>
                        <span className="text-sm text-gray-600">Ticket promedio: $600,000 a varios millones</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-jade-green rounded-full"></div>
                        <span className="text-sm text-gray-600">Rendimientos anuales superiores al 5%</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-jade-green rounded-full"></div>
                        <span className="text-sm text-gray-600">Valor histórico mantenido incluso en incertidumbre económica</span>
                      </li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-jade-green mb-2">5%+</div>
                    <p className="text-sm text-gray-600">Rendimiento anual en alquileres de alto perfil</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mid-Range Sector */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-jade-green mb-6 text-center">
                Segmento Medio: El Motor del Mercado
              </h3>
              <p className="text-center text-gray-700 max-w-4xl mx-auto mb-8">
                El verdadero dinamismo del mercado panameño se encuentra en el segmento medio, donde existe un equilibrio entre oferta y demanda que genera interesantes oportunidades:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <Card className="border-jade-green/10 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-center">San Francisco</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center">
                      Barrios consolidados con excelente plusvalía y demanda constante.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-jade-green/10 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-center">Avenida Balboa</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center">
                      Ubicación estratégica y vistas impresionantes del mar y ciudad de Panamá.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-jade-green/10 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-center">Amador</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center">
                      Creciente demanda por ubicación privilegiada al causeway y vistas panorámicas.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-jade-green/10 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-center">Panamá Pacífico</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center">
                      Excelentes opciones con avances en infraestructura como la Línea 3 del Metro.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-jade-green/10 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <h4 className="text-2xl font-bold text-jade-green mb-2">$300K-$550K</h4>
                    <p className="text-sm text-gray-600">Rango de precios del segmento</p>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-jade-green mb-2">Estables</h4>
                    <p className="text-sm text-gray-600">Rendimientos para pequeños y medianos inversionistas</p>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-jade-green mb-2">Equilibrio</h4>
                    <p className="text-sm text-gray-600">Balance entre oferta y demanda</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Current Trends */}
            <div>
              <h3 className="text-2xl font-bold text-jade-green mb-6 text-center">
                Tendencias Actuales que Favorecen al Inversionista Local
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="border-jade-green/10 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-jade-green/10 rounded-full flex items-center justify-center mx-auto mb-4 text-jade-green">
                      <Globe className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-lg text-center">Digitalización</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center">
                      Las plataformas de bienes raíces y los tours virtuales han democratizado el acceso a información de calidad.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-jade-green/10 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-jade-green/10 rounded-full flex items-center justify-center mx-auto mb-4 text-jade-green">
                      <Building className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-lg text-center">Uso Mixto</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center">
                      Proyectos que combinan espacios residenciales, comerciales y de entretenimiento ganan popularidad.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-jade-green/10 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-jade-green/10 rounded-full flex items-center justify-center mx-auto mb-4 text-jade-green">
                      <Heart className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-lg text-center">Sustentabilidad</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center">
                      Edificios con certificaciones verdes y sistemas eficientes comienzan a comandar precios premium.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-jade-green/10 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-jade-green/10 rounded-full flex items-center justify-center mx-auto mb-4 text-jade-green">
                      <DollarSign className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-lg text-center">Financiamiento</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center">
                      A pesar de ajustes en programas gubernamentales, la banca privada mantiene ofertas atractivas.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Projects */}
      <section id="infrastructure" className="py-16 bg-white scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-brand text-jade-green font-bold mb-4">
                El Impacto de los Megaproyectos en su Inversión
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                La inversión en infraestructura está transformando el panorama inmobiliario panameño
              </p>
            </div>

            <div className="mb-12">
              <p className="text-center text-gray-700 max-w-4xl mx-auto mb-8">
                Estos proyectos no solo mejoran la calidad de vida de los residentes sino que generan incrementos sustanciales en el valor de las propiedades en sus áreas de influencia, creando oportunidades únicas para inversionistas atentos.
              </p>
            </div>

            <div className="space-y-12">
              {infrastructureProjects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden border border-jade-green/10"
                >
                  <div className="md:flex">
                    <div
                      className={`md:w-1/3 ${project.color} p-8 text-white`}
                    >
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                        {project.icon}
                      </div>
                      <h3 className="text-2xl font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-white/90 mb-4">
                        {project.subtitle}
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <DollarSign className="w-4 h-4" />
                          <span className="font-semibold">
                            {project.investment}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span className="font-semibold">
                            {project.completion}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-2/3 p-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">
                            Características del Proyecto
                          </h4>
                          <ul className="space-y-2">
                            {project.features.map((feature, idx) => (
                              <li
                                key={idx}
                                className="flex items-center space-x-2"
                              >
                                <div className="w-1.5 h-1.5 bg-jade-green rounded-full"></div>
                                <span className="text-sm text-gray-600">
                                  {feature}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">
                            Oportunidades de Inversión
                          </h4>
                          <ul className="space-y-2">
                            {project.investmentOpportunities.map(
                              (opportunity, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-center space-x-2"
                                >
                                  <div className="w-1.5 h-1.5 bg-jade-green rounded-full"></div>
                                  <span className="text-sm text-gray-600">
                                    {opportunity}
                                  </span>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      </div>
                      <div className="mt-6 p-4 bg-jade-green/10 rounded-lg">
                        <p className="text-sm font-semibold text-jade-green">
                          Impacto: {project.impact}
                        </p>
                        {project.appreciation && (
                          <p className="text-sm text-jade-green mt-1">
                            Apreciación Esperada: {project.appreciation}
                          </p>
                        )}
                        {project.opportunities && (
                          <p className="text-sm text-jade-green mt-1">
                            Oportunidades: {project.opportunities}
                          </p>
                        )}
                        {project.potential && (
                          <p className="text-sm text-jade-green mt-1">
                            Potencial: {project.potential}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-jade-green/10 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-jade-green mb-4 text-center">
                Panamá: El "Singapur de las Américas"
              </h3>
              <p className="text-center text-gray-700 max-w-4xl mx-auto">
                Estos proyectos transformarán a Panamá en el "Singapur de las Américas" - un centro neurálgico que conectará mercados globales con una eficiencia sin paralelos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Tourism */}
      <section id="medical_tourism" className="scroll-mt-24">
        {/* Introduction */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-brand text-jade-green font-bold mb-4">
                  TURISMO MÉDICO
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  巴拿马医疗旅游：为什么越来越多的中国家庭选择在这里治疗与康复？
                </p>
              </div>

              <div className="bg-jade-green/10 rounded-lg p-8 mb-8">
                <p className="text-center text-gray-700 max-w-4xl mx-auto mb-4">
                  En los últimos años, Panamá este pequeño país en el corazón del continente americano se ha convertido silenciosamente en un "nuevo paraíso del turismo médico" para familias de China continental, Hong Kong y Singapur.
                </p>
                <p className="text-center text-gray-700 max-w-4xl mx-auto">
                  Basándonos en datos comparativos recientes entre Estados Unidos, China, Canadá y Panamá, la tendencia es clara: Panamá ofrece calidad internacional con un ahorro del 40% al 70% en terapias avanzadas.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Cost Comparison */}
        <div className="py-16 bg-jade-green/5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-brand text-jade-green font-bold mb-4">
                  Comparación de Costos de Tratamientos Médicos
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Ahorre significativamente en tratamientos médicos de clase mundial
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-jade-green/10">
                      <th className="text-left p-4 font-semibold text-jade-green">
                        Tratamiento
                      </th>
                      <th className="text-center p-4 font-semibold text-gray-700">
                        Estados Unidos
                      </th>
                      <th className="text-center p-4 font-semibold text-gray-700">
                        China
                      </th>
                      <th className="text-center p-4 font-semibold text-jade-green">
                        Panamá
                      </th>
                      <th className="text-center p-4 font-semibold text-gold">
                        Ahorro
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-jade-green/10 hover:bg-jade-green/5">
                      <td className="p-4 font-medium text-gray-900">
                        Terapias con Células Madre
                      </td>
                      <td className="p-4 text-center text-gray-600">
                        $15,000 - $50,000
                      </td>
                      <td className="p-4 text-center text-gray-600">
                        $15,000 - $46,000
                      </td>
                      <td className="p-4 text-center font-semibold text-jade-green">
                        $5,000 - $30,000
                      </td>
                      <td className="p-4 text-center">
                        <div className="inline-flex items-center space-x-2 bg-gold/20 text-gold px-3 py-1 rounded-full">
                          <DollarSign className="w-4 h-4" />
                          <span className="font-semibold">40-60%</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-jade-green/10 hover:bg-jade-green/5">
                      <td className="p-4 font-medium text-gray-900">
                        Tratamientos Anti-envejecimiento
                      </td>
                      <td className="p-4 text-center text-gray-600">
                        $20,000 - $35,000
                      </td>
                      <td className="p-4 text-center text-gray-600">
                        $15,000 - $25,000
                      </td>
                      <td className="p-4 text-center font-semibold text-jade-green">
                        $4,000 - $12,000
                      </td>
                      <td className="p-4 text-center">
                        <div className="inline-flex items-center space-x-2 bg-gold/20 text-gold px-3 py-1 rounded-full">
                          <DollarSign className="w-4 h-4" />
                          <span className="font-semibold">50-70%</span>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b border-jade-green/10 hover:bg-jade-green/5">
                      <td className="p-4 font-medium text-gray-900">
                        Cirugías Estéticas
                      </td>
                      <td className="p-4 text-center text-gray-600">
                        Hasta $45,000
                      </td>
                      <td className="p-4 text-center text-gray-600">
                        Hasta $20,000
                      </td>
                      <td className="p-4 text-center font-semibold text-jade-green">
                        $3,500 - $18,000
                      </td>
                      <td className="p-4 text-center">
                        <div className="inline-flex items-center space-x-2 bg-gold/20 text-gold px-3 py-1 rounded-full">
                          <DollarSign className="w-4 h-4" />
                          <span className="font-semibold">35-55%</span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Why Panama for Medical Tourism */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-brand text-jade-green font-bold mb-4">
                  ¿Por qué Panamá se ha convertido en un destino médico popular para chinos?
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="border-jade-green/10 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-jade-green/10 rounded-full flex items-center justify-center mx-auto mb-4 text-jade-green">
                      <DollarSign className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-lg text-center">Costos Competitivos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center">
                      Panamá ofrece terapias médicas de calidad internacional a una fracción del precio. El costo de vida es menor, lo que permite tratamientos, estadías y recuperación accesibles.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-jade-green/10 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-jade-green/10 rounded-full flex items-center justify-center mx-auto mb-4 text-jade-green">
                      <Award className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-lg text-center">Tecnología de Nivel Internacional</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center">
                      Los hospitales panameños trabajan con equipamiento moderno y estándares médicos exportados de Estados Unidos. Varias instituciones están acreditadas por JCI.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-jade-green/10 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-jade-green/10 rounded-full flex items-center justify-center mx-auto mb-4 text-jade-green">
                      <Clock className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-lg text-center">Tiempos de Espera Casi Nulos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center">
                      A diferencia de China o Canadá, donde ciertos tratamientos pueden tardar meses, en Panamá los pacientes reciben atención en cuestión de días.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-jade-green/10 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-jade-green/10 rounded-full flex items-center justify-center mx-auto mb-4 text-jade-green">
                      <Plane className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-lg text-center">Ubicación Estratégica</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center">
                      Panamá está a solo 3 horas de Miami y es el "hub aéreo de América Latina". El Aeropuerto de Tocumen conecta con más de 80 destinos internacionales.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-jade-green/10 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-jade-green/10 rounded-full flex items-center justify-center mx-auto mb-4 text-jade-green">
                      <Heart className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-lg text-center">Entorno Ideal para la Recuperación</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center">
                      Playas tropicales, hoteles de lujo, clima cálido. Muchos pacientes combinan su tratamiento con turismo o descanso con la familia.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-jade-green/10 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-jade-green/10 rounded-full flex items-center justify-center mx-auto mb-4 text-jade-green">
                      <Users className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-lg text-center">Servicios Integrados</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center">
                      Servicios integrados para familias chinas con personal bilingüe y atención personalizada adaptada a las necesidades culturales.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Treatments */}
        <div className="py-16 bg-jade-green/5">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-brand text-jade-green font-bold mb-4">
                  Tratamientos Destacados
                </h2>
                <p className="text-lg text-muted-foreground">
                  Panamá es reconocida internacionalmente en áreas médicas especializadas
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="border-jade-green/10 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-jade-green/10 rounded-full flex items-center justify-center mb-4 text-jade-green">
                      <Star className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-lg">Células Madre</CardTitle>
                    <CardDescription>
                      Calidad global a precio razonable
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-900 mb-2">Ventajas:</h4>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-jade-green flex-shrink-0" />
                        <span className="text-sm text-gray-600">Uso autorizado de células madre mesenquimales</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-jade-green flex-shrink-0" />
                        <span className="text-sm text-gray-600">Clínicas de renombre internacional</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-jade-green flex-shrink-0" />
                        <span className="text-sm text-gray-600">Protocolos certificados con altos estándares</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-jade-green/10 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-jade-green/10 rounded-full flex items-center justify-center mb-4 text-jade-green">
                      <Heart className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-lg">Anti-envejecimiento</CardTitle>
                    <CardDescription>
                      Sector en auge para empresarios asiáticos
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-900 mb-2">Tratamientos:</h4>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-jade-green flex-shrink-0" />
                        <span className="text-sm text-gray-600">Terapias antioxidantes avanzadas</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-jade-green flex-shrink-0" />
                        <span className="text-sm text-gray-600">Regeneración celular</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-jade-green flex-shrink-0" />
                        <span className="text-sm text-gray-600">Protocolos de longevidad integrados</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-jade-green/10 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-jade-green/10 rounded-full flex items-center justify-center mb-4 text-jade-green">
                      <Award className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-lg">Cirugías Estéticas</CardTitle>
                    <CardDescription>
                      Recuperaciones rápidas y seguras
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-900 mb-2">Características:</h4>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-jade-green flex-shrink-0" />
                        <span className="text-sm text-gray-600">Certificaciones JCI internacionales</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-jade-green flex-shrink-0" />
                        <span className="text-sm text-gray-600">Cirujanos bilingües</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-jade-green flex-shrink-0" />
                        <span className="text-sm text-gray-600">Paquetes post-operatorios completos</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Center */}
      <section id="investment" className="py-16 bg-white scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-brand text-jade-green font-bold mb-4">
                Un centro estratégico para sus operaciones globales
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                La elección de Panamá como plataforma para sus actividades internacionales ofrece ventajas incomparables
              </p>
            </div>

            {/* Financial Hub */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-jade-green mb-6 text-center">
                Hub financiero sofisticado
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="border-jade-green/10 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-jade-green/10 rounded-full flex items-center justify-center mx-auto mb-4 text-jade-green">
                      <Building className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-lg text-center">Centro Bancario</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center">
                      Más de 80 instituciones financieras incluyendo Bank of China
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-jade-green/10 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-jade-green/10 rounded-full flex items-center justify-center mx-auto mb-4 text-jade-green">
                      <Shield className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-lg text-center">Regulación</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center">
                      Basada en estándares de Basilea y GAFI
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-jade-green/10 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-jade-green/10 rounded-full flex items-center justify-center mx-auto mb-4 text-jade-green">
                      <DollarSign className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-lg text-center">Servicios Avanzados</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center">
                      Banca privada y gestión patrimonial
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-jade-green/10 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-jade-green/10 rounded-full flex items-center justify-center mx-auto mb-4 text-jade-green">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-lg text-center">Estructuras Corporativas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center">
                      Optimizadas y fondos de inversión privados
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Connectivity */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-jade-green mb-6 text-center">
                Conectividad aérea excepcional
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="bg-jade-green/10 rounded-lg p-6">
                  <div className="w-16 h-16 bg-jade-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Plane className="w-8 h-8 text-jade-green" />
                  </div>
                  <h4 className="text-xl font-bold text-jade-green mb-2">Hub de las Américas</h4>
                  <p className="text-gray-600">Conexiones directas a más de 80 destinos mundiales</p>
                </div>
                <div className="bg-jade-green/10 rounded-lg p-6">
                  <div className="w-16 h-16 bg-jade-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-jade-green" />
                  </div>
                  <h4 className="text-xl font-bold text-jade-green mb-2">Vuelos sin escalas</h4>
                  <p className="text-gray-600">A las principales ciudades globales</p>
                </div>
                <div className="bg-jade-green/10 rounded-lg p-6">
                  <div className="w-16 h-16 bg-jade-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-jade-green" />
                  </div>
                  <h4 className="text-xl font-bold text-jade-green mb-2">Expansión aeroportuaria</h4>
                  <p className="text-gray-600">Incrementará capacidad en un 50%</p>
                </div>
              </div>
            </div>

            {/* Real Estate Benefits */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-jade-green mb-6 text-center">
                Mercado inmobiliario resiliente
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-jade-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-jade-green" />
                  </div>
                  <h4 className="text-xl font-bold text-jade-green mb-2">Valorización Sostenida</h4>
                  <p className="text-gray-600">Incluso durante ciclos económicos adversos</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-jade-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-8 h-8 text-jade-green" />
                  </div>
                  <h4 className="text-xl font-bold text-jade-green mb-2">Rendimientos Superiores</h4>
                  <p className="text-gray-600">6-7% anual en alquileres</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-jade-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-jade-green" />
                  </div>
                  <h4 className="text-xl font-bold text-jade-green mb-2">Protección Constitucional</h4>
                  <p className="text-gray-600">Propiedad extranjera protegida y heredable sin impuestos</p>
                </div>
              </div>
            </div>

            {/* Tax Advantages */}
            <div>
              <h3 className="text-2xl font-bold text-jade-green mb-6 text-center">
                Ventajas fiscales estructurales
              </h3>
              <div className="bg-jade-green/10 rounded-lg p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-jade-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Exención de impuestos sobre ingresos de fuente extranjera
                      </h4>
                      <p className="text-sm text-gray-600">
                        No tributación sobre ingresos generados fuera de Panamá
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-jade-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Ausencia de impuestos sobre patrimonio, herencias y donaciones
                      </h4>
                      <p className="text-sm text-gray-600">
                        Protección completa del patrimonio familiar
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-jade-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Exoneración de impuestos inmobiliarios extendidos
                      </h4>
                      <p className="text-sm text-gray-600">
                        Períodos extendidos para propiedades nuevas
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-jade-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Estructuras de protección patrimonial reconocidas
                      </h4>
                      <p className="text-sm text-gray-600">
                        Reconocimiento internacional de estructuras legales panameñas
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-jade-green text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-brand text-white font-bold mb-6">
              {activeTab === "medical_tourism" 
                ? "Ready to Start Your Medical Journey?" 
                : "Discover Why Panama is Perfect for You"}
            </h2>
            <p className="text-xl text-gold/90 mb-8">
              {activeTab === "medical_tourism"
                ? "Get a consultation and treatment quote from our medical tourism experts"
                : "Schedule a consultation to learn more about living and investing in Panama"}
            </p>
            <Button
              asChild
              className="bg-gold text-jade-green hover:bg-gold/90 font-brand text-lg px-8 py-3"
            >
              <Link href={`/${locale}/contact`}>
                {commonT("free_consultation")}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
