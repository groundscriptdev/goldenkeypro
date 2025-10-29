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
  Heart,
  DollarSign,
  CheckCircle,
  Users,
  Building,
  Star,
} from "lucide-react";
import Link from "next/link";

// Suppress dynamic render warnings for static export

interface MedicalTourismPageProps {
  params: { locale: string };
}

export async function generateMetadata({
  params,
}: MedicalTourismPageProps): Promise<Metadata> {
  const t = await getTranslations("medical_tourism");
  const seoT = await getTranslations("seo");

  return generateSEO({
    title: `${t("title")} - Panama Golden Key`,
    description: t("subtitle"),
    keywords:
      "Panama medical tourism, Panama healthcare, medical treatments Panama, affordable healthcare Panama",
    canonical: `https://panamagoldenkey.com/${params.locale}/medical-tourism`,
    locale: params.locale,
    alternateLocales: params.locale === "en" ? ["zh"] : ["en"],
    ogImage: `/images/og-medical-tourism-${params.locale}.jpg`,
  });
}

export default async function MedicalTourismPage({
  params,
}: MedicalTourismPageProps) {
  const t = await getTranslations("medical_tourism");
  const commonT = await getTranslations("common");

  // Generate structured data
  const serviceSchema = generateServiceSchema(
    "Panama Medical Tourism Services",
    t("subtitle")
  );

  const costComparisons = [
    {
      procedure: t("cost_comparison.stem_cell.procedure"),
      usa: t("cost_comparison.stem_cell.usa"),
      china: t("cost_comparison.stem_cell.china"),
      panama: t("cost_comparison.stem_cell.panama"),
      savings: t("cost_comparison.stem_cell.savings"),
      savingsPercent: "50-60%",
    },
    {
      procedure: t("cost_comparison.anti_aging.procedure"),
      usa: t("cost_comparison.anti_aging.usa"),
      china: t("cost_comparison.anti_aging.china"),
      panama: t("cost_comparison.anti_aging.panama"),
      savings: t("cost_comparison.anti_aging.savings"),
      savingsPercent: "70-80%",
    },
    {
      procedure: t("cost_comparison.neurological.procedure"),
      usa: t("cost_comparison.neurological.usa"),
      china: t("cost_comparison.neurological.china"),
      panama: t("cost_comparison.neurological.panama"),
      savings: t("cost_comparison.neurological.savings"),
      savingsPercent: "60-70%",
    },
  ];

  const qualityFeatures = [
    {
      icon: <Building className="w-6 h-6" />,
      title: t("quality_care.accreditation"),
      description: "JCI-accredited hospitals with international standards",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: t("quality_care.specialists"),
      description: "Bilingual medical specialists trained abroad",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: t("quality_care.technology"),
      description: "Latest medical technology and equipment",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: t("quality_care.recovery"),
      description: "Tropical recovery environment with world-class facilities",
    },
  ];

  const treatments = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: t("treatments.stem_cell"),
      description: "Advanced stem cell therapies for various conditions",
      benefits: [
        "Regenerative medicine",
        "Anti-aging applications",
        "Chronic pain relief",
      ],
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: t("treatments.anti_aging"),
      description: "Comprehensive anti-aging and wellness treatments",
      benefits: ["Hormone therapy", "Aesthetic procedures", "Preventive care"],
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: t("treatments.neurological"),
      description: "Advanced neurological treatments and rehabilitation",
      benefits: ["Stroke recovery", "Neuro-rehabilitation", "Pain management"],
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: t("treatments.orthopedic"),
      description: "Orthopedic surgeries and sports medicine",
      benefits: [
        "Joint replacement",
        "Sports injuries",
        "Arthroscopic surgery",
      ],
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: t("treatments.cardiac"),
      description: "Cardiac procedures and heart health treatments",
      benefits: [
        "Cardiac surgery",
        "Diagnostic procedures",
        "Preventive cardiology",
      ],
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: t("treatments.cosmetic"),
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
      {/* Structured Data */}
      <StructuredData data={serviceSchema} />

      <div className="min-h-screen">
        <GroundHeaderMinimal />
        <main>
          <Titulos
            titleKey="title"
            descriptionKey="subtitle"
            translationNamespace="medical_tourism"
            backgroundImage="/images/10.jpg"
            tabs={[
              { id: "cost", labelKey: "cost_comparison.title" },
              { id: "quality", labelKey: "quality_care.title" },
              { id: "treatments", labelKey: "treatments.title" }
            ]}
            defaultActiveTab="cost"
          />

          {/* Cost Comparison */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-brand text-jade-green font-bold mb-4">
                    {t("cost_comparison.title")}
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Compare costs and save significantly on world-class medical
                    treatments
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-jade-green/10">
                        <th className="text-left p-4 font-semibold text-jade-green">
                          Procedure
                        </th>
                        <th className="text-center p-4 font-semibold text-gray-700">
                          USA
                        </th>
                        <th className="text-center p-4 font-semibold text-gray-700">
                          China
                        </th>
                        <th className="text-center p-4 font-semibold text-jade-green">
                          Panama
                        </th>
                        <th className="text-center p-4 font-semibold text-gold">
                          Savings
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {costComparisons.map((comparison, index) => (
                        <tr
                          key={index}
                          className="border-b border-jade-green/10 hover:bg-jade-green/5"
                        >
                          <td className="p-4 font-medium text-gray-900">
                            {comparison.procedure}
                          </td>
                          <td className="p-4 text-center text-gray-600">
                            {comparison.usa}
                          </td>
                          <td className="p-4 text-center text-gray-600">
                            {comparison.china}
                          </td>
                          <td className="p-4 text-center font-semibold text-jade-green">
                            {comparison.panama}
                          </td>
                          <td className="p-4 text-center">
                            <div className="inline-flex items-center space-x-2 bg-gold/20 text-gold px-3 py-1 rounded-full">
                              <DollarSign className="w-4 h-4" />
                              <span className="font-semibold">
                                {comparison.savingsPercent}
                              </span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-8 text-center">
                  <p className="text-sm text-gray-600">
                    *Prices are approximate and may vary based on specific
                    treatment requirements and hospital choice.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Quality Healthcare */}
          <section className="py-16 bg-jade-green/5">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-brand text-jade-green font-bold mb-4">
                    {t("quality_care.title")}
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    {t("quality_care.description")}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {qualityFeatures.map((feature, index) => (
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
              </div>
            </div>
          </section>

          {/* Available Treatments */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-brand text-jade-green font-bold mb-4">
                    {t("treatments.title")}
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Comprehensive range of medical treatments and procedures
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {treatments.map((treatment, index) => (
                    <Card
                      key={index}
                      className="border-jade-green/10 hover:shadow-lg transition-shadow"
                    >
                      <CardHeader>
                        <div className="w-12 h-12 bg-jade-green/10 rounded-full flex items-center justify-center mb-4 text-jade-green">
                          {treatment.icon}
                        </div>
                        <CardTitle className="text-lg">
                          {treatment.title}
                        </CardTitle>
                        <CardDescription>
                          {treatment.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <h4 className="font-medium text-gray-900 mb-2">
                            Key Benefits:
                          </h4>
                          {treatment.benefits.map((benefit, idx) => (
                            <div
                              key={idx}
                              className="flex items-center space-x-2"
                            >
                              <CheckCircle className="w-4 h-4 text-jade-green flex-shrink-0" />
                              <span className="text-sm text-gray-600">
                                {benefit}
                              </span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Panama */}
          <section className="py-16 bg-jade-green/5">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-brand text-jade-green font-bold mb-4">
                    Why Choose Panama for Medical Tourism?
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Discover the advantages of medical treatment in Panama
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-jade-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">
                          Significant Cost Savings
                        </h3>
                        <p className="text-gray-600">
                          Save 40-70% on medical treatments compared to US and
                          China prices
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-jade-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">
                          World-Class Healthcare
                        </h3>
                        <p className="text-gray-600">
                          JCI-accredited hospitals with internationally trained
                          medical staff
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-jade-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">
                          Bilingual Medical Staff
                        </h3>
                        <p className="text-gray-600">
                          English-speaking medical professionals and support
                          staff
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-jade-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">
                          Recovery Paradise
                        </h3>
                        <p className="text-gray-600">
                          Recover in a tropical paradise with excellent recovery
                          facilities
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-jade-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">
                          Easy Accessibility
                        </h3>
                        <p className="text-gray-600">
                          Direct flights from major cities worldwide with modern
                          airport
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-jade-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">
                          Legal Protection
                        </h3>
                        <p className="text-gray-600">
                          Strong legal framework protecting patient rights and
                          medical tourism
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Process */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-brand text-jade-green font-bold mb-4">
                    Medical Tourism Process
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Simple and streamlined process for your medical journey
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {[
                    {
                      step: "1",
                      title: "Consultation",
                      description:
                        "Initial consultation and medical record review",
                    },
                    {
                      step: "2",
                      title: "Treatment Plan",
                      description:
                        "Personalized treatment plan and cost estimate",
                    },
                    {
                      step: "3",
                      title: "Travel Arrangements",
                      description: "Visa assistance and travel coordination",
                    },
                    {
                      step: "4",
                      title: "Treatment & Recovery",
                      description: "Medical treatment and recovery in Panama",
                    },
                  ].map((item, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-jade-green rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">
                        {item.step}
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {item.description}
                      </p>
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
                  Ready to Start Your Medical Journey?
                </h2>
                <p className="text-xl text-gold/90 mb-8">
                  Get a free consultation and treatment quote from our medical
                  tourism experts
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
                    Get Treatment Quote
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
