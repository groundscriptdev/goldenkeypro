"use client";

import { useState } from "react";
import { Check, FileText, Building2, Send, ThumbsUp, CreditCard, User } from "lucide-react";

interface Step {
  id: number;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  duration: string;
  details?: {
    title: string;
    duration: string;
    checklist: string[];
  };
}

const steps: Step[] = [
  {
    id: 1,
    title: "Consulta inicial",
    subtitle: "Menos de 1 semana",
    icon: <FileText className="w-5 h-5" />,
    duration: "Menos de 1 semana",
    details: {
      title: "Consulta inicial",
      duration: "Menos de 1 semana",
      checklist: [
        "Consultar con un abogado",
        "Evaluar opciones de residencia",
        "Determinar elegibilidad"
      ]
    }
  },
  {
    id: 2,
    title: "Inversión calificada",
    subtitle: "2 a 3 semanas",
    icon: <Building2 className="w-5 h-5" />,
    duration: "2 a 3 semanas",
    details: {
      title: "Realizar inversión calificada",
      duration: "2 a 3 semanas",
      checklist: [
        "Seleccionar tipo de inversión",
        "Preparar documentación financiera",
        "Completar transferencia de fondos"
      ]
    }
  },
  {
    id: 3,
    title: "Enviar solicitud",
    subtitle: "1 mes",
    icon: <Send className="w-5 h-5" />,
    duration: "1 mes",
    details: {
      title: "Enviar solicitud",
      duration: "1 mes",
      checklist: [
        "Completar formularios oficiales",
        "Recopilar documentos requeridos",
        "Enviar aplicación completa"
      ]
    }
  },
  {
    id: 4,
    title: "Recibir aprobación",
    subtitle: "1 a 2 meses",
    icon: <ThumbsUp className="w-5 h-5" />,
    duration: "1 a 2 meses",
    details: {
      title: "Recibir aprobación",
      duration: "1 a 2 meses",
      checklist: [
        "Esperar revisión de autoridades",
        "Responder a solicitudes adicionales",
        "Recibir notificación de aprobación"
      ]
    }
  },
/*   {
    id: 5,
    title: "Proceso biométrico",
    subtitle: "1 a 2 semanas",
    icon: <CreditCard className="w-5 h-5" />,
    duration: "1 a 2 semanas",
    details: {
      title: "Proceso biométrico",
      duration: "1 a 2 semanas",
      checklist: [
        "Agendar cita biométrica",
        "Tomar fotografía y huellas",
        "Completar registro"
      ]
    }
  },
  {
    id: 6,
    title: "Recibir residencia",
    subtitle: "1 a 2 semanas",
    icon: <User className="w-5 h-5" />,
    duration: "1 a 2 semanas",
    details: {
      title: "Recibir tarjeta de residencia",
      duration: "1 a 2 semanas",
      checklist: [
        "Activar tarjeta de residencia",
        "Registrar dirección permanente",
        "Confirmar beneficios y derechos"
      ]
    }
  } */
];

export function GroundProcess() {
  const [currentStep, setCurrentStep] = useState(1);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [hoveredButton, setHoveredButton] = useState<'primary' | 'secondary' | null>(null);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white ">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-jade-green mb-4 font-brand">
            Proceso de Residencia
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Te guiamos paso a paso en tu camino hacia la residencia permanente en Panamá
          </p>
        </div>

        <div className="grid relative grid-process mx-auto p-11">
          {/* Steps Timeline */}
          <div className="">
            <div className=" bg-white rounded-xl p-6 shadow-lg">
              <div className="flex flex-col gap-4">
                {steps.map((step, index) => {
                  const isActive = step.id === currentStep;
                  const isPast = step.id < currentStep;
                  const isHovered = hoveredStep === step.id;
                  
                  return (
                    <div key={step.id} className="relative">
                      <div
                        className={`
                          flex items-start gap-4 p-4 rounded-xl cursor-pointer transition-all duration-200
                          ${isActive 
                            ? 'bg-jade-green/10 border-2 border-jade-green' 
                            : isHovered 
                              ? 'bg-gray-50' 
                              : 'bg-transparent'
                          }
                        `}
                        onClick={() => setCurrentStep(step.id)}
                        onMouseEnter={() => setHoveredStep(step.id)}
                        onMouseLeave={() => setHoveredStep(null)}
                      >
                        {/* Icon Circle */}
                        <div
                          className={`
                            w-12 h-12 rounded-full  flex items-center justify-center flex-shrink-0 transition-all duration-200
                            ${isActive 
                              ? ' text-white groundgreen-bg shadow-lg' 
                              : isPast 
                                ? 'ground-jade-full text-white' 
                                : 'bg-gray-200 text-gray-500'
                            }
                          `}
                        >
                          {isPast && !isActive ? (
                            <Check className="w-5 h-5" />
                          ) : (
                            step.icon
                          )}
                        </div>
                        
                        {/* Step Info */}
                        <div className="flex-1 min-w-0">
                          <p className="text-base font-semibold text-gray-900 mb-1">
                            {step.title}
                          </p>
                          <p className="text-sm text-gray-600 opacity-60">
                            {step.subtitle}
                          </p>
                        </div>

                        {/* Step Number */}
                        <div className={`
                          text-xs font-bold px-3 py-1 rounded-full
                          ${isActive 
                            ? 'bg-jade-green text-white' 
                            : 'bg-gray-100 text-gray-500'
                          }
                        `}>
                          {step.id}
                        </div>
                      </div>

                      {/* Connector Line */}
                      {index < steps.length - 1 && (
                        <div className="h-4 flex justify-start ml-10">
                          <div
                            className={`
                              w-0.5 h-full
                              ${isPast ? 'bg-gray-800' : 'bg-gray-200'}
                            `}
                          />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Info Card */}
          <div className="">
            <div className="ground-box-fix groundgreen-bg bg-white rounded-xl p-6 shadow-lg sticky top-6">
              <div className="mb-6">
                <div className="inline-block px-3 py-1 bg-jade-green/10 rounded-full text-xs font-semibold text-jade-green mb-4">
                  Paso {currentStep} de {steps.length}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
                  {steps[currentStep - 1].details?.title}
                </h3>
                <p className="text-sm text-gray-600 opacity-70">
                  Duración estimada: {steps[currentStep - 1].details?.duration}
                </p>
              </div>
              
              <div className="border-t border-gray-100 pt-5 mb-6">
                <p className="text-xs font-semibold text-gray-600 opacity-60 uppercase tracking-wider mb-4">
                  Checklist
                </p>
                <div className="flex flex-col gap-3">
                  {steps[currentStep - 1].details?.checklist.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-jade-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-jade-green" />
                      </div>
                      <span className="text-sm text-gray-900 leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                {/* <button
                  className={`
                    w-full font-semibold py-2.5 px-4 rounded-lg transition-all duration-200
                    ${hoveredButton === 'primary' 
                      ? 'bg-jade-green/90' 
                      : 'bg-jade-green'
                    } text-white
                  `}
                  onMouseEnter={() => setHoveredButton('primary')}
                  onMouseLeave={() => setHoveredButton(null)}
                >
                  Agendar consulta
                </button> */}
                <button
                  className={`
                    w-full font-medium py-2.5 px-4 rounded-lg border transition-all duration-200
                    ${hoveredButton === 'secondary' 
                      ? 'bg-gray-800 text-white border-gray-800' 
                      : 'bg-white text-gray-800 border-gray-800'
                    }
                  `}
                  onMouseEnter={() => setHoveredButton('secondary')}
                  onMouseLeave={() => setHoveredButton(null)}
                >
                  Más información
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
