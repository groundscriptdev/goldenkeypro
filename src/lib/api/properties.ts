/**
 * Properties API - Cliente API para propiedades
 * Panama Golden Key PropTech - API client para arquitectura angelical
 */

import {
  Property,
  PropertyFilters,
  PropertyResponse,
  PropertyPagination,
  PropertyStats,
  PropertyAnalytics,
  PropertyFinancials,
  PropertyLocation,
  PropertyMedia,
  PropertyAgent,
  PropertyLegal,
  PropertyAI,
  PropertyMarketing,
  ContactAgentForm,
  ScheduleTourForm,
  MapBounds,
  PropertyReport,
  PropertyReportResponse,
} from "@/types/properties";

// Función para normalizar URLs de imágenes
const normalizeImageUrl = (imageUrl: string | null): string | null => {
  if (!imageUrl) return null;
  
  // Si ya es una URL completa HTTPS, devolverla tal cual
  if (imageUrl.startsWith('https://')) {
    return imageUrl;
  }
  
  // Si es HTTP, convertir a HTTPS
  if (imageUrl.startsWith('http://')) {
    return imageUrl.replace('http://', 'https://');
  }
  
  // Si es localhost o relativa, reemplazar con la URL de producción
  const mediaUrl = process.env.NEXT_PUBLIC_MEDIA_URL || process.env.NEXT_PUBLIC_SITE_URL || 'https://panamagoldenkey.com';
  
  if (imageUrl.startsWith('http://localhost') || imageUrl.startsWith('https://localhost')) {
    // Extraer la ruta y reemplazar el dominio
    const url = new URL(imageUrl);
    return `${mediaUrl}${url.pathname}`;
  }
  
  if (imageUrl.startsWith('/')) {
    return `${mediaUrl}${imageUrl}`;
  }
  
  return `${mediaUrl}/${imageUrl}`;
};

// Determinar si estamos en desarrollo o producción
// Lógica mejorada para detectar correctamente el entorno
const getApiBaseUrl = () => {
  // En el servidor, verificar las variables de entorno
  if (typeof window === 'undefined') {
    // Si estamos en el servidor y es desarrollo, usar proxy
    if (process.env.NODE_ENV === 'development') {
      return "/api/proxy/properties";
    }
    // En producción en el servidor, usar API directa
    return process.env.NEXT_PUBLIC_PANAMA_API_URL || "https://engine.panamagoldenkey.com/api";
  }
  
  // En el cliente, verificar el hostname
  const isLocalhost = window.location.hostname === 'localhost' ||
                      window.location.hostname === '127.0.0.1' ||
                      window.location.hostname.includes('.local');
  
  if (isLocalhost) {
    return "/api/proxy/properties";
  }
  
  return process.env.NEXT_PUBLIC_PANAMA_API_URL || "https://engine.panamagoldenkey.com/api";
};

const API_BASE_URL = getApiBaseUrl();

class PropertiesAPI {
  private baseUrl: string;

  constructor(baseUrl: string = API_BASE_URL) {
    this.baseUrl = baseUrl;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    // Construir la URL correctamente para el proxy y la API directa
    let url: string;
    const isUsingProxy = this.baseUrl.includes('/api/proxy');
    
    if (isUsingProxy) {
      // En desarrollo, el endpoint ya incluye la ruta completa
      url = `${this.baseUrl}${endpoint.startsWith('/') ? endpoint.substring(1) : endpoint}`;
    } else {
      // En producción, usar la API directa
      url = `${this.baseUrl}${endpoint}`;
    }

    const defaultHeaders = {
      "Content-Type": "application/json",
    };

    const config: RequestInit = {
      ...options,
      headers: {
        ...defaultHeaders,
        ...options.headers,
      },
    };

    try {
      console.log(`Making ${config.method || 'GET'} request to:`, url);
      const response = await fetch(url, config);

      if (!response.ok) {
        // Intentar obtener el error como JSON primero
        let errorData: any = {};
        try {
          const errorText = await response.text();
          if (errorText) {
            try {
              errorData = JSON.parse(errorText);
            } catch {
              // Si no es JSON, usar el texto como mensaje
              errorData = { error: errorText };
            }
          }
        } catch {
          // Si no se puede leer el cuerpo, usar solo el status
        }
        
        const errorMessage = (errorData as any).error ||
          (errorData as any).message ||
          (errorData as any).detail ||
          `Error ${response.status}: ${response.statusText}`;
          
        throw new Error(errorMessage);
      }

      const data = await response.json();
      
      // Normalizar URLs de imágenes en la respuesta
      if (data && typeof data === 'object') {
        // Si es una respuesta de propiedades
        if (data.results && Array.isArray(data.results)) {
          data.results = data.results.map((property: any) => ({
            ...property,
            image_url: normalizeImageUrl(property.image_url),
            // También normalizar URLs en media si existe
            media: property.media ? property.media.map((mediaItem: any) => ({
              ...mediaItem,
              url: normalizeImageUrl(mediaItem.url),
              thumbnail_url: normalizeImageUrl(mediaItem.thumbnail_url),
            })) : undefined,
          }));
        }
        
        // Si es una propiedad individual
        if (data.image_url) {
          data.image_url = normalizeImageUrl(data.image_url);
        }
        
        // Normalizar URLs en media si existe
        if (data.media && Array.isArray(data.media)) {
          data.media = data.media.map((mediaItem: any) => ({
            ...mediaItem,
            url: normalizeImageUrl(mediaItem.url),
            thumbnail_url: normalizeImageUrl(mediaItem.thumbnail_url),
          }));
        }
      }
      
      return data;
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error("Network error occurred");
    }
  }

