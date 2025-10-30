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

const API_BASE_URL =
  process.env.NEXT_PUBLIC_PANAMA_API_URL || "https://engine.panamagoldenkey.com/api";

class PropertiesAPI {
  private baseUrl: string;

  constructor(baseUrl: string = API_BASE_URL) {
    this.baseUrl = baseUrl;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;

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
      const response = await fetch(url, config);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.message ||
            errorData.detail ||
            `HTTP error! status: ${response.status}`
        );
      }

      return await response.json();
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error("Network error occurred");
    }
  }

  // Obtener todas las propiedades con paginación y filtros
  async getProperties(url?: string): Promise<PropertyResponse> {
    const endpoint = url || "/properties/";
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
