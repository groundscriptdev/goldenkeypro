"use client";

import { useState, useEffect } from "react";
import { propertiesApi } from "@/lib/api/properties";

export default function ForceClientComponent() {
  const [isClient, setIsClient] = useState(false);
  const [properties, setProperties] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Forzar que solo se renderice en el cliente
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    
    console.log("ForceClientComponent: useEffect ejecutado, isClient:", isClient);
    console.log("ForceClientComponent: Iniciando carga de propiedades");
    setLoading(true);
    setError(null);

    propertiesApi.getProperties()
      .then(response => {
        console.log("ForceClientComponent: Respuesta recibida:", response);
        setProperties(response.results);
        setLoading(false);
      })
      .catch(err => {
        console.error("ForceClientComponent: Error:", err);
        setError(err instanceof Error ? err.message : "Error desconocido");
        setLoading(false);
      });
  }, [isClient]);

  if (!isClient) {
    return <div>Verificando cliente...</div>;
  }

  if (loading) {
    return <div>Cargando propiedades...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Force Client Component</h2>
      <p>Propiedades encontradas: {properties.length}</p>
      <ul>
        {properties.map((property: any) => (
          <li key={property.id}>
            {property.title} - ${property.price}
          </li>
        ))}
      </ul>
    </div>
  );
}