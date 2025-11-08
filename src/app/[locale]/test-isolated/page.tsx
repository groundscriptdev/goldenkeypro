"use client";

import { useEffect, useState } from "react";

export default function TestIsolatedPage() {
  const [mounted, setMounted] = useState(false);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    console.log("🚀🚀🚀 TestIsolatedPage: useEffect EJECUTADO!!");
    console.log("🚀🚀🚀 TestIsolatedPage: typeof window:", typeof window);
    
    setMounted(true);
    
    // Test simple fetch
    fetch('/api/proxy/properties')
      .then(res => res.json())
      .then(apiData => {
        console.log("🚀🚀🚀 TestIsolatedPage: Datos API recibidos:", apiData.results?.length);
        setData(apiData);
      })
      .catch(err => {
        console.error("🚀🚀🚀 TestIsolatedPage: Error API:", err);
      });
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4 text-red-500">
        Test Aislado - Cliente
      </h1>
      
      <div className="mb-4 p-4 bg-yellow-100 border-2 border-yellow-300">
        <p className="text-lg">
          Estado montado: {mounted ? 
            <span className="text-green-600 font-bold">✅ SÍ</span> : 
            <span className="text-red-600 font-bold">❌ NO</span>
          }
        </p>
        <p className="text-lg">
          typeof window: <span className="font-mono bg-gray-200 px-2">{typeof window}</span>
        </p>
        <p className="text-lg">
          Timestamp: <span className="font-mono bg-gray-200 px-2">{new Date().toISOString()}</span>
        </p>
      </div>

      {data && (
        <div className="mt-6 p-4 bg-green-100 border-2 border-green-300">
          <h2 className="text-2xl font-bold mb-2">
            ✅ API Funciona: {data.results?.length || 0} propiedades
          </h2>
          
          {data.results && data.results.length > 0 && (
            <div className="space-y-2">
              {data.results.map((property: any) => (
                <div key={property.id} className="p-2 bg-white border rounded">
                  <strong>{property.title}</strong> - {property.type}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}