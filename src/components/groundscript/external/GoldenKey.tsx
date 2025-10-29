'use client';

import { motion, Easing } from "motion/react";
import { CheckCircle, Home, TrendingUp, Users, ChevronRight } from 'lucide-react';

// SVG paths para los iconos
const svgPaths = {
  p13253c0: "M22 7L13.5 15.5L8.5 10.5L2 17",
  p1425cd80: "M6.85158 13.0803C10.2916 13.0803 13.0803 10.2916 13.0803 6.85158C13.0803 3.41156 10.2916 0.622873 6.85158 0.622873C3.41156 0.622873 0.622873 3.41156 0.622873 6.85158C0.622873 10.2916 3.41156 13.0803 6.85158 13.0803Z",
  p161d4800: "M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z",
  p1d820380: "M16 21V19C16 17.9391 15.5786 16.9217 14.8284 16.1716C14.0783 15.4214 13.0609 15 12 15H6C4.93913 15 3.92172 15.4214 3.17157 16.1716C2.42143 16.9217 2 17.9391 2 19V21",
  p206ad900: "M3 10C2.99993 9.70907 3.06333 9.42162 3.18579 9.15772C3.30824 8.89381 3.4868 8.6598 3.709 8.472L10.709 2.473C11.07 2.16791 11.5274 2.00052 12 2.00052C12.4726 2.00052 12.93 2.16791 13.291 2.473L20.291 8.472C20.5132 8.6598 20.6918 8.89381 20.8142 9.15772C20.9367 9.42162 21.0001 9.70907 21 10V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V10Z",
  p2675a580: "M0.622873 1.86861L1.86861 3.11435L4.36007 0.622873",
  p27451300: "M16 3.128C16.8578 3.35037 17.6174 3.85126 18.1597 4.55206C18.702 5.25286 18.9962 6.11389 18.9962 7C18.9962 7.88611 18.702 8.74714 18.1597 9.44794C17.6174 10.1487 16.8578 10.6496 16 10.872",
  p2981fe00: "M22 21V19C21.9993 18.1137 21.7044 17.2528 21.1614 16.5523C20.6184 15.8519 19.8581 15.3516 19 15.13",
  p2bbf6680: "M15 21V13C15 12.7348 14.8946 12.4804 14.7071 12.2929C14.5196 12.1054 14.2652 12 14 12H10C9.73478 12 9.48043 12.1054 9.29289 12.2929C9.10536 12.4804 9 12.7348 9 13V21",
  p3d58bb40: "M12 2C9.43223 4.69615 8 8.27674 8 12C8 15.7233 9.43223 19.3038 12 22C14.5678 19.3038 16 15.7233 16 12C16 8.27674 14.5678 4.69615 12 2Z",
  pace200: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
};

// Componente optimizado para el header
export function GoldenKey() {
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
    <div className="relative w-full max-w-5xl mx-auto bg-white rounded-2xl overflow-hidden shadow-xl">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute w-96 h-96 rounded-full bg-amber-100 opacity-20 blur-3xl"
          animate={{ 
            x: [0, 100, 0], 
            y: [0, -100, 0] 
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut" as Easing
          }}
          style={{ top: '10%', left: '10%' }}
        />
        <motion.div 
          className="absolute w-96 h-96 rounded-full bg-green-100 opacity-20 blur-3xl"
          animate={{ 
            x: [0, -100, 0], 
            y: [0, 100, 0] 
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
      <div className="relative z-10 p-8 md:p-12">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{
              fontFamily: "'Playfair Display', 'Noto Serif SC', serif",
              color: '#0f172b'
            }}
          >
            Por qué elegir Panama Golden Key
          </h2>
          <p 
            className="text-lg text-slate-600 max-w-2xl mx-auto"
            style={{
              fontFamily: "'Inter', sans-serif"
            }}
          >
            Cuatro pilares fundamentales que garantizan tu éxito
          </p>
        </div>

        {/* Central Card */}
        <div className="relative mx-auto mb-12 max-w-md">
          <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8 relative overflow-hidden">
            {/* Decorative stamp */}
            <motion.div 
              className="absolute top-4 right-4 w-24 h-24 opacity-20"
              initial={{ opacity: 0, rotate: -15 }}
              animate={{ opacity: 0.2, rotate: 0 }}
              transition={{
                duration: 1.2,
                delay: 0.3,
                ease: "easeOut" as Easing
              }}
            >
              <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="50" r="48" stroke="#DBBC6C" strokeWidth="1.5" fill="transparent" />
                <circle cx="50" cy="50" r="40" stroke="#DBBC6C" strokeWidth="1.5" fill="transparent" />
                <circle cx="50" cy="42" r="8" stroke="#DBBC6C" strokeWidth="2" fill="transparent" />
                <line x1="50" y1="50" x2="50" y2="68" stroke="#DBBC6C" strokeWidth="2" />
              </svg>
            </motion.div>

            <h3 
              className="text-2xl font-bold text-center mb-3"
              style={{
                fontFamily: "'Noto Serif SC', serif",
                color: '#0f172b'
              }}
            >
              Tu llave a panama
            </h3>
            
            <p 
              className="text-slate-600 text-center mb-6"
              style={{
                fontFamily: "'Inter', sans-serif"
              }}
            >
              Abriendo las puertas a tu nueva vida con inversiones seguras y rentables.
            </p>

            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} style={{ color: '#1b3d36' }} />
                <span 
                  className="text-sm font-medium"
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
              className="w-full rounded-xl px-6 py-3 flex items-center justify-center gap-2 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] hover:shadow-lg"
              style={{
                background: 'linear-gradient(135deg, #1b3d36 0%, #2d5a47 100%)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                fontFamily: "'Inter', sans-serif",
                fontSize: '16px',
                fontWeight: 600,
                color: '#ffffff'
              }}
            >
              Comenzar ahora
              <ChevronRight size={18} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md border border-slate-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
              >
                <div className="flex items-start gap-4">
                  <div 
                    className="flex items-center justify-center w-12 h-12 rounded-xl flex-shrink-0"
                    style={{ backgroundColor: '#31504a' }}
                  >
                    <Icon size={24} strokeWidth={2} style={{ color: '#ffffff' }} />
                  </div>
                  <div>
                    <h3 
                      className="text-lg font-semibold mb-2"
                      style={{
                        fontFamily: "'Noto Serif SC', serif",
                        color: '#0f172b'
                      }}
                    >
                      {pillar.title}
                    </h3>
                    <p 
                      className="text-slate-600 text-sm leading-relaxed"
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
        </div>
      </div>
    </div>
  );
}

// Importar CheckCircle2 para el componente
import { CheckCircle2 as CheckCircle2Icon } from 'lucide-react';
const CheckCircle2 = CheckCircle2Icon;