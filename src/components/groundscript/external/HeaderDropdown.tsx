'use client';

import { useState, useRef, useEffect } from 'react';
import { InvestorVisaCardCompact } from './InvestorVisaCardCompact';
import { GoldenKeyCompact } from './GoldenKeyCompact';
import { ChevronDown, X } from 'lucide-react';
import { useTranslations } from "next-intl";

export function HeaderDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("navigation");
  
  const tabs = [
    { id: 0, title: "Visa de Inversionista", component: <InvestorVisaCardCompact /> },
    { id: 1, title: "Panama Golden Key", component: <GoldenKeyCompact /> }
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-jade-green-500/10 hover:bg-jade-green-500/20 transition-colors text-jade-green font-medium text-sm"
      >
        {t("common.free_consultation")}
        <ChevronDown 
          size={16} 
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {/* Dropdown Content */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-96 bg-white rounded-xl shadow-2xl border border-slate-200 z-50 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-slate-200">
            <h3 
              className="text-lg font-semibold"
              style={{
                fontFamily: "'Playfair Display', 'Noto Serif SC', serif",
                color: '#0f172b'
              }}
            >
              Descubre tus opciones
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-md hover:bg-slate-100 transition-colors"
            >
              <X size={18} className="text-slate-500" />
            </button>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-slate-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'text-jade-green border-b-2 border-jade-green'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                style={{
                  fontFamily: "'Inter', sans-serif"
                }}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-4 max-h-96 overflow-y-auto">
            {tabs[activeTab].component}
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-slate-200 bg-slate-50">
            <p 
              className="text-xs text-slate-600 text-center"
              style={{
                fontFamily: "'Inter', sans-serif"
              }}
            >
              ¿Necesitas ayuda? <a href="#" className="text-jade-green hover:underline font-medium">Contacta a un asesor</a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}