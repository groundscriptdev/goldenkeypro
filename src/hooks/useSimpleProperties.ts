import { useState, useEffect } from "react";
import { propertiesApi } from "@/lib/api/properties";
import type { Property, PropertyFilters, PropertyPagination } from "@/types/properties";

export function useSimpleProperties(initialFilters: PropertyFilters = {}) {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [pagination, setPagination] = useState<PropertyPagination>({
    count: 0,
    next: undefined,
    previous: undefined,
    page_size: 12,
    current_page: 1,
    total_pages: 0,
    has_next: false,
    has_previous: false,
  });
  const [mounted, setMounted] = useState(false);

  console.log("useSimpleProperties: Hook inicializado, typeof window:", typeof window, "mounted:", mounted);

  // Efecto para marcar que el componente está montado en el cliente
  useEffect(() => {
    console.log("useSimpleProperties: Marcando componente como montado");
    setMounted(true);
  }, []);

  // Cargar propiedades iniciales al montar el componente
  useEffect(() => {
    // Solo ejecutar en el cliente después de montar
    if (!mounted) {
      console.log("useSimpleProperties: Componente no montado aún, saltando carga");
      return;
    }

    console.log("useSimpleProperties: useEffect ejecutado en cliente");
    setLoading(true);
    
    propertiesApi.getProperties().then(response => {
      console.log("useSimpleProperties: Respuesta recibida:", response);
      setProperties(response.results);
      setPagination({
        count: response.count,
        next: response.next,
        previous: response.previous,
        page_size: 12,
        current_page: 1,
        total_pages: Math.ceil(response.count / 12),
        has_next: !!response.next,
        has_previous: !!response.previous,
      });
      setLoading(false);
    }).catch(err => {
      console.error("useSimpleProperties: Error:", err);
      setError(err instanceof Error ? err.message : "Error al cargar propiedades");
      setLoading(false);
    });
  }, [mounted]); // Depender solo de mounted

  return {
    properties,
    loading,
    error,
    pagination,
    mounted,
  };
}