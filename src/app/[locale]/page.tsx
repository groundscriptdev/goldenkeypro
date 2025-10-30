import { getTranslations } from "next-intl/server";
import { Metadata } from "next";

import { GroundHeaderMinimal } from "@/components/layout/GroundHeaderMinimal";
import { FooterMinimal } from "@/components/layout/FooterMinimal";
import { HeroSectionMinimal } from "@/components/groundscript/HeroSectionMinimal";
import { ValuePropositionMinimal } from "@/components/sections/ValuePropositionMinimal";
import { FeaturedPrograms } from "@/components/sections/FeaturedPrograms";
import { StatisticsMinimal } from "@/components/sections/StatisticsMinimal";
import { Testimonials } from "@/components/sections/Testimonials";
import { CallToAction } from "@/components/sections/CallToAction";

import { GroundValuePropositionMinimal } from "@/components/sections/GroundValuePropositionMinimal";
import { GroundProcess } from "@/components/groundscript/groundprocess/GroundProcess";

import {
  generateSEO,
  generateOrganizationSchema,
  generateWebsiteSchema,
} from "@/lib/seo";
import { StructuredData } from "@/components/seo/StructuredData";

interface HomePageProps {
  params: { locale: string };
}

export async function generateMetadata({
  params,
}: HomePageProps): Promise<Metadata> {
  const seoT = await getTranslations("seo");

  return generateSEO({
    title: seoT("meta_title"),
    description: seoT("meta_description"),
    keywords: seoT("keywords"),
    canonical: `https://panamagoldenkey.com/${params.locale}`,
    locale: params.locale,
    alternateLocales: params.locale === "en" ? ["zh"] : ["en"],
    ogImage: `/images/og-${params.locale}.jpg`,
  });
}

export default function HomePage({ params }: HomePageProps) {
  // Generate structured data
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebsiteSchema();

  return (
    <>
      {/* Structured Data */}
      <StructuredData data={organizationSchema} />
      <StructuredData data={websiteSchema} />

      <div className="min-h-screen bg-white">
        <GroundHeaderMinimal />

        <main>
          {/* Hero Section */}
          <HeroSectionMinimal />

           {/* Value Proposition */}
          <GroundValuePropositionMinimal />

          {/* Statistics */}
          {/* <StatisticsMinimal /> */}
          
          <GroundProcess/>
          

          {/* Featured Programs */}
          <FeaturedPrograms />

          {/* Testimonials */}
          <Testimonials />

          {/* Call to Action */}
          <CallToAction />
        </main>
        <FooterMinimal />
      </div>
    </>
  );
}
