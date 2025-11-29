import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import { GroundHeaderMinimal } from "@/components/layout/GroundHeaderMinimal";
import { FooterMinimal } from "@/components/layout/FooterMinimal";
import { ContactForm } from "@/components/forms/ContactForm";
import { ConsultationBooking } from "@/components/forms/ConsultationBooking";

interface ContactPageProps {
  params: { locale: string };
}

export async function generateMetadata({
  params,
}: ContactPageProps): Promise<Metadata> {
  const t = await getTranslations("contact");

  return {
    title: t("page_title"),
    description: t("page_description"),
  };
}

export default async function ContactPage({ params }: ContactPageProps) {
  const t = await getTranslations("contact");

  return (
    <div className="min-h-screen">
      <GroundHeaderMinimal />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-jade-green mb-4">
            {t("hero_title")}
          </h1>
          <p className="text-lg text-muted-foreground">
            {t("hero_subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold text-jade-green mb-6">
              {t("contact_form_title")}
            </h2>
            <ContactForm />
          </div>

          {/* Consultation Booking */}
          <div>
            <h2 className="text-2xl font-semibold text-jade-green mb-6">
              {t("consultation_booking_title")}
            </h2>
            <ConsultationBooking />
          </div>
        </div>
      </main>
      <FooterMinimal />
    </div>
  );
}
