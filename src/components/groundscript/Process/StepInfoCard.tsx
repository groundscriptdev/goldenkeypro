'use client';

import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { StepInfoCardProps } from './types';

export function StepInfoCard({ step, index = 0 }: StepInfoCardProps) {
  const getStatusIcon = () => {
    switch (step.status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'current':
        return <Clock className="w-5 h-5 text-blue-500" />;
      case 'pending':
        return <AlertCircle className="w-5 h-5 text-gray-400" />;
      default:
        return <AlertCircle className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusColor = () => {
    switch (step.status) {
      case 'completed':
        return 'border-green-200 bg-green-50';
      case 'current':
        return 'border-blue-200 bg-blue-50';
      case 'pending':
        return 'border-gray-200 bg-gray-50';
      default:
        return 'border-gray-200 bg-gray-50';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`p-6 rounded-lg border-2 ${getStatusColor()} transition-all duration-300 hover:shadow-md`}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 mt-1">
          {getStatusIcon()}
        </div>
        
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm font-semibold text-gray-500">
              Paso {step.id}
            </span>
            {step.subtitle && (
              <span className="text-sm text-gray-600">
                • {step.subtitle}
              </span>
            )}
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {step.title}
          </h3>
          
          <p className="text-gray-600 leading-relaxed">
            {step.description}
          </p>
          
          {step.details && (
            <div className="mt-4 p-3 bg-white bg-opacity-60 rounded-md">
              <p className="text-sm text-gray-700">
                {step.details}
              </p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}