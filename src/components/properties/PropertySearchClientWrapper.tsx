"use client";

import { useEffect, useState } from "react";
import { PropertyFilters, Property } from "@/types/properties";
import { PropertiesAPI } from "@/lib/api/properties";
import PropertyCard from "./PropertyCard";

interface PropertySearchClientWrapperProps {
  initialFilters: PropertyFilters;
  locale: string;
}

export default function PropertySearchClientWrapper({ initialFilters, locale }: PropertySearchClientWrapperProps) {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log("🔥 PropertySearchClientWrapper: useEffect ejecutado en cliente");
    console.log("🔥 PropertySearchClientWrapper: typeof window:", typeof window);
    console.log("🔥 PropertySearchClientWrapper: initialFilters:", initialFilters);
    
    const loadProperties = async () => {
      try {
        setLoading(true);
        console.log("🔥 PropertySearchClientWrapper: Cargando propiedades...");
        
        const api = new PropertiesAPI();
        const data = await api.getProperties(""); // Pasar string vacío para obtener todas las propiedades
        
        console.log("🔥 PropertySearchClientWrapper: Propiedades cargadas:", data.results.length);
        setProperties(data.results);
        setError(null);
      } catch (err) {
        console.error("🔥 PropertySearchClientWrapper: Error:", err);
        setError(err instanceof Error ? err.message : "Error desconocido");
      } finally {
        setLoading(false);
      }
    };

    loadProperties();
  }, [initialFilters]);

  console.log("🔥 PropertySearchClientWrapper: Render - properties:", properties.length, "loading:", loading, "error:", error);

  if (loading) {
    return <div className="text-center p-8">Cargando propiedades...</div>;
  }

  if (error) {
    return <div className="text-center p-8 text-red-500">Error: {error}</div>;
  }

  if (properties.length === 0) {
    return <div className="text-center p-8">No se encontraron propiedades</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} locale={locale} />
      ))}
    </div>
  );
}