"use client";

import { useTranslations } from "next-intl";
import {
  Calculator,
  FileText,
  TrendingUp,
  Shield,
  Globe,
  CheckCircle,
  Building,
  Users,
  BookOpen,
  PieChart,
  Briefcase,
  DollarSign,
  Scale,
  Clock,
  ArrowRight,
  Target,
  Lightbulb,
  Handshake,
  BarChart3,
  Receipt,
  CreditCard,
  Banknote,
  FileCheck,
  ClipboardList,
  Calendar,
  Award,
  Star,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface AccountingProps {
  locale?: string;
}

export default function Accounting({ locale }: AccountingProps) {
  const t = useTranslations("accounting");

  const accountingFeatures = [
    {
      icon: <Globe className="w-6 h-6 text-jade-green" />,
      title: t("features.territoriality.title"),
      description: t("features.territoriality.description"),
    },
    {
      icon: <Scale className="w-6 h-6 text-jade-green" />,
      title: t("features.standards.title"),
      description: t("features.standards.description"),
    },
    {
      icon: <Target className="w-6 h-6 text-jade-green" />,
      title: t("features.requirements.title"),
      description: t("features.requirements.description"),
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-jade-green" />,
      title: t("features.substance.title"),
      description: t("features.substance.description"),
    },
  ];

  const operationalRequirements = [
    {
      icon: <FileText className="w-5 h-5 text-jade-green" />,
      title: t("operational_requirements.full_accounting"),
    },
    {
      icon: <Receipt className="w-5 h-5 text-jade-green" />,
      title: t("operational_requirements.annual_return"),
    },
    {
      icon: <DollarSign className="w-5 h-5 text-jade-green" />,
      title: t("operational_requirements.tax_refund"),
    },
    {
      icon: <PieChart className="w-5 h-5 text-jade-green" />,
      title: t("operational_requirements.dividends_report"),
    },
    {
      icon: <Users className="w-5 h-5 text-jade-green" />,
      title: t("operational_requirements.payroll_records"),
    },
    {
      icon: <Building className="w-5 h-5 text-jade-green" />,
      title: t("operational_requirements.municipal_reports"),
    },
  ];

  const holdingRequirements = [
    {
      icon: <BookOpen className="w-5 h-5 text-jade-green" />,
      title: t("holding_requirements.basic_records"),
    },
    {
      icon: <FileCheck className="w-5 h-5 text-jade-green" />,
      title: t("holding_requirements.corporate_minutes"),
    },
    {
      icon: <BarChart3 className="w-5 h-5 text-jade-green" />,
      title: t("holding_requirements.substance_reports"),
    },
    {
      icon: <ClipboardList className="w-5 h-5 text-jade-green" />,
      title: t("holding_requirements.informational_returns"),
    },
  ];

  const processSteps = [
    {
      step: "1",
      title: t("steps.evaluation.title"),
      description: t("steps.evaluation.description"),
      icon: <Target className="w-6 h-6 text-jade-green" />,
    },
    {
      step: "2",
      title: t("steps.design.title"),
      description: t("steps.design.description"),
      icon: <Calculator className="w-6 h-6 text-jade-green" />,
    },
    {
      step: "3",
      title: t("steps.collection.title"),
      description: t("steps.collection.description"),
      icon: <FileText className="w-6 h-6 text-jade-green" />,
    },
    {
      step: "4",
      title: t("steps.processing.title"),
      description: t("steps.processing.description"),
      icon: <BarChart3 className="w-6 h-6 text-jade-green" />,
    },
    {
      step: "5",
      title: t("steps.reporting.title"),
      description: t("steps.reporting.description"),
      icon: <TrendingUp className="w-6 h-6 text-jade-green" />,
    },
    {
      step: "6",
      title: t("steps.preparation.title"),
      description: t("steps.preparation.description"),
      icon: <Receipt className="w-6 h-6 text-jade-green" />,
    },
    {
      step: "7",
      title: t("steps.review.title"),
      description: t("steps.review.description"),
      icon: <Users className="w-6 h-6 text-jade-green" />,
    },
  ];

  const requiredDocumentation = [
    {
      icon: <CreditCard className="w-5 h-5 text-jade-green" />,
      title: t("required_documents.bank_statements"),
    },
    {
      icon: <Receipt className="w-5 h-5 text-jade-green" />,
      title: t("required_documents.expense_invoices"),
    },
    {
      icon: <FileText className="w-5 h-5 text-jade-green" />,
      title: t("required_documents.service_contracts"),
    },
    {
      icon: <Briefcase className="w-5 h-5 text-jade-green" />,
      title: t("required_documents.board_minutes"),
    },
    {
      icon: <ArrowRight className="w-5 h-5 text-jade-green" />,
      title: t("required_documents.related_party_transfers"),
    },
    {
      icon: <BarChart3 className="w-5 h-5 text-jade-green" />,
      title: t("required_documents.asset_valuations"),
    },
  ];

  return (
    <>
      <section id="accounting" className="py-16 bg-gradient-to-br from-jade-green/10 to-white scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <Calculator className="w-16 h-16 text-jade-green mx-auto mb-4" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-jade-green mb-6">
              {t("title")}
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              {t("subtitle")}
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
                {t("introduction_1")}
              </p>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mt-4">
                {t("introduction_2")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accounting Framework Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-jade-green mb-12 text-center">
              {t("framework_title")}
            </h2>
            <p className="text-gray-600 mb-8 text-center max-w-4xl mx-auto">
              {t("framework_subtitle")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {accountingFeatures.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">{feature.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Obligations by Profile Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-jade-green mb-12 text-center">
              {t("obligations_title")}
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Operational Societies */}
              <div className="bg-gradient-to-br from-jade-green/10 to-white p-8 rounded-lg">
                <div className="flex items-center mb-6">
                  <Building className="w-8 h-8 text-jade-green mr-3" />
                  <h3 className="text-xl font-bold text-gray-800">
                    {t("operational_title")}
                  </h3>
                </div>
                <div className="space-y-4">
                  {operationalRequirements.map((req, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        {req.icon}
                      </div>
                      <p className="text-gray-700 text-sm">{req.title}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Holding/International Investment */}
              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg">
                <div className="flex items-center mb-6">
                  <Globe className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-800">
                    {t("holding_title")}
                  </h3>
                </div>
                <div className="space-y-4">
                  {holdingRequirements.map((req, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        {req.icon}
                      </div>
                      <p className="text-gray-700 text-sm">{req.title}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-jade-green mb-12 text-center">
              {t("process_title")}
            </h2>
            <p className="text-gray-600 mb-8 text-center max-w-4xl mx-auto">
              {t("process_subtitle")}
            </p>

            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
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

      {/* Documentation Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-jade-green mb-12 text-center">
              {t("documentation_title")}
            </h2>
            <p className="text-gray-600 mb-8 text-center max-w-4xl mx-auto">
              {t("documentation_subtitle")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {requiredDocumentation.map((doc, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-jade-green/5 rounded-lg hover:bg-jade-green/10 transition-colors">
                  <div className="flex-shrink-0 mt-1">
                    {doc.icon}
                  </div>
                  <p className="text-gray-700 text-sm">{doc.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-jade-green mb-6">
              {t("next_steps_title")}
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {t("next_steps_description")}
            </p>
            
              <Button
                    asChild
                    className="bg-green-950 hover:bg-jade-green/90 text-white"
                  >
                    <Link href={`/${locale}/contact`}>
                      <Handshake className="w-6 h-6" />
                <span className="font-semibold ">{t("consult_experts")}</span>
                    </Link>
                  </Button>
            <div className="bg-gradient-to-r from-jade-green to-jade-green/90 p-8 rounded-lg text-white">
              <h3 className="text-2xl font-bold mb-4">
                {t("cta_title")}
              </h3>
              <p className="text-lg mb-6">
                {t("cta_description")}
              </p>
        
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm text-gray-600 italic">
              {t("disclaimer")}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}