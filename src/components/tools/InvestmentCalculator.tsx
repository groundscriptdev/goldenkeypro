'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Calculator, TrendingUp, DollarSign, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CalculatorInputs {
  investmentType: 'residency' | 'real-estate' | 'medical' | 'infrastructure';
  investmentAmount: number;
  investmentYears: number;
  expectedROI: number;
  currency: 'USD' | 'CNY';
}

interface CalculatorResults {
  totalInvestment: number;
  totalReturn: number;
  totalProfit: number;
  annualReturn: number;
  breakEvenYear: number;
  residencyStatus?: {
    eligible: boolean;
    minInvestment: number;
    investmentType: string;
  };
}

export function InvestmentCalculator() {
  const t = useTranslations('calculator');
  const [inputs, setInputs] = useState<CalculatorInputs>({
    investmentType: 'residency',
    investmentAmount: 300000,
    investmentYears: 5,
    expectedROI: 5,
    currency: 'USD',
  });
  
  const [results, setResults] = useState<CalculatorResults | null>(null);
  const [showResults, setShowResults] = useState(false);

  const investmentTypes = [
    {
      id: 'residency',
      name: t('investment_types.residency.name'),
      description: t('investment_types.residency.description'),
      icon: <Home className="w-5 h-5" />,
      minInvestment: 300000,
      defaultROI: 5,
    },
    {
      id: 'real-estate',
      name: t('investment_types.real_estate.name'),
      description: t('investment_types.real_estate.description'),
      icon: <Home className="w-5 h-5" />,
      minInvestment: 250000,
      defaultROI: 7,
    },
    {
      id: 'medical',
      name: t('investment_types.medical.name'),
      description: t('investment_types.medical.description'),
      icon: <TrendingUp className="w-5 h-5" />,
      minInvestment: 50000,
      defaultROI: 6,
    },
    {
      id: 'infrastructure',
      name: t('investment_types.infrastructure.name'),
      description: t('investment_types.infrastructure.description'),
      icon: <DollarSign className="w-5 h-5" />,
      minInvestment: 100000,
      defaultROI: 8,
    },
  ];

  const exchangeRate = 7.2; // USD to CNY (approximate)

  const calculateResults = () => {
    const { investmentType, investmentAmount, investmentYears, expectedROI } = inputs;
    
    const investmentTypeInfo = investmentTypes.find(type => type.id === investmentType);
    const minInvestment = investmentTypeInfo?.minInvestment || 0;
    
    // Calculate total investment with annual increase
    let totalInvestment = 0;
    for (let year = 1; year <= investmentYears; year++) {
      totalInvestment += investmentAmount * Math.pow(1.02, year - 1); // 2% annual increase
    }
    
    // Calculate total return with compound interest
    const totalReturn = investmentAmount * Math.pow(1 + (expectedROI / 100), investmentYears);
    
    // Calculate total profit
    const totalProfit = totalReturn - investmentAmount;
    
    // Calculate annual return
    const annualReturn = totalProfit / investmentYears;
    
    // Calculate break-even year
    let breakEvenYear = 0;
    let cumulativeReturn = 0;
    for (let year = 1; year <= investmentYears; year++) {
      cumulativeReturn += investmentAmount * (expectedROI / 100) * Math.pow(1 + (expectedROI / 100), year - 1);
      if (cumulativeReturn >= investmentAmount) {
        breakEvenYear = year;
        break;
      }
    }
    
    // Check residency eligibility
    let residencyStatus = undefined;
    if (investmentType === 'residency') {
      residencyStatus = {
        eligible: investmentAmount >= 300000,
        minInvestment: 300000,
        investmentType: 'Qualified Investor Visa',
      };
    }
    
    setResults({
      totalInvestment,
      totalReturn,
      totalProfit,
      annualReturn,
      breakEvenYear,
      residencyStatus,
    });
    
    setShowResults(true);
  };

  const handleInputChange = (field: keyof CalculatorInputs, value: any) => {
    setInputs(prev => ({
      ...prev,
      [field]: value,
    }));
    
    // Reset results when inputs change
    setShowResults(false);
  };

  const formatCurrency = (amount: number, currency: string = inputs.currency) => {
    const locale = currency === 'USD' ? 'en-US' : 'zh-CN';
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getInvestmentTypeInfo = () => {
    return investmentTypes.find(type => type.id === inputs.investmentType);
  };

  useEffect(() => {
    // Update expected ROI when investment type changes
    const investmentTypeInfo = getInvestmentTypeInfo();
    if (investmentTypeInfo) {
      setInputs(prev => ({
        ...prev,
        expectedROI: investmentTypeInfo.defaultROI,
      }));
    }
  }, [inputs.investmentType]);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <div className="flex items-center mb-6">
        <Calculator className="w-6 h-6 text-jade-green mr-2" />
        <h2 className="text-2xl font-brand text-jade-green font-bold">
          {t('title')}
        </h2>
      </div>
      
      <p className="text-muted-foreground mb-8">
        {t('description')}
      </p>
      
      <div className="space-y-6">
        {/* Investment Type Selection */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-3">
            {t('investment_type_label')}
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {investmentTypes.map((type) => (
              <div
                key={type.id}
                className={cn(
                  "p-4 border rounded-lg cursor-pointer transition-all",
                  inputs.investmentType === type.id
                    ? "border-jade-green bg-jade-green/5"
                    : "border-gray-200 hover:border-gold/50"
                )}
                onClick={() => handleInputChange('investmentType', type.id)}
              >
                <div className="flex items-start space-x-3">
                  <div className={cn(
                    "p-2 rounded-full",
                    inputs.investmentType === type.id
                      ? "bg-jade-green text-white"
                      : "bg-gray-100 text-gray-600"
                  )}>
                    {type.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-foreground">
                      {type.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {type.description}
                    </p>
                    <p className="text-xs text-gold mt-2">
                      {t('min_investment')}: {formatCurrency(type.minInvestment)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Investment Amount */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            {t('investment_amount_label')}
          </label>
          <div className="flex items-center space-x-3">
            <input
              type="range"
              min={50000}
              max={2000000}
              step={10000}
              value={inputs.investmentAmount}
              onChange={(e) => handleInputChange('investmentAmount', parseInt(e.target.value))}
              className="flex-1"
            />
            <div className="w-32 text-right">
              <div className="font-medium text-foreground">
                {formatCurrency(inputs.investmentAmount)}
              </div>
              <div className="text-xs text-muted-foreground">
                {inputs.currency === 'USD' 
                  ? `≈ ${formatCurrency(inputs.investmentAmount * exchangeRate, 'CNY')}`
                  : `≈ ${formatCurrency(inputs.investmentAmount / exchangeRate, 'USD')}`
                }
              </div>
            </div>
          </div>
        </div>
        
        {/* Investment Years */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            {t('investment_years_label')}
          </label>
          <div className="flex items-center space-x-3">
            <input
              type="range"
              min={1}
              max={20}
              step={1}
              value={inputs.investmentYears}
              onChange={(e) => handleInputChange('investmentYears', parseInt(e.target.value))}
              className="flex-1"
            />
            <div className="w-16 text-center font-medium text-foreground">
              {inputs.investmentYears} {t('years')}
            </div>
          </div>
        </div>
        
        {/* Expected ROI */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            {t('expected_roi_label')}
          </label>
          <div className="flex items-center space-x-3">
            <input
              type="range"
              min={1}
              max={15}
              step={0.5}
              value={inputs.expectedROI}
              onChange={(e) => handleInputChange('expectedROI', parseFloat(e.target.value))}
              className="flex-1"
            />
            <div className="w-16 text-center font-medium text-foreground">
              {inputs.expectedROI}%
            </div>
          </div>
        </div>
        
        {/* Currency Selection */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            {t('currency_label')}
          </label>
          <div className="flex space-x-3">
            <button
              className={cn(
                "px-4 py-2 rounded-md border",
                inputs.currency === 'USD'
                  ? "border-jade-green bg-jade-green/10 text-jade-green"
                  : "border-gray-200 text-gray-600"
              )}
              onClick={() => handleInputChange('currency', 'USD')}
            >
              USD
            </button>
            <button
              className={cn(
                "px-4 py-2 rounded-md border",
                inputs.currency === 'CNY'
                  ? "border-jade-green bg-jade-green/10 text-jade-green"
                  : "border-gray-200 text-gray-600"
              )}
              onClick={() => handleInputChange('currency', 'CNY')}
            >
              CNY
            </button>
          </div>
        </div>
        
        {/* Calculate Button */}
        <Button
          onClick={calculateResults}
          className="w-full bg-jade-green hover:bg-jade-green/90 text-white font-brand"
        >
          {t('calculate_button')}
        </Button>
      </div>
      
      {/* Results */}
      {showResults && results && (
        <div className="mt-8 p-6 bg-jade-green/5 rounded-lg border border-jade-green/20">
          <h3 className="text-xl font-brand text-jade-green font-bold mb-4">
            {t('results_title')}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-lg">
              <p className="text-sm text-muted-foreground mb-1">
                {t('total_investment')}
              </p>
              <p className="text-xl font-bold text-jade-green">
                {formatCurrency(results.totalInvestment)}
              </p>
            </div>
            
            <div className="p-4 bg-white rounded-lg">
              <p className="text-sm text-muted-foreground mb-1">
                {t('total_return')}
              </p>
              <p className="text-xl font-bold text-gold">
                {formatCurrency(results.totalReturn)}
              </p>
            </div>
            
            <div className="p-4 bg-white rounded-lg">
              <p className="text-sm text-muted-foreground mb-1">
                {t('total_profit')}
              </p>
              <p className="text-xl font-bold text-jade-green">
                {formatCurrency(results.totalProfit)}
              </p>
            </div>
            
            <div className="p-4 bg-white rounded-lg">
              <p className="text-sm text-muted-foreground mb-1">
                {t('annual_return')}
              </p>
              <p className="text-xl font-bold text-gold">
                {formatCurrency(results.annualReturn)}
              </p>
            </div>
          </div>
          
          {results.breakEvenYear > 0 && (
            <div className="mt-4 p-4 bg-white rounded-lg">
              <p className="text-sm text-muted-foreground mb-1">
                {t('break_even_year')}
              </p>
              <p className="text-xl font-bold text-jade-green">
                {results.breakEvenYear} {t('years')}
              </p>
            </div>
          )}
          
          {results.residencyStatus && (
            <div className="mt-4 p-4 bg-white rounded-lg">
              <p className="text-sm text-muted-foreground mb-1">
                {t('residency_status')}
              </p>
              <p className={cn(
                "text-lg font-semibold",
                results.residencyStatus.eligible ? "text-jade-green" : "text-chinese-red"
              )}>
                {results.residencyStatus.eligible
                  ? t('residency_eligible')
                  : t('residency_not_eligible', {
                      minInvestment: formatCurrency(results.residencyStatus.minInvestment),
                      investmentType: results.residencyStatus.investmentType
                    })
                }
              </p>
            </div>
          )}
          
          <div className="mt-6 text-sm text-muted-foreground">
            <p>{t('disclaimer')}</p>
          </div>
        </div>
      )}
    </div>
  );
}