  // Obtener todas las propiedades con paginación y filtros
  async getProperties(url?: string): Promise<PropertyResponse> {
    const endpoint = url || "";
    return this.request<PropertyResponse>(endpoint);
  }

  // Obtener una propiedad específica
  async getProperty(id: string): Promise<Property> {
    return this.request<Property>(`/properties/${id}/`);
  }

  // Obtener propiedades destacadas
  async getFeaturedProperties(): Promise<PropertyResponse> {
    return this.request<PropertyResponse>("/properties/featured/");
  }

  // Buscar propiedades
  async searchProperties(filters: PropertyFilters): Promise<PropertyResponse> {
    const params = new URLSearchParams();

    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        if (Array.isArray(value)) {
          value.forEach((v) => params.append(key, v.toString()));
        } else {
          params.append(key, value.toString());
        }
      }
    });

    const queryString = params.toString();
    const endpoint = `/properties/search/${queryString ? `?${queryString}` : ""}`;

    return this.request<PropertyResponse>(endpoint);
  }

  // Obtener propiedades similares
  async getSimilarProperties(id: string): Promise<PropertyResponse> {
    return this.request<PropertyResponse>(`/properties/${id}/similar/`);
  }

  // Obtener oportunidades de inversión
  async getInvestmentOpportunities(): Promise<PropertyResponse> {
    return this.request<PropertyResponse>(
      "/properties/investment-opportunities/"
    );
  }

  // Obtener datos para mapa
  async getMapData(): Promise<PropertyResponse> {
    return this.request<PropertyResponse>("/properties/map-data/");
  }

  // Obtener estadísticas de propiedades
  async getStats(): Promise<PropertyStats> {
    return this.request<PropertyStats>("/properties/stats/");
  }

  // Registrar visualización de propiedad
  async trackView(propertyId: string): Promise<void> {
    await this.request<void>(`/properties/${propertyId}/track-view/`, {
      method: "POST",
    });
  }

  // Agregar propiedad a favoritos
  async addFavorite(propertyId: string): Promise<void> {
    await this.request<void>(`/properties/${propertyId}/add-favorite/`, {
      method: "POST",
    });
  }

  // Contactar agente
  async contactAgent(
    propertyId: string,
    formData: ContactAgentForm
  ): Promise<void> {
    await this.request<void>(`/properties/${propertyId}/contact-agent/`, {
      method: "POST",
      body: JSON.stringify(formData),
    });
  }

  // Programar tour
  async scheduleTour(
    propertyId: string,
    formData: ScheduleTourForm
  ): Promise<void> {
    await this.request<void>(`/properties/${propertyId}/schedule-tour/`, {
      method: "POST",
      body: JSON.stringify(formData),
    });
  }

  // Generar reporte de propiedad
  async generateReport(propertyId: string): Promise<PropertyReportResponse> {
    return this.request<PropertyReportResponse>(
      `/properties/${propertyId}/generate-report/`,
      {
        method: "POST",
      }
    );
  }

  // Obtener reporte de propiedad
  async getReport(propertyId: string): Promise<PropertyReport> {
    return this.request<PropertyReport>(`/properties/${propertyId}/report/`);
  }

  // Obtener propiedades por bounds del mapa
  async getPropertiesByBounds(bounds: MapBounds): Promise<PropertyResponse> {
    const params = new URLSearchParams({
      ne_lat: bounds.northEast.lat.toString(),
      ne_lng: bounds.northEast.lng.toString(),
      sw_lat: bounds.southWest.lat.toString(),
      sw_lng: bounds.southWest.lng.toString(),
    });

    return this.request<PropertyResponse>(`/properties/by-bounds/?${params}`);
  }

  // Obtener propiedades por agente
  async getPropertiesByAgent(agentId: string): Promise<PropertyResponse> {
    return this.request<PropertyResponse>(`/properties/by-agent/${agentId}/`);
  }

  // Obtener propiedades por tipo
  async getPropertiesByType(propertyType: string): Promise<PropertyResponse> {
    return this.request<PropertyResponse>(
      `/properties/by-type/${propertyType}/`
    );
  }

  // Obtener propiedades por ubicación
  async getPropertiesByLocation(location: string): Promise<PropertyResponse> {
    return this.request<PropertyResponse>(
      `/properties/by-location/${location}/`
    );
  }

  // Obtener propiedades por rango de precios
  async getPropertiesByPriceRange(
    minPrice: number,
    maxPrice: number
  ): Promise<PropertyResponse> {
    const params = new URLSearchParams({
      min_price: minPrice.toString(),
      max_price: maxPrice.toString(),
    });

    return this.request<PropertyResponse>(
      `/properties/by-price-range/?${params}`
    );
  }

  // Obtener propiedades con descuento
  async getPropertiesWithDiscount(): Promise<PropertyResponse> {
    return this.request<PropertyResponse>("/properties/with-discount/");
  }

  // Obtener propiedades nuevas
  async getNewProperties(): Promise<PropertyResponse> {
    return this.request<PropertyResponse>("/properties/new/");
  }

  // Obtener propiedades en venta
  async getPropertiesForSale(): Promise<PropertyResponse> {
    return this.request<PropertyResponse>("/properties/for-sale/");
  }

  // Obtener propiedades en alquiler
  async getPropertiesForRent(): Promise<PropertyResponse> {
    return this.request<PropertyResponse>("/properties/for-rent/");
  }

  // Métodos para obtener datos específicos de la arquitectura angelical

  // Obtener datos financieros de una propiedad
  async getPropertyFinancials(propertyId: string): Promise<PropertyFinancials> {
    return this.request<PropertyFinancials>(
      `/properties/${propertyId}/financials/`
    );
  }

  // Obtener datos de ubicación de una propiedad
  async getPropertyLocation(propertyId: string): Promise<PropertyLocation> {
    return this.request<PropertyLocation>(
      `/properties/${propertyId}/location/`
    );
  }

  // Obtener medios de una propiedad
  async getPropertyMedia(propertyId: string): Promise<PropertyMedia[]> {
    return this.request<PropertyMedia[]>(`/properties/${propertyId}/media/`);
  }

  // Obtener información del agente de una propiedad
  async getPropertyAgent(propertyId: string): Promise<PropertyAgent> {
    return this.request<PropertyAgent>(`/properties/${propertyId}/agent/`);
  }

  // Obtener información legal de una propiedad
  async getPropertyLegal(propertyId: string): Promise<PropertyLegal> {
    return this.request<PropertyLegal>(`/properties/${propertyId}/legal/`);
  }

  // Obtener análisis de IA de una propiedad
  async getPropertyAI(propertyId: string): Promise<PropertyAI> {
    return this.request<PropertyAI>(`/properties/${propertyId}/ai/`);
  }

  // Obtener datos de marketing de una propiedad
  async getPropertyMarketing(propertyId: string): Promise<PropertyMarketing> {
    return this.request<PropertyMarketing>(
      `/properties/${propertyId}/marketing/`
    );
  }

  // Obtener analíticas de una propiedad
  async getPropertyAnalytics(propertyId: string): Promise<PropertyAnalytics> {
    return this.request<PropertyAnalytics>(
      `/properties/${propertyId}/analytics/`
    );
  }

  // Métodos de administración (requieren autenticación)

  // Crear propiedad
  async createProperty(propertyData: Partial<Property>): Promise<Property> {
    return this.request<Property>("/properties/", {
      method: "POST",
      body: JSON.stringify(propertyData),
    });
  }

  // Actualizar propiedad
  async updateProperty(
    id: string,
    propertyData: Partial<Property>
  ): Promise<Property> {
    return this.request<Property>(`/properties/${id}/`, {
      method: "PATCH",
      body: JSON.stringify(propertyData),
    });
  }

  // Eliminar propiedad
  async deleteProperty(id: string): Promise<void> {
    await this.request<void>(`/properties/${id}/`, {
      method: "DELETE",
    });
  }

  // Subir imagen de propiedad
  async uploadPropertyImage(
    propertyId: string,
    imageFile: File
  ): Promise<PropertyMedia> {
    const formData = new FormData();
    formData.append("image", imageFile);
    formData.append("property", propertyId);

    return this.request<PropertyMedia>(
      `/properties/${propertyId}/upload-image/`,
      {
        method: "POST",
        body: formData,
        headers: {}, // No Content-Type para multipart/form-data
      }
    );
  }

  // Eliminar imagen de propiedad
  async deletePropertyImage(
    propertyId: string,
    imageId: string
  ): Promise<void> {
    await this.request<void>(`/properties/${propertyId}/media/${imageId}/`, {
      method: "DELETE",
    });
  }
}

