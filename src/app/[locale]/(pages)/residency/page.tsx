import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import { GroundHeaderMinimal } from "@/components/layout/GroundHeaderMinimal";
import { FooterMinimal } from "@/components/layout/FooterMinimal";
import { generateSEO, generateServiceSchema } from "@/lib/seo";
import { StructuredData } from "@/components/seo/StructuredData";
import { Button } from "@/components/ui/button";
import { Titulos } from '@/components/groundscript/subheader/TItulos';
import GoldenVisa from "./GoldenVisa";
// import { motion } from 'framer-motion';

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
    "Panama Golden Visa Programs",
    t("subtitle")
  );


  return (
    <>
      {/* Structured Data */}
      <StructuredData data={serviceSchema} />

      <div className="min-h-screen">
        <GroundHeaderMinimal />
        <main>
         {/*  <Titulos
            titleKey="title"
            descriptionKey="subtitle"
            translationNamespace="residency"  
            tabs={[
              { id: "visa", labelKey: "qualified_investor.title" },
              { id: "benefits", labelKey: "qualified_investor.benefits.title" },
              { id: "investment", labelKey: "investment_options.title" }
            ]}
          /> */}
          

          {/* Golden Visa Section */}
        <GoldenVisa/>
        </main>
        <FooterMinimal />
      </div>
    </>
  );
}

