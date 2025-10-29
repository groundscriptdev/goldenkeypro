import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import { GroundHeaderMinimal } from "@/components/layout/GroundHeaderMinimal";
import { FooterMinimal } from "@/components/layout/FooterMinimal";
import { generateSEO, generateServiceSchema } from "@/lib/seo";
import { StructuredData } from "@/components/seo/StructuredData";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Train,
  Building,
  TrendingUp,
  MapPin,
  Clock,
  DollarSign,
} from "lucide-react";
import Link from "next/link";

// Suppress dynamic render warnings for static export

interface InfrastructurePageProps {
  params: { locale: string };
}

export async function generateMetadata({
  params,
}: InfrastructurePageProps): Promise<Metadata> {
  const t = await getTranslations("infrastructure");
  const seoT = await getTranslations("seo");

  return generateSEO({
    title: `${t("title")} - Panama Golden Key`,
    description: t("subtitle"),
    keywords:
      "Panama infrastructure, Metro Line 3, Panama Canal expansion, Panama development projects",
    canonical: `https://panamagoldenkey.com/${params.locale}/infrastructure`,
    locale: params.locale,
    alternateLocales: params.locale === "en" ? ["zh"] : ["en"],
    ogImage: `/images/og-infrastructure-${params.locale}.jpg`,
  });
}