// Exportar instancia única del API
export const propertiesApi = new PropertiesAPI();

// Exportar clase para casos de uso avanzados
export { PropertiesAPI };

// Exportar funciones de conveniencia
export const getProperties = (url?: string) => propertiesApi.getProperties(url);
export const getProperty = (id: string) => propertiesApi.getProperty(id);
export const getFeaturedProperties = () =>
  propertiesApi.getFeaturedProperties();
export const searchProperties = (filters: PropertyFilters) =>
  propertiesApi.searchProperties(filters);
export const getSimilarProperties = (id: string) =>
  propertiesApi.getSimilarProperties(id);
export const getInvestmentOpportunities = () =>
  propertiesApi.getInvestmentOpportunities();
export const getMapData = () => propertiesApi.getMapData();
export const getStats = () => propertiesApi.getStats();
export const trackView = (propertyId: string) =>
  propertiesApi.trackView(propertyId);
export const addFavorite = (propertyId: string) =>
  propertiesApi.addFavorite(propertyId);
export const contactAgent = (propertyId: string, formData: ContactAgentForm) =>
  propertiesApi.contactAgent(propertyId, formData);
export const scheduleTour = (propertyId: string, formData: ScheduleTourForm) =>
  propertiesApi.scheduleTour(propertyId, formData);
export const generateReport = (propertyId: string) =>
  propertiesApi.generateReport(propertyId);
export const getReport = (propertyId: string) =>
  propertiesApi.getReport(propertyId);
export const getPropertiesByBounds = (bounds: MapBounds) =>
  propertiesApi.getPropertiesByBounds(bounds);
export const getPropertiesByAgent = (agentId: string) =>
  propertiesApi.getPropertiesByAgent(agentId);
export const getPropertiesByType = (propertyType: string) =>
  propertiesApi.getPropertiesByType(propertyType);
export const getPropertiesByLocation = (location: string) =>
  propertiesApi.getPropertiesByLocation(location);
export const getPropertiesByPriceRange = (minPrice: number, maxPrice: number) =>
  propertiesApi.getPropertiesByPriceRange(minPrice, maxPrice);
export const getPropertiesWithDiscount = () =>
  propertiesApi.getPropertiesWithDiscount();
export const getNewProperties = () => propertiesApi.getNewProperties();
export const getPropertiesForSale = () => propertiesApi.getPropertiesForSale();
export const getPropertiesForRent = () => propertiesApi.getPropertiesForRent();

// Métodos específicos de arquitectura angelical
export const getPropertyFinancials = (propertyId: string) =>
  propertiesApi.getPropertyFinancials(propertyId);
export const getPropertyLocation = (propertyId: string) =>
  propertiesApi.getPropertyLocation(propertyId);
export const getPropertyMedia = (propertyId: string) =>
  propertiesApi.getPropertyMedia(propertyId);
export const getPropertyAgent = (propertyId: string) =>
  propertiesApi.getPropertyAgent(propertyId);
export const getPropertyLegal = (propertyId: string) =>
  propertiesApi.getPropertyLegal(propertyId);
export const getPropertyAI = (propertyId: string) =>
  propertiesApi.getPropertyAI(propertyId);
export const getPropertyMarketing = (propertyId: string) =>
  propertiesApi.getPropertyMarketing(propertyId);
export const getPropertyAnalytics = (propertyId: string) =>
  propertiesApi.getPropertyAnalytics(propertyId);
