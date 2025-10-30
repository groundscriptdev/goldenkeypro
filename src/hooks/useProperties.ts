/**
 * Properties Hook - Hook personalizado para propiedades
 * Panama Golden Key PropTech - Hook para gestión de propiedades con arquitectura angelical
 */

import { useState, useEffect, useCallback } from "react";
import {
  Property,
  PropertyFilters,
  PropertyResponse,
  PropertyPagination,
} from "@/types/properties";
import { propertiesApi } from "@/lib/api/properties";

interface UsePropertiesOptions {
  initialFilters?: PropertyFilters;
  autoFetch?: boolean;
  pageSize?: number;
}

interface UsePropertiesReturn {
  properties: Property[];
  loading: boolean;
  error: string | null;
  pagination: PropertyPagination;
  hasNext: boolean;
  updateFilter: (key: keyof PropertyFilters, value: any) => void;
  loadMore: () => void;
  clearError: () => void;
  refetch: () => void;
}

export const useProperties = (
  options: UsePropertiesOptions = {}
): UsePropertiesReturn => {
  const { initialFilters = {}, autoFetch = true, pageSize = 12 } = options;

  console.log("useProperties: Hook inicializado con initialFilters:", initialFilters, "autoFetch:", autoFetch);

  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [pagination, setPagination] = useState<PropertyPagination>({
    count: 0,
    next: undefined,
    previous: undefined,
    page_size: pageSize,
    current_page: 1,
    total_pages: 0,
    has_next: false,
    has_previous: false,
  });
  const [filters, setFilters] = useState<PropertyFilters>(initialFilters);
  const [hasNext, setHasNext] = useState<boolean>(false);

  // Función para actualizar filtros
  const updateFilter = useCallback((key: keyof PropertyFilters, value: any) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  }, []);

  // Función para limpiar error
  const clearError = useCallback(() => {
    setError(null);
  }, []);

  // Función para cargar más propiedades
  const loadMore = useCallback(() => {
    if (pagination.next && !loading) {
      fetchProperties(pagination.next);
    }
  }, [pagination.next, loading]);

  // Función para refrescar datos
  const refetch = useCallback(() => {
    fetchProperties();
  }, [filters]);

  // Función para obtener propiedades
  const fetchProperties = useCallback(
    async (url?: string) => {
      console.log("fetchProperties: Iniciando con url:", url);
      setLoading(true);
      setError(null);

      try {
        const response: PropertyResponse =
          await propertiesApi.getProperties(url);

        console.log("fetchProperties: Respuesta recibida:", response);

        if (url) {
          // Es una carga adicional (paginación)
          setProperties((prev) => [...prev, ...response.results]);
        } else {
          // Es una carga inicial
          setProperties(response.results);
        }

        console.log("fetchProperties: Propiedades establecidas:", response.results.length);

        // Actualizar paginación
        if (response.pagination) {
          setPagination(response.pagination);
          setHasNext(response.pagination.has_next);
        } else {
          // Calcular paginación si no viene en la respuesta
          const newPagination: PropertyPagination = {
            count: response.count,
            next: response.next,
            previous: response.previous,
            page_size: pageSize,
            current_page: url
              ? parseInt(new URL(url).searchParams.get("page") || "1")
              : 1,
            total_pages: Math.ceil(response.count / pageSize),
            has_next: !!response.next,
            has_previous: !!response.previous,
          };
          setPagination(newPagination);
          setHasNext(newPagination.has_next);
        }
      } catch (err) {
        console.error("fetchProperties: Error:", err);
        setError(
          err instanceof Error ? err.message : "Error al cargar propiedades"
        );
      } finally {
        setLoading(false);
      }
    },
    [pageSize]
  );

  // Cargar propiedades iniciales al montar el componente
  useEffect(() => {
    console.log("useProperties: useEffect ejecutado, autoFetch:", autoFetch);
    if (autoFetch) {
      console.log("useProperties: Iniciando carga inicial");
      setLoading(true);
      
      // Llamada directa sin usar fetchProperties para evitar problemas de dependencias
      propertiesApi.getProperties().then(response => {
        console.log("useProperties: Respuesta directa:", response);
        setProperties(response.results || []);
        setPagination({
          count: response.count || 0,
          next: response.next,
          previous: response.previous,
          page_size: pageSize,
          current_page: 1,
          total_pages: Math.ceil((response.count || 0) / pageSize),
          has_next: !!response.next,
          has_previous: !!response.previous,
        });
        setLoading(false);
      }).catch(err => {
        console.error("useProperties: Error directo:", err);
        setError(err instanceof Error ? err.message : "Error al cargar propiedades");
        setLoading(false);
      });
    }
  }, []); // Solo ejecutar al montar el componente, sin dependencias

  return {
    properties,
    loading,
    error,
    pagination,
    hasNext,
    updateFilter,
    loadMore,
    clearError,
    refetch,
  };
};

// Hook para obtener una propiedad específica
export const useProperty = (id: string) => {
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProperty = async () => {
      setLoading(true);
      setError(null);

      try {
        const propertyData = await propertiesApi.getProperty(id);
        setProperty(propertyData);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Error al cargar la propiedad"
        );
        console.error("Error fetching property:", err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProperty();
    }
  }, [id]);

  return { property, loading, error };
};

// Hook para obtener propiedades destacadas
export const useFeaturedProperties = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFeaturedProperties = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await propertiesApi.getFeaturedProperties();
        setProperties(response.results);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Error al cargar propiedades destacadas"
        );
        console.error("Error fetching featured properties:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProperties();
  }, []);

  return { properties, loading, error };
};

// Hook para buscar propiedades
export const usePropertySearch = () => {
  const [results, setResults] = useState<Property[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const searchProperties = useCallback(
    async (searchParams: PropertyFilters) => {
      setLoading(true);
      setError(null);

      try {
        const response = await propertiesApi.searchProperties(searchParams);
        setResults(response.results);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Error al buscar propiedades"
        );
        console.error("Error searching properties:", err);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return { results, loading, error, searchProperties };
};

// Hook para obtener propiedades similares
export const useSimilarProperties = (id: string) => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSimilarProperties = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await propertiesApi.getSimilarProperties(id);
        setProperties(response.results);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Error al cargar propiedades similares"
        );
        console.error("Error fetching similar properties:", err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchSimilarProperties();
    }
  }, [id]);

  return { properties, loading, error };
};

// Hook para obtener oportunidades de inversión
export const useInvestmentOpportunities = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInvestmentOpportunities = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await propertiesApi.getInvestmentOpportunities();
        setProperties(response.results);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Error al cargar oportunidades de inversión"
        );
        console.error("Error fetching investment opportunities:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchInvestmentOpportunities();
  }, []);

  return { properties, loading, error };
};

// Hook para obtener datos de mapa
export const usePropertyMapData = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMapData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await propertiesApi.getMapData();
        setProperties(response.results);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Error al cargar datos del mapa"
        );
        console.error("Error fetching map data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMapData();
  }, []);

  return { properties, loading, error };
};

// Hook para registrar eventos de seguimiento
export const usePropertyTracking = () => {
  const trackView = useCallback(async (propertyId: string) => {
    try {
      await propertiesApi.trackView(propertyId);
    } catch (err) {
      console.error("Error tracking view:", err);
    }
  }, []);

  const trackFavorite = useCallback(async (propertyId: string) => {
    try {
      await propertiesApi.addFavorite(propertyId);
    } catch (err) {
      console.error("Error tracking favorite:", err);
    }
  }, []);

  return { trackView, trackFavorite };
};
