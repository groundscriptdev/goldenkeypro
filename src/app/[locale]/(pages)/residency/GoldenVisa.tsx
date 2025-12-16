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

interface GoldenVisaProps {
  locale?: string;
}

export default function GoldenVisa({ locale }: GoldenVisaProps) {
  const t = useTranslations("golden_visa");

  const strategicAdvantages = [
    {
      icon: <MapPin className="w-6 h-6 text-jade-green" />,
      title: t("strategic_advantages.strategic_bridge.title"),
      description: t("strategic_advantages.strategic_bridge.description"),
    },
    {
      icon: <Globe className="w-6 h-6 text-jade-green" />,
      title: t("strategic_advantages.hemispheric_access.title"),
      description: t("strategic_advantages.hemispheric_access.description"),
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-jade-green" />,
      title: t("strategic_advantages.sustained_growth.title"),
      description: t("strategic_advantages.sustained_growth.description"),
    },
  ];

  const exclusivePrivileges = [
    {
      icon: <IDCard className="w-8 h-8 text-jade-green" />,
      title: t("exclusive_privileges.immediate_permanent_residency.title"),
      description: t("exclusive_privileges.immediate_permanent_residency.description"),
    },
    {
      icon: <Clock className="w-8 h-8 text-jade-green" />,
      title: t("exclusive_privileges.expedited_citizenship_path.title"),
      description: t("exclusive_privileges.expedited_citizenship_path.description"),
    },
    {
      icon: <Users className="w-8 h-8 text-jade-green" />,
      title: t("exclusive_privileges.comprehensive_family_inclusion.title"),
      description: t("exclusive_privileges.comprehensive_family_inclusion.description"),
    },
    {
      icon: <Plane className="w-8 h-8 text-jade-green" />,
      title: t("exclusive_privileges.flexible_physical_residency.title"),
      description: t("exclusive_privileges.flexible_physical_residency.description"),
    },
    {
      icon: <Shield className="w-8 h-8 text-jade-green" />,
      title: t("exclusive_privileges.no_nationality_restrictions.title"),
      description: t("exclusive_privileges.no_nationality_restrictions.description"),
    },
  ];

  const investmentOptions = [
    {
      icon: <Building className="w-8 h-8 text-jade-green" />,
      title: t("investment_options.premium_real_estate.title"),
      amount: t("investment_options.premium_real_estate.amount"),
      description: t("investment_options.premium_real_estate.description"),
      features: [
        t("investment_options.premium_real_estate.features.0"),
        t("investment_options.premium_real_estate.features.1"),
        t("investment_options.premium_real_estate.features.2"),
        t("investment_options.premium_real_estate.features.3"),
      ],
    },
    {
      icon: <Banknote className="w-8 h-8 text-jade-green" />,
      title: t("investment_options.strategic_bank_deposit.title"),
      amount: t("investment_options.strategic_bank_deposit.amount"),
      description: t("investment_options.strategic_bank_deposit.description"),
      features: [
        t("investment_options.strategic_bank_deposit.features.0"),
        t("investment_options.strategic_bank_deposit.features.1"),
        t("investment_options.strategic_bank_deposit.features.2"),
        t("investment_options.strategic_bank_deposit.features.3"),
      ],
    },
    {
      icon: <PieChart className="w-8 h-8 text-jade-green" />,
      title: t("investment_options.securities_portfolio.title"),
      amount: t("investment_options.securities_portfolio.amount"),
      description: t("investment_options.securities_portfolio.description"),
      features: [
        t("investment_options.securities_portfolio.features.0"),
        t("investment_options.securities_portfolio.features.1"),
        t("investment_options.securities_portfolio.features.2"),
        t("investment_options.securities_portfolio.features.3"),
      ],
    },
  ];

  const processSteps = [
    {
      step: "1",
      title: t("process.steps.0.title"),
      description: t("process.steps.0.description"),
      icon: <Lightbulb className="w-6 h-6 text-jade-green" />,
    },
    {
      step: "2",
      title: t("process.steps.1.title"),
      description: t("process.steps.1.description"),
      icon: <Target className="w-6 h-6 text-jade-green" />,
    },
    {
      step: "3",
      title: t("process.steps.2.title"),
      description: t("process.steps.2.description"),
      icon: <FileText className="w-6 h-6 text-jade-green" />,
    },
    {
      step: "4",
      title: t("process.steps.3.title"),
      description: t("process.steps.3.description"),
      icon: <Shield className="w-6 h-6 text-jade-green" />,
    },
    {
      step: "5",
      title: t("process.steps.4.title"),
      description: t("process.steps.4.description"),
      icon: <Briefcase className="w-6 h-6 text-jade-green" />,
    },
    {
      step: "6",
      title: t("process.steps.5.title"),
      description: t("process.steps.5.description"),
      icon: <Calendar className="w-6 h-6 text-jade-green" />,
    },
    {
      step: "7",
      title: t("process.steps.6.title"),
      description: t("process.steps.6.description"),
      icon: <Award className="w-6 h-6 text-jade-green" />,
    },
  ];

  const requiredDocumentation = [
    {
      icon: <IDCard className="w-5 h-5 text-jade-green" />,
      title: t("required_documentation.documents.0.title"),
      description: t("required_documentation.documents.0.description"),
    },
    {
      icon: <Scale className="w-5 h-5 text-jade-green" />,
      title: t("required_documentation.documents.1.title"),
      description: t("required_documentation.documents.1.description"),
    },
    {
      icon: <FileText className="w-5 h-5 text-jade-green" />,
      title: t("required_documentation.documents.2.title"),
      description: t("required_documentation.documents.2.description"),
    },
    {
      icon: <Heart className="w-5 h-5 text-jade-green" />,
      title: t("required_documentation.documents.3.title"),
      description: t("required_documentation.documents.3.description"),
    },
    {
      icon: <DollarSign className="w-5 h-5 text-jade-green" />,
      title: t("required_documentation.documents.4.title"),
      description: t("required_documentation.documents.4.description"),
    },
    {
      icon: <UserCheck className="w-5 h-5 text-jade-green" />,
      title: t("required_documentation.documents.5.title"),
      description: t("required_documentation.documents.5.description"),
    },
    {
      icon: <Handshake className="w-5 h-5 text-jade-green" />,
      title: t("required_documentation.documents.6.title"),
      description: t("required_documentation.documents.6.description"),
    },
  ];

  const differentialValue = [
    {
      icon: <Target className="w-6 h-6 text-jade-green" />,
      title: t("differential_value.values.0.title"),
      description: t("differential_value.values.0.description"),
    },
    {
      icon: <Shield className="w-6 h-6 text-jade-green" />,
      title: t("differential_value.values.1.title"),
      description: t("differential_value.values.1.description"),
    },
    {
      icon: <Users className="w-6 h-6 text-jade-green" />,
      title: t("differential_value.values.2.title"),
      description: t("differential_value.values.2.description"),
    },
    {
      icon: <Home className="w-6 h-6 text-jade-green" />,
      title: t("differential_value.values.3.title"),
      description: t("differential_value.values.3.description"),
    },
    {
      icon: <Award className="w-6 h-6 text-jade-green" />,
      title: t("differential_value.values.4.title"),
      description: t("differential_value.values.4.description"),
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-jade-green-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <Globe className="w-16 h-16 text-amber-200 mx-auto mb-4" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              {t("hero.title")}
            </h1>
            <h2 className="text-2xl md:text-3xl font-light mb-4 text-white">
              {t("hero.subtitle")}
            </h2>
            <p className="text-xl md:text-2xl mb-4 text-amber-100">
              {t("hero.description")}
            </p>
            <p className="text-lg font-medium text-amber-200">
              {t("hero.target_audience")}
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-jade-green mb-8">
                {t("strategic_advantages.title")}
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-6 mb-12">
              <p className="text-lg text-gray-700 leading-relaxed">
                {t("introduction.paragraph_1")}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t("introduction.paragraph_2")}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t("introduction.paragraph_3")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {strategicAdvantages.map((advantage, index) => (
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

      {/* Qualified Investor Visa Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-jade-green mb-12 text-center">
              {t("exclusive_privileges.title")}
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-6 mb-12">
              <p className="text-lg text-gray-700 leading-relaxed">
                {t("introduction.paragraph_4")}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t("introduction.paragraph_5")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Citizenship Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-jade-green mb-6 text-center">
              {t("investment_options.title")}
            </h2>
            <h3 className="text-2xl font-semibold text-center mb-12 text-gray-700">
              {t("process.title")}
            </h3>
            
            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-lg text-gray-700 leading-relaxed">
                {t("introduction.paragraph_6")}
              </p>
            </div>

            <div className="space-y-6">
              {exclusivePrivileges.map((privilege, index) => (
                <div key={index} className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg border-l-4 border-amber-600">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {privilege.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        {privilege.title}
                      </h3>
                      <p className="text-gray-700">
                        {privilege.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investment Options Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-jade-green mb-12 text-center">
              {t("required_documentation.title")}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {investmentOptions.map((option, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-amber-600 mb-4">
                    <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
                      {option.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {option.title}
                  </h3>
                  <div className="bg-jade-green text-primary px-4 py-2 rounded-lg inline-block mb-4">
                    <span className="text-lg font-bold">{option.amount}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{option.description}</p>
                  <div className="space-y-2">
                    {option.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-jade-green flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-jade-green mb-6 text-center">
              {t("differential_value.title")}
            </h2>
            <p className="text-xl text-center mb-12 text-gray-700">
              {t("differential_value.subtitle")}
            </p>
            
            <div className="space-y-6">
              {processSteps.map((step, index) => (
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
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Required Documentation Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-jade-green mb-6 text-center">
              {t("process.subtitle")}
            </h2>
            <p className="text-xl text-center mb-12 text-gray-700">
              {t("required_documentation.subtitle")}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {requiredDocumentation.map((doc, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {doc.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">{doc.title}</h4>
                      <p className="text-gray-600 text-sm">{doc.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Differential Value Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-jade-green mb-6 text-center">
              {t("differential_value.title")}
            </h2>
            <p className="text-xl text-center mb-12 text-gray-700">
              {t("differential_value.subtitle")}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {differentialValue.map((value, index) => (
                <div key={index} className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-lg">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">
                        {value.title}
                      </h3>
                      <p className="text-gray-700">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Personal Invitation Section */}
      <section className="py-16 bg-jade-green-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
              {t("personal_invitation.title")}
            </h2>
            <div className="space-y-6 mb-8">
              <p className="text-lg leading-relaxed text-gray-200">
                {t("personal_invitation.description")}
              </p>
              <p className="text-lg leading-relaxed text-gray-200">
                {t("personal_invitation.invitation")}
              </p>
            </div>
            <p className="text-sm text-gray-400 italic">
              {t("personal_invitation.disclaimer")}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}