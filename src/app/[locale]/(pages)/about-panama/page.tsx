import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import { GroundHeaderMinimal } from "@/components/layout/GroundHeaderMinimal";
import { FooterMinimal } from "@/components/layout/FooterMinimal";
import { generateSEO, generateServiceSchema } from "@/lib/seo";
import { StructuredData } from "@/components/seo/StructuredData";
import { AboutPanamaClient } from "./AboutPanamaClient";

interface AboutPanamaPageProps {
  params: { locale: string };
}

export async function generateMetadata({
  params,
}: AboutPanamaPageProps): Promise<Metadata> {
  const t = await getTranslations("about_panama");
  
  return generateSEO({
    title: `${t("title")} - Panama Golden Key`,
    description: t("subtitle"),
    keywords:
      "About Panama, Panama economy, Panama investment, Panama residency benefits, medical tourism Panama",
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

  // Generate structured data
  const serviceSchema = generateServiceSchema(
    "About Panama - Investment Paradise",
    t("subtitle")
  );

  return (
    <>
      {/* Structured Data */}
      <StructuredData data={serviceSchema} />

      <div className="min-h-screen">
        <GroundHeaderMinimal />
        <main>
          <AboutPanamaClient locale={params.locale} />
        </main>
        <FooterMinimal />
      </div>
    </>
  );
}
