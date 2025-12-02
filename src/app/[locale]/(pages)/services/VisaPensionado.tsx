"use client";

import { useTranslations } from "next-intl";
import {
  Users,
  Shield,
  DollarSign,
  Home,
  Plane,
  Utensils,
  Film,
  Heart,
  FileText,
  CheckCircle,
  Globe,
  Building,
  Cloud,
  MapPin,
  Clock,
  Award,
  Target,
  Lightbulb,
  Handshake,
  CreditCard,
  Car,
  ShoppingBag,
  Phone,
  Zap,
  Pill,
  Hotel,
  Stethoscope,
  UserCheck,
  Briefcase,
  ArrowRight,
  Star,
  Calendar,
} from "lucide-react";

interface VisaPensionadoProps {
  locale?: string;
}

export default function VisaPensionado({ locale }: VisaPensionadoProps) {
  const t = useTranslations("visa_pensionado");

  const panamaAdvantages = [
    {
      icon: <Shield className="w-6 h-6 text-jade-green" />,
      title: t("panama_advantages.political_stability.title"),
      description: t("panama_advantages.political_stability.description"),
    },
    {
      icon: <DollarSign className="w-6 h-6 text-jade-green" />,
      title: t("panama_advantages.dollarized_currency.title"),
      description: t("panama_advantages.dollarized_currency.description"),
    },
    {
      icon: <Building className="w-6 h-6 text-jade-green" />,
      title: t("panama_advantages.infrastructure.title"),
      description: t("panama_advantages.infrastructure.description"),
    },
    {
      icon: <Cloud className="w-6 h-6 text-jade-green" />,
      title: t("panama_advantages.privileged_climate.title"),
      description: t("panama_advantages.privileged_climate.description"),
    },
    {
      icon: <Users className="w-6 h-6 text-jade-green" />,
      title: t("panama_advantages.expatriate_communities.title"),
      description: t("panama_advantages.expatriate_communities.description"),
    },
    {
      icon: <Plane className="w-6 h-6 text-jade-green" />,
      title: t("panama_advantages.geographic_proximity.title"),
      description: t("panama_advantages.geographic_proximity.description"),
    },
  ];

  const taxBenefits = [
    {
      icon: <DollarSign className="w-5 h-5 text-jade-green" />,
      title: t("tax_benefits.foreign_income_exemption.title"),
      description: t("tax_benefits.foreign_income_exemption.description"),
    },
    {
      icon: <Home className="w-5 h-5 text-jade-green" />,
      title: t("tax_benefits.household_import_exemption.title"),
      description: t("tax_benefits.household_import_exemption.description"),
    },
    {
      icon: <Car className="w-5 h-5 text-jade-green" />,
      title: t("tax_benefits.vehicle_import_exemption.title"),
      description: t("tax_benefits.vehicle_import_exemption.description"),
    },
    {
      icon: <Building className="w-5 h-5 text-jade-green" />,
      title: t("tax_benefits.property_tax_exemption.title"),
      description: t("tax_benefits.property_tax_exemption.description"),
    },
  ];

  const discountBenefits = [
    {
      icon: <Zap className="w-5 h-5 text-jade-green" />,
      discount: "25%",
      category: t("discount_benefits.public_services.category"),
      examples: t("discount_benefits.public_services.examples"),
    },
    {
      icon: <Utensils className="w-5 h-5 text-jade-green" />,
      discount: "25%",
      category: t("discount_benefits.restaurants.category"),
      examples: t("discount_benefits.restaurants.examples"),
    },
    {
      icon: <Hotel className="w-5 h-5 text-jade-green" />,
      discount: "30-50%",
      category: t("discount_benefits.weekday_hotels.category"),
      examples: t("discount_benefits.weekday_hotels.examples"),
    },
    {
      icon: <Plane className="w-5 h-5 text-jade-green" />,
      discount: "25%",
      category: t("discount_benefits.airline_tickets.category"),
      examples: t("discount_benefits.airline_tickets.examples"),
    },
    {
      icon: <Home className="w-5 h-5 text-jade-green" />,
      discount: "15%",
      category: t("discount_benefits.mortgage_loans.category"),
      examples: t("discount_benefits.mortgage_loans.examples"),
    },
    {
      icon: <Stethoscope className="w-5 h-5 text-jade-green" />,
      discount: "20%",
      category: t("discount_benefits.medical_services.category"),
      examples: t("discount_benefits.medical_services.examples"),
    },
    {
      icon: <Film className="w-5 h-5 text-jade-green" />,
      discount: t("discount_benefits.entertainment.discount"),
      category: t("discount_benefits.entertainment.category"),
      examples: t("discount_benefits.entertainment.examples"),
    },
  ];

  const processSteps = [
    {
      step: "1",
      title: t("process_steps.preliminary_evaluation.title"),
      description: t("process_steps.preliminary_evaluation.description"),
      icon: <UserCheck className="w-6 h-6 text-jade-green" />,
    },
    {
      step: "2",
      title: t("process_steps.document_collection.title"),
      description: t("process_steps.document_collection.description"),
      icon: <FileText className="w-6 h-6 text-jade-green" />,
    },
    {
      step: "3",
      title: t("process_steps.document_authentication.title"),
      description: t("process_steps.document_authentication.description"),
      icon: <Shield className="w-6 h-6 text-jade-green" />,
    },
    {
      step: "4",
      title: t("process_steps.file_preparation.title"),
      description: t("process_steps.file_preparation.description"),
      icon: <Briefcase className="w-6 h-6 text-jade-green" />,
    },
    {
      step: "5",
      title: t("process_steps.immigration_submission.title"),
      description: t("process_steps.immigration_submission.description"),
      icon: <Users className="w-6 h-6 text-jade-green" />,
    },
    {
      step: "6",
      title: t("process_steps.residency_card_processing.title"),
      description: t("process_steps.residency_card_processing.description"),
      icon: <CreditCard className="w-6 h-6 text-jade-green" />,
    },
    {
      step: "7",
      title: t("process_steps.post_approval_services.title"),
      description: t("process_steps.post_approval_services.description"),
      icon: <Handshake className="w-6 h-6 text-jade-green" />,
    },
  ];

  const requirements = [
    {
      icon: <DollarSign className="w-5 h-5 text-jade-green" />,
      title: t("requirements.minimum_pension.title"),
      description: t("requirements.minimum_pension.description"),
    },
    {
      icon: <CreditCard className="w-5 h-5 text-jade-green" />,
      title: t("requirements.valid_passport.title"),
      description: t("requirements.valid_passport.description"),
    },
    {
      icon: <Shield className="w-5 h-5 text-jade-green" />,
      title: t("requirements.criminal_record.title"),
      description: t("requirements.criminal_record.description"),
    },
    {
      icon: <Heart className="w-5 h-5 text-jade-green" />,
      title: t("requirements.medical_certificate.title"),
      description: t("requirements.medical_certificate.description"),
    },
    {
      icon: <Home className="w-5 h-5 text-jade-green" />,
      title: t("requirements.proof_of_address.title"),
      description: t("requirements.proof_of_address.description"),
    },
    {
      icon: <UserCheck className="w-5 h-5 text-jade-green" />,
      title: t("requirements.passport_photos.title"),
      description: t("requirements.passport_photos.description"),
    },
    {
      icon: <FileText className="w-5 h-5 text-jade-green" />,
      title: t("requirements.power_of_attorney.title"),
      description: t("requirements.power_of_attorney.description"),
    },
  ];

  const companyApproach = [
    {
      icon: <Target className="w-6 h-6 text-jade-green" />,
      title: t("company_approach.initial_consultations.title"),
      description: t("company_approach.initial_consultations.description"),
    },
    {
      icon: <Phone className="w-6 h-6 text-jade-green" />,
      title: t("company_approach.constant_communication.title"),
      description: t("company_approach.constant_communication.description"),
    },
    {
      icon: <Briefcase className="w-6 h-6 text-jade-green" />,
      title: t("company_approach.comprehensive_packages.title"),
      description: t("company_approach.comprehensive_packages.description"),
    },
    {
      icon: <Globe className="w-6 h-6 text-jade-green" />,
      title: t("company_approach.bilingual_service.title"),
      description: t("company_approach.bilingual_service.description"),
    },
    {
      icon: <Users className="w-6 h-6 text-jade-green" />,
      title: t("company_approach.community_connections.title"),
      description: t("company_approach.community_connections.description"),
    },
    {
      icon: <Shield className="w-6 h-6 text-jade-green" />,
      title: t("company_approach.post_residency_support.title"),
      description: t("company_approach.post_residency_support.description"),
    },
  ];

  const postVisaServices = [
    {
      icon: <CreditCard className="w-5 h-5 text-jade-green" />,
      title: t("post_visa_services.bank_account_opening.title"),
    },
    {
      icon: <Home className="w-5 h-5 text-jade-green" />,
      title: t("post_visa_services.property_acquisition.title"),
    },
    {
      icon: <Users className="w-5 h-5 text-jade-green" />,
      title: t("post_visa_services.domestic_hiring.title"),
    },
    {
      icon: <Heart className="w-5 h-5 text-jade-green" />,
      title: t("post_visa_services.healthcare_registration.title"),
    },
    {
      icon: <MapPin className="w-5 h-5 text-jade-green" />,
      title: t("post_visa_services.community_orientation.title"),
    },
  ];

  return (
    <>
      <section id="visa-pensionado" className="py-16 bg-gradient-to-br from-jade-green/10 to-white scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <Award className="w-16 h-16 text-jade-green mx-auto mb-4" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-jade-green mb-6">
              {t("hero.title")}
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              {t("hero.subtitle")}
            </h2>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                {t("introduction.paragraph_1")}
              </p>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mt-4">
                {t("introduction.paragraph_2")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Panama Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-jade-green mb-12 text-center">
              {t("why_panama_section.title")}
            </h2>
            <p className="text-gray-600 mb-8 text-center max-w-4xl mx-auto">
              {t("why_panama_section.description")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {panamaAdvantages.map((advantage, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {advantage.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">{advantage.title}</h3>
                      <p className="text-gray-600 text-sm">{advantage.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tax Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-jade-green mb-12 text-center">
              {t("tax_benefits_section.title")}
            </h2>
            <p className="text-gray-600 mb-8 text-center max-w-4xl mx-auto">
              {t("tax_benefits_section.description")}
            </p>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">{t("tax_benefits_section.subtitle")}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {taxBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4 p-6 bg-jade-green/5 rounded-lg hover:bg-jade-green/10 transition-colors">
                    <div className="flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">{benefit.title}</h4>
                      <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discount Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              {t("discount_benefits_section.title")}
            </h3>
            <p className="text-gray-600 mb-8 text-center max-w-4xl mx-auto">
              {t("discount_benefits_section.description")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {discountBenefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="flex-shrink-0">
                        {benefit.icon}
                      </div>
                      <span className="text-2xl font-bold text-jade-green">{benefit.discount}</span>
                    </div>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">{benefit.category}</h4>
                  <p className="text-gray-600 text-sm">{benefit.examples}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-jade-green mb-12 text-center">
              {t("process_section.title")}
            </h2>
            <p className="text-gray-600 mb-8 text-center max-w-4xl mx-auto">
              {t("process_section.description")}
            </p>

            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-jade-green text-white rounded-full flex items-center justify-center font-bold">
                        {step.step}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-3">
                        <div className="mr-3">{step.icon}</div>
                        <h3 className="text-lg font-semibold text-gray-800">{step.title}</h3>
                      </div>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-jade-green mb-12 text-center">
              {t("requirements_section.title")}
            </h2>
            <p className="text-gray-600 mb-8 text-center max-w-4xl mx-auto">
              {t("requirements_section.description")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {requirements.map((req, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {req.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">{req.title}</h4>
                      <p className="text-gray-600 text-sm">{req.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-blue-50 p-6 rounded-lg">
              <p className="text-gray-700 text-center">
                <strong>{t("requirements_section.note_prefix")}</strong> {t("requirements_section.note")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Approach Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-jade-green mb-12 text-center">
              {t("company_approach_section.title")}
            </h2>
            <p className="text-gray-600 mb-8 text-center max-w-4xl mx-auto">
              {t("company_approach_section.description")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {companyApproach.map((approach, index) => (
                <div key={index} className="text-center p-6 bg-jade-green/5 rounded-lg hover:bg-jade-green/10 transition-colors">
                  <div className="flex justify-center mb-4">
                    {approach.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">{approach.title}</h3>
                  <p className="text-gray-600 text-sm">{approach.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Post Visa Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-jade-green mb-12 text-center">
              {t("post_visa_services_section.title")}
            </h2>
            <p className="text-gray-600 mb-8 text-center max-w-4xl mx-auto">
              {t("post_visa_services_section.description")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {postVisaServices.map((service, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex-shrink-0">
                    {service.icon}
                  </div>
                  <p className="text-gray-700 text-sm font-medium">{service.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-jade-green to-jade-green/90 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t("cta_section.title")}
            </h2>
            <p className="text-lg mb-8 leading-relaxed">
              {t("cta_section.paragraph")}
            </p>
            <div className="bg-white/10 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">
                {t("cta_section.invitation_title")}
              </h3>
              <p className="text-lg mb-6">
                {t("cta_section.invitation_description")}
              </p>
              <div className="flex items-center justify-center space-x-2">
                <Handshake className="w-6 h-6" />
                <span className="font-semibold">{t("cta_section.button_text")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm text-gray-600 italic">
              {t("disclaimer_section.text")}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}