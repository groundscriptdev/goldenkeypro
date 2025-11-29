import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import { GroundHeaderMinimal } from "@/components/layout/GroundHeaderMinimal";
import { FooterMinimal } from "@/components/layout/FooterMinimal";
import { ContactForm } from "@/components/forms/ContactForm";
import { ConsultationBooking } from "@/components/forms/ConsultationBooking";
import { Titulos } from '@/components/groundscript/subheader';
import { StructuredData } from "@/components/seo/StructuredData";
import { generateSEO, generateServiceSchema } from "@/lib/seo";

interface ContactPageProps {
  params: { locale: string };
}

export async function generateMetadata({
  params,
}: ContactPageProps): Promise<Metadata> {
  const t = await getTranslations("contact");
  const seoT = await getTranslations("seo");

  return generateSEO({
    title: t("page_title"),
    description: t("page_description"),
    keywords: t("page_keywords"),
    canonical: `https://panamagoldenkey.com/${params.locale}/contact`,
    locale: params.locale,
    alternateLocales: params.locale === "en" ? ["zh"] : ["en"],
    ogImage: `/images/og-contact-${params.locale}.jpg`,
  });
}

export default async function SimpleContactPage({ params }: ContactPageProps) {
  const t = await getTranslations("contact");

  // Generate structured data
  const serviceSchema = generateServiceSchema(
    t("structured_data.name"),
    t("structured_data.description")
  );

  return (
    <>
      {/* Structured Data */}
      <StructuredData data={serviceSchema} />

      <div className="min-h-screen">
      <GroundHeaderMinimal />
      <main>
        <Titulos
          titleKey="hero_title"
          descriptionKey="hero_subtitle"
          translationNamespace="contact"
          backgroundImage="/images/panama-skyline.jpg"
          tabs={[
            { id: "methods", labelKey: "contact_methods_title" },
            { id: "hours", labelKey: "office_hours_title" },
            { id: "forms", labelKey: "forms_title" }
          ]}
          defaultActiveTab="methods"
        />

        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-jade-green mb-4">
              {t("contact_form_title")}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t("forms_subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div>
              <h3 className="text-xl font-semibold text-jade-green mb-6">
                {t("contact_form_title")}
              </h3>
              <ContactForm />
            </div>

            {/* Consultation Booking */}
            <div>
              <h3 className="text-xl font-semibold text-jade-green mb-6">
                {t("consultation_booking_title")}
              </h3>
              <ConsultationBooking />
            </div>
          </div>
        </div>
      </main>
      <FooterMinimal />
    </div>
    </>
  );
}