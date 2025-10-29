'use client';

import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { StepTimelineProps } from './types';

export function StepTimeline({ 
  steps, 
  currentStep = 1, 
  onStepClick 
}: StepTimelineProps) {
  const getStatusIcon = (status?: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4" />;
      case 'current':
        return <Clock className="w-4 h-4" />;
      case 'pending':
        return <AlertCircle className="w-4 h-4" />;
      default:
        return <AlertCircle className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status?: string) => {
    switch (status) {
      case 'completed':
        return 'text-green-500 border-green-500';
      case 'current':
        return 'text-blue-500 border-blue-500';
      case 'pending':
        return 'text-gray-400 border-gray-400';
      default:
        return 'text-gray-400 border-gray-400';
    }
  };

  const getLineColor = (index: number) => {
    if (index < steps.length - 1) {
      const nextStepStatus = steps[index + 1]?.status;
      if (nextStepStatus === 'completed') {
        return 'bg-green-500';
      } else if (nextStepStatus === 'current') {
        return 'bg-blue-500';
      } else {
        return 'bg-gray-400';
      }
    }
    return '';
  };

  return (
    <div className="relative">
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300"></div>
      
      <div className="space-y-8 relative">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative flex items-start gap-4"
          >
            <div className="relative z-10">
              <div
                className={`w-8 h-8 rounded-full border-2 bg-white flex items-center justify-center ${getStatusColor(
                  step.status
                )} ${onStepClick ? 'cursor-pointer hover:scale-110' : ''} transition-all duration-200`}
                onClick={() => onStepClick && onStepClick(step.id)}
              >
                {getStatusIcon(step.status)}
              </div>
              
              {index < steps.length - 1 && (
                <div
                  className={`absolute top-8 left-4 w-0.5 h-8 transform -translate-x-1/2 ${getLineColor(
                    index
                  )} transition-colors duration-300`}
                ></div>
              )}
            </div>
            
            <div className="flex-1 pt-1">
              <div className="flex items-center gap-2 mb-1">
                <h3
                  className={`font-semibold ${
                    step.status === 'current'
                      ? 'text-blue-600'
                      : step.status === 'completed'
                      ? 'text-green-600'
                      : 'text-gray-600'
                  }`}
                >
                  {step.title}
                </h3>
                {step.subtitle && (
                  <span className="text-sm text-gray-500">
                    • {step.subtitle}
                  </span>
                )}
              </div>
              
              <p className="text-sm text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}