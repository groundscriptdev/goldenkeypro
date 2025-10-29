'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ProcessJourneyProps, Step } from './types';
import { StepInfoCard } from './StepInfoCard';
import { StepTimeline } from './StepTimeline';

export function ProcessJourney({ 
  steps = [], 
  title = "Proceso de Residencia", 
  subtitle = "Tu camino hacia Panamá",
  className = ""
}: ProcessJourneyProps) {
  const defaultSteps: Step[] = steps.length > 0 ? steps : [
    {
      id: 1,
      title: "Consulta Inicial",
      subtitle: "Evaluación de elegibilidad",
      description: "Analizamos tu perfil y determinamos las mejores opciones de inversión",
      status: 'completed'
    },
    {
      id: 2,
      title: "Selección de Inversión",
      subtitle: "Elección del programa",
      description: "Te ayudamos a elegir la opción de inversión que mejor se adapte a tus necesidades",
      status: 'current'
    },
    {
      id: 3,
      title: "Proceso de Solicitud",
      subtitle: "Documentación y trámites",
      description: "Gestionamos toda la documentación necesaria para tu solicitud",
      status: 'pending'
    },
    {
      id: 4,
      title: "Aprobación",
      subtitle: "Residencia concedida",
      description: "Recibes la aprobación de tu residencia permanente",
      status: 'pending'
    }
  ];

  return (
    <section className={`py-16 px-4 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-jade-green mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <StepTimeline steps={defaultSteps} currentStep={2} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {defaultSteps.map((step, index) => (
              <StepInfoCard key={step.id} step={step} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}