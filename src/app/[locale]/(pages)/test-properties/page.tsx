"use client";

import { useState, useEffect } from "react";
import { propertiesApi } from "@/lib/api/properties";

export default function TestPropertiesPage() {
  const [properties, setProperties] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  // Forzar montaje en el cliente
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    console.log("TestPropertiesPage: Iniciando carga de propiedades");
    setLoading(true);
    setError(null);

    propertiesApi.getProperties()
      .then(response => {
        console.log("TestPropertiesPage: Respuesta recibida:", response);
        setProperties(response.results || []);
        setLoading(false);
      })
      .catch(err => {
        console.error("TestPropertiesPage: Error:", err);
        setError(err instanceof Error ? err.message : "Error desconocido");
        setLoading(false);
      });
  }, [mounted]);

  if (!mounted) {
    return <div>Inicializando...</div>;
  }

  if (loading) {
    return <div>Cargando propiedades...</div>;
  }

  if (error) {
    return (
      <div>
        <h1>Test Properties Page</h1>
        <div style={{color: 'red'}}>Error: {error}</div>
      </div>
    );
  }

  return (
    <div style={{padding: '20px'}}>
      <h1>Test Properties Page</h1>
      <p>Propiedades encontradas: {properties.length}</p>
      {properties.length === 0 ? (
        <p>No se encontraron propiedades</p>
      ) : (
        <ul>
          {properties.map((property: any) => (
            <li key={property.id} style={{marginBottom: '10px', border: '1px solid #ccc', padding: '10px'}}>
              <strong>{property.title || 'Sin título'}</strong> - ${property.price || 'N/A'}
              <br />
              <small>ID: {property.id}</small>
              {property.image_url && (
                <div>
                  <img src={property.image_url} alt={property.title} style={{maxWidth: '200px'}} />
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}