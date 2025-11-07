"use client";

import { useState, useEffect } from "react";
import { propertiesApi } from "@/lib/api/properties";

export default function TestDirectAPI() {
  const [properties, setProperties] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log("TestDirectAPI: Componente montado");
    setLoading(true);
    
    propertiesApi.getProperties().then(response => {
      console.log("TestDirectAPI: Respuesta recibida:", response);
      setProperties(response.results || []);
      setLoading(false);
    }).catch(err => {
      console.error("TestDirectAPI: Error:", err);
      setError(err.message);
      setLoading(false);
    });
  }, []);

  return (
    <div className="p-4 border rounded-lg bg-gray-50">
      <h3 className="text-lg font-semibold mb-4">Test Direct API</h3>
      {loading && <p>Cargando...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      {properties.length > 0 && (
        <div>
          <p className="text-green-600 font-medium">
            ✓ {properties.length} propiedades cargadas correctamente
          </p>
          <ul className="mt-2 space-y-1">
            {properties.map((prop) => (
              <li key={prop.id} className="text-sm">
                - {prop.title} (${prop.financials?.price || 'N/A'})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}