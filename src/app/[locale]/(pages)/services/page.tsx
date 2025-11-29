import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { GroundHeaderMinimal } from "@/components/layout/GroundHeaderMinimal";
import { FooterMinimal } from "@/components/layout/FooterMinimal";
import { generateSEO, generateServiceSchema } from "@/lib/seo";
import { StructuredData } from "@/components/seo/StructuredData";
import ServicesPageClient from "./ServicesPageClient";

interface ServicesPageProps {
  params: { locale: string };
}

export async function generateMetadata({
  params,
}: ServicesPageProps): Promise<Metadata> {
  const t = await getTranslations("services_page");
  
  return generateSEO({
    title: `${t("title")} - Panama Golden Key`,
    description: t("subtitle"),
    keywords: "Panama services, legal services, company formation, bank account opening, Panama residency",
    canonical: `https://panamagoldenkey.com/${params.locale}/services`,
    locale: params.locale,
    alternateLocales: params.locale === "en" ? ["zh"] : ["en"],
    ogImage: `/images/og-services-${params.locale}.jpg`,
  });
}

export default async function ServicesPage({
  params,
}: ServicesPageProps) {
  const t = await getTranslations("services_page");

  // Generate structured data
  const serviceSchema = generateServiceSchema(
    t("title"),
    t("subtitle")
  );

  return (
    <>
      <StructuredData data={serviceSchema} />

      <div className="min-h-screen">
        <GroundHeaderMinimal />
        <main>
          <ServicesPageClient locale={params.locale} />
        </main>
        <FooterMinimal />
      </div>
    </>
  );
}
