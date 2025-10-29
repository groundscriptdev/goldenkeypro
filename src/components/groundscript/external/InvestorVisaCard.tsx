'use client';

import { CheckCircle2, Home, Landmark, TrendingUp, ChevronRight } from 'lucide-react';

interface InvestorVisaCardProps {
  className?: string;
  compact?: boolean;
}

export function InvestorVisaCard({ className = "", compact = false }: InvestorVisaCardProps) {
  const benefits = [
    "Acceso directo a residencia permanente",
    "Múltiples rutas de inversión verificadas",
    "Beneficios para grupo familiar"
  ];

  const requirements = [
    {
      icon: Home,
      title: "Bienes raíces",
      value: compact ? "$300,000" : "mínimo\n$300,000",
      description: "Inversión en bienes raíces en Panamá"
    },
    {
      icon: Landmark,
      title: "Depósito bancario",
      value: "$700,000\npor 3 años",
      description: "Plazo fijo en banco panameño"
    },
    {
      icon: TrendingUp,
      title: "Valores",
      value: "$500,000",
      description: "Acciones o valores registrados en Panamá"
    }
  ];

  const cardWidth = compact ? "w-full max-w-md" : "w-[896px]";
  const cardHeight = compact ? "h-auto" : "h-[576px]";
  const borderRadius = compact ? "rounded-2xl" : "rounded-[36px]";

  return (
    <div className={`relative ${cardWidth} ${cardHeight} ${borderRadius} overflow-hidden ${className}`} 
         style={{ 
           backgroundColor: '#1B3D36',
           boxShadow: '0 28px 60px rgba(0,0,0,0.25)'
         }}>
      {/* Gradient overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(0,0,0,0.15) 100%)'
        }}
      />

      {/* Decorative Seal - Top Right */}
      {!compact && (
        <div 
          className="absolute"
          style={{
            top: '48px',
            right: '48px',
            opacity: 0.22,
            transform: 'rotate(-8deg)',
            transformOrigin: 'center'
          }}
        >
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
            {/* Outer ring */}
            <circle cx="50" cy="50" r="48" stroke="#DBBC6C" strokeWidth="1.5" fill="transparent" />
            {/* Inner ring */}
            <circle cx="50" cy="50" r="40" stroke="#DBBC6C" strokeWidth="1.5" fill="transparent" />
            {/* Keyhole circle */}
            <circle cx="50" cy="42" r="8" stroke="#DBBC6C" strokeWidth="2" fill="transparent" />
            {/* Keyhole stem */}
            <line x1="50" y1="50" x2="50" y2="68" stroke="#DBBC6C" strokeWidth="2" />
          </svg>
        </div>
      )}

      {/* Main content container */}
      <div className={`relative ${compact ? 'flex flex-col' : 'h-full flex flex-col'} px-6 py-6 ${compact ? '' : 'px-12 py-12'}`}>
        {/* Top section */}
        <div className={`${compact ? '' : 'flex-1'}`}>
          {/* Header */}
          <h1 
            className={`${compact ? 'max-w-full' : 'max-w-[520px]'}`}
            style={{
              fontFamily: "'Playfair Display', 'Noto Serif SC', serif",
              fontSize: compact ? '24px' : '44px',
              fontWeight: 700,
              lineHeight: 1.15,
              color: '#FAFAF8',
              marginBottom: compact ? '12px' : '16px'
            }}
          >
            Visa de Inversionista Calificado
          </h1>
          
          <p 
            className={`${compact ? 'max-w-full' : 'max-w-[520px]'}`}
            style={{
              fontFamily: "'Noto Sans', ui-sans-serif, system-ui",
              fontSize: compact ? '14px' : '18px',
              fontWeight: 500,
              lineHeight: 1.25,
              color: '#D9E3DF',
              marginBottom: compact ? '20px' : '40px'
            }}
          >
            Ruta directa a la residencia permanente
          </p>

          {/* Content grid */}
          <div className={`${compact ? 'space-y-4' : 'flex gap-8'}`}>
            {/* Left column - Benefits */}
            <div className={`${compact ? 'w-full' : 'flex-shrink-0'}`} style={{ width: compact ? '100%' : '340px' }}>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 
                      size={compact ? 18 : 22} 
                      strokeWidth={2}
                      style={{ color: '#DBBC6C', flexShrink: 0, marginTop: '1px' }}
                    />
                    <span 
                      style={{
                        fontFamily: "'Noto Sans', ui-sans-serif, system-ui",
                        fontSize: compact ? '14px' : '16px',
                        fontWeight: 400,
                        lineHeight: 1.5,
                        color: '#FAFAF8'
                      }}
                    >
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column - Requirement cards */}
            <div className={`${compact ? 'grid grid-cols-1 gap-3 mt-4' : 'flex gap-3 flex-1'}`}>
              {requirements.map((req, index) => {
                const Icon = req.icon;
                return (
                  <div
                    key={index}
                    className={`${compact ? 'w-full' : 'flex-1'} rounded-2xl p-4 transition-all duration-200`}
                    style={{
                      backgroundColor: 'rgba(0,0,0,0.2)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    <Icon 
                      size={compact ? 20 : 24} 
                      strokeWidth={2}
                      style={{ color: '#DBBC6C', marginBottom: '12px' }}
                    />
                    <h3 
                      style={{
                        fontFamily: "'Noto Sans', ui-sans-serif, system-ui",
                        fontSize: compact ? '12px' : '14px',
                        fontWeight: 700,
                        lineHeight: 1.3,
                        color: '#D9E3DF',
                        marginBottom: '8px'
                      }}
                    >
                      {req.title}
                    </h3>
                    
                    <p 
                      className="whitespace-pre-line"
                      style={{
                        fontFamily: "'Noto Sans', ui-sans-serif, system-ui",
                        fontSize: compact ? '16px' : '18px',
                        fontWeight: 700,
                        lineHeight: 1.25,
                        color: '#FAFAF8',
                        marginBottom: '12px'
                      }}
                    >
                      {req.value}
                    </p>
                    
                    <p 
                      className="mt-auto"
                      style={{
                        fontFamily: "'Noto Sans', ui-sans-serif, system-ui",
                        fontSize: compact ? '11px' : '12px',
                        fontWeight: 400,
                        lineHeight: 1.4,
                        color: '#B9C7C1'
                      }}
                    >
                      {req.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className={`flex ${compact ? 'justify-center mt-6' : 'items-end justify-end pt-6'}`}>
          {/* CTA Button */}
          <button
            className={`rounded-[14px] ${compact ? 'px-6 py-3 text-sm' : 'px-8 h-[56px]'} flex items-center gap-2 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] hover:shadow-xl`}
            style={{
              background: 'linear-gradient(135deg, #E9CD83 0%, #C6A252 100%)',
              boxShadow: '0 10px 22px rgba(0,0,0,0.22)',
              fontFamily: "'Noto Sans', ui-sans-serif, system-ui",
              fontSize: compact ? '14px' : '16px',
              fontWeight: 700,
              color: '#1A1A1A'
            }}
          >
            Iniciar pre-evaluación
            <ChevronRight size={compact ? 16 : 18} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </div>
  );
}