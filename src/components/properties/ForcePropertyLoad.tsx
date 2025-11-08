"use client";

import { useEffect } from "react";
import { propertiesApi } from "@/lib/api/properties";

interface ForcePropertyLoadProps {
  onPropertiesLoaded: (properties: any[]) => void;
}

export default function ForcePropertyLoad({ onPropertiesLoaded }: ForcePropertyLoadProps) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      console.log("ForcePropertyLoad: Forzando carga de propiedades");
      
      propertiesApi.getProperties()
        .then((response) => {
          console.log("ForcePropertyLoad: Respuesta recibida:", response);
          console.log("ForcePropertyLoad: Número de propiedades:", response.results?.length || 0);
          onPropertiesLoaded(response.results || []);
        })
        .catch((err) => {
          console.error("ForcePropertyLoad: Error:", err);
        });
    }
  }, [onPropertiesLoaded]);

  return null; // Este componente no renderiza nada
}