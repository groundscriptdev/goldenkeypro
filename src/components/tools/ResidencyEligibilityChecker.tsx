'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { CheckCircle, XCircle, AlertCircle, FileText, Users, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface EligibilityCriteria {
  id: string;
  category: string;
  title: string;
  description: string;
  required: boolean;
  weight: number;
}

interface EligibilityResult {
  eligible: boolean;
  score: number;
  maxScore: number;
  criteriaResults: {
    [key: string]: {
      met: boolean;
      points: number;
      maxPoints: number;
    };
  };
  recommendations: string[];
  nextSteps: string[];
}

export function ResidencyEligibilityChecker() {
  const t = useTranslations('residency_checker');
  
  const [currentStep, setCurrentStep] = useState(0);
  const [userResponses, setUserResponses] = useState<{[key: string]: boolean}>({});
  const [result, setResult] = useState<EligibilityResult | null>(null);
  const [showResult, setShowResult] = useState(false);

  const criteria: EligibilityCriteria[] = [
    {
      id: 'investment_amount',
      category: 'financial',
      title: t('criteria.investment_amount.title'),
      description: t('criteria.investment_amount.description'),
      required: true,
      weight: 30,
    },
    {
      id: 'criminal_record',
      category: 'legal',
      title: t('criteria.criminal_record.title'),
      description: t('criteria.criminal_record.description'),
      required: true,
      weight: 25,
    },
    {
      id: 'age',
      category: 'personal',
      title: t('criteria.age.title'),
      description: t('criteria.age.description'),
      required: false,
      weight: 10,
    },
    {
      id: 'source_of_funds',
      category: 'financial',
      title: t('criteria.source_of_funds.title'),
      description: t('criteria.source_of_funds.description'),
      required: true,
      weight: 20,
    },
    {
      id: 'dependents',
      category: 'personal',
      title: t('criteria.dependents.title'),
      description: t('criteria.dependents.description'),
      required: false,
      weight: 5,
    },
    {
      id: 'passport_validity',
      category: 'legal',
      title: t('criteria.passport_validity.title'),
      description: t('criteria.passport_validity.description'),
      required: true,
      weight: 10,
    },
  ];

  const totalSteps = criteria.length;

  const handleResponse = (criterionId: string, response: boolean) => {
    setUserResponses(prev => ({
      ...prev,
      [criterionId]: response,
    }));

    // Move to next step or calculate result
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateResult({
        ...userResponses,
        [criterionId]: response,
      });
    }
  };

  const calculateResult = (responses: {[key: string]: boolean}) => {
    let totalScore = 0;
    let maxScore = 0;
    const criteriaResults: {[key: string]: {met: boolean, points: number, maxPoints: number}} = {};
    const recommendations: string[] = [];
    const nextSteps: string[] = [];

    // Calculate score for each criterion
    criteria.forEach(criterion => {
      const maxPoints = criterion.weight;
      const met = responses[criterion.id] || false;
      const points = met ? maxPoints : 0;
      
      totalScore += points;
      maxScore += maxPoints;
      
      criteriaResults[criterion.id] = {
        met,
        points,
        maxPoints,
      };
      
      // Add recommendations for unmet criteria
      if (!met) {
        if (criterion.id === 'investment_amount') {
          recommendations.push(t('recommendations.investment_amount'));
          nextSteps.push(t('next_steps.investment_amount'));
        } else if (criterion.id === 'criminal_record') {
          recommendations.push(t('recommendations.criminal_record'));
          nextSteps.push(t('next_steps.criminal_record'));
        } else if (criterion.id === 'source_of_funds') {
          recommendations.push(t('recommendations.source_of_funds'));
          nextSteps.push(t('next_steps.source_of_funds'));
        } else if (criterion.id === 'passport_validity') {
          recommendations.push(t('recommendations.passport_validity'));
          nextSteps.push(t('next_steps.passport_validity'));
        }
      }
    });

    // Check if all required criteria are met
    const requiredCriteriaMet = criteria
      .filter(c => c.required)
      .every(c => responses[c.id]);

    const eligible = requiredCriteriaMet && totalScore >= 50; // Minimum threshold

    if (!recommendations.length) {
      recommendations.push(t('recommendations.eligible'));
      nextSteps.push(t('next_steps.eligible'));
    }

    setResult({
      eligible,
      score: totalScore,
      maxScore,
      criteriaResults,
      recommendations,
      nextSteps,
    });
    
    setShowResult(true);
  };

  const resetChecker = () => {
    setCurrentStep(0);
    setUserResponses({});
    setResult(null);
    setShowResult(false);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'financial':
        return <DollarSign className="w-5 h-5" />;
      case 'legal':
        return <FileText className="w-5 h-5" />;
      case 'personal':
        return <Users className="w-5 h-5" />;
      default:
        return <AlertCircle className="w-5 h-5" />;
    }
  };

  const currentCriterion = criteria[currentStep];

  const getScoreColor = (score: number, maxScore: number) => {
    const percentage = (score / maxScore) * 100;
    if (percentage >= 80) return 'text-jade-green';
    if (percentage >= 60) return 'text-gold';
    return 'text-chinese-red';
  };

  const getScoreBackground = (score: number, maxScore: number) => {
    const percentage = (score / maxScore) * 100;
    if (percentage >= 80) return 'bg-jade-green/10';
    if (percentage >= 60) return 'bg-gold/10';
    return 'bg-chinese-red/10';
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <div className="flex items-center mb-6">
        <CheckCircle className="w-6 h-6 text-jade-green mr-2" />
        <h2 className="text-2xl font-brand text-jade-green font-bold">
          {t('title')}
        </h2>
      </div>
      
      <p className="text-muted-foreground mb-8">
        {t('description')}
      </p>
      
      {!showResult && (
        <>
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-foreground">
                {t('progress', { current: currentStep + 1, total: totalSteps })}
              </span>
              <span className="text-sm text-muted-foreground">
                {Math.round(((currentStep + 1) / totalSteps) * 100)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-jade-green h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
              />
            </div>
          </div>
          
          {/* Current Question */}
          <div className="p-6 border border-jade-green/20 rounded-lg bg-jade-green/5">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-jade-green/20 rounded-full flex items-center justify-center mr-3">
                {getCategoryIcon(currentCriterion.category)}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {currentCriterion.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {currentCriterion.category}
                  {currentCriterion.required && (
                    <span className="ml-2 text-chinese-red">
                      ({t('required')})
                    </span>
                  )}
                </p>
              </div>
            </div>
            
            <p className="text-foreground mb-6">
              {currentCriterion.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => handleResponse(currentCriterion.id, true)}
                className="bg-jade-green hover:bg-jade-green/90 text-white flex-1"
              >
                <CheckCircle className="w-4 h-4 mr-2" />
                {t('yes')}
              </Button>
              
              <Button
                onClick={() => handleResponse(currentCriterion.id, false)}
                variant="outline"
                className="border-chinese-red text-chinese-red hover:bg-chinese-red/10 flex-1"
              >
                <XCircle className="w-4 h-4 mr-2" />
                {t('no')}
              </Button>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="mt-6 flex justify-between">
            <Button
              variant="ghost"
              onClick={() => currentStep > 0 && setCurrentStep(currentStep - 1)}
              disabled={currentStep === 0}
              className="text-jade-green"
            >
              {t('previous')}
            </Button>
            
            <div className="text-sm text-muted-foreground">
              {t('step_info', { current: currentStep + 1, total: totalSteps })}
            </div>
          </div>
        </>
      )}
      
      {/* Results */}
      {showResult && result && (
        <div className="space-y-6">
          {/* Overall Result */}
          <div className={cn(
            "p-6 rounded-lg border",
            result.eligible
              ? "border-jade-green bg-jade-green/5"
              : "border-chinese-red bg-chinese-red/5"
          )}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-brand text-foreground font-bold">
                {t('results_title')}
              </h3>
              <div className={cn(
                "flex items-center px-3 py-1 rounded-full text-sm font-medium",
                result.eligible
                  ? "bg-jade-green/20 text-jade-green"
                  : "bg-chinese-red/20 text-chinese-red"
              )}>
                {result.eligible ? (
                  <>
                    <CheckCircle className="w-4 h-4 mr-1" />
                    {t('eligible')}
                  </>
                ) : (
                  <>
                    <XCircle className="w-4 h-4 mr-1" />
                    {t('not_eligible')}
                  </>
                )}
              </div>
            </div>
            
            {/* Score */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-foreground">
                  {t('score_label')}
                </span>
                <span className={cn(
                  "text-lg font-bold",
                  getScoreColor(result.score, result.maxScore)
                )}>
                  {result.score}/{result.maxScore}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className={cn(
                    "h-3 rounded-full transition-all duration-300",
                    getScoreBackground(result.score, result.maxScore)
                  )}
                  style={{ width: `${(result.score / result.maxScore) * 100}%` }}
                />
              </div>
            </div>
            
            <p className="text-foreground">
              {result.eligible
                ? t('eligible_description')
                : t('not_eligible_description')
              }
            </p>
          </div>
          
          {/* Criteria Breakdown */}
          <div className="p-6 border border-gray-200 rounded-lg">
            <h4 className="text-lg font-semibold text-foreground mb-4">
              {t('criteria_breakdown')}
            </h4>
            
            <div className="space-y-3">
              {criteria.map((criterion) => {
                const criterionResult = result.criteriaResults[criterion.id];
                const met = criterionResult.met;
                
                return (
                  <div key={criterion.id} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center mr-3",
                        met ? "bg-jade-green/20 text-jade-green" : "bg-chinese-red/20 text-chinese-red"
                      )}>
                        {met ? (
                          <CheckCircle className="w-4 h-4" />
                        ) : (
                          <XCircle className="w-4 h-4" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-foreground">
                          {criterion.title}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {criterionResult.points}/{criterionResult.maxPoints} {t('points')}
                        </p>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <p className={cn(
                        "text-sm font-medium",
                        met ? "text-jade-green" : "text-chinese-red"
                      )}>
                        {met ? t('met') : t('not_met')}
                      </p>
                      {criterion.required && (
                        <p className="text-xs text-muted-foreground">
                          {t('required')}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Recommendations */}
          <div className="p-6 border border-gray-200 rounded-lg">
            <h4 className="text-lg font-semibold text-foreground mb-4">
              {t('recommendations')}
            </h4>
            
            <ul className="space-y-2">
              {result.recommendations.map((recommendation, index) => (
                <li key={index} className="flex items-start">
                  <AlertCircle className="w-4 h-4 text-gold mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{recommendation}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Next Steps */}
          <div className="p-6 border border-gray-200 rounded-lg">
            <h4 className="text-lg font-semibold text-foreground mb-4">
              {t('next_steps')}
            </h4>
            
            <ul className="space-y-2">
              {result.nextSteps.map((step, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                    <span className="text-xs font-bold text-gold">{index + 1}</span>
                  </div>
                  <span className="text-foreground">{step}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={resetChecker}
              variant="outline"
              className="border-jade-green text-jade-green hover:bg-jade-green/10 flex-1"
            >
              {t('retake_assessment')}
            </Button>
            
            <Button
              className="bg-gold text-jade-green hover:bg-gold/90 font-brand flex-1"
            >
              {t('schedule_consultation')}
            </Button>
          </div>
          
          {/* Disclaimer */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-xs text-muted-foreground">
              {t('disclaimer')}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}