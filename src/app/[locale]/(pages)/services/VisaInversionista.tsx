
"use client";

import { useTranslations } from "next-intl";
import {
  Globe,
  DollarSign,
  Building,
  CreditCard,
  Home,
  Users,
  CheckCircle,
  Shield,
  Target,
  Lightbulb,
  Handshake,
  FileText,
  Clock,
  ArrowRight,
  Star,
  Briefcase,
  Plane,
  Banknote,
  PieChart,
  Award,
  TrendingUp,
  UserCheck,
  CreditCard as IDCard,
  Scale,
  Calendar,
  MapPin,
  Heart,
  Baby,
} from "lucide-react";

interface VisaInversionistaProps {
  locale?: string;
}

export default function VisaInversionista({ locale }: VisaInversionistaProps) {
  const t = useTranslations("services_page");
  const tVisa = useTranslations("visa_inversionista");

  const panamaAdvantages = [
    {
      icon: <MapPin className="w-6 h-6 text-jade-green" />,
      title: tVisa("panama_advantages.strategic_location.title"),
      description: tVisa("panama_advantages.strategic_location.description"),
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-jade-green" />,
      title: tVisa("panama_advantages.economic_stability.title"),
      description: tVisa("panama_advantages.economic_stability.description"),
    },
    {
      icon: <Shield className="w-6 h-6 text-jade-green" />,
      title: tVisa("panama_advantages.friendly_immigration.title"),
      description: tVisa("panama_advantages.friendly_immigration.description"),
    },
  ];

  const investmentOptions = [
    {
      icon: <Banknote className="w-8 h-8 text-jade-green" />,
      title: tVisa("investment_options.fixed_term.title"),
      subtitle: tVisa("investment_options.fixed_term.subtitle"),
      amount: "USD 300,000",
      description: tVisa("investment_options.fixed_term.description"),
      requirements: [
        tVisa("investment_options.fixed_term.requirements.bank_account"),
        tVisa("investment_options.fixed_term.requirements.deposit_amount"),
        tVisa("investment_options.fixed_term.requirements.minimum_term"),
        tVisa("investment_options.fixed_term.requirements.personal_funds"),
      ],
    },
    {
      icon: <Building className="w-8 h-8 text-jade-green" />,
      title: tVisa("investment_options.real_estate.title"),
      subtitle: tVisa("investment_options.real_estate.subtitle"),
      amount: "USD 300,000",
      description: tVisa("investment_options.real_estate.description"),
      requirements: [
        tVisa("investment_options.real_estate.requirements.property_value"),
        tVisa("investment_options.real_estate.requirements.registration"),
        tVisa("investment_options.real_estate.requirements.ideal_use"),
        tVisa("investment_options.real_estate.requirements.diversification"),
      ],
    },
    {
      icon: <PieChart className="w-8 h-8 text-jade-green" />,
      title: tVisa("investment_options.mixed.title"),
      subtitle: tVisa("investment_options.mixed.subtitle"),
      amount: "USD 300,000",
      description: tVisa("investment_options.mixed.description"),
      requirements: [
        tVisa("investment_options.mixed.requirements.combination"),
        tVisa("investment_options.mixed.requirements.total_amount"),
        tVisa("investment_options.mixed.requirements.diversification"),
        tVisa("investment_options.mixed.requirements.customized"),
      ],
    },
  ];

  const requirements = [
    {
      icon: <IDCard className="w-5 h-5 text-jade-green" />,
      title: tVisa("requirements.valid_passport.title"),
      description: tVisa("requirements.valid_passport.description"),
    },
    {
      icon: <Scale className="w-5 h-5 text-jade-green" />,
      title: tVisa("requirements.criminal_records.title"),
      description: tVisa("requirements.criminal_records.description"),
    },
    {
      icon: <Shield className="w-5 h-5 text-jade-green" />,
      title: tVisa("requirements.funds_origin.title"),
      description: tVisa("requirements.funds_origin.description"),
    },
    {
      icon: <FileText className="w-5 h-5 text-jade-green" />,
      title: tVisa("requirements.financial_documents.title"),
      description: tVisa("requirements.financial_documents.description"),
    },
    {
      icon: <UserCheck className="w-5 h-5 text-jade-green" />,
      title: tVisa("requirements.passport_photos.title"),
      description: tVisa("requirements.passport_photos.description"),
    },
    {
      icon: <FileText className="w-5 h-5 text-jade-green" />,
      title: tVisa("requirements.immigration_form.title"),
      description: tVisa("requirements.immigration_form.description"),
    },
  ];

  const residencyPath = [
    {
      step: "1",
      title: tVisa("residency_path.provisional.title"),
      duration: tVisa("residency_path.provisional.duration"),
      description: tVisa("residency_path.provisional.description"),
      icon: <Clock className="w-6 h-6 text-jade-green" />,
    },
    {
      step: "2",
      title: tVisa("residency_path.permanent.title"),
      duration: tVisa("residency_path.permanent.duration"),
      description: tVisa("residency_path.permanent.description"),
      icon: <Award className="w-6 h-6 text-jade-green" />,
    },
    {
      step: "3",
      title: tVisa("residency_path.citizenship.title"),
      duration: tVisa("residency_path.citizenship.duration"),
      description: tVisa("residency_path.citizenship.description"),
      icon: <IDCard className="w-6 h-6 text-jade-green" />,
    },
    {
      step: "4",
      title: tVisa("residency_path.children_citizenship.title"),
      duration: tVisa("residency_path.children_citizenship.duration"),
      description: tVisa("residency_path.children_citizenship.description"),
      icon: <Baby className="w-6 h-6 text-jade-green" />,
    },
  ];

  const visaAdvantages = [
    {
      icon: <Users className="w-5 h-5 text-jade-green" />,
      title: tVisa("visa_advantages.available_chinese.title"),
    },
    {
      icon: <Briefcase className="w-5 h-5 text-jade-green" />,
      title: tVisa("visa_advantages.no_employment.title"),
    },
    {
      icon: <Shield className="w-5 h-5 text-jade-green" />,
      title: tVisa("visa_advantages.no_sponsor.title"),
    },
    {
      icon: <DollarSign className="w-5 h-5 text-jade-green" />,
      title: tVisa("visa_advantages.safe_investment.title"),
    },
    {
      icon: <Heart className="w-5 h-5 text-jade-green" />,
      title: tVisa("visa_advantages.family_inclusion.title"),
    },
    {
      icon: <Target className="w-5 h-5 text-jade-green" />,
      title: tVisa("visa_advantages.realistic_path.title"),
    },
  ];

  const practicalTips = [
    {
      icon: <Handshake className="w-6 h-6 text-jade-green" />,
      title: tVisa("practical_tips.work_with_us.title"),
      description: tVisa("practical_tips.work_with_us.description"),
    },
    {
      icon: <FileText className="w-6 h-6 text-jade-green" />,
      title: tVisa("practical_tips.prepare_docs.title"),
      description: tVisa("practical_tips.prepare_docs.description"),
    },
    {
      icon: <Plane className="w-6 h-6 text-jade-green" />,
      title: tVisa("practical_tips.plan_trip.title"),
      description: tVisa("practical_tips.plan_trip.description"),
    },
  ];

  const panamaBenefits = [
    {
      icon: <Shield className="w-6 h-6 text-jade-green" />,
      title: tVisa("panama_benefits.friendly_system.title"),
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-jade-green" />,
      title: tVisa("panama_benefits.stable_economy.title"),
    },
    {
      icon: <Users className="w-6 h-6 text-jade-green" />,
      title: tVisa("panama_benefits.chinese_community.title"),
    },
    {
      icon: <MapPin className="w-6 h-6 text-jade-green" />,
      title: tVisa("panama_benefits.proximity.title"),
    },
    {
      icon: <Target className="w-6 h-6 text-jade-green" />,
      title: tVisa("panama_benefits.clear_path.title"),
    },
  ];

  return (
    <>
      <section id="visa-inversionista" className="py-16 bg-gradient-to-br from-jade-green/10 to-white scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <Globe className="w-16 h-16 text-jade-green mx-auto mb-4" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-jade-green mb-6">
              {tVisa("hero.title")}
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              {tVisa("hero.subtitle")}
            </h2>
            <p className="text-xl text-gray-600 mb-4">
              {tVisa("hero.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                {tVisa("introduction.paragraph_1")}
              </p>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mt-4">
                {tVisa("introduction.paragraph_2")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {panamaAdvantages.map((advantage, index) => (
                <div key={index} className="text-center p-6 bg-jade-green/5 rounded-lg hover:bg-jade-green/10 transition-colors">
                  <div className="flex justify-center mb-4">
                    {advantage.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{advantage.title}</h3>
                  <p className="text-gray-600 text-sm">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What is Visa Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-jade-green mb-12 text-center">
              {tVisa("what_is_visa.title")}
            </h2>
            <p className="text-xl text-gray-600 mb-4 text-center">
              {tVisa("what_is_visa.subtitle")}
            </p>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {tVisa("what_is_visa.description_1")}
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {tVisa("what_is_visa.description_2")}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                {tVisa("what_is_visa.description_3")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Options Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-jade-green mb-12 text-center">
              {tVisa("investment_options.title")}
            </h2>
            <p className="text-gray-600 mb-8 text-center max-w-4xl mx-auto">
              {tVisa("investment_options.description")}
            </p>

            <div className="space-y-8">
              {investmentOptions.map((option, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      {option.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-4">
                        <h3 className="text-2xl font-bold text-gray-800 mr-4">{option.title}</h3>
                        <span className="text-lg text-gray-600 font-medium">{option.subtitle}</span>
                      </div>
                      <div className="bg-jade-green text-gold-700 px-4 py-2 rounded-lg inline-block mb-4">
                        <span className="text-xl font-bold">{option.amount}</span>
                      </div>
                      <p className="text-gray-600 mb-6 leading-relaxed">{option.description}</p>
                      <div className="space-y-2">
                        {option.requirements.map((req, reqIndex) => (
                          <div key={reqIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-jade-green flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{req}</span>
                          </div>
                        ))}
                      </div>
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
              {tVisa("requirements.title")}
            </h2>
            <p className="text-gray-600 mb-8 text-center max-w-4xl mx-auto">
              {tVisa("requirements.description")}
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
                <strong>{tVisa("requirements.important_note.prefix")}</strong> {tVisa("requirements.important_note.text")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Residency Path Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-jade-green mb-12 text-center">
              {tVisa("residency_path.title")}
            </h2>

            <div className="space-y-6">
              {residencyPath.map((step, index) => (
                <div key={index} className="flex items-start space-x-6 p-6 bg-jade-green/5 rounded-lg hover:bg-jade-green/10 transition-colors">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-jade-green text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <div className="mr-3">{step.icon}</div>
                      <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
                      <span className="ml-3 text-jade-green font-medium">{step.duration}</span>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gradient-to-r from-jade-green/10 to-blue-50 p-6 rounded-lg">
              <p className="text-gray-700 text-center">
                <strong>{tVisa("residency_path.special_note")}</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visa Advantages Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-jade-green mb-12 text-center">
              {tVisa("visa_advantages.title")}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {visaAdvantages.map((advantage, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex-shrink-0">
                    {advantage.icon}
                  </div>
                  <div className="flex items-start space-x-2">
                    <Star className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-sm">{advantage.title}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-blue-50 p-6 rounded-lg">
              <p className="text-gray-700 text-sm leading-relaxed">
                {tVisa("visa_advantages.comparison")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Tips Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-jade-green mb-12 text-center">
              {tVisa("practical_tips.title")}
            </h2>

            <div className="space-y-6">
              {practicalTips.map((tip, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {tip.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">{tip.title}</h3>
                      <p className="text-gray-600">{tip.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-jade-green mb-12 text-center">
              {tVisa("final_section.title")}
            </h2>
            <p className="text-lg text-gray-600 mb-8 text-center max-w-4xl mx-auto leading-relaxed">
              {tVisa("final_section.paragraph_1")}
            </p>
            <p className="text-lg text-gray-600 mb-8 text-center max-w-4xl mx-auto leading-relaxed">
              {tVisa("final_section.paragraph_2")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {panamaBenefits.map((benefit, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <p className="text-gray-700 font-medium">{benefit.title}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-jade-green to-jade-green/90 p-8 rounded-lg text-white text-center">
              <h3 className="text-2xl font-bold mb-4">
                {tVisa("final_section.cta.title")}
              </h3>
              <p className="text-lg mb-6">
                {tVisa("final_section.cta.description")}
              </p>
              <div className="flex items-center justify-center space-x-2">
                <Handshake className="w-6 h-6" />
                <span className="font-semibold">{tVisa("final_section.cta.button")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}