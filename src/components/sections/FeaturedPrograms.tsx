"use client";

import { useTranslations, useLocale } from "next-intl";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { InfiniteCarousel } from "@/components/ui/carousel";
import {
  Building,
  Home,
  Heart,
  Briefcase,
  GraduationCap,
  Plane,
  DollarSign,
  Shield,
  Users,
} from "lucide-react";
import Link from "next/link";

export function FeaturedPrograms() {
  const t = useTranslations("home");
  const locale = useLocale();

  const getFeatures = (key: string) => {
    return (t.raw(`featured_programs.${key}.features`) as string[]) || [];
  };

  const programs = [
    {
      icon: <Building className="w-8 h-8 text-jade-green" />,
      title: t("featured_programs.qualified_investor.title"),
      description: t("featured_programs.qualified_investor.description"),
      investmentMin: t("featured_programs.qualified_investor.investment_min"),
      features: getFeatures("qualified_investor"),
      link: `/${locale}/services`,
    },
    {
      icon: <Home className="w-8 h-8 text-jade-green" />,
      title: t("featured_programs.real_estate.title"),
      description: t("featured_programs.real_estate.description"),
      investmentMin: t("featured_programs.real_estate.investment_min"),
      features: getFeatures("real_estate"),
      link: `/${locale}/properties`,
    },
    {
      icon: <Briefcase className="w-8 h-8 text-jade-green" />,
      title: t("featured_programs.business_visa.title"),
      description: t("featured_programs.business_visa.description"),
      investmentMin: t("featured_programs.business_visa.investment_min"),
      features: getFeatures("business_visa"),
      link: `/${locale}/services`,
    },
    {
      icon: <Plane className="w-8 h-8 text-jade-green" />,
      title: t("featured_programs.retirement_visa.title"),
      description: t("featured_programs.retirement_visa.description"),
      investmentMin: t("featured_programs.retirement_visa.investment_min"),
      features: getFeatures("retirement_visa"),
      link: `/${locale}/residency`,
    },
  ];

  const ProgramCard = ({
    program,
    index,
  }: {
    program: (typeof programs)[0];
    index: number;
  }) => (
    <Card className="h-full bg-white border-jade-green/10 hover:border-jade-green/30 transition-all duration-300 hover:shadow-lg group">
      <CardHeader className="text-center pb-4">
        <div className="w-16 h-16 bg-jade-green/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-jade-green/20 transition-colors">
          {program.icon}
        </div>
        <CardTitle className="text-xl font-bold text-jade-green group-hover:text-jade-green/80 transition-colors">
          {program.title}
        </CardTitle>
        <CardDescription className="text-gray-600 leading-relaxed">
          {program.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-4">
          <div className="text-center">
            <span className="inline-block bg-gold/10 text-gold px-3 py-1 rounded-full text-sm font-semibold">
              {program.investmentMin}
            </span>
          </div>

          <ul className="space-y-2 text-sm">
            {program.features.map((feature, idx) => (
              <li key={idx} className="flex items-center text-gray-600">
                <div className="w-1.5 h-1.5 bg-jade-green rounded-full mr-2 flex-shrink-0"></div>
                {feature}
              </li>
            ))}
          </ul>

          <Button
            asChild
            className="w-full bg-jade-green text-white hover:bg-jade-green/90 transition-colors"
          >
            <Link href={program.link}>{t("common.learn_more")}</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section className="py-20 bg-gradient-to-br from-white to-jade-green/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-brand text-jade-green font-bold mb-4">
            {t("featured_programs.title")}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t("featured_programs.subtitle")}
          </p>
        </div>

        <div className="relative">
          {/* Desktop: Grid view */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8">
            {programs.slice(0, 6).map((program, index) => (
              <ProgramCard key={index} program={program} index={index} />
            ))}
          </div>

          {/* Mobile/Tablet: Carousel */}
          <div className="lg:hidden">
            <InfiniteCarousel
              autoPlay={true}
              interval={4000}
              showArrows={true}
              showDots={true}
              className="h-[600px]"
            >
              {programs.map((program, index) => (
                <div key={index} className="px-4">
                  <ProgramCard program={program} index={index} />
                </div>
              ))}
            </InfiniteCarousel>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="bg-gold text-jade-green hover:bg-gold/90 font-semibold px-8"
          >
            {/* <Link href={`/${locale}/residency`}>Ver Todos los Programas</Link> */}
          </Button>
        </div>
      </div>
    </section>
  );
}
