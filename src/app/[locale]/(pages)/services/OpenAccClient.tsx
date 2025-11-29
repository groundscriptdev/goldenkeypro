"use client";

import { useTranslations } from "next-intl";
import {
  DollarSign,
  Shield,
  Clock,
  TrendingUp,
  Globe2,
  PieChart,
  Banknote,
  Smartphone,
  Award,
  Lock,
} from "lucide-react";

interface OpenAccClientProps {
  locale?: string;
}

export default function OpenAccClient({ locale }: OpenAccClientProps) {
  const t = useTranslations("services_page");

  const companyAdvantages = [
    {
      icon: <DollarSign className="w-6 h-6 text-jade-green" />,
      title: t("company_formation.territorial_tax.title"),
      description: t("company_formation.territorial_tax.description"),
    },
    {
      icon: <Shield className="w-6 h-6 text-jade-green" />,
      title: t("company_formation.corporate_confidentiality.title"),
      description: t("company_formation.corporate_confidentiality.description"),
    },
    {
      icon: <Clock className="w-6 h-6 text-jade-green" />,
      title: t("company_formation.operational_flexibility.title"),
      description: t("company_formation.operational_flexibility.description"),
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-jade-green" />,
      title: t("company_formation.currency_stability.title"),
      description: t("company_formation.currency_stability.description"),
    },
    {
      icon: <Globe2 className="w-6 h-6 text-jade-green" />,
      title: t("company_formation.trade_agreements.title"),
      description: t("company_formation.trade_agreements.description"),
    },
  ];

  const bankingAdvantages = [
    {
      icon: <PieChart className="w-6 h-6 text-jade-green" />,
      title: t("bank_account_opening.asset_diversification.title"),
      description: t("bank_account_opening.asset_diversification.description"),
    },
    {
      icon: <Banknote className="w-6 h-6 text-jade-green" />,
      title: t("bank_account_opening.multi_currency.title"),
      description: t("bank_account_opening.multi_currency.description"),
    },
    {
      icon: <Smartphone className="w-6 h-6 text-jade-green" />,
      title: t("bank_account_opening.digital_banking.title"),
      description: t("bank_account_opening.digital_banking.description"),
    },
    {
      icon: <Award className="w-6 h-6 text-jade-green" />,
      title: t("bank_account_opening.financial_services.title"),
      description: t("bank_account_opening.financial_services.description"),
    },
    {
      icon: <Lock className="w-6 h-6 text-jade-green" />,
      title: t("bank_account_opening.regulatory_framework.title"),
      description: t("bank_account_opening.regulatory_framework.description"),
    },
  ];

  const comparisonData = [
    {
      aspect: t("comparison_table.rows.strategic_position.aspect"),
      panama: t("comparison_table.rows.strategic_position.panama"),
      singapore: t("comparison_table.rows.strategic_position.singapore"),
    },
    {
      aspect: t("comparison_table.rows.tax_system.aspect"),
      panama: t("comparison_table.rows.tax_system.panama"),
      singapore: t("comparison_table.rows.tax_system.singapore"),
    },
    {
      aspect: t("comparison_table.rows.currency.aspect"),
      panama: t("comparison_table.rows.currency.panama"),
      singapore: t("comparison_table.rows.currency.singapore"),
    },
    {
      aspect: t("comparison_table.rows.annual_cost.aspect"),
      panama: t("comparison_table.rows.annual_cost.panama"),
      singapore: t("comparison_table.rows.annual_cost.singapore"),
    },
    {
      aspect: t("comparison_table.rows.formation_time.aspect"),
      panama: t("comparison_table.rows.formation_time.panama"),
      singapore: t("comparison_table.rows.formation_time.singapore"),
    },
    {
      aspect: t("comparison_table.rows.bank_deposit.aspect"),
      panama: t("comparison_table.rows.bank_deposit.panama"),
      singapore: t("comparison_table.rows.bank_deposit.singapore"),
    },
    {
      aspect: t("comparison_table.rows.timezone.aspect"),
      panama: t("comparison_table.rows.timezone.panama"),
      singapore: t("comparison_table.rows.timezone.singapore"),
    },
    {
      aspect: t("comparison_table.rows.markets.aspect"),
      panama: t("comparison_table.rows.markets.panama"),
      singapore: t("comparison_table.rows.markets.singapore"),
    },
    {
      aspect: t("comparison_table.rows.languages.aspect"),
      panama: t("comparison_table.rows.languages.panama"),
      singapore: t("comparison_table.rows.languages.singapore"),
    },
    {
      aspect: t("comparison_table.rows.cost_living.aspect"),
      panama: t("comparison_table.rows.cost_living.panama"),
      singapore: t("comparison_table.rows.cost_living.singapore"),
    },
  ];

  return (
    <>
      <section id="open-acc-client" className="py-16 bg-white scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-jade-green mb-4">
                {t("company_formation.title")}
              </h2>
              <h3 className="text-xl md:text-2xl text-gray-700 mb-4">
                {t("company_formation.subtitle")}
              </h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {t("company_formation.description")}
              </p>
            </div>

            <div className="mb-8 text-center">
              <p className="text-gray-700 max-w-4xl mx-auto text-base leading-relaxed">
                {t("company_formation.introduction")}
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-jade-green mb-8 text-center">
                {t("company_formation.advantages_title")}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {companyAdvantages.map((advantage, index) => (
                  <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex-shrink-0">
                      {advantage.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {advantage.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bank Account Opening Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-jade-green mb-4">
                {t("bank_account_opening.title")}
              </h2>
              <h3 className="text-xl md:text-2xl text-gray-700 mb-4">
                {t("bank_account_opening.subtitle")}
              </h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {t("bank_account_opening.description")}
              </p>
            </div>

            <div className="mb-8 text-center">
              <p className="text-gray-700 max-w-4xl mx-auto text-base leading-relaxed">
                {t("bank_account_opening.introduction")}
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-jade-green mb-8 text-center">
                {t("bank_account_opening.advantages_title")}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {bankingAdvantages.map((advantage, index) => (
                  <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex-shrink-0">
                      {advantage.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {advantage.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-jade-green mb-4">
                {t("comparison_table.title")}
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-lg">
                <thead>
                  <tr className="bg-jade-green text-white">
                    <th className="px-6 py-4 text-left font-semibold">
                      {t("comparison_table.headers.aspect")}
                    </th>
                    <th className="px-6 py-4 text-left font-semibold">
                      {t("comparison_table.headers.panama")}
                    </th>
                    <th className="px-6 py-4 text-left font-semibold">
                      {t("comparison_table.headers.singapore")}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4 font-medium text-gray-900 border-t">
                        {row.aspect}
                      </td>
                      <td className="px-6 py-4 text-gray-700 border-t">
                        {row.panama}
                      </td>
                      <td className="px-6 py-4 text-gray-700 border-t">
                        {row.singapore}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Combination Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-jade-green mb-6">
              {t("strategic_combination.title")}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {t("strategic_combination.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Chinese Investors Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-jade-green mb-6">
              {t("chinese_investors.title")}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {t("chinese_investors.description")}
            </p>
          </div>
        </div>
      </section>

         {/* Strategic Decision Section */}
          <section className="py-16 bg-jade">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-300 mb-6">
                  {t("strategic_decision.title")}
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  {t("strategic_decision.description")}
                </p>
                <p className="text-sm text-gray-300 italic">
                  {t("disclaimer")}
                </p>
              </div>
            </div>
          </section>
    </>
  );
}