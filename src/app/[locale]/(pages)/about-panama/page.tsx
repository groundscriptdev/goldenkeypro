import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import { GroundHeaderMinimal } from "@/components/layout/GroundHeaderMinimal";
import { FooterMinimal } from "@/components/layout/FooterMinimal";
import { generateSEO, generateServiceSchema } from "@/lib/seo";
import { StructuredData } from "@/components/seo/StructuredData";
import { Button } from "@/components/ui/button";
import { Titulos } from '@/components/groundscript/subheader';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
} from "lucide-react";
import Link from "next/link";

// Suppress dynamic render warnings for static export

interface AboutPanamaPageProps {
  params: { locale: string };
}

export async function generateMetadata({
  params,
}: AboutPanamaPageProps): Promise<Metadata> {
  const t = await getTranslations("about_panama");
  const seoT = await getTranslations("seo");

  return generateSEO({
    title: `${t("title")} - Panama Golden Key`,
    description: t("subtitle"),
    keywords:
      "About Panama, Panama economy, Panama investment, Panama residency benefits",
    canonical: `https://panamagoldenkey.com/${params.locale}/about-panama`,
    locale: params.locale,
    alternateLocales: params.locale === "en" ? ["zh"] : ["en"],
    ogImage: `/images/og-about-panama-${params.locale}.jpg`,
  });
}

export default async function AboutPanamaPage({
  params,
}: AboutPanamaPageProps) {
  const t = await getTranslations("about_panama");
  const commonT = await getTranslations("common");

  // Generate structured data
  const serviceSchema = generateServiceSchema(
    "About Panama - Investment Paradise",
    t("subtitle")
  );

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
      description:
        "International banking center with robust financial services",
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
      description:
        "No capital gains tax on certain investments and property sales",
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
      description:
        "International schools and universities with English instruction",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: t("quality_of_life.safety"),
      description: "Safe and secure environment with stable political system",
    },
  ];

  // Infrastructure projects from the original infrastructure page
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

  return (
    <>
      {/* Structured Data */}
      <StructuredData data={serviceSchema} />

      <div className="min-h-screen">
        <GroundHeaderMinimal />
        <main>
          <Titulos
            titleKey="title"
            descriptionKey="subtitle"
            translationNamespace="about_panama"
            backgroundImage="/images/panama-skyline.jpg"
            tabs={[
              { id: "location", labelKey: "strategic_location.title" },
              { id: "economy", labelKey: "economic_benefits.title" },
              { id: "tax", labelKey: "tax_advantages.title" },
              { id: "quality", labelKey: "quality_of_life.title" }
            ]}
            defaultActiveTab="location"
          />

          {/* Strategic Location */}
          <section className="py-16 bg-white">
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
          </section>

          {/* Economic Benefits */}
          <section className="py-16 bg-jade-green/5">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-brand text-jade-green font-bold mb-4">
                    {t("economic_benefits.title")}
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    {t("economic_benefits.description")}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  {economicBenefits.map((benefit, index) => (
                    <Card
                      key={index}
                      className="text-center border-jade-green/10 hover:shadow-lg transition-shadow"
                    >
                      <CardHeader>
                        <div className="w-16 h-16 bg-jade-green/10 rounded-full flex items-center justify-center mx-auto mb-4 text-jade-green">
                          {benefit.icon}
                        </div>
                        <CardTitle className="text-lg">
                          {benefit.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-gray-600">
                          {benefit.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="bg-white rounded-lg p-8 border border-jade-green/10">
                  <h3 className="text-xl font-semibold text-jade-green mb-6 text-center">
                    Economic Indicators
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                    <div>
                      <h4 className="text-2xl font-bold text-jade-green mb-2">
                        5-6%
                      </h4>
                      <p className="text-sm text-gray-600">Annual GDP Growth</p>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-jade-green mb-2">
                        2.5%
                      </h4>
                      <p className="text-sm text-gray-600">Inflation Rate</p>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-jade-green mb-2">
                        AAA
                      </h4>
                      <p className="text-sm text-gray-600">Credit Rating</p>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-jade-green mb-2">
                        142+
                      </h4>
                      <p className="text-sm text-gray-600">Trade Partners</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Tax Advantages */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-brand text-jade-green font-bold mb-4">
                    {t("tax_advantages.title")}
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    {t("tax_advantages.description")}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {taxAdvantages.map((advantage, index) => (
                    <Card
                      key={index}
                      className="border-jade-green/10 hover:shadow-lg transition-shadow"
                    >
                      <CardHeader>
                        <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mb-4">
                          <DollarSign className="w-6 h-6 text-gold" />
                        </div>
                        <CardTitle className="text-lg">
                          {advantage.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-gray-600">
                          {advantage.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mt-12 bg-jade-green/10 rounded-lg p-8">
                  <h3 className="text-xl font-semibold text-jade-green mb-4">
                    Additional Tax Benefits
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-jade-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          No Inheritance Tax
                        </h4>
                        <p className="text-sm text-gray-600">
                          Assets can be passed to heirs without taxation
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-jade-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          Business Tax Incentives
                        </h4>
                        <p className="text-sm text-gray-600">
                          Special tax regimes for certain business activities
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quality of Life */}
          <section className="py-16 bg-jade-green/5">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-brand text-jade-green font-bold mb-4">
                    {t("quality_of_life.title")}
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    {t("quality_of_life.description")}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {qualityOfLife.map((feature, index) => (
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

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white rounded-lg p-6 border border-jade-green/10">
                    <h3 className="text-lg font-semibold text-jade-green mb-4">
                      Lifestyle Benefits
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-jade-green rounded-full"></div>
                        <span className="text-sm text-gray-600">
                          Tropical climate year-round
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-jade-green rounded-full"></div>
                        <span className="text-sm text-gray-600">
                          Beautiful beaches and natural attractions
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-jade-green rounded-full"></div>
                        <span className="text-sm text-gray-600">
                          Vibrant expatriate community
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-jade-green rounded-full"></div>
                        <span className="text-sm text-gray-600">
                          Rich culture and history
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-6 border border-jade-green/10">
                    <h3 className="text-lg font-semibold text-jade-green mb-4">
                      Modern Amenities
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-jade-green rounded-full"></div>
                        <span className="text-sm text-gray-600">
                          World-class shopping and dining
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-jade-green rounded-full"></div>
                        <span className="text-sm text-gray-600">
                          Modern infrastructure
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-jade-green rounded-full"></div>
                        <span className="text-sm text-gray-600">
                          International airport hub
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-jade-green rounded-full"></div>
                        <span className="text-sm text-gray-600">
                          Recreational facilities and activities
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Infrastructure Section - Integrated from infrastructure page */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-brand text-jade-green font-bold mb-4">
                    Infrastructure Development
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    $8 Billion infrastructure transformation creating
                    exceptional investment opportunities
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

          {/* CTA Section */}
          <section className="py-16 bg-jade-green text-white">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-brand text-white font-bold mb-6">
                  Discover Why Panama is Perfect for You
                </h2>
                <p className="text-xl text-gold/90 mb-8">
                  Schedule a free consultation to learn more about living and
                  investing in Panama
                </p>
                <Button
                  asChild
                  className="bg-gold text-jade-green hover:bg-gold/90 font-brand text-lg px-8 py-3"
                >
                  <Link href={`/${params.locale}/contact`}>
                    {commonT("free_consultation")}
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        </main>
        <FooterMinimal />
      </div>
    </>
  );
}
