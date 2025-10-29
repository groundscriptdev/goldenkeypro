'use client';

import { motion, Easing } from "motion/react";
import { CheckCircle, Home, TrendingUp, Users, ChevronRight, Plus } from 'lucide-react';
import { useState } from 'react';

export function GoldenKeyCompact() {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const pillars = [
    {
      icon: Home,
      title: "Residencia Permanente",
      description: "Ruta directa hacia la residencia en Panamá mediante inversión calificada"
    },
    {
      icon: Users,
      title: "Beneficios Familiares",
      description: "Incluye a tu cónyuge, hijos y padres en tu solicitud de residencia"
    },
    {
      icon: TrendingUp,
      title: "Inversiones de Alto Retorno",
      description: "Rendimientos anuales del 5-7% en oportunidades inmobiliarias premium"
    },
    {
      icon: CheckCircle,
      title: "Camino a la Ciudadanía",
      description: "Naturalización en 5 años con pasaporte panameño"
    }
  ];

  return (
    <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl bg-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute w-48 h-48 rounded-full bg-amber-100 opacity-20 blur-xl"
          animate={{ 
            x: [0, 50, 0], 
            y: [0, -50, 0] 
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut" as Easing
          }}
          style={{ top: '10%', left: '10%' }}
        />
        <motion.div 
          className="absolute w-48 h-48 rounded-full bg-green-100 opacity-20 blur-xl"
          animate={{ 
            x: [0, -50, 0], 
            y: [0, 50, 0] 
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut" as Easing
          }}
          style={{ bottom: '10%', right: '10%' }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 p-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 
              className="text-xl font-bold mb-1"
              style={{
                fontFamily: "'Playfair Display', 'Noto Serif SC', serif",
                color: '#0f172b'
              }}
            >
              Panama Golden Key
            </h2>
            
            <p 
              className="text-sm text-slate-600"
              style={{
                fontFamily: "'Inter', sans-serif"
              }}
            >
              Cuatro pilares para tu éxito
            </p>
          </div>
          
          {/* Decorative stamp */}
          <motion.div 
            className="w-12 h-12 opacity-20"
            initial={{ opacity: 0, rotate: -15 }}
            animate={{ opacity: 0.2, rotate: 0 }}
            transition={{
              duration: 1.2,
              delay: 0.3,
              ease: "easeOut" as Easing
            }}
          >
            <svg width="48" height="48" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="48" stroke="#DBBC6C" strokeWidth="1.5" fill="transparent" />
              <circle cx="50" cy="50" r="40" stroke="#DBBC6C" strokeWidth="1.5" fill="transparent" />
              <circle cx="50" cy="42" r="8" stroke="#DBBC6C" strokeWidth="2" fill="transparent" />
              <line x1="50" y1="50" x2="50" y2="68" stroke="#DBBC6C" strokeWidth="2" />
            </svg>
          </motion.div>
        </div>

        {/* Central Card Content */}
        <div className="bg-white rounded-xl shadow-md border border-slate-100 p-4 mb-4 relative overflow-hidden">
          <h3 
            className="text-lg font-bold text-center mb-2"
            style={{
              fontFamily: "'Noto Serif SC', serif",
              color: '#0f172b'
            }}
          >
            Tu llave a panama
          </h3>
          
          <p 
            className="text-slate-600 text-center text-sm mb-3"
            style={{
              fontFamily: "'Inter', sans-serif"
            }}
          >
            Inversiones seguras y rentables.
          </p>

          <div className="flex items-center justify-center mb-3">
            <div className="flex items-center gap-2">
              <CheckCircle size={16} style={{ color: '#1b3d36' }} />
              <span 
                className="text-xs font-medium"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: '#0f172b'
                }}
              >
                95% tasa de éxito
              </span>
            </div>
          </div>

          <button
            className="w-full rounded-lg px-4 py-2 flex items-center justify-center gap-2 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] hover:shadow-md text-sm"
            style={{
              background: 'linear-gradient(135deg, #1b3d36 0%, #2d5a47 100%)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              color: '#ffffff'
            }}
          >
            Comenzar ahora
            <ChevronRight size={16} strokeWidth={2.5} />
          </button>
        </div>

        {/* Pillars - Always show first 2 */}
        <div className="space-y-3 mb-4">
          {pillars.slice(0, 2).map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-3 shadow-sm border border-slate-100"
              >
                <div className="flex items-start gap-3">
                  <div 
                    className="flex items-center justify-center w-10 h-10 rounded-lg flex-shrink-0"
                    style={{ backgroundColor: '#31504a' }}
                  >
                    <Icon size={18} strokeWidth={2} style={{ color: '#ffffff' }} />
                  </div>
                  <div className="flex-1">
                    <h3 
                      className="text-sm font-semibold mb-1"
                      style={{
                        fontFamily: "'Noto Serif SC', serif",
                        color: '#0f172b'
                      }}
                    >
                      {pillar.title}
                    </h3>
                    <p 
                      className="text-slate-600 text-xs leading-relaxed line-clamp-2"
                      style={{
                        fontFamily: "'Inter', sans-serif"
                      }}
                    >
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Expandable section */}
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="space-y-3 mb-4"
          >
            {pillars.slice(2).map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={index + 2}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-3 shadow-sm border border-slate-100"
                >
                  <div className="flex items-start gap-3">
                    <div 
                      className="flex items-center justify-center w-10 h-10 rounded-lg flex-shrink-0"
                      style={{ backgroundColor: '#31504a' }}
                    >
                      <Icon size={18} strokeWidth={2} style={{ color: '#ffffff' }} />
                    </div>
                    <div className="flex-1">
                      <h3 
                        className="text-sm font-semibold mb-1"
                        style={{
                          fontFamily: "'Noto Serif SC', serif",
                          color: '#0f172b'
                        }}
                      >
                        {pillar.title}
                      </h3>
                      <p 
                        className="text-slate-600 text-xs leading-relaxed"
                        style={{
                          fontFamily: "'Inter', sans-serif"
                        }}
                      >
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}

        {/* Toggle button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full rounded-lg px-4 py-2 flex items-center justify-center gap-2 transition-all duration-200 hover:bg-slate-100 text-sm"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 500,
            color: '#0f172b'
          }}
        >
          {isExpanded ? (
            <>
              Ver menos pilares
              <ChevronRight size={16} strokeWidth={2} className="rotate-90" />
            </>
          ) : (
            <>
              Ver todos los pilares
              <Plus size={16} strokeWidth={2} />
            </>
          )}
        </button>
      </div>
    </div>
  );
}
