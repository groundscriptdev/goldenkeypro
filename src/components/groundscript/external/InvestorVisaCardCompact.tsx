'use client';

import { CheckCircle2, Home, Landmark, TrendingUp, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export function InvestorVisaCardCompact() {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const benefits = [
    "Acceso directo a residencia permanente",
    "Múltiples rutas de inversión verificadas",
    "Beneficios para grupo familiar"
  ];

  const requirements = [
    {
      icon: Home,
      title: "Bienes raíces",
      value: "$300,000",
      description: "Inversión mínima en bienes raíces"
    },
    {
      icon: Landmark,
      title: "Depósito bancario",
      value: "$700,000",
      description: "Por 3 años en banco panameño"
    },
    {
      icon: TrendingUp,
      title: "Valores",
      value: "$500,000",
      description: "Acciones o valores registrados"
    }
  ];

  return (
    <div className="relative w-full max-w-md rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
         style={{ 
           backgroundColor: '#1B3D36',
         }}>
      {/* Gradient overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(0,0,0,0.15) 100%)'
        }}
      />

      {/* Main content container */}
      <div className="relative p-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 
              className="text-xl font-bold mb-1"
              style={{
                fontFamily: "'Playfair Display', 'Noto Serif SC', serif",
                color: '#FAFAF8',
              }}
            >
              Visa de Inversionista
            </h1>
            
            <p 
              className="text-sm"
              style={{
                fontFamily: "'Noto Sans', ui-sans-serif, system-ui",
                color: '#D9E3DF',
              }}
            >
              Ruta a residencia permanente
            </p>
          </div>
          
          {/* Decorative Seal */}
          <div 
            className="opacity-20"
            style={{
              transform: 'rotate(-8deg)',
              transformOrigin: 'center'
            }}
          >
            <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="48" stroke="#DBBC6C" strokeWidth="1.5" fill="transparent" />
              <circle cx="50" cy="50" r="40" stroke="#DBBC6C" strokeWidth="1.5" fill="transparent" />
              <circle cx="50" cy="42" r="8" stroke="#DBBC6C" strokeWidth="2" fill="transparent" />
              <line x1="50" y1="50" x2="50" y2="68" stroke="#DBBC6C" strokeWidth="2" />
            </svg>
          </div>
        </div>

        {/* Benefits - Always visible */}
        <div className="space-y-2 mb-4">
          {benefits.slice(0, 2).map((benefit, index) => (
            <div key={index} className="flex items-start gap-2">
              <CheckCircle2 
                size={16} 
                strokeWidth={2}
                style={{ color: '#DBBC6C', flexShrink: 0, marginTop: '2px' }}
              />
              <span 
                className="text-sm"
                style={{
                  fontFamily: "'Noto Sans', ui-sans-serif, system-ui",
                  color: '#FAFAF8'
                }}
              >
                {benefit}
              </span>
            </div>
          ))}
          {!isExpanded && (
            <div className="flex items-center gap-2">
              <span 
                className="text-xs"
                style={{
                  fontFamily: "'Noto Sans', ui-sans-serif, system-ui",
                  color: '#B9C7C1'
                }}
              >
                Y más beneficios...
              </span>
            </div>
          )}
        </div>

        {/* Expandable content */}
        {isExpanded && (
          <div className="space-y-3 mb-4">
            {/* Third benefit */}
            <div className="flex items-start gap-2">
              <CheckCircle2 
                size={16} 
                strokeWidth={2}
                style={{ color: '#DBBC6C', flexShrink: 0, marginTop: '2px' }}
              />
              <span 
                className="text-sm"
                style={{
                  fontFamily: "'Noto Sans', ui-sans-serif, system-ui",
                  color: '#FAFAF8'
                }}
              >
                {benefits[2]}
              </span>
            </div>

            {/* Requirement cards */}
            <div className="space-y-2">
              {requirements.map((req, index) => {
                const Icon = req.icon;
                return (
                  <div
                    key={index}
                    className="rounded-lg p-3"
                    style={{
                      backgroundColor: 'rgba(0,0,0,0.2)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <Icon 
                        size={18} 
                        strokeWidth={2}
                        style={{ color: '#DBBC6C' }}
                      />
                      <div className="flex-1">
                        <h3 
                          className="text-xs font-semibold"
                          style={{
                            fontFamily: "'Noto Sans', ui-sans-serif, system-ui",
                            color: '#D9E3DF',
                          }}
                        >
                          {req.title}
                        </h3>
                        <div className="flex justify-between items-center">
                          <p 
                            className="text-sm font-bold"
                            style={{
                              fontFamily: "'Noto Sans', ui-sans-serif, system-ui",
                              color: '#FAFAF8',
                            }}
                          >
                            {req.value}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* CTA Button */}
        <div className="flex justify-between items-center">
          <button
            className="rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            style={{
              background: 'linear-gradient(135deg, #E9CD83 0%, #C6A252 100%)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.22)',
              fontFamily: "'Noto Sans', ui-sans-serif, system-ui",
              color: '#1A1A1A'
            }}
          >
            Iniciar pre-evaluación
          </button>
          
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="rounded-lg p-2 text-xs font-medium transition-all duration-200"
            style={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              fontFamily: "'Noto Sans', ui-sans-serif, system-ui",
              color: '#FAFAF8'
            }}
          >
            {isExpanded ? 'Ver menos' : 'Ver más'}
          </button>
        </div>
      </div>
    </div>
  );
}