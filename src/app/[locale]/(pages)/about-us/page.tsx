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
import { Users, Award, Target, Globe, Heart, Shield } from "lucide-react";
import Link from "next/link";


// Suppress dynamic render warnings for static export

interface AboutUsPageProps {
  params: { locale: string };
}

export async function generateMetadata({
  params,
}: AboutUsPageProps): Promise<Metadata> {
  const t = await getTranslations("about_us");
  const seoT = await getTranslations("seo");

  return generateSEO({
    title: `${t("title")} - Panama Golden Key`,
    description: t("subtitle"),
    keywords:
      "Panama Golden Key, residency experts, investment advisors, Panama consultants",
    canonical: `https://panamagoldenkey.com/${params.locale}/about-us`,
    locale: params.locale,
    alternateLocales: params.locale === "en" ? ["zh"] : ["en"],
    ogImage: `/images/og-about-us-${params.locale}.jpg`,
  });
}

export default async function AboutUsPage({ params }: AboutUsPageProps) {
  const t = await getTranslations("about_us");
  const commonT = await getTranslations("common");

  // Generate structured data
  const serviceSchema = generateServiceSchema(
    "Panama Golden Key - Your Trusted Partner",
    t("subtitle")
  );

  const expertise = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: t("expertise.transcultural"),
      description: t("expertise.transcultural_desc"),
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: t("expertise.trilingual_team"),
      description: t("expertise.trilingual_team_desc"),
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: t("expertise.chinese_structures"),
      description: t("expertise.chinese_structures_desc"),
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: t("expertise.capital_regulations"),
      description: t("expertise.capital_regulations_desc"),
    },
  ];

  const services = [
    {
      icon: <Target className="w-6 h-6" />,
      title: t("services.residency_consultation"),
      description: t("services.residency_consultation_desc"),
      features: [
        t("services.residency_consultation_features.0"),
        t("services.residency_consultation_features.1"),
        t("services.residency_consultation_features.2"),
        t("services.residency_consultation_features.3"),
      ],
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: t("services.investment_advisory"),
      description: t("services.investment_advisory_desc"),
      features: [
        t("services.investment_advisory_features.0"),
        t("services.investment_advisory_features.1"),
        t("services.investment_advisory_features.2"),
        t("services.investment_advisory_features.3"),
      ],
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: t("services.legal_support"),
      description: t("services.legal_support_desc"),
      features: [
        t("services.legal_support_features.0"),
        t("services.legal_support_features.1"),
        t("services.legal_support_features.2"),
        t("services.legal_support_features.3"),
      ],
    },
/*     {
      icon: <Heart className="w-6 h-6" />,
      title: t("services.property_management"),
      description: t("services.property_management_desc"),
      features: [
        t("services.property_management_features.0"),
        t("services.property_management_features.1"),
        t("services.property_management_features.2"),
        t("services.property_management_features.3"),
      ],
    }, */
    {
      icon: <Users className="w-6 h-6" />,
      title: t("services.family_office"),
      description: t("services.family_office_desc"),
      features: [
        t("services.family_office_features.0"),
        t("services.family_office_features.1"),
        t("services.family_office_features.2"),
        t("services.family_office_features.3"),
      ],
    },
  ];

  const teamMembers = [
    {
      name: t("team.members.managing_partner.name"),
      role: t("team.members.managing_partner.role"),
      expertise: t("team.members.managing_partner.expertise"),
      description: t("team.members.managing_partner.desc"),
    },
    {
      name: t("team.members.senior_consultant.name"),
      role: t("team.members.senior_consultant.role"),
      expertise: t("team.members.senior_consultant.expertise"),
      description: t("team.members.senior_consultant.desc"),
    },
    {
      name: t("team.members.legal_director.name"),
      role: t("team.members.legal_director.role"),
      expertise: t("team.members.legal_director.expertise"),
      description: t("team.members.legal_director.desc"),
    },
    {
      name: t("team.members.investment_advisor.name"),
      role: t("team.members.investment_advisor.role"),
      expertise: t("team.members.investment_advisor.expertise"),
      description: t("team.members.investment_advisor.desc"),
    },
  ];

  const achievements = [
    { number: t("achievements.clients.number"), label: t("achievements.clients.label") },
    { number: t("achievements.success_rate.number"), label: t("achievements.success_rate.label") },
    { number: t("achievements.experience.number"), label: t("achievements.experience.label") },
    { number: t("achievements.investment.number"), label: t("achievements.investment.label") },
  ];

  const whyChooseUs = [
    {
      title: t("why_choose_us.bilingual.title"),
      description: t("why_choose_us.bilingual.desc"),
    },
    {
      title: t("why_choose_us.track_record.title"),
      description: t("why_choose_us.track_record.desc"),
    },
    {
      title: t("why_choose_us.comprehensive.title"),
      description: t("why_choose_us.comprehensive.desc"),
    },
    {
      title: t("why_choose_us.local_expertise.title"),
      description: t("why_choose_us.local_expertise.desc"),
    },
    {
      title: t("why_choose_us.market_understanding.title"),
      description: t("why_choose_us.market_understanding.desc"),
    },
    {
      title: t("why_choose_us.personalized.title"),
      description: t("why_choose_us.personalized.desc"),
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
            translationNamespace="about_us"
            backgroundImage="/images/two2.jpg"
            tabs={[
              { id: "expertise", labelKey: "expertise.title" },
              { id: "services", labelKey: "services.title" },
              { id: "team", labelKey: "team.title" }
            ]}
            defaultActiveTab="expertise"
          />

          {/* Mission */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-brand text-jade-green font-bold mb-6">
                  {t("mission")}
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed">
                  {t("mission")}
                </p>
              </div>
            </div>
          </section>

          {/* Expertise */}
          <section className="py-16 bg-jade-green/5">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-brand text-jade-green font-bold mb-4">
                    {t("expertise.title")}
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    {t("expertise.subtitle")}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {expertise.map((item, index) => (
                    <Card
                      key={index}
                      className="text-center border-jade-green/10 hover:shadow-lg transition-shadow"
                    >
                      <CardHeader>
                        <div className="w-16 h-16 bg-jade-green/10 rounded-full flex items-center justify-center mx-auto mb-4 text-jade-green">
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

          {/* Achievements */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-brand text-jade-green font-bold mb-4">
                    {t("achievements.title")}
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    {t("achievements.subtitle")}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="text-center">
                      <div className="w-20 h-20 bg-jade-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-jade-green">
                          {achievement.number}
                        </span>
                      </div>
                      <p className="text-gray-600 font-medium">
                        {achievement.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Services */}
          <section className="py-16 bg-jade-green/5">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-brand text-jade-green font-bold mb-4">
                    {t("services.title")}
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    {t("services.subtitle")}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {services.map((service, index) => (
                    <Card
                      key={index}
                      className="border-jade-green/10 hover:shadow-lg transition-shadow"
                    >
                      <CardHeader>
                        <div className="w-12 h-12 bg-jade-green/10 rounded-full flex items-center justify-center mb-4 text-jade-green">
                          {service.icon}
                        </div>
                        <CardTitle className="text-lg">
                          {service.title}
                        </CardTitle>
                        <CardDescription>{service.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-1">
                          {service.features.map((feature, idx) => (
                            <li
                              key={idx}
                              className="text-sm text-gray-600 flex items-center"
                            >
                              <div className="w-1.5 h-1.5 bg-jade-green rounded-full mr-2"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Team */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-brand text-jade-green font-bold mb-4">
                    {t("team.title")}
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    {t("team.description")}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {teamMembers.map((member, index) => (
                    <Card
                      key={index}
                      className="text-center border-jade-green/10 hover:shadow-lg transition-shadow"
                    >
                      <CardHeader>
                        <div className="w-20 h-20 bg-jade-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Users className="w-10 h-10 text-jade-green" />
                        </div>
                        <CardTitle className="text-lg">{member.name}</CardTitle>
                        <CardDescription className="font-medium text-jade-green">
                          {member.role}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <p className="text-sm font-semibold text-gray-900">
                            {member.expertise}
                          </p>
                          <p className="text-sm text-gray-600">
                            {member.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mt-12 text-center">
                  <p className="text-gray-600 mb-4">
                    {t("team.cta_text")}
                  </p>
                  <Button
                    asChild
                    className="bg-jade-green hover:bg-jade-green/90 text-white"
                  >
                    <Link href={`/${params.locale}/contact`}>
                      {t("team.cta_button")}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-16 bg-jade-green/5">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-brand text-jade-green font-bold mb-4">
                    {t("why_choose_us.title")}
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    {t("why_choose_us.subtitle")}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    {whyChooseUs.slice(0, 3).map((item, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-jade-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white text-sm">✓</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">
                            {item.title}
                          </h3>
                          <p className="text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-6">
                    {whyChooseUs.slice(3, 6).map((item, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-jade-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-white text-sm">✓</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">
                            {item.title}
                          </h3>
                          <p className="text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
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
                  {t("cta.title")}
                </h2>
                <p className="text-xl text-gold/90 mb-8">
                  {t("cta.subtitle")}
                </p>
                <Button
                  asChild
                  className="bg-gold text-jade-green hover:bg-gold/90 font-brand text-lg px-8 py-3"
                >
                  <Link href={`/${params.locale}/contact`}>
                    {t("cta.button")}
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
