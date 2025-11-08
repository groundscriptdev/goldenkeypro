"use client";

import { useState, useEffect } from "react";
import { propertiesApi } from "@/lib/api/properties";

export default function DirectPropertyLoader() {
  console.log("DirectPropertyLoader: Componente renderizado");
  
  const [properties, setProperties] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log("DirectPropertyLoader: useEffect EJECUTADO!");
    setLoading(true);
    setError(null);

    propertiesApi
      .getProperties()
      .then((response) => {
        console.log("DirectPropertyLoader: Respuesta recibida:", response);
        console.log("DirectPropertyLoader: Número de propiedades:", response.results?.length || 0);
        setProperties(response.results || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("DirectPropertyLoader: Error:", err);
        setError(err instanceof Error ? err.message : "Error al cargar propiedades");
        setLoading(false);
      });
  }, []);

  console.log("DirectPropertyLoader: properties:", properties, "loading:", loading, "error:", error);

  return (
    <div className="p-4 border border-gray-300 rounded">
      <h2 className="text-lg font-bold mb-2">Direct Property Loader</h2>
      <p>Loading: {loading ? "Yes" : "No"}</p>
      <p>Error: {error || "None"}</p>
      <p>Properties count: {properties.length}</p>
      {properties.length > 0 && (
        <div>
          <h3 className="font-semibold">First property:</h3>
          <pre className="text-xs">{JSON.stringify(properties[0], null, 2)}</pre>
        </div>
      )}
    </div>
  );
}