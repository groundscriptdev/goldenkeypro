"use client";

import { useEffect, useState } from "react";
import { PropertiesAPI } from "@/lib/api/properties";

export default function TestAPIPage() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log("🚀 TestAPIPage: useEffect ejecutado en cliente");
    
    const testAPI = async () => {
      try {
        setLoading(true);
        console.log("🚀 TestAPIPage: Iniciando llamada API...");
        
        const api = new PropertiesAPI();
        const result = await api.getProperties("");
        
        console.log("🚀 TestAPIPage: Datos recibidos:", result);
        setData(result);
        setError(null);
      } catch (err) {
        console.error("🚀 TestAPIPage: Error:", err);
        setError(err instanceof Error ? err.message : "Error desconocido");
      } finally {
        setLoading(false);
      }
    };

    testAPI();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Test API Directo</h1>
      
      {loading && <p>Cargando...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      
      {data && (
        <div>
          <h2 className="text-xl font-semibold mb-2">
            Resultados: {data.results?.length || 0} propiedades
          </h2>
          
          {data.results && data.results.length > 0 && (
            <div className="space-y-4">
              {data.results.map((property: any) => (
                <div key={property.id} className="border p-4 rounded">
                  <h3 className="font-bold">{property.title}</h3>
                  <p>ID: {property.id}</p>
                  <p>Tipo: {property.type}</p>
                  <p>Precio: {property.financials?.price || 'N/A'}</p>
                  <p>Imagen: {property.media?.image_cover || 'N/A'}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}