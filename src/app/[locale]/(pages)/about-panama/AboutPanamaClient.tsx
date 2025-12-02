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



  const infrastructureProjects = [
    {
      icon: <Train className="w-8 h-8" />,
      title: t("ground_infrastructure.projects.metro_line_3.title"),
      subtitle: t("ground_infrastructure.projects.metro_line_3.subtitle"),
      investment: t("ground_infrastructure.projects.metro_line_3.investment"),
      completion: t("ground_infrastructure.projects.metro_line_3.completion"),
      impact: t("ground_infrastructure.projects.metro_line_3.impact"),
      appreciation: t("ground_infrastructure.projects.metro_line_3.appreciation"),
      color: "bg-blue-500 groundgreen-bg-blue",
      features: t.raw("ground_infrastructure.projects.metro_line_3.features") as string[],
      investmentOpportunities: t.raw("ground_infrastructure.projects.metro_line_3.opportunities") as string[],
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: t("ground_infrastructure.projects.fourth_bridge.title"),
      subtitle: t("ground_infrastructure.projects.fourth_bridge.subtitle"),
      investment: t("ground_infrastructure.projects.fourth_bridge.investment"),
      completion: t("ground_infrastructure.projects.fourth_bridge.completion"),
      impact: t("ground_infrastructure.projects.fourth_bridge.impact"),
      opportunities: t("ground_infrastructure.projects.fourth_bridge.opportunities_text"),
      color: "bg-green-500 groundgreen-bg-blue-2",
      features: t.raw("ground_infrastructure.projects.fourth_bridge.features") as string[],
      investmentOpportunities: t.raw("ground_infrastructure.projects.fourth_bridge.opportunities") as string[],
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: t("ground_infrastructure.projects.railway.title"),
      subtitle: t("ground_infrastructure.projects.railway.subtitle"),
      investment: t("ground_infrastructure.projects.railway.investment"),
      impact: t("ground_infrastructure.projects.railway.impact"),
      potential: t("ground_infrastructure.projects.railway.potential"),
      color: "bg-purple-500 groundgreen-bg-blue",
      features: t.raw("ground_infrastructure.projects.railway.features") as string[],
      investmentOpportunities: t.raw("ground_infrastructure.projects.railway.opportunities") as string[],
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
      savingsPercent: "40-60%",
    },
    {
      procedure: tMedical("cost_comparison.anti_aging.procedure"),
      usa: tMedical("cost_comparison.anti_aging.usa"),
      china: tMedical("cost_comparison.anti_aging.china"),
      panama: tMedical("cost_comparison.anti_aging.panama"),
      savings: tMedical("cost_comparison.anti_aging.savings"),
      savingsPercent: "50-70%",
    },
    {
      procedure: tMedical("cost_comparison.cosmetic.procedure"),
      usa: tMedical("cost_comparison.cosmetic.usa"),
      china: tMedical("cost_comparison.cosmetic.china"),
      panama: tMedical("cost_comparison.cosmetic.panama"),
      savings: tMedical("cost_comparison.cosmetic.savings"),
      savingsPercent: "35-55%",
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


      {/* Real Estate Market */}
      <section id="real_estate" className="py-16 bg-jade-green/5 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-brand text-jade-green font-bold mb-4">
                {t("ground_real_estate.title")}
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {t("ground_real_estate.subtitle")}
              </p>
            </div>

            <div className="mb-12">
              <p className="text-center text-gray-700 max-w-4xl mx-auto mb-8">
                {t("ground_real_estate.intro")}
              </p>
            </div>

            {/* Luxury Sector */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-jade-green mb-6 text-center">
                {t("ground_real_estate.luxury_sector.title")}
              </h3>
              <p className="text-center text-gray-700 max-w-4xl mx-auto mb-8">
                {t("ground_real_estate.luxury_sector.description")}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <Card className="border-jade-green/10 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-jade-green/10 rounded-full flex items-center justify-center mx-auto mb-4 text-jade-green">
                      <Building className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-lg text-center">{t("ground_real_estate.luxury_sector.punta_pacifica.title")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center">
                      {t("ground_real_estate.luxury_sector.punta_pacifica.description")}
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-jade-green/10 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-jade-green/10 rounded-full flex items-center justify-center mx-auto mb-4 text-jade-green">
                      <Home className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-lg text-center">{t("ground_real_estate.luxury_sector.santa_maria.title")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center">
                      {t("ground_real_estate.luxury_sector.santa_maria.description")}
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-jade-green/10 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-jade-green/10 rounded-full flex items-center justify-center mx-auto mb-4 text-jade-green">
                      <TrendingUp className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-lg text-center">{t("ground_real_estate.luxury_sector.costa_del_este.title")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center">
                      {t("ground_real_estate.luxury_sector.costa_del_este.description")}
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-white rounded-lg p-6 border border-jade-green/10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  <div>
                    <h4 className="font-semibold text-jade-green mb-3">{t("ground_real_estate.luxury_sector.features.title")}</h4>
                    <ul className="space-y-2">
                      {(t.raw("ground_real_estate.luxury_sector.features.items") as string[]).map((item, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-jade-green rounded-full"></div>
                          <span className="text-sm text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-jade-green mb-2">{t("ground_real_estate.luxury_sector.features.stats.returns")}</div>
                    <p className="text-sm text-gray-600">{t("ground_real_estate.luxury_sector.features.stats.returns_desc")}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mid-Range Sector */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-jade-green mb-6 text-center">
                {t("ground_real_estate.mid_range_sector.title")}
              </h3>
              <p className="text-center text-gray-700 max-w-4xl mx-auto mb-8">
                {t("ground_real_estate.mid_range_sector.intro")}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <Card className="border-jade-green/10 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-center">{t("ground_real_estate.mid_range_sector.san_francisco.title")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center">
                      {t("ground_real_estate.mid_range_sector.san_francisco.description")}
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-jade-green/10 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-center">{t("ground_real_estate.mid_range_sector.avenida_balboa.title")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center">
                      {t("ground_real_estate.mid_range_sector.avenida_balboa.description")}
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-jade-green/10 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-center">{t("ground_real_estate.mid_range_sector.amador.title")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center">
                      {t("ground_real_estate.mid_range_sector.amador.description")}
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-jade-green/10 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-center">{t("ground_real_estate.mid_range_sector.panama_pacifico.title")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center">
                      {t("ground_real_estate.mid_range_sector.panama_pacifico.description")}
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-jade-green/10 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <h4 className="text-2xl font-bold text-jade-green mb-2">{t("ground_real_estate.mid_range_sector.stats.price_range")}</h4>
                    <p className="text-sm text-gray-600">{t("ground_real_estate.mid_range_sector.stats.price_range_desc")}</p>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-jade-green mb-2">{t("ground_real_estate.mid_range_sector.stats.returns")}</h4>
                    <p className="text-sm text-gray-600">{t("ground_real_estate.mid_range_sector.stats.returns_desc")}</p>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-jade-green mb-2">{t("ground_real_estate.mid_range_sector.stats.balance")}</h4>
                    <p className="text-sm text-gray-600">{t("ground_real_estate.mid_range_sector.stats.balance_desc")}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Current Trends */}
            <div>
              <h3 className="text-2xl font-bold text-jade-green mb-6 text-center">
                {t("ground_real_estate.trends.title")}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="border-jade-green/10 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-jade-green/10 rounded-full flex items-center justify-center mx-auto mb-4 text-jade-green">
                      <Globe className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-lg text-center">{t("ground_real_estate.trends.digitalization.title")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center">
                      {t("ground_real_estate.trends.digitalization.description")}
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-jade-green/10 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-jade-green/10 rounded-full flex items-center justify-center mx-auto mb-4 text-jade-green">
                      <Building className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-lg text-center">{t("ground_real_estate.trends.mixed_use.title")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center">
                      {t("ground_real_estate.trends.mixed_use.description")}
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-jade-green/10 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-jade-green/10 rounded-full flex items-center justify-center mx-auto mb-4 text-jade-green">
                      <Heart className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-lg text-center">{t("ground_real_estate.trends.sustainability.title")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center">
                      {t("ground_real_estate.trends.sustainability.description")}
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-jade-green/10 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-jade-green/10 rounded-full flex items-center justify-center mx-auto mb-4 text-jade-green">
                      <DollarSign className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-lg text-center">{t("ground_real_estate.trends.financing.title")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center">
                      {t("ground_real_estate.trends.financing.description")}
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
                {t("ground_infrastructure.title")}
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {t("ground_infrastructure.subtitle")}
              </p>
            </div>

            <div className="mb-12">
              <p className="text-center text-gray-700 max-w-4xl mx-auto mb-8">
                {t("ground_infrastructure.intro")}
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
                {t("ground_infrastructure.conclusion.title")}
              </h3>
              <p className="text-center text-gray-700 max-w-4xl mx-auto">
                {t("ground_infrastructure.conclusion.description")}
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
                  {t("ground_medical_tourism.title")}
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  {t("ground_medical_tourism.subtitle")}
                </p>
              </div>

              <div className="bg-jade-green/10 rounded-lg p-8 mb-8">
                <p className="text-center text-gray-700 max-w-4xl mx-auto mb-4">
                  {t("ground_medical_tourism.intro_1")}
                </p>
                <p className="text-center text-gray-700 max-w-4xl mx-auto">
                  {t("ground_medical_tourism.intro_2")}
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
                  {tMedical("cost_comparison_section.title")}
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  {tMedical("cost_comparison_section.subtitle")}
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-jade-green/10">
                      <th className="text-left p-4 font-semibold text-jade-green">
                        {tMedical("cost_comparison_section.table.treatment")}
                      </th>
                      <th className="text-center p-4 font-semibold text-gray-700">
                        {tMedical("cost_comparison_section.table.usa")}
                      </th>
                      <th className="text-center p-4 font-semibold text-gray-700">
                        {tMedical("cost_comparison_section.table.china")}
                      </th>
                      <th className="text-center p-4 font-semibold text-jade-green">
                        {tMedical("cost_comparison_section.table.panama")}
                      </th>
                      <th className="text-center p-4 font-semibold text-gold">
                        {tMedical("cost_comparison_section.table.savings")}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {costComparisons.map((item, index) => (
                      <tr key={index} className="border-b border-jade-green/10 hover:bg-jade-green/5">
                        <td className="p-4 font-medium text-gray-900">
                          {item.procedure}
                        </td>
                        <td className="p-4 text-center text-gray-600">
                          {item.usa}
                        </td>
                        <td className="p-4 text-center text-gray-600">
                          {item.china}
                        </td>
                        <td className="p-4 text-center font-semibold text-jade-green">
                          {item.panama}
                        </td>
                        <td className="p-4 text-center">
                          <div className="inline-flex items-center space-x-2 bg-gold/20 text-gold px-3 py-1 rounded-full">
                            <DollarSign className="w-4 h-4" />
                            <span className="font-semibold">{item.savingsPercent}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
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
                  {tMedical("why_panama.title")}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="border-jade-green/10 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-jade-green/10 rounded-full flex items-center justify-center mx-auto mb-4 text-jade-green">
                      <DollarSign className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-lg text-center">{tMedical("why_panama.cards.competitive_costs.title")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center">
                      {tMedical("why_panama.cards.competitive_costs.description")}
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-jade-green/10 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-jade-green/10 rounded-full flex items-center justify-center mx-auto mb-4 text-jade-green">
                      <Zap className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-lg text-center">{tMedical("why_panama.cards.tech.title")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center">
                      {tMedical("why_panama.cards.tech.description")}
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-jade-green/10 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-jade-green/10 rounded-full flex items-center justify-center mx-auto mb-4 text-jade-green">
                      <Clock className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-lg text-center">{tMedical("why_panama.cards.wait_times.title")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center">
                      {tMedical("why_panama.cards.wait_times.description")}
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-jade-green/10 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-jade-green/10 rounded-full flex items-center justify-center mx-auto mb-4 text-jade-green">
                      <Plane className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-lg text-center">{tMedical("why_panama.cards.location.title")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center">
                      {tMedical("why_panama.cards.location.description")}
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-jade-green/10 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-jade-green/10 rounded-full flex items-center justify-center mx-auto mb-4 text-jade-green">
                      <Heart className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-lg text-center">{tMedical("why_panama.cards.recovery.title")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center">
                      {tMedical("why_panama.cards.recovery.description")}
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-jade-green/10 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-jade-green/10 rounded-full flex items-center justify-center mx-auto mb-4 text-jade-green">
                      <Users className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-lg text-center">{tMedical("why_panama.cards.integrated_services.title")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center">
                      {tMedical("why_panama.cards.integrated_services.description")}
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
                  {tMedical("featured_treatments.title")}
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  {tMedical("featured_treatments.subtitle")}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Stem Cells */}
                <Card className="border-jade-green/10 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-jade-green/10 rounded-full flex items-center justify-center mx-auto mb-4 text-jade-green">
                      <Zap className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-xl text-center">{tMedical("featured_treatments.stem_cell.title")}</CardTitle>
                    <CardDescription className="text-center">
                      {tMedical("featured_treatments.stem_cell.description")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-jade-green mb-3 text-center">{tMedical("featured_treatments.stem_cell.benefits_title")}</h4>
                    <ul className="space-y-2">
                      {(tMedical.raw("featured_treatments.stem_cell.benefits") as string[]).map((benefit, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-gold shrink-0" />
                          <span className="text-sm text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Anti-aging */}
                <Card className="border-jade-green/10 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-jade-green/10 rounded-full flex items-center justify-center mx-auto mb-4 text-jade-green">
                      <Clock className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-xl text-center">{tMedical("featured_treatments.anti_aging.title")}</CardTitle>
                    <CardDescription className="text-center">
                      {tMedical("featured_treatments.anti_aging.description")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-jade-green mb-3 text-center">{tMedical("featured_treatments.anti_aging.benefits_title")}</h4>
                    <ul className="space-y-2">
                      {(tMedical.raw("featured_treatments.anti_aging.benefits") as string[]).map((benefit, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-gold shrink-0" />
                          <span className="text-sm text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Cosmetic Surgery */}
                <Card className="border-jade-green/10 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-jade-green/10 rounded-full flex items-center justify-center mx-auto mb-4 text-jade-green">
                      <Star className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-xl text-center">{tMedical("featured_treatments.cosmetic.title")}</CardTitle>
                    <CardDescription className="text-center">
                      {tMedical("featured_treatments.cosmetic.description")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-jade-green mb-3 text-center">{tMedical("featured_treatments.cosmetic.benefits_title")}</h4>
                    <ul className="space-y-2">
                      {(tMedical.raw("featured_treatments.cosmetic.benefits") as string[]).map((benefit, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-gold shrink-0" />
                          <span className="text-sm text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
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
                {t("investment_section.title")}
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {t("investment_section.subtitle")}
              </p>
            </div>

            {/* Financial Hub */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-jade-green mb-6 text-center">
                {t("investment_section.financial_hub.title")}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="border-jade-green/10 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-jade-green/10 rounded-full flex items-center justify-center mx-auto mb-4 text-jade-green">
                      <Building className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-lg text-center">{t("investment_section.financial_hub.banking_center.title")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center">
                      {t("investment_section.financial_hub.banking_center.description")}
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-jade-green/10 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-jade-green/10 rounded-full flex items-center justify-center mx-auto mb-4 text-jade-green">
                      <Shield className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-lg text-center">{t("investment_section.financial_hub.regulation.title")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center">
                      {t("investment_section.financial_hub.regulation.description")}
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-jade-green/10 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-jade-green/10 rounded-full flex items-center justify-center mx-auto mb-4 text-jade-green">
                      <TrendingUp className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-lg text-center">{t("investment_section.financial_hub.advanced_services.title")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center">
                      {t("investment_section.financial_hub.advanced_services.description")}
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="border-jade-green/10 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-jade-green/10 rounded-full flex items-center justify-center mx-auto mb-4 text-jade-green">
                      <Users className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-lg text-center">{t("investment_section.financial_hub.corporate_structures.title")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center">
                      {t("investment_section.financial_hub.corporate_structures.description")}
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Connectivity */}
            <div className="mb-16 bg-jade-green/5 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-jade-green mb-6 text-center">
                {t("investment_section.connectivity.title")}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-jade-green shadow-sm">
                    <Globe className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">{t("investment_section.connectivity.hub_americas.title")}</h4>
                  <p className="text-gray-600">{t("investment_section.connectivity.hub_americas.description")}</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-jade-green shadow-sm">
                    <Plane className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">{t("investment_section.connectivity.non_stop_flights.title")}</h4>
                  <p className="text-gray-600">{t("investment_section.connectivity.non_stop_flights.description")}</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-jade-green shadow-sm">
                    <Building className="w-8 h-8" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">{t("investment_section.connectivity.airport_expansion.title")}</h4>
                  <p className="text-gray-600">{t("investment_section.connectivity.airport_expansion.description")}</p>
                </div>
              </div>
            </div>

            {/* Real Estate Benefits */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-jade-green mb-6 text-center">
                {t("investment_section.real_estate_benefits.title")}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-jade-green/10 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-center">{t("investment_section.real_estate_benefits.sustained_value.title")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center">
                      {t("investment_section.real_estate_benefits.sustained_value.description")}
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card className="border-jade-green/10 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-center">{t("investment_section.real_estate_benefits.superior_returns.title")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center">
                      {t("investment_section.real_estate_benefits.superior_returns.description")}
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card className="border-jade-green/10 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-center">{t("investment_section.real_estate_benefits.constitutional_protection.title")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 text-center">
                      {t("investment_section.real_estate_benefits.constitutional_protection.description")}
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Tax Advantages */}
            <div className="bg-white border border-jade-green/10 rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-jade-green mb-6 text-center">
                {t("investment_section.tax_advantages.title")}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {(t.raw("investment_section.tax_advantages.list") as any[]).map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-jade-green/10 rounded-full flex items-center justify-center shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-jade-green" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
     {/*  <section className="py-20 bg-jade-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-brand font-bold mb-6">
            {activeTab === "medical_tourism" 
              ? tMedical("cta.medical_title")
              : tMedical("cta.general_title")
            }
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            {activeTab === "medical_tourism"
              ? tMedical("cta.medical_subtitle")
              : tMedical("cta.general_subtitle")
            }
          </p>
          <Button
            size="lg"
            className="bg-gold hover:bg-gold/90 text-jade-green font-semibold text-lg px-8 py-6 h-auto"
          >
            {commonT("free_consultation")}
          </Button>
        </div>
      </section> */}
    </>
  );
}
