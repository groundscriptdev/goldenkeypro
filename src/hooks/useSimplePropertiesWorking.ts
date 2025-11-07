import { useState, useEffect } from "react";
import { propertiesApi } from "@/lib/api/properties";
import { PropertyFilters, PropertyResponse, PropertyPagination } from "@/types/properties";

interface UseSimplePropertiesWorkingOptions {
  initialFilters?: PropertyFilters;
  autoFetch?: boolean;
}

interface UseSimplePropertiesWorkingReturn {
  properties: any[];
  loading: boolean;
  error: string | null;
  pagination: PropertyPagination;
}

export const useSimplePropertiesWorking = (
  options: UseSimplePropertiesWorkingOptions = {}
): UseSimplePropertiesWorkingReturn => {
  const { initialFilters = {}, autoFetch = true } = options;

  const [properties, setProperties] = useState<any[]>([]);
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

  useEffect(() => {
    if (autoFetch && typeof window !== 'undefined') {
      console.log("useSimplePropertiesWorking: Iniciando carga de propiedades");
      setLoading(true);
      setError(null);

      propertiesApi
        .getProperties()
        .then((response: PropertyResponse) => {
          console.log("useSimplePropertiesWorking: Respuesta recibida:", response);
          setProperties(response.results || []);
          setPagination({
            count: response.count || 0,
            next: response.next,
            previous: response.previous,
            page_size: 12,
            current_page: 1,
            total_pages: Math.ceil((response.count || 0) / 12),
            has_next: !!response.next,
            has_previous: !!response.previous,
          });
          setLoading(false);
        })
        .catch((err) => {
          console.error("useSimplePropertiesWorking: Error:", err);
          setError(err instanceof Error ? err.message : "Error al cargar propiedades");
          setLoading(false);
        });
    }
  }, [autoFetch]);

  return {
    properties,
    loading,
    error,
    pagination,
  };
};