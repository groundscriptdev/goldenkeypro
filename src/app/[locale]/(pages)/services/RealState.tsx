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
  const t = useTranslations("real_state_service");

  const luxuryAreas = [
    {
      name: t("market_opportunities.luxury_segment.luxury_areas.punta_pacifica"),
      description: t("market_opportunities.luxury_segment.luxury_areas.punta_pacifica_desc"),
      icon: <Star className="w-5 h-5 text-jade-green" />,
    },
    {
      name: t("market_opportunities.luxury_segment.luxury_areas.santa_maria"),
      description: t("market_opportunities.luxury_segment.luxury_areas.santa_maria_desc"),
      icon: <Globe className="w-5 h-5 text-jade-green" />,
    },
    {
      name: t("market_opportunities.luxury_segment.luxury_areas.costa_este"),
      description: t("market_opportunities.luxury_segment.luxury_areas.costa_este_desc"),
      icon: <Building className="w-5 h-5 text-jade-green" />,
    },
  ];

  const midRangeAreas = [
    {
      name: t("market_opportunities.mid_range_segment.mid_range_areas.san_francisco"),
      description: t("market_opportunities.mid_range_segment.mid_range_areas.san_francisco_desc"),
      icon: <TrendingUp className="w-5 h-5 text-jade-green" />,
    },
    {
      name: t("market_opportunities.mid_range_segment.mid_range_areas.avenida_balboa"),
      description: t("market_opportunities.mid_range_segment.mid_range_areas.avenida_balboa_desc"),
      icon: <MapPin className="w-5 h-5 text-jade-green" />,
    },
    {
      name: t("market_opportunities.mid_range_segment.mid_range_areas.amador"),
      description: t("market_opportunities.mid_range_segment.mid_range_areas.amador_desc"),
      icon: <Home className="w-5 h-5 text-jade-green" />,
    },
    {
      name: t("market_opportunities.mid_range_segment.mid_range_areas.panama_oeste"),
      description: t("market_opportunities.mid_range_segment.mid_range_areas.panama_oeste_desc"),
      icon: <Building className="w-5 h-5 text-jade-green" />,
    },
  ];

  const megaProjects = [
    {
      name: t("mega_projects.metro_line_3.title"),
      description: t("mega_projects.metro_line_3.description"),
      icon: <Target className="w-6 h-6 text-jade-green" />,
    },
    {
      name: t("mega_projects.fourth_bridge.title"),
      description: t("mega_projects.fourth_bridge.description"),
      icon: <Bridge className="w-6 h-6 text-jade-green" />,
    },
    {
      name: t("mega_projects.new_roads.title"),
      description: t("mega_projects.new_roads.description"),
      icon: <ArrowRight className="w-6 h-6 text-jade-green" />,
    },
    {
      name: t("mega_projects.train_project.title"),
      description: t("mega_projects.train_project.description"),
      icon: <Train className="w-6 h-6 text-jade-green" />,
    },
  ];

  const legalAdvantages = [
    {
      title: t("legal_advantages.legal_security.title"),
      description: t("legal_advantages.legal_security.description"),
      icon: <Shield className="w-6 h-6 text-jade-green" />,
    },
    {
      title: t("legal_advantages.tax_benefits.title"),
      description: t("legal_advantages.tax_benefits.description"),
      icon: <DollarSign className="w-6 h-6 text-jade-green" />,
    },
    {
      title: t("legal_advantages.clear_contracts.title"),
      description: t("legal_advantages.clear_contracts.description"),
      icon: <FileText className="w-6 h-6 text-jade-green" />,
    },
  ];

  const companyAdvantages = [
    {
      title: t("company_advantages.trilingual_team.title"),
      description: t("company_advantages.trilingual_team.description"),
      icon: <Users className="w-6 h-6 text-jade-green" />,
    },
    {
      title: t("company_advantages.chinese_client_understanding.title"),
      description: t("company_advantages.chinese_client_understanding.description"),
      icon: <Lightbulb className="w-6 h-6 text-jade-green" />,
    },
    {
      title: t("company_advantages.unique_opportunities.title"),
      description: t("company_advantages.unique_opportunities.description"),
      icon: <Star className="w-6 h-6 text-jade-green" />,
    },
    {
      title: t("company_advantages.comprehensive_support.title"),
      description: t("company_advantages.comprehensive_support.description"),
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
              {t("title")}
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              {t("subtitle")}
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              {t("description")}
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
                {t("why_panama.title")}
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                {t("why_panama.description")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                { icon: <TrendingUp className="w-8 h-8" />, text: t("why_panama.features.diversification") },
                { icon: <Home className="w-8 h-8" />, text: t("why_panama.features.properties") },
                { icon: <Shield className="w-8 h-8" />, text: t("why_panama.features.home") },
                { icon: <FileText className="w-8 h-8" />, text: t("why_panama.features.residence") },
                { icon: <Globe className="w-8 h-8" />, text: t("why_panama.features.citizenship") },
                { icon: <Award className="w-8 h-8" />, text: t("why_panama.features.quality") },
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
                {t("company_description.title")}
              </h3>
              <p className="text-center text-gray-700 mb-6">
                {t("company_description.description")}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {(t.raw("company_description.services") as string[]).map((service: string, index: number) => (
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
              {t("market_opportunities.title")}
            </h2>

            {/* Luxury Segment */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                {t("market_opportunities.luxury_segment.title")}
              </h3>
              <p className="text-gray-600 mb-8">
                {t("market_opportunities.luxury_segment.description")}
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
                <h4 className="font-semibold text-jade-green mb-3">{t("market_opportunities.luxury_segment.advantages.title")}</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {(t.raw("market_opportunities.luxury_segment.advantages.features") as string[]).map((advantage: string, index: number) => (
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
                {t("market_opportunities.mid_range_segment.title")}
              </h3>
              <p className="text-gray-600 mb-8">
                {t("market_opportunities.mid_range_segment.description")}
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
                  {t("market_opportunities.mid_range_segment.investment_range")}
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
              {t("residency_investment.title")}
            </h2>

            <p className="text-gray-600 mb-8 text-center max-w-4xl mx-auto">
              {t("residency_investment.description")}
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-jade-green/10 to-white p-8 rounded-lg">
                <h3 className="text-xl font-bold text-jade-green mb-4">
                  {t("residency_investment.qualified_investor.title")}
                </h3>
                <p className="text-gray-600 mb-4">{t("residency_investment.qualified_investor.description")}</p>
                <div className="space-y-3">
                  {(t.raw("residency_investment.qualified_investor.requirements") as string[]).map((item: string, index: number) => (
                    <div key={index} className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-jade-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg">
                <h3 className="text-xl font-bold text-blue-800 mb-4">
                  {t("residency_investment.advantages.title")}
                </h3>
                <div className="space-y-3">
                  {(t.raw("residency_investment.advantages.features") as string[]).map((advantage: string, index: number) => (
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
              {t("mega_projects.title")}
            </h2>

            <p className="text-gray-600 mb-8 text-center max-w-4xl mx-auto">
              {t("mega_projects.description")}
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
                <strong>{t("mega_projects.impact_note")}</strong>
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
              {t("legal_advantages.title")}
            </h2>

            <p className="text-gray-600 mb-8 text-center max-w-4xl mx-auto">
              {t("legal_advantages.description")}
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
                <strong>{t("legal_advantages.note")}</strong>
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
              {t("company_advantages.title")}
            </h2>

            <p className="text-gray-600 mb-8 text-center max-w-4xl mx-auto">
              {t("company_advantages.description")}
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
              {t("investment_strategy.title")}
            </h2>

            <p className="text-gray-600 mb-8 text-center">
              {t("investment_strategy.description")}
            </p>

            <div className="space-y-6">
              {(t.raw("investment_strategy.steps") as any[]).map((step: any, index: number) => (
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
              {t("final_cta.title")}
            </h2>
            <p className="text-xl mb-8">
              {t("final_cta.description")}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {(t.raw("final_cta.features") as string[]).map((feature: string, index: number) => (
                <div key={index} className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-5 h-5" />
                  <span className="text-sm text-jade-green-800">{feature}</span>
                </div>
              ))}
            </div>
            <div className="bg-white/10 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">
                {t("final_cta.company_note")}
              </h3>
              <p className="text-lg">
                {t("final_cta.company_description")}
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