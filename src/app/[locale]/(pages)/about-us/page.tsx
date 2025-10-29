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
      description:
        "Deep understanding of both Panamanian and Chinese business cultures",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: t("expertise.trilingual_team"),
      description:
        "Fluent in Mandarin, English, and Spanish for seamless communication",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: t("expertise.chinese_structures"),
      description:
        "Expertise in Chinese wealth structures and investment patterns",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: t("expertise.capital_regulations"),
      description:
        "Extensive experience with Chinese capital regulations and requirements",
    },
  ];

  const services = [
    {
      icon: <Target className="w-6 h-6" />,
      title: t("services.residency_consultation"),
      description: "Comprehensive guidance through Panama residency programs",
      features: [
        "Program selection",
        "Document preparation",
        "Application support",
        "Follow-up services",
      ],
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: t("services.investment_advisory"),
      description: "Strategic investment advice tailored to your goals",
      features: [
        "Market analysis",
        "Risk assessment",
        "Portfolio diversification",
        "ROI optimization",
      ],
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: t("services.legal_support"),
      description: "Complete legal documentation and compliance support",
      features: [
        "Document preparation",
        "Legal review",
        "Compliance checking",
        "Government liaison",
      ],
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: t("services.property_management"),
      description: "Professional property management services",
      features: [
        "Tenant screening",
        "Rent collection",
        "Maintenance coordination",
        "Financial reporting",
      ],
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: t("services.family_office"),
      description: "Comprehensive family office services",
      features: [
        "Wealth management",
        "Succession planning",
        "Tax optimization",
        "Lifestyle services",
      ],
    },
  ];

  const teamMembers = [
    {
      name: "Managing Partner",
      role: "Panama Law & Investment Specialist",
      expertise: "15+ years in Panamanian law and investment",
      description: "Expert in residency programs and real estate investment",
    },
    {
      name: "Senior Consultant",
      role: "Chinese Market Specialist",
      expertise: "10+ years bridging China-Panama business",
      description:
        "Specialized in Chinese investment patterns and requirements",
    },
    {
      name: "Legal Director",
      role: "Immigration Law Expert",
      expertise: "12+ years in immigration law",
      description: "Specialist in Qualified Investor Visa applications",
    },
    {
      name: "Investment Advisor",
      role: "Real Estate & Investment Specialist",
      expertise: "8+ years in Panamanian real estate",
      description: "Expert in property investment and market analysis",
    },
  ];

  const achievements = [
    { number: "500+", label: "Successful Clients" },
    { number: "98%", label: "Success Rate" },
    { number: "15+", label: "Years Experience" },
    { number: "$50M+", label: "Investment Facilitated" },
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
            backgroundImage="/assets/5a562231252f57b94e54b2f16319c9a076958f96.png"
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
                  Our Mission
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
                    Our unique expertise bridges cultures and markets
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
                    Our Track Record
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Proven results for Chinese investors in Panama
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
                    Comprehensive services for your Panama journey
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
                    Our team combines local expertise with international
                    experience
                  </p>
                  <Button
                    asChild
                    className="bg-jade-green hover:bg-jade-green/90 text-white"
                  >
                    <Link href={`/${params.locale}/contact`}>
                      Meet Our Team
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
                    Why Choose Panama Golden Key?
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    The trusted partner for Chinese investors in Panama
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
                          Bilingual & Bicultural Team
                        </h3>
                        <p className="text-gray-600">
                          Fluent in Mandarin, English, and Spanish with deep
                          cultural understanding
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-jade-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">
                          Proven Track Record
                        </h3>
                        <p className="text-gray-600">
                          98% success rate with 500+ satisfied Chinese clients
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-jade-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">
                          Comprehensive Services
                        </h3>
                        <p className="text-gray-600">
                          End-to-end support from consultation to
                          post-investment management
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
                          Local Expertise
                        </h3>
                        <p className="text-gray-600">
                          Deep connections with Panamanian authorities and
                          service providers
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-jade-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">
                          Chinese Market Understanding
                        </h3>
                        <p className="text-gray-600">
                          Specialized knowledge of Chinese investment patterns
                          and requirements
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-jade-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">
                          Personalized Service
                        </h3>
                        <p className="text-gray-600">
                          Tailored solutions for each client's unique needs and
                          goals
                        </p>
                      </div>
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
                <h2 className="text-3xl md:text-4xl font-brand text-white font-bold mb-6">
                  Start Your Panama Journey with Us
                </h2>
                <p className="text-xl text-gold/90 mb-8">
                  Experience the difference with Panama's leading bilingual
                  consultancy
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