export default async function InfrastructurePage({
  params,
}: InfrastructurePageProps) {
  const t = await getTranslations("infrastructure");
  const commonT = await getTranslations("common");

  // Generate structured data
  const serviceSchema = generateServiceSchema(
    "Panama Infrastructure Investment Opportunities",
    t("subtitle")
  );

  const projects = [
    {
      icon: <Train className="w-8 h-8" />,
      title: t("metro_line_3.title"),
      subtitle: t("metro_line_3.subtitle"),
      investment: t("metro_line_3.investment"),
      completion: t("metro_line_3.completion"),
      impact: t("metro_line_3.impact"),
      appreciation: t("metro_line_3.appreciation"),
      color: "bg-blue-500",
      features: [
        "45-minute connectivity across metro area",
        "Connects Panama City to west side",
        "Stops at key residential and commercial areas",
        "Integration with existing metro system",
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
      title: t("fourth_bridge.title"),
      subtitle: t("fourth_bridge.subtitle"),
      investment: t("fourth_bridge.investment"),
      completion: t("fourth_bridge.completion"),
      impact: t("fourth_bridge.impact"),
      opportunities: t("fourth_bridge.opportunities"),
      color: "bg-green-500",
      features: [
        "Spans Panama Canal at Atlantic entrance",
        "4-lane highway with pedestrian paths",
        "Reduces traffic congestion by 40%",
        "Connects Colón Province to Panama City",
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
      title: t("railway.title"),
      subtitle: t("railway.subtitle"),
      investment: t("railway.investment"),
      impact: t("railway.impact"),
      potential: t("railway.potential"),
      color: "bg-purple-500",
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

  const investmentImpact = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: t("investment_impact.area_development"),
      description:
        "Strategic area development maps showing growth corridors and investment hotspots",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: t("investment_impact.value_appreciation"),
      description:
        "Projected property value appreciation of 40-80% in infrastructure-adjacent areas",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: t("investment_impact.timeline"),
      description:
        "Project timeline visualization with key milestones and completion dates",
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: t("investment_impact.opportunities"),
      description:
        "Curated investment opportunities by area with projected returns",
    },
  ];

  return (
    <>
      {/* Structured Data */}
      <StructuredData data={serviceSchema} />

      <div className="min-h-screen">
        <GroundHeaderMinimal />
        <main>
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-jade-green to-emerald-700 text-white py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-brand font-bold mb-6">
                  {t("title")}
                </h1>
                <p className="text-xl md:text-2xl text-gold/90 mb-8 max-w-3xl mx-auto">
                  {t("subtitle")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    className="bg-gold text-jade-green hover:bg-gold/90 font-brand text-lg px-8 py-3"
                  >
                    <Link href={`/${params.locale}/contact`}>
                      {commonT("free_consultation")}
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-jade-green font-brand text-lg px-8 py-3"
                  >
                    Download Infrastructure Report
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Investment Overview */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-brand text-jade-green font-bold mb-4">
                    $8 Billion Infrastructure Transformation
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Panama's unprecedented infrastructure development is
                    creating exceptional investment opportunities
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-jade-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <DollarSign className="w-8 h-8 text-jade-green" />
                    </div>
                    <h3 className="text-2xl font-bold text-jade-green mb-2">
                      $8B
                    </h3>
                    <p className="text-gray-600">Total Investment</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-jade-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-8 h-8 text-jade-green" />
                    </div>
                    <h3 className="text-2xl font-bold text-jade-green mb-2">
                      40-80%
                    </h3>
                    <p className="text-gray-600">Property Value Growth</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-jade-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-8 h-8 text-jade-green" />
                    </div>
                    <h3 className="text-2xl font-bold text-jade-green mb-2">
                      2026-2029
                    </h3>
                    <p className="text-gray-600">Completion Timeline</p>
                  </div>
                </div>

                <div className="bg-jade-green/10 rounded-lg p-8">
                  <h3 className="text-xl font-semibold text-jade-green mb-4">
                    Why Invest in Panama Infrastructure?
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-jade-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          Government-Backed Projects
                        </h4>
                        <p className="text-sm text-gray-600">
                          Major infrastructure projects with full government
                          support
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-jade-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          Strategic Location
                        </h4>
                        <p className="text-sm text-gray-600">
                          Projects enhance Panama's strategic position as global
                          logistics hub
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-jade-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          Economic Growth Driver
                        </h4>
                        <p className="text-sm text-gray-600">
                          Infrastructure development fuels economic expansion
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-jade-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          Proven ROI Potential
                        </h4>
                        <p className="text-sm text-gray-600">
                          Historical data shows strong returns on
                          infrastructure-adjacent properties
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Major Projects */}
          <section className="py-16 bg-jade-green/5">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-brand text-jade-green font-bold mb-4">
                    Major Infrastructure Projects
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Flagship projects driving Panama's transformation
                  </p>
                </div>

                <div className="space-y-12">
                  {projects.map((project, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg shadow-lg overflow-hidden"
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
                                {project.completion || "2026-2029"}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="md:w-2/3 p-8">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-3">
                                Project Features
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
                                Investment Opportunities
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
                              Impact: {project.impact}
                            </p>
                            {project.appreciation && (
                              <p className="text-sm text-jade-green mt-1">
                                Expected Appreciation: {project.appreciation}
                              </p>
                            )}
                            {project.opportunities && (
                              <p className="text-sm text-jade-green mt-1">
                                Opportunities: {project.opportunities}
                              </p>
                            )}
                            {project.potential && (
                              <p className="text-sm text-jade-green mt-1">
                                Potential: {project.potential}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Investment Impact Analysis */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-brand text-jade-green font-bold mb-4">
                    {t("investment_impact.title")}
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Comprehensive analysis of infrastructure investment impact
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {investmentImpact.map((item, index) => (
                    <Card
                      key={index}
                      className="text-center border-jade-green/10 hover:shadow-lg transition-shadow"
                    >
                      <CardHeader>
                        <div className="w-12 h-12 bg-jade-green/10 rounded-full flex items-center justify-center mx-auto mb-4 text-jade-green">
                          {item.icon}
                        </div>
                        <CardTitle className="text-lg">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-gray-600">
                          {item.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Investment Timeline */}
          <section className="py-16 bg-jade-green/5">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-brand text-jade-green font-bold mb-4">
                    Investment Timeline & Milestones
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Key milestones and optimal investment windows
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-jade-green/30"></div>
                  {[
                    {
                      year: "2024",
                      title: "Planning Phase",
                      description: "Project approvals and planning completion",
                    },
                    {
                      year: "2025",
                      title: "Early Construction",
                      description:
                        "Groundbreaking and initial construction works",
                    },
                    {
                      year: "2026",
                      title: "Metro Line 3 Opening",
                      description: "First major project completion",
                    },
                    {
                      year: "2027-2028",
                      title: "Peak Construction",
                      description: "Maximum construction activity",
                    },
                    {
                      year: "2029",
                      title: "Fourth Bridge Completion",
                      description: "Final major project milestone",
                    },
                  ].map((milestone, index) => (
                    <div
                      key={index}
                      className={`relative flex items-center mb-8 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                    >
                      <div
                        className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}
                      >
                        <div className="bg-white p-6 rounded-lg shadow-md border border-jade-green/10">
                          <h3 className="font-semibold text-jade-green mb-2">
                            {milestone.year}
                          </h3>
                          <h4 className="font-medium text-gray-900 mb-2">
                            {milestone.title}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {milestone.description}
                          </p>
                        </div>
                      </div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-jade-green rounded-full border-4 border-white"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-jade-green text-white">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-brand text-white font-bold mb-6">
                  Invest in Panama's Infrastructure Future
                </h2>
                <p className="text-xl text-gold/90 mb-8">
                  Secure your position in Panama's $8 billion infrastructure
                  transformation
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    className="bg-gold text-jade-green hover:bg-gold/90 font-brand text-lg px-8 py-3"
                  >
                    <Link href={`/${params.locale}/contact`}>
                      {commonT("free_consultation")}
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-jade-green font-brand text-lg px-8 py-3"
                  >
                    Download Investment Report
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>

        <FooterMinimal />
      </div>
    </>
  );
}
