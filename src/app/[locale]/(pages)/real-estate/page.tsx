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
  Building,
  TrendingUp,
  MapPin,
  DollarSign,
  Home,
  Building2,
} from "lucide-react";
import Link from "next/link";

// Suppress dynamic render warnings for static export

interface RealEstatePageProps {
  params: { locale: string };
}

export async function generateMetadata({
  params,
}: RealEstatePageProps): Promise<Metadata> {
  const t = await getTranslations("real_estate");
  const seoT = await getTranslations("seo");

  return generateSEO({
    title: `${t("title")} - Panama Golden Key`,
    description: t("subtitle"),
    keywords:
      "Panama real estate, Panama property investment, Panama luxury homes, Panama real estate ROI",
    canonical: `https://panamagoldenkey.com/${params.locale}/real-estate`,
    locale: params.locale,
    alternateLocales: params.locale === "en" ? ["zh"] : ["en"],
    ogImage: `/images/og-real-estate-${params.locale}.jpg`,
  });
}

export default async function RealEstatePage({ params }: RealEstatePageProps) {
  const t = await getTranslations("real_estate");
  const commonT = await getTranslations("common");

  // Generate structured data
  const serviceSchema = generateServiceSchema(
    "Panama Real Estate Investment",
    t("subtitle")
  );

  const luxuryProperties = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: t("luxury_market.punta_pacifica.title"),
      description: t("luxury_market.punta_pacifica.description"),
      priceRange: t("luxury_market.punta_pacifica.price_range"),
      avgRoi: t("luxury_market.punta_pacifica.avg_roi"),
      features: [
        "Ocean views",
        "Luxury amenities",
        "Premium location",
        "High appreciation",
      ],
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: t("luxury_market.santa_maria.title"),
      description: t("luxury_market.santa_maria.description"),
      priceRange: t("luxury_market.santa_maria.price_range"),
      avgRoi: t("luxury_market.santa_maria.avg_roi"),
      features: [
        "Golf course",
        "Country club",
        "Exclusive community",
        "World-class amenities",
      ],
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: t("luxury_market.costa_este.title"),
      description: t("luxury_market.costa_este.description"),
      priceRange: t("luxury_market.costa_este.price_range"),
      avgRoi: t("luxury_market.costa_este.avg_roi"),
      features: [
        "Financial district",
        "Modern infrastructure",
        "Business center",
        "High-end shopping",
      ],
    },
  ];

  const midRangeProperties = [
    {
      icon: <Home className="w-6 h-6" />,
      title: t("mid_range.san_francisco.title"),
      description: t("mid_range.san_francisco.description"),
      priceRange: t("mid_range.san_francisco.price_range"),
      avgRoi: t("mid_range.san_francisco.avg_roi"),
      features: [
        "Established neighborhood",
        "Good appreciation",
        "Family-friendly",
        "Convenient location",
      ],
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: t("mid_range.avenida_balboa.title"),
      description: t("mid_range.avenida_balboa.description"),
      priceRange: t("mid_range.avenida_balboa.price_range"),
      avgRoi: t("mid_range.avenida_balboa.avg_roi"),
      features: [
        "Strategic location",
        "Canal views",
        "Tourist area",
        "High rental demand",
      ],
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: t("mid_range.amador.title"),
      description: t("mid_range.amador.description"),
      priceRange: t("mid_range.amador.price_range"),
      avgRoi: t("mid_range.amador.avg_roi"),
      features: [
        "Canal views",
        "Growing area",
        "Tourism potential",
        "New developments",
      ],
    },
  ];

  const emergingAreas = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: t("emerging_areas.panama_pacifico.title"),
      description: t("emerging_areas.panama_pacifico.description"),
      priceRange: t("emerging_areas.panama_pacifico.price_range"),
      growthPotential: t("emerging_areas.panama_pacifico.growth_potential"),
      features: [
        "Special economic zone",
        "Metro Line 3",
        "Tax benefits",
        "Industrial hub",
      ],
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: t("emerging_areas.costa_verde.title"),
      description: t("emerging_areas.costa_verde.description"),
      priceRange: t("emerging_areas.costa_verde.price_range"),
      growthPotential: t("emerging_areas.costa_verde.growth_potential"),
      features: [
        "Coastal development",
        "New infrastructure",
        "Beach access",
        "Tourism growth",
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
                    View Properties
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Market Overview */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-brand text-jade-green font-bold mb-4">
                    Panama Real Estate Market Overview
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Discover why Panama's real estate market offers exceptional
                    opportunities for investors
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-jade-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <TrendingUp className="w-8 h-8 text-jade-green" />
                    </div>
                    <h3 className="text-2xl font-bold text-jade-green mb-2">
                      5-7%
                    </h3>
                    <p className="text-gray-600">Annual ROI</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-jade-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <DollarSign className="w-8 h-8 text-jade-green" />
                    </div>
                    <h3 className="text-2xl font-bold text-jade-green mb-2">
                      $300K
                    </h3>
                    <p className="text-gray-600">Minimum Investment</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-jade-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Building className="w-8 h-8 text-jade-green" />
                    </div>
                    <h3 className="text-2xl font-bold text-jade-green mb-2">
                      40-60%
                    </h3>
                    <p className="text-gray-600">Growth Potential</p>
                  </div>
                </div>

                <div className="bg-jade-green/10 rounded-lg p-8">
                  <h3 className="text-xl font-semibold text-jade-green mb-4">
                    Why Invest in Panama Real Estate?
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-jade-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          Strong Economic Growth
                        </h4>
                        <p className="text-sm text-gray-600">
                          Panama's economy continues to grow at 5-6% annually
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-jade-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          Dollarized Economy
                        </h4>
                        <p className="text-sm text-gray-600">
                          No currency risk with USD as official currency
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-jade-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          Tax Benefits
                        </h4>
                        <p className="text-sm text-gray-600">
                          Favorable tax regime for foreign investors
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
                          Hub of the Americas with excellent connectivity
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Luxury Market */}
          <section className="py-16 bg-jade-green/5">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-brand text-jade-green font-bold mb-4">
                    {t("luxury_market.title")}
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    {t("luxury_market.description")}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {luxuryProperties.map((property, index) => (
                    <Card
                      key={index}
                      className="border-jade-green/10 hover:shadow-lg transition-shadow"
                    >
                      <CardHeader>
                        <div className="w-12 h-12 bg-jade-green/10 rounded-full flex items-center justify-center mb-4 text-jade-green">
                          {property.icon}
                        </div>
                        <CardTitle className="text-lg">
                          {property.title}
                        </CardTitle>
                        <CardDescription>
                          {property.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-gray-600">
                              Price Range:
                            </span>
                            <span className="font-semibold text-jade-green">
                              {property.priceRange}
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-gray-600">
                              Avg ROI:
                            </span>
                            <span className="font-semibold text-jade-green">
                              {property.avgRoi}
                            </span>
                          </div>
                          <div className="pt-3 border-t border-jade-green/10">
                            <h4 className="font-medium text-gray-900 mb-2">
                              Key Features:
                            </h4>
                            <ul className="space-y-1">
                              {property.features.map((feature, idx) => (
                                <li
                                  key={idx}
                                  className="text-sm text-gray-600 flex items-center"
                                >
                                  <span className="w-1.5 h-1.5 bg-jade-green rounded-full mr-2"></span>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Mid-Range Opportunities */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-brand text-jade-green font-bold mb-4">
                    {t("mid_range.title")}
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    {t("mid_range.description")}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {midRangeProperties.map((property, index) => (
                    <Card
                      key={index}
                      className="border-jade-green/10 hover:shadow-lg transition-shadow"
                    >
                      <CardHeader>
                        <div className="w-12 h-12 bg-jade-green/10 rounded-full flex items-center justify-center mb-4 text-jade-green">
                          {property.icon}
                        </div>
                        <CardTitle className="text-lg">
                          {property.title}
                        </CardTitle>
                        <CardDescription>
                          {property.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-gray-600">
                              Price Range:
                            </span>
                            <span className="font-semibold text-jade-green">
                              {property.priceRange}
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-gray-600">
                              Avg ROI:
                            </span>
                            <span className="font-semibold text-jade-green">
                              {property.avgRoi}
                            </span>
                          </div>
                          <div className="pt-3 border-t border-jade-green/10">
                            <h4 className="font-medium text-gray-900 mb-2">
                              Key Features:
                            </h4>
                            <ul className="space-y-1">
                              {property.features.map((feature, idx) => (
                                <li
                                  key={idx}
                                  className="text-sm text-gray-600 flex items-center"
                                >
                                  <span className="w-1.5 h-1.5 bg-jade-green rounded-full mr-2"></span>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Emerging Areas */}
          <section className="py-16 bg-jade-green/5">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-brand text-jade-green font-bold mb-4">
                    {t("emerging_areas.title")}
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    {t("emerging_areas.description")}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {emergingAreas.map((area, index) => (
                    <Card
                      key={index}
                      className="border-jade-green/10 hover:shadow-lg transition-shadow"
                    >
                      <CardHeader>
                        <div className="w-12 h-12 bg-jade-green/10 rounded-full flex items-center justify-center mb-4 text-jade-green">
                          {area.icon}
                        </div>
                        <CardTitle className="text-lg">{area.title}</CardTitle>
                        <CardDescription>{area.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-gray-600">
                              Price Range:
                            </span>
                            <span className="font-semibold text-jade-green">
                              {area.priceRange}
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-gray-600">
                              Growth Potential:
                            </span>
                            <span className="font-semibold text-jade-green">
                              {area.growthPotential}
                            </span>
                          </div>
                          <div className="pt-3 border-t border-jade-green/10">
                            <h4 className="font-medium text-gray-900 mb-2">
                              Key Features:
                            </h4>
                            <ul className="space-y-1">
                              {area.features.map((feature, idx) => (
                                <li
                                  key={idx}
                                  className="text-sm text-gray-600 flex items-center"
                                >
                                  <span className="w-1.5 h-1.5 bg-jade-green rounded-full mr-2"></span>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Investment Analysis */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-brand text-jade-green font-bold mb-4">
                    {t("investment_analysis.title")}
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Comprehensive analysis to support your investment decisions
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Card className="text-center">
                    <CardHeader>
                      <TrendingUp className="w-8 h-8 text-jade-green mx-auto mb-2" />
                      <CardTitle className="text-lg">
                        {t("investment_analysis.market_trends")}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">
                        Detailed market analysis and trend forecasting
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="text-center">
                    <CardHeader>
                      <Building className="w-8 h-8 text-jade-green mx-auto mb-2" />
                      <CardTitle className="text-lg">
                        {t("investment_analysis.infrastructure_impact")}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">
                        Infrastructure development impact on property values
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="text-center">
                    <CardHeader>
                      <DollarSign className="w-8 h-8 text-jade-green mx-auto mb-2" />
                      <CardTitle className="text-lg">
                        {t("investment_analysis.roi_projections")}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">
                        ROI projections for different property types
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="text-center">
                    <CardHeader>
                      <MapPin className="w-8 h-8 text-jade-green mx-auto mb-2" />
                      <CardTitle className="text-lg">
                        {t("investment_analysis.legal_framework")}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">
                        Legal framework and property rights overview
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-jade-green text-white">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-brand text-white font-bold mb-6">
                  Ready to Invest in Panama Real Estate?
                </h2>
                <p className="text-xl text-gold/90 mb-8">
                  Schedule a free consultation to explore premium investment
                  opportunities
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
                    Download Investment Guide
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
