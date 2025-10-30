"use client";

import { useEffect, useState } from "react";
import { propertiesApi } from "@/lib/api/properties";

export default function TestAPICall() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log("TestAPICall: useEffect ejecutado");
    
    const testCall = async () => {
      console.log("TestAPICall: Iniciando llamada de prueba");
      setLoading(true);
      setError(null);
      
      try {
        const response = await propertiesApi.getProperties();
        console.log("TestAPICall: Respuesta recibida:", response);
        setData(response);
      } catch (err) {
        console.error("TestAPICall: Error:", err);
        setError(err instanceof Error ? err.message : "Error desconocido");
      } finally {
        setLoading(false);
      }
    };

    testCall();
  }, []);

  return (
    <div className="p-4 border rounded-lg bg-gray-50">
      <h3 className="text-lg font-semibold mb-2">Test API Call</h3>
      
      {loading && <p>Cargando...</p>}
      
      {error && (
        <div className="p-2 bg-red-100 border border-red-300 rounded">
          <p className="text-red-700">Error: {error}</p>
        </div>
      )}
      
      {data && (
        <div className="p-2 bg-green-100 border border-green-300 rounded">
          <p className="text-green-700">
            ✅ API funcionó! Se encontraron {data.results?.length || 0} propiedades
          </p>
          <p className="text-sm text-gray-600 mt-1">
            URL base: {data._url || "No disponible"}
          </p>
        </div>
      )}
      
      {!loading && !error && !data && (
        <p className="text-gray-500">Esperando llamada...</p>
      )}
    </div>
  );
}