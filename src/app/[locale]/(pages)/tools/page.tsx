import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import { GroundHeaderMinimal } from "@/components/layout/GroundHeaderMinimal";
import { Footer } from "@/components/layout/Footer";
import { InvestmentCalculator } from "@/components/tools/InvestmentCalculator";
import { PropertyComparison } from "@/components/tools/PropertyComparison";
import { ResidencyEligibilityChecker } from "@/components/tools/ResidencyEligibilityChecker";
import { generateSEO, generateServiceSchema } from "@/lib/seo";
import { StructuredData } from "@/components/seo/StructuredData";
import { Button } from "@/components/ui/button";
import { Calculator, Home, CheckCircle, ArrowRight, Star } from "lucide-react";
import Link from "next/link";

// Suppress dynamic render warnings for static export

interface ToolsPageProps {
  params: { locale: string };
}

export async function generateMetadata({
  params,
}: ToolsPageProps): Promise<Metadata> {
  const t = await getTranslations("tools");
  const seoT = await getTranslations("seo");

  return generateSEO({
    title: t("page_title"),
    description: t("page_description"),
    keywords: t("page_keywords"),
    canonical: `https://panamagoldenkey.com/${params.locale}/tools`,
    locale: params.locale,
    alternateLocales: params.locale === "en" ? ["zh"] : ["en"],
    ogImage: `/images/og-tools-${params.locale}.jpg`,
  });
}

export default async function ToolsPage({ params }: ToolsPageProps) {
  const t = await getTranslations("tools");
  const commonT = await getTranslations("common");

  // Generate structured data
  const serviceSchema = generateServiceSchema(
    t("structured_data.name"),
    t("structured_data.description")
  );

  const tools = [
    {
      id: "investment-calculator",
      title: t("tools.investment_calculator.title"),
      description: t("tools.investment_calculator.description"),
      icon: <Calculator className="w-6 h-6" />,
      component: <InvestmentCalculator />,
      featured: true,
    },
    {
      id: "property-comparison",
      title: t("tools.property_comparison.title"),
      description: t("tools.property_comparison.description"),
      icon: <Home className="w-6 h-6" />,
      component: <PropertyComparison />,
      featured: true,
    },
    {
      id: "residency-eligibility",
      title: t("tools.residency_eligibility.title"),
      description: t("tools.residency_eligibility.description"),
      icon: <CheckCircle className="w-6 h-6" />,
      component: <ResidencyEligibilityChecker />,
      featured: true,
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
          <section className="bg-jade-green text-white py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-brand font-bold mb-6">
                  {t("hero_title")}
                </h1>
                <p className="text-xl md:text-2xl text-gold/90 mb-8 max-w-3xl mx-auto">
                  {t("hero_subtitle")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gold text-jade-green hover:bg-gold/90 font-brand"
                  >
                    <Link href={`/${params.locale}/contact`}>
                      {t("consultation_cta")}
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Tools Overview */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-brand text-jade-green font-bold mb-4">
                  {t("tools_title")}
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {t("tools_subtitle")}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {tools
                  .filter((tool) => tool.featured)
                  .map((tool) => (
                    <div
                      key={tool.id}
                      className="bg-white p-6 rounded-lg border border-jade-green/10 hover:shadow-lg transition-shadow"
                    >
                      <div className="w-12 h-12 bg-jade-green/20 rounded-full flex items-center justify-center mb-4 text-jade-green">
                        {tool.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        {tool.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {tool.description}
                      </p>
                      <div className="flex items-center text-jade-green font-medium">
                        <span>{t("use_tool")}</span>
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </section>

          {/* Tools Content */}
          <section className="py-16 bg-jade-green/5">
            <div className="container mx-auto px-4">
              <div className="space-y-16">
                {tools.map((tool, index) => (
                  <div key={tool.id} id={tool.id} className="scroll-mt-24">
                    <div className="text-center mb-8">
                      <div className="w-16 h-16 bg-jade-green/20 rounded-full flex items-center justify-center mx-auto mb-4 text-jade-green">
                        {tool.icon}
                      </div>
                      <h2 className="text-2xl font-brand text-jade-green font-bold mb-4">
                        {tool.title}
                      </h2>
                      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        {tool.description}
                      </p>
                    </div>

                    <div className="max-w-4xl mx-auto">{tool.component}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-brand text-jade-green font-bold mb-4">
                  {t("testimonials_title")}
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {t("testimonials_subtitle")}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-6 border border-jade-green/10 rounded-lg">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-foreground mb-4">
                    "{t("testimonial_1.quote")}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-jade-green/20 rounded-full mr-3"></div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {t("testimonial_1.name")}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {t("testimonial_1.location")}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 border border-jade-green/10 rounded-lg">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-foreground mb-4">
                    "{t("testimonial_2.quote")}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-jade-green/20 rounded-full mr-3"></div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {t("testimonial_2.name")}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {t("testimonial_2.location")}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 border border-jade-green/10 rounded-lg">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-foreground mb-4">
                    "{t("testimonial_3.quote")}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-jade-green/20 rounded-full mr-3"></div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {t("testimonial_3.name")}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {t("testimonial_3.location")}
                      </p>
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
                <h2 className="text-3xl font-brand text-white font-bold mb-6">
                  {t("cta_title")}
                </h2>
                <p className="text-xl text-gold/90 mb-8">{t("cta_subtitle")}</p>

                <Button
                  asChild
                  size="lg"
                  className="bg-gold text-jade-green hover:bg-gold/90 font-brand"
                >
                  <Link href={`/${params.locale}/contact`}>
                    {t("cta_button")}
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
