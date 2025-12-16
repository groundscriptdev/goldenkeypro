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

interface RealEstatePageProps {
  params: { locale: string };
}

export async function generateMetadata({
  params,
}: RealEstatePageProps): Promise<Metadata> {
  const t = await getTranslations("real_estate");

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
    t("seo.service_name"),
    t("subtitle")
  );

  const luxuryProperties = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: t("luxury_market.punta_pacifica.title"),
      description: t("luxury_market.punta_pacifica.description"),
      priceRange: t("luxury_market.punta_pacifica.price_range"),
      avgRoi: t("luxury_market.punta_pacifica.avg_roi"),
      features: t.raw("luxury_market.punta_pacifica.features") as string[],
      image: "/assets/one.jpg",
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: t("luxury_market.santa_maria.title"),
      description: t("luxury_market.santa_maria.description"),
      priceRange: t("luxury_market.santa_maria.price_range"),
      avgRoi: t("luxury_market.santa_maria.avg_roi"),
      features: t.raw("luxury_market.santa_maria.features") as string[],
      image: "/assets/santamaria3.jpg",
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: t("luxury_market.costa_este.title"),
      description: t("luxury_market.costa_este.description"),
      priceRange: t("luxury_market.costa_este.price_range"),
      avgRoi: t("luxury_market.costa_este.avg_roi"),
      features: t.raw("luxury_market.costa_este.features") as string[],
      image: "/assets/costadeleste.jpg",
    },
  ];

  const midRangeProperties = [
    {
      icon: <Home className="w-6 h-6" />,
      title: t("mid_range.san_francisco.title"),
      description: t("mid_range.san_francisco.description"),
      priceRange: t("mid_range.san_francisco.price_range"),
      avgRoi: t("mid_range.san_francisco.avg_roi"),
      features: t.raw("mid_range.san_francisco.features") as string[],
      image: "/assets/sanfrancisco.jpeg",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: t("mid_range.avenida_balboa.title"),
      description: t("mid_range.avenida_balboa.description"),
      priceRange: t("mid_range.avenida_balboa.price_range"),
      avgRoi: t("mid_range.avenida_balboa.avg_roi"),
      features: t.raw("mid_range.avenida_balboa.features") as string[],
      image: "/assets/avebalboa.webp",
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: t("mid_range.amador.title"),
      description: t("mid_range.amador.description"),
      priceRange: t("mid_range.amador.price_range"),
      avgRoi: t("mid_range.amador.avg_roi"),
      features: t.raw("mid_range.amador.features") as string[],
      image: "/assets/amador.jpg",
    },
  ];

  const emergingAreas = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: t("emerging_areas.panama_pacifico.title"),
      description: t("emerging_areas.panama_pacifico.description"),
      priceRange: t("emerging_areas.panama_pacifico.price_range"),
      growthPotential: t("emerging_areas.panama_pacifico.growth_potential"),
      features: t.raw("emerging_areas.panama_pacifico.features") as string[],
      image: "/assets/panamapacifico.jpg",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: t("emerging_areas.beach_zone_mid.title"),
      description: t("emerging_areas.beach_zone_mid.description"),
      priceRange: t("emerging_areas.beach_zone_mid.price_range"),
      growthPotential: t("emerging_areas.beach_zone_mid.growth_potential"),
      features: t.raw("emerging_areas.beach_zone_mid.features") as string[],
      image: "/assets/venao2.jpg",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: t("emerging_areas.beach_zone_premium.title"),
      description: t("emerging_areas.beach_zone_premium.description"),
      priceRange: t("emerging_areas.beach_zone_premium.price_range"),
      growthPotential: t("emerging_areas.beach_zone_premium.growth_potential"),
      features: t.raw("emerging_areas.beach_zone_premium.features") as string[],
      image: "/assets/venao.jpg",
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
                    {t("market_overview.title")}
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    {t("market_overview.subtitle")}
                  </p>
                </div>

                <div className="bg-jade-green/10 rounded-lg p-8">
                  <h3 className="text-xl font-semibold text-jade-green mb-4">
                    {t("market_overview.why_invest_title")}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-jade-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {t("market_overview.cards.economic_growth.title")}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {t(
                            "market_overview.cards.economic_growth.description"
                          )}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-jade-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {t("market_overview.cards.dollarized_economy.title")}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {t(
                            "market_overview.cards.dollarized_economy.description"
                          )}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-jade-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {t("market_overview.cards.tax_benefits.title")}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {t("market_overview.cards.tax_benefits.description")}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-jade-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {t("market_overview.cards.strategic_location.title")}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {t(
                            "market_overview.cards.strategic_location.description"
                          )}
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
                      className="relative overflow-hidden bg-black border-jade-green/10 hover:shadow-lg transition-shadow"
                    >
                      <div className="absolute top-0 left-0 w-full z-0">
                        <img
                          src={property.image}
                          alt={property.title}
                          className="w-full h-auto object-cover opacity-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
                      </div>
                      <CardHeader className="relative z-10">
                        <div className="w-12 h-12 bg-black/20 rounded-full flex items-center justify-center mb-4 text-gold">
                          {property.icon}
                        </div>
                        <CardTitle className="text-lg text-gold">
                          {property.title}
                        </CardTitle>
                        <CardDescription className="text-white/90">{property.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="relative z-10">
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-white/80">
                              {t("labels.price_range")}
                            </span>
                            <span className="font-semibold text-gold">
                              {property.priceRange}
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-white/80">
                              {t("labels.avg_roi")}
                            </span>
                            <span className="font-semibold text-gold">
                              {property.avgRoi}
                            </span>
                          </div>
                          <div className="pt-3 border-t border-white/20">
                            <h4 className="font-medium text-white mb-2">
                              {t("labels.key_features")}
                            </h4>
                            <ul className="space-y-1">
                              {property.features.map((feature, idx) => (
                                <li
                                  key={idx}
                                  className="text-sm text-white/80 flex items-center"
                                >
                                  <span className="w-1.5 h-1.5 bg-gold rounded-full mr-2"></span>
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
                      className="relative overflow-hidden bg-black border-jade-green/10 hover:shadow-lg transition-shadow"
                    >
                      <div className="absolute top-0 left-0 w-full z-0">
                        <img
                          src={property.image}
                          alt={property.title}
                          className="w-full h-auto object-cover opacity-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
                      </div>
                      <CardHeader className="relative z-10">
                        <div className="w-12 h-12 bg-black/20 rounded-full flex items-center justify-center mb-4 text-gold">
                          {property.icon}
                        </div>
                        <CardTitle className="text-lg text-gold">
                          {property.title}
                        </CardTitle>
                        <CardDescription className="text-white/90">{property.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="relative z-10">
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-white/80">
                              {t("labels.price_range")}
                            </span>
                            <span className="font-semibold text-gold">
                              {property.priceRange}
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-white/80">
                              {t("labels.avg_roi")}
                            </span>
                            <span className="font-semibold text-gold">
                              {property.avgRoi}
                            </span>
                          </div>
                          <div className="pt-3 border-t border-white/20">
                            <h4 className="font-medium text-white mb-2">
                              {t("labels.key_features")}
                            </h4>
                            <ul className="space-y-1">
                              {property.features.map((feature, idx) => (
                                <li
                                  key={idx}
                                  className="text-sm text-white/80 flex items-center"
                                >
                                  <span className="w-1.5 h-1.5 bg-gold rounded-full mr-2"></span>
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
                      className="relative overflow-hidden bg-black border-jade-green/10 hover:shadow-lg transition-shadow"
                    >
                      <div className="absolute top-0 left-0 w-full z-0">
                        <img
                          src={area.image}
                          alt={area.title}
                          className="w-full h-auto object-cover opacity-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
                      </div>
                      <CardHeader className="relative z-10">
                        <div className="w-12 h-12 bg-black/20 rounded-full flex items-center justify-center mb-4 text-gold">
                          {area.icon}
                        </div>
                        <CardTitle className="text-lg text-gold">{area.title}</CardTitle>
                        <CardDescription className="text-white/90">{area.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="relative z-10">
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-white/80">
                              {t("labels.price_range")}
                            </span>
                            <span className="font-semibold text-gold">
                              {area.priceRange}
                            </span>
                          </div>
                          <div className="pt-3 border-t border-white/20">
                            <h4 className="font-medium text-white mb-2">
                              {t("labels.key_features")}
                            </h4>
                            <ul className="space-y-1">
                              {area.features.map((feature, idx) => (
                                <li
                                  key={idx}
                                  className="text-sm text-white/80 flex items-center"
                                >
                                  <span className="w-1.5 h-1.5 bg-gold rounded-full mr-2"></span>
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
                    {t("subtitle")}
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
                        {t("investment_analysis.market_trends_desc")}
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
                        {t("investment_analysis.infrastructure_impact_desc")}
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
                        {t("investment_analysis.roi_projections_desc")}
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
                        {t("investment_analysis.legal_framework_desc")}
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
                <h2 className="text-3xl md:text-4xl font-brand text-primary font-bold mb-6">
                  {t("cta.title")}
                </h2>
                <p className="text-xl text-gold/90 mb-8">
                  {t("cta.description")}
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
