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
  CheckCircle,
  TrendingUp,
  Users,
  CreditCard,
  Banknote,
  Home,
} from "lucide-react";
import Link from "next/link";

// Suppress dynamic render warnings for static export

interface ResidencyPageProps {
  params: { locale: string };
}

export async function generateMetadata({
  params,
}: ResidencyPageProps): Promise<Metadata> {
  const t = await getTranslations("residency");
  const seoT = await getTranslations("seo");

  return generateSEO({
    title: `${t("title")} - Panama Golden Key`,
    description: t("subtitle"),
    keywords:
      "Panama residency, Qualified Investor Visa, Panama investment residency, Panama golden visa",
    canonical: `https://panamagoldenkey.com/${params.locale}/residency`,
    locale: params.locale,
    alternateLocales: params.locale === "en" ? ["zh"] : ["en"],
    ogImage: `/images/og-residency-${params.locale}.jpg`,
  });
}

export default async function ResidencyPage({ params }: ResidencyPageProps) {
  const t = await getTranslations("residency");
  const commonT = await getTranslations("common");

  // Generate structured data
  const serviceSchema = generateServiceSchema(
    "Panama Residency Programs",
    t("subtitle")
  );

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: t("qualified_investor.benefits.permanent_residency"),
      description: "Immediate permanent residency for you and your family",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: t("qualified_investor.benefits.family_inclusion"),
      description: "Include spouse, children, and parents in your application",
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: t("qualified_investor.benefits.citizenship_path"),
      description: "Path to citizenship in just 5 years",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: t("qualified_investor.benefits.visa_free_travel"),
      description: "Visa-free travel to 142+ countries",
    },
    {
      icon: <Banknote className="w-6 h-6" />,
      title: t("qualified_investor.benefits.tax_benefits"),
      description: "Favorable tax regime with territorial taxation",
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: t("qualified_investor.benefits.no_residency_requirement"),
      description: "No minimum stay requirements",
    },
  ];

  const investmentOptions = [
    {
      icon: <Home className="w-8 h-8" />,
      title: t("investment_options.real_estate.title"),
      description: t("investment_options.real_estate.description"),
      minInvestment: t("investment_options.real_estate.min_investment"),
      roi: t("investment_options.real_estate.roi"),
      holdPeriod: t("investment_options.real_estate.hold_period"),
      color: "bg-blue-500 groundgreen-bg-blue",
    },
    {
      icon: <Banknote className="w-8 h-8" />,
      title: t("investment_options.bank_deposit.title"),
      description: t("investment_options.bank_deposit.description"),
      minInvestment: t("investment_options.bank_deposit.min_investment"),
      roi: t("investment_options.bank_deposit.interest"),
      holdPeriod: t("investment_options.bank_deposit.hold_period"),
      color: "bg-green-500 groundgreen-bg-blue-2 ",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: t("investment_options.securities.title"),
      description: t("investment_options.securities.description"),
      minInvestment: t("investment_options.securities.min_investment"),
      roi: t("investment_options.securities.returns"),
      holdPeriod: t("investment_options.securities.liquidity"),
      color: "bg-purple-500 groundgreen-bg-blue",
    },
  ];

  const processSteps = [
    {
      step: "1",
      title: t("qualified_investor.process.consultation"),
      description: "Initial consultation to assess your needs and eligibility",
    },
    {
      step: "2",
      title: t("qualified_investor.process.investment"),
      description: "Make qualified investment in Panama",
    },
    {
      step: "3",
      title: t("qualified_investor.process.documentation"),
      description: "Prepare and verify all required documentation",
    },
    {
      step: "4",
      title: t("qualified_investor.process.submission"),
      description: "Submit application to immigration authorities",
    },
    {
      step: "5",
      title: t("qualified_investor.process.approval"),
      description: "Receive approval and residency confirmation",
    },
    {
      step: "6",
      title: t("qualified_investor.process.residency_card"),
      description: "Obtain your permanent residency card",
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
            translationNamespace="residency"
            tabs={[
              { id: "visa", labelKey: "qualified_investor.title" },
              { id: "benefits", labelKey: "qualified_investor.benefits.title" },
              { id: "investment", labelKey: "investment_options.title" }
            ]}
          />
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
                    Download Guide
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Qualified Investor Visa Overview */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-brand text-jade-green font-bold mb-4">
                    {t("qualified_investor.title")}
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    {t("qualified_investor.subtitle")}
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {t("qualified_investor.description")}
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-jade-green flex-shrink-0" />
                        <span className="text-gray-700">
                          Direct path to permanent residency
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-jade-green flex-shrink-0" />
                        <span className="text-gray-700">
                          Multiple investment options available
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-jade-green flex-shrink-0" />
                        <span className="text-gray-700">
                          Family inclusion benefits
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-jade-green/10 rounded-lg p-8">
                    <h3 className="text-xl font-semibold text-jade-green mb-6">
                      {t("qualified_investor.requirements.title")}
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg border border-jade-green/20">
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {t("qualified_investor.requirements.real_estate")}
                        </h4>
                        <p className="text-sm text-gray-600">
                          Minimum investment in Panama real estate
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-jade-green/20">
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {t("qualified_investor.requirements.bank_deposit")}
                        </h4>
                        <p className="text-sm text-gray-600">
                          Fixed-term deposit in Panamanian bank
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-jade-green/20">
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {t("qualified_investor.requirements.securities")}
                        </h4>
                        <p className="text-sm text-gray-600">
                          Investment in Panamanian securities
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="py-16 bg-jade-green/5">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-brand text-jade-green font-bold mb-4">
                    {t("qualified_investor.benefits.title")}
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Key advantages of the Panama Qualified Investor Visa
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {benefits.map((benefit, index) => (
                    <Card
                      key={index}
                      className="border-jade-green/10 hover:shadow-lg transition-shadow"
                    >
                      <CardHeader>
                        <div className="w-12 h-12 bg-jade-green/10 rounded-full flex items-center justify-center mb-4 text-jade-green">
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
              </div>
            </div>
          </section>

          {/* Investment Options */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-brand text-jade-green font-bold mb-4">
                    {t("investment_options.title")}
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Choose the investment option that best suits your needs
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {investmentOptions.map((option, index) => (
                    <Card
                      key={index}
                      className="border-jade-green/10 hover:shadow-lg transition-shadow"
                    >
                      <CardHeader className="text-center">
                        <div
                          className={`w-16 h-16 ${option.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white`}
                        >
                          {option.icon}
                        </div>
                        <CardTitle className="text-xl">
                          {option.title}
                        </CardTitle>
                        <CardDescription className="text-gray-600">
                          {option.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="text-center">
                        <div className="space-y-3">
                          <div className="bg-jade-green/10 rounded-lg p-3">
                            <p className="font-semibold text-jade-green">
                              {option.minInvestment}
                            </p>
                          </div>
                          <div className="bg-gray-50 rounded-lg p-3">
                            <p className="text-sm font-medium text-gray-700">
                              {option.roi}
                            </p>
                          </div>
                          <div className="bg-gray-50 rounded-lg p-3">
                            <p className="text-sm font-medium text-gray-700">
                              {option.holdPeriod}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Application Process */}
          <section className="py-16 bg-jade-green/5">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-brand text-jade-green font-bold mb-4">
                    {t("qualified_investor.process.title")}
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Step-by-step guide to obtaining your Panama residency
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {processSteps.map((step, index) => (
                    <div key={index} className="relative">
                      <div className="bg-white rounded-lg p-6 border border-jade-green/10 hover:shadow-lg transition-shadow">
                        <div className="flex items-start space-x-4">
                          <div className="w-8 h-8 bg-jade-green rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                            {step.step}
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-2">
                              {step.title}
                            </h3>
                            <p className="text-sm text-gray-600">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </div>
                      {index < processSteps.length - 1 && (
                        <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-jade-green/30 transform -translate-y-1/2" />
                      )}
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
                  Ready to Start Your Panama Residency Journey?
                </h2>
                <p className="text-xl text-gold/90 mb-8">
                  Schedule a free consultation with our experts to explore your
                  residency options
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
