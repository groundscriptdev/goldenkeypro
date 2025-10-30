"use client";

import { useState, useEffect } from "react";
import { propertiesApi } from "@/lib/api/properties";

export default function TestPropertyClient() {
  const [properties, setProperties] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  console.log("TestPropertyClient: Componente renderizado");

  useEffect(() => {
    console.log("TestPropertyClient: useEffect ejecutado, isClient:", typeof window !== 'undefined');
    console.log("TestPropertyClient: Iniciando carga de propiedades");
    setLoading(true);
    setError(null);

    propertiesApi.getProperties()
      .then(response => {
        console.log("TestPropertyClient: Respuesta recibida:", response);
        setProperties(response.results);
        setLoading(false);
      })
      .catch(err => {
        console.error("TestPropertyClient: Error:", err);
        setError(err instanceof Error ? err.message : "Error desconocido");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Cargando propiedades...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Test Property Client</h2>
      <p>Propiedades encontradas: {properties.length}</p>
      <ul>
        {properties.slice(0, 3).map((property, index) => (
          <li key={index}>
            {property.title || `Propiedad ${property.id}`}
          </li>
        ))}
      </ul>
    </div>
  );
}