"use client";

import { Home } from "lucide-react";

interface ProcessCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export function ProcessCard({ title, description, icon }: ProcessCardProps) {
  return (
    <div className="ground-box-fix bg-white rounded-xl border border-gray-100 p-6 transition-all duration-300 hover:shadow-lg">
      <div className="flex items-start gap-4">
        {/* Icon Container */}
        <div className="feature-icon-minimal bg-jade-green rounded-xl flex items-center justify-center shrink-0">
          {icon || <Home className="w-6 h-6 text-white" />}
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 font-brand">
            {title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}