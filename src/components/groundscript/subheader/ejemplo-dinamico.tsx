"use client";

import { Titulos } from './TItulos';

// Ejemplo de cómo usar el componente Titulos de forma dinámica en otras páginas
export function EjemploDinamico() {
  return (
    <div>
      {/* Ejemplo 1: Para página de bienes raíces */}
      <Titulos
        titleKey="real_estate.title"
        descriptionKey="real_estate.subtitle"
        translationNamespace="real_estate"
        backgroundImage="/assets/76e5680e5d714cfac7f82b40fc5d2a3a8b70421a.png"
        tabs={[
          { id: "luxury", labelKey: "luxury_market.title" },
          { id: "mid_range", labelKey: "mid_range.title" },
          { id: "emerging", labelKey: "emerging_areas.title" }
        ]}
        defaultActiveTab="luxury"
      />

      {/* Ejemplo 2: Para página de turismo médico */}
      <Titulos
        titleKey="medical_tourism.title"
        descriptionKey="medical_tourism.subtitle"
        translationNamespace="medical_tourism"
        backgroundImage="/images/10.jpg"
        tabs={[
          { id: "cost", labelKey: "cost_comparison.title" },
          { id: "quality", labelKey: "quality_care.title" },
          { id: "treatments", labelKey: "treatments.title" }
        ]}
        defaultActiveTab="cost"
      />

      {/* Ejemplo 3: Para página sobre Panamá */}
      <Titulos
        titleKey="about_panama.title"
        descriptionKey="about_panama.subtitle"
        translationNamespace="about_panama"
        backgroundImage="/images/panama-skyline.jpg"
        tabs={[
          { id: "location", labelKey: "strategic_location.title" },
          { id: "economy", labelKey: "economic_benefits.title" },
          { id: "tax", labelKey: "tax_advantages.title" },
          { id: "quality", labelKey: "quality_of_life.title" }
        ]}
        defaultActiveTab="location"
      />
    </div>
  );
}

export default EjemploDinamico;