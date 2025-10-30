"use client";

import { useState, useEffect } from "react";
import { PropertyFilters } from "@/types/properties";
import PropertySearchClient from "./PropertySearchClient";

interface PropertySearchWrapperProps {
  initialFilters: PropertyFilters;
  locale: string;
}

export default function PropertySearchWrapper({
  initialFilters,
  locale,
}: PropertySearchWrapperProps) {
  const [isClient, setIsClient] = useState(false);

  console.log("PropertySearchWrapper: Componente renderizado, isClient:", isClient);

  useEffect(() => {
    console.log("PropertySearchWrapper: useEffect ejecutado");
    setIsClient(true);
  }, []);

  if (!isClient) {
    console.log("PropertySearchWrapper: Mostrando skeleton");
    return (
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded mb-4"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-64 bg-gray-200 rounded"></div>
          ))}
        </div>
      </div>
    );
  }

  console.log("PropertySearchWrapper: Renderizando PropertySearchClient");
  return <PropertySearchClient initialFilters={initialFilters} locale={locale} />;
}