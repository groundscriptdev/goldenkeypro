import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import { GroundHeaderMinimal } from "@/components/layout/GroundHeaderMinimal";
import { FooterMinimal } from "@/components/layout/FooterMinimal";
import { ContactForm } from "@/components/forms/ContactForm";
import { ConsultationBooking } from "@/components/forms/ConsultationBooking";
import { generateSEO, generateServiceSchema } from "@/lib/seo";
import { StructuredData } from "@/components/seo/StructuredData";
import { Button } from "@/components/ui/button";
import { Titulos } from '@/components/groundscript/subheader';
import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Calendar,
  Clock,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Suppress dynamic render warnings for static export

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

export default async function ContactPage({ params }: ContactPageProps) {
  const t = await getTranslations("contact");
  const commonT = await getTranslations("common");

  // Generate structured data
  const serviceSchema = generateServiceSchema(
    t("structured_data.name"),
    t("structured_data.description")
  );

  const contactMethods = [
    {
      id: "phone",
      title: t("contact_methods.phone.title"),
      description: t("contact_methods.phone.description"),
      value: "+507 123-45678",
      icon: <Phone className="w-6 h-6" />,
      action: {
        text: t("contact_methods.phone.action"),
        href: "tel:+50712345678",
      },
    },
    {
      id: "email",
      title: t("contact_methods.email.title"),
      description: t("contact_methods.email.description"),
      value: "info@panamagoldenkey.com",
      icon: <Mail className="w-6 h-6" />,
      action: {
        text: t("contact_methods.email.action"),
        href: "mailto:info@panamagoldenkey.com",
      },
    },
    {
      id: "wechat",
      title: t("contact_methods.wechat.title"),
      description: t("contact_methods.wechat.description"),
      value: "PanamaGoldenKey",
      icon: <MessageSquare className="w-6 h-6" />,
      action: {
        text: t("contact_methods.wechat.action"),
        href: "#",
      },
    },
    {
      id: "office",
      title: t("contact_methods.office.title"),
      description: t("contact_methods.office.description"),
      value: "Panama City, Panama",
      icon: <MapPin className="w-6 h-6" />,
      action: {
        text: t("contact_methods.office.action"),
        href: "#",
      },
    },
  ];

  const officeHours = [
    { day: t("office_hours.monday_friday"), hours: "9:00 AM - 6:00 PM" },
    { day: t("office_hours.saturday"), hours: "10:00 AM - 4:00 PM" },
    { day: t("office_hours.sunday"), hours: t("office_hours.closed") },
  ];

  const faqs = [
    {
      question: t("faqs.q1.question"),
      answer: t("faqs.q1.answer"),
    },
    {
      question: t("faqs.q2.question"),
      answer: t("faqs.q2.answer"),
    },
    {
      question: t("faqs.q3.question"),
      answer: t("faqs.q3.answer"),
    },
    {
      question: t("faqs.q4.question"),
      answer: t("faqs.q4.answer"),
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
            titleKey="hero_title"
            descriptionKey="hero_subtitle"
            translationNamespace="contact"
            backgroundImage="/images/panama-city.jpg"
            tabs={[
              { id: "methods", labelKey: "contact_methods_title" },
              { id: "hours", labelKey: "office_hours_title" },
              { id: "forms", labelKey: "forms_title" }
            ]}
            defaultActiveTab="methods"
          />

          {/* Contact Methods */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-brand text-jade-green font-bold mb-4">
                  {t("contact_methods_title")}
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {t("contact_methods_subtitle")}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {contactMethods.map((method) => (
                  <div
                    key={method.id}
                    className="text-center p-6 border border-jade-green/10 rounded-lg hover:shadow-lg transition-shadow"
                  >
                    <div className="w-16 h-16 bg-jade-green/20 rounded-full flex items-center justify-center mx-auto mb-4 text-jade-green">
                      {method.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {method.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {method.description}
                    </p>
                    <p className="font-medium text-jade-green mb-4">
                      {method.value}
                    </p>
                    {method.action && (
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="border-jade-green text-jade-green hover:bg-jade-green/10"
                      >
                        <Link href={method.action.href}>
                          {method.action.text}
                        </Link>
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Office Hours */}
          <section className="py-16 bg-jade-green/5">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-brand text-jade-green font-bold mb-4">
                    {t("office_hours_title")}
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    {t("office_hours_subtitle")}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {officeHours.map((schedule, index) => (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-lg border border-jade-green/10"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold text-foreground">
                          {schedule.day}
                        </h3>
                        <Clock className="w-5 h-5 text-jade-green" />
                      </div>
                      <p className="text-jade-green font-medium mt-2">
                        {schedule.hours}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Contact Forms */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-brand text-jade-green font-bold mb-4">
                  {t("forms_title")}
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {t("forms_subtitle")}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Contact Form */}
                <div>
                  <div className="flex items-center mb-6">
                    <Mail className="w-6 h-6 text-jade-green mr-2" />
                    <h3 className="text-xl font-semibold text-foreground">
                      {t("contact_form_title")}
                    </h3>
                  </div>
                  <ContactForm />
                </div>

                {/* Consultation Booking */}
                <div>
                  <div className="flex items-center mb-6">
                    <Calendar className="w-6 h-6 text-jade-green mr-2" />
                    <h3 className="text-xl font-semibold text-foreground">
                      {t("consultation_booking_title")}
                    </h3>
                  </div>
                  <ConsultationBooking />
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-16 bg-jade-green/5">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-brand text-jade-green font-bold mb-4">
                    {t("faq_title")}
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    {t("faq_subtitle")}
                  </p>
                </div>

                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-lg border border-jade-green/10"
                    >
                      <h3 className="text-lg font-semibold text-foreground mb-3">
                        {faq.question}
                      </h3>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  ))}
                </div>

                <div className="text-center mt-12">
                  <p className="text-muted-foreground mb-4">
                    {t("faq_more_question")}
                  </p>
                  <Button className="bg-jade-green hover:bg-jade-green/90 text-white">
                    <MessageSquare className="w-5 h-5 mr-2" />
                    {t("faq_contact_button")}
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Map Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-brand text-jade-green font-bold mb-4">
                  {t("map_title")}
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {t("map_subtitle")}
                </p>
              </div>

              <div className="bg-gray-100 h-96 rounded-lg overflow-hidden">
                {/* Placeholder for map */}
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-jade-green mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {t("map_placeholder")}
                    </h3>
                    <p className="text-muted-foreground">{t("map_address")}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-jade-green text-white">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto">
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-gold" />
                </div>
                <h2 className="text-3xl font-brand text-white font-bold mb-6">
                  {t("cta_title")}
                </h2>
                <p className="text-xl text-gold/90 mb-8">{t("cta_subtitle")}</p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-gold text-jade-green hover:bg-gold/90 font-brand">
                    <Calendar className="w-5 h-5 mr-2" />
                    {t("cta_book_button")}
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-jade-green"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    {t("cta_call_button")}
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
