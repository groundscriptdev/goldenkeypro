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
  
  // En desarrollo, usar proxy para URLs relativas y localhost
  if (process.env.NODE_ENV === 'development') {
    // Si es localhost, usar proxy
    if (imageUrl.includes('localhost')) {
      const url = new URL(imageUrl);
      return `/api/proxy/media${url.pathname}`;
    }
    
    // Si es una ruta relativa, usar proxy
    if (imageUrl.startsWith('/')) {
      return `/api/proxy/media${imageUrl}`;
    }
    
    // Si es una ruta sin / inicial
    return `/api/proxy/media/${imageUrl}`;
  }
  
  // En producción, devolver URLs HTTPS tal cual
  if (imageUrl.startsWith('https://')) {
    return imageUrl;
  }
  
  // Si es una ruta relativa en producción, construir URL completa
  const mediaUrl = process.env.NEXT_PUBLIC_MEDIA_URL || 'https://engine.panamagoldenkey.com';
  return imageUrl.startsWith('/') ? `${mediaUrl}${imageUrl}` : `${mediaUrl}/${imageUrl}`;
};

// Función para normalizar objetos de media
const normalizeMedia = (mediaItem: any): PropertyMedia => {
  return {
    id: mediaItem.id?.toString() || '1',
    property: mediaItem.property?.toString() || '1',
    image_cover: normalizeImageUrl(mediaItem.image_cover || mediaItem.url || mediaItem.image || '') || '',
    gallery: Array.isArray(mediaItem.gallery) ? mediaItem.gallery.map((img: string) => normalizeImageUrl(img) || '') : [],
    video_tour_url: mediaItem.video_tour_url || null,
    virtual_tour_url: mediaItem.virtual_tour_url || null,
    floor_plan_pdf: mediaItem.floor_plan_pdf || null,
    brochure_pdf: mediaItem.brochure_pdf || null,
    drone_shots: Array.isArray(mediaItem.drone_shots) ? mediaItem.drone_shots.map((img: string) => normalizeImageUrl(img) || '') : [],
    night_photos: Array.isArray(mediaItem.night_photos) ? mediaItem.night_photos.map((img: string) => normalizeImageUrl(img) || '') : [],
    interior_photos: Array.isArray(mediaItem.interior_photos) ? mediaItem.interior_photos.map((img: string) => normalizeImageUrl(img) || '') : [],
    exterior_photos: Array.isArray(mediaItem.exterior_photos) ? mediaItem.exterior_photos.map((img: string) => normalizeImageUrl(img) || '') : [],
    neighborhood_video: mediaItem.neighborhood_video || null,
    drone_video: mediaItem.drone_video || null,
    total_images: mediaItem.total_images || 0,
    total_videos: mediaItem.total_videos || 0,
    has_virtual_tour: mediaItem.has_virtual_tour || false,
    has_floor_plan: mediaItem.has_floor_plan || false,
    media_quality_score: mediaItem.media_quality_score || null,
    last_media_update: mediaItem.last_media_update || null,
    created_at: mediaItem.created_at || new Date().toISOString(),
    updated_at: mediaItem.updated_at || new Date().toISOString(),
    // Propiedades calculadas
    all_images: Array.isArray(mediaItem.gallery) ? mediaItem.gallery.map((img: string) => ({
      url: normalizeImageUrl(img) || '',
      type: 'image',
      description: mediaItem.caption || mediaItem.title || ''
    })) : [],
    all_videos: [],
    has_rich_media: !!(mediaItem.video_tour_url || mediaItem.virtual_tour_url),
    media_completeness_score: mediaItem.media_completeness_score || 0,
    is_media_complete: mediaItem.is_media_complete || false,
  };
};

// Determinar si estamos en desarrollo o producción
const getApiBaseUrl = () => {
  // En desarrollo, siempre usar proxy
  if (process.env.NODE_ENV === 'development') {
    console.log('getApiBaseUrl - Using proxy for development');
    return "/api/proxy/properties";
  }
  
  // En producción, usar API directa
  console.log('getApiBaseUrl - Using direct API for production');
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
    
    // Debug logs
    console.log('request method called:');
    console.log('- Base URL:', this.baseUrl);
    console.log('- Endpoint:', endpoint);
    console.log('- Is using proxy:', isUsingProxy);
    console.log('- Window hostname:', typeof window !== 'undefined' ? window.location.hostname : 'server-side');
    
    if (isUsingProxy) {
      // En desarrollo, el endpoint ya incluye la ruta completa
      if (endpoint === '/') {
        url = this.baseUrl;
      } else {
        // Para el proxy, no añadir /properties/ ya que está en la baseUrl
        const cleanEndpoint = endpoint.replace('/properties/', '');
        url = `${this.baseUrl}${cleanEndpoint.startsWith('/') ? cleanEndpoint : '/' + cleanEndpoint}`;
      }
    } else {
      // En producción, usar la API directa - CORRECCIÓN: no duplicar /properties/
      // La baseUrl ya termina en /api, así que solo hay que añadir el endpoint
      if (endpoint.startsWith('/properties/')) {
        // Si el endpoint ya incluye /properties/, solo añadirlo a la baseUrl
        url = `${this.baseUrl}${endpoint}`;
      } else {
        // Si el endpoint no incluye /properties/, añadirlo
        url = `${this.baseUrl}/properties${endpoint}`;
      }
    }

    console.log('- Final URL:', url);

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
          data.results = data.results.map((property: any) => {
            const normalizedProperty = {
              ...property,
              image_url: normalizeImageUrl(property.image_url),
            };

            // También normalizar URLs en media si existe
            if (property.media && typeof property.media === 'object') {
              normalizedProperty.media = {
                ...property.media,
                // Normalizar image_cover si existe
                image_cover: normalizeImageUrl(property.media.image_cover),
                // Normalizar arrays de imágenes si existen y son arrays
                gallery: Array.isArray(property.media.gallery) ?
                  property.media.gallery.map((img: string) => normalizeImageUrl(img)) : [],
                drone_shots: Array.isArray(property.media.drone_shots) ?
                  property.media.drone_shots.map((img: string) => normalizeImageUrl(img)) : [],
                night_photos: Array.isArray(property.media.night_photos) ?
                  property.media.night_photos.map((img: string) => normalizeImageUrl(img)) : [],
                interior_photos: Array.isArray(property.media.interior_photos) ?
                  property.media.interior_photos.map((img: string) => normalizeImageUrl(img)) : [],
                exterior_photos: Array.isArray(property.media.exterior_photos) ?
                  property.media.exterior_photos.map((img: string) => normalizeImageUrl(img)) : [],
                // Normalizar URLs individuales si existen
                video_tour_url: property.media.video_tour_url,
                virtual_tour_url: property.media.virtual_tour_url,
                floor_plan_pdf: property.media.floor_plan_pdf,
                brochure_pdf: property.media.brochure_pdf,
                neighborhood_video: property.media.neighborhood_video,
                drone_video: property.media.drone_video,
              };
            }

            return normalizedProperty;
          });
        }
        
        // Si es una propiedad individual
        if (data.image_url) {
          data.image_url = normalizeImageUrl(data.image_url);
        }
        
        // Normalizar URLs en media si existe
        if (data.media && typeof data.media === 'object') {
          data.media = {
            ...data.media,
            // Normalizar image_cover si existe
            image_cover: normalizeImageUrl(data.media.image_cover),
            // Normalizar arrays de imágenes si existen y son arrays
            gallery: Array.isArray(data.media.gallery) ?
              data.media.gallery.map((img: string) => normalizeImageUrl(img)) : [],
            drone_shots: Array.isArray(data.media.drone_shots) ?
              data.media.drone_shots.map((img: string) => normalizeImageUrl(img)) : [],
            night_photos: Array.isArray(data.media.night_photos) ?
              data.media.night_photos.map((img: string) => normalizeImageUrl(img)) : [],
            interior_photos: Array.isArray(data.media.interior_photos) ?
              data.media.interior_photos.map((img: string) => normalizeImageUrl(img)) : [],
            exterior_photos: Array.isArray(data.media.exterior_photos) ?
              data.media.exterior_photos.map((img: string) => normalizeImageUrl(img)) : [],
            // Normalizar URLs individuales si existen
            video_tour_url: data.media.video_tour_url,
            virtual_tour_url: data.media.virtual_tour_url,
            floor_plan_pdf: data.media.floor_plan_pdf,
            brochure_pdf: data.media.brochure_pdf,
            neighborhood_video: data.media.neighborhood_video,
            drone_video: data.media.drone_video,
          };
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
    const isUsingProxy = this.baseUrl.includes('/api/proxy');
    const endpoint = url || (isUsingProxy ? "" : "/");
    return this.request<PropertyResponse>(endpoint);
  }

  // Obtener una propiedad específica
  async getProperty(id: string): Promise<Property> {
    const isUsingProxy = this.baseUrl.includes('/api/proxy');
    // Si usamos proxy, el endpoint es solo el ID sin el prefijo "properties"
    const endpoint = isUsingProxy ? `/${id}/` : `/properties/${id}/`;
    return this.request<Property>(endpoint);
  }

  // Obtener propiedades destacadas
  async getFeaturedProperties(): Promise<PropertyResponse> {
    const isUsingProxy = this.baseUrl.includes('/api/proxy');
    const endpoint = isUsingProxy ? "/featured/" : "/properties/featured/";
    return this.request<PropertyResponse>(endpoint);
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
    const isUsingProxy = this.baseUrl.includes('/api/proxy');
    const endpoint = isUsingProxy
      ? `/search/${queryString ? `?${queryString}` : ""}`
      : `/properties/search/${queryString ? `?${queryString}` : ""}`;

    return this.request<PropertyResponse>(endpoint);
  }

  // Obtener propiedades similares
  async getSimilarProperties(id: string): Promise<PropertyResponse> {
    const isUsingProxy = this.baseUrl.includes('/api/proxy');
    const endpoint = isUsingProxy ? `/${id}/similar/` : `/properties/${id}/similar/`;
    return this.request<PropertyResponse>(endpoint);
  }

  // Obtener oportunidades de inversión
  async getInvestmentOpportunities(): Promise<PropertyResponse> {
    const isUsingProxy = this.baseUrl.includes('/api/proxy');
    const endpoint = isUsingProxy ? "/investment-opportunities/" : "/properties/investment-opportunities/";
    return this.request<PropertyResponse>(endpoint);
  }

  // Obtener datos para mapa
  async getMapData(): Promise<PropertyResponse> {
    const isUsingProxy = this.baseUrl.includes('/api/proxy');
    const endpoint = isUsingProxy ? "/map-data/" : "/properties/map-data/";
    return this.request<PropertyResponse>(endpoint);
  }

  // Obtener estadísticas de propiedades
  async getStats(): Promise<PropertyStats> {
    const isUsingProxy = this.baseUrl.includes('/api/proxy');
    const endpoint = isUsingProxy ? "/stats/" : "/properties/stats/";
    return this.request<PropertyStats>(endpoint);
  }

  // Registrar visualización de propiedad
  async trackView(propertyId: string): Promise<void> {
    const isUsingProxy = this.baseUrl.includes('/api/proxy');
    const endpoint = isUsingProxy ? `/${propertyId}/track-view/` : `/properties/${propertyId}/track-view/`;
    await this.request<void>(endpoint, {
      method: "POST",
    });
  }

  // Agregar propiedad a favoritos
  async addFavorite(propertyId: string): Promise<void> {
    const isUsingProxy = this.baseUrl.includes('/api/proxy');
    const endpoint = isUsingProxy ? `/${propertyId}/add-favorite/` : `/properties/${propertyId}/add-favorite/`;
    await this.request<void>(endpoint, {
      method: "POST",
    });
  }

  // Contactar agente
  async contactAgent(
    propertyId: string,
    formData: ContactAgentForm
  ): Promise<void> {
    const isUsingProxy = this.baseUrl.includes('/api/proxy');
    const endpoint = isUsingProxy ? `/${propertyId}/contact-agent/` : `/properties/${propertyId}/contact-agent/`;
    await this.request<void>(endpoint, {
      method: "POST",
      body: JSON.stringify(formData),
    });
  }

  // Programar tour
  async scheduleTour(
    propertyId: string,
    formData: ScheduleTourForm
  ): Promise<void> {
    const isUsingProxy = this.baseUrl.includes('/api/proxy');
    const endpoint = isUsingProxy ? `/${propertyId}/schedule-tour/` : `/properties/${propertyId}/schedule-tour/`;
    await this.request<void>(endpoint, {
      method: "POST",
      body: JSON.stringify(formData),
    });
  }

  // Generar reporte de propiedad
  async generateReport(propertyId: string): Promise<PropertyReportResponse> {
    const isUsingProxy = this.baseUrl.includes('/api/proxy');
    const endpoint = isUsingProxy ? `/${propertyId}/generate-report/` : `/properties/${propertyId}/generate-report/`;
    return this.request<PropertyReportResponse>(endpoint, {
      method: "POST",
    });
  }

  // Obtener reporte de propiedad
  async getReport(propertyId: string): Promise<PropertyReport> {
    const isUsingProxy = this.baseUrl.includes('/api/proxy');
    const endpoint = isUsingProxy ? `/${propertyId}/report/` : `/properties/${propertyId}/report/`;
    return this.request<PropertyReport>(endpoint);
  }

  // Obtener propiedades por bounds del mapa
  async getPropertiesByBounds(bounds: MapBounds): Promise<PropertyResponse> {
    const params = new URLSearchParams({
      ne_lat: bounds.northEast.lat.toString(),
      ne_lng: bounds.northEast.lng.toString(),
      sw_lat: bounds.southWest.lat.toString(),
      sw_lng: bounds.southWest.lng.toString(),
    });
    const isUsingProxy = this.baseUrl.includes('/api/proxy');
    const endpoint = isUsingProxy ? `/by-bounds/?${params}` : `/properties/by-bounds/?${params}`;
    return this.request<PropertyResponse>(endpoint);
  }

  // Obtener propiedades por agente
  async getPropertiesByAgent(agentId: string): Promise<PropertyResponse> {
    const isUsingProxy = this.baseUrl.includes('/api/proxy');
    const endpoint = isUsingProxy ? `/by-agent/${agentId}/` : `/properties/by-agent/${agentId}/`;
    return this.request<PropertyResponse>(endpoint);
  }

  // Obtener propiedades por tipo
  async getPropertiesByType(propertyType: string): Promise<PropertyResponse> {
    const isUsingProxy = this.baseUrl.includes('/api/proxy');
    const endpoint = isUsingProxy ? `/by-type/${propertyType}/` : `/properties/by-type/${propertyType}/`;
    return this.request<PropertyResponse>(endpoint);
  }

  // Obtener propiedades por ubicación
  async getPropertiesByLocation(location: string): Promise<PropertyResponse> {
    const isUsingProxy = this.baseUrl.includes('/api/proxy');
    const endpoint = isUsingProxy ? `/by-location/${location}/` : `/properties/by-location/${location}/`;
    return this.request<PropertyResponse>(endpoint);
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
    const isUsingProxy = this.baseUrl.includes('/api/proxy');
    const endpoint = isUsingProxy ? `/by-price-range/?${params}` : `/properties/by-price-range/?${params}`;
    return this.request<PropertyResponse>(endpoint);
  }

  // Obtener propiedades con descuento
  async getPropertiesWithDiscount(): Promise<PropertyResponse> {
    const isUsingProxy = this.baseUrl.includes('/api/proxy');
    const endpoint = isUsingProxy ? "/with-discount/" : "/properties/with-discount/";
    return this.request<PropertyResponse>(endpoint);
  }

  // Obtener propiedades nuevas
  async getNewProperties(): Promise<PropertyResponse> {
    const isUsingProxy = this.baseUrl.includes('/api/proxy');
    const endpoint = isUsingProxy ? "/new/" : "/properties/new/";
    return this.request<PropertyResponse>(endpoint);
  }

  // Obtener propiedades en venta
  async getPropertiesForSale(): Promise<PropertyResponse> {
    const isUsingProxy = this.baseUrl.includes('/api/proxy');
    const endpoint = isUsingProxy ? "/for-sale/" : "/properties/for-sale/";
    return this.request<PropertyResponse>(endpoint);
  }

  // Obtener propiedades en alquiler
  async getPropertiesForRent(): Promise<PropertyResponse> {
    const isUsingProxy = this.baseUrl.includes('/api/proxy');
    const endpoint = isUsingProxy ? "/for-rent/" : "/properties/for-rent/";
    return this.request<PropertyResponse>(endpoint);
  }

  // Métodos para obtener datos específicos de la arquitectura angelical

  // Obtener datos financieros de una propiedad
  async getPropertyFinancials(propertyId: string): Promise<PropertyFinancials> {
    const isUsingProxy = this.baseUrl.includes('/api/proxy');
    const endpoint = isUsingProxy ? `/${propertyId}/financials/` : `/properties/${propertyId}/financials/`;
    return this.request<PropertyFinancials>(endpoint);
  }

  // Obtener datos de ubicación de una propiedad
  async getPropertyLocation(propertyId: string): Promise<PropertyLocation> {
    const isUsingProxy = this.baseUrl.includes('/api/proxy');
    const endpoint = isUsingProxy ? `/${propertyId}/location/` : `/properties/${propertyId}/location/`;
    return this.request<PropertyLocation>(endpoint);
  }

  // Obtener medios de una propiedad
  async getPropertyMedia(propertyId: string): Promise<PropertyMedia[]> {
    const isUsingProxy = this.baseUrl.includes('/api/proxy');
    const endpoint = isUsingProxy ? `/${propertyId}/media/` : `/properties/${propertyId}/media/`;
    return this.request<PropertyMedia[]>(endpoint);
  }

  // Obtener información del agente de una propiedad
  async getPropertyAgent(propertyId: string): Promise<PropertyAgent> {
    const isUsingProxy = this.baseUrl.includes('/api/proxy');
    const endpoint = isUsingProxy ? `/${propertyId}/agent/` : `/properties/${propertyId}/agent/`;
    return this.request<PropertyAgent>(endpoint);
  }

  // Obtener información legal de una propiedad
  async getPropertyLegal(propertyId: string): Promise<PropertyLegal> {
    const isUsingProxy = this.baseUrl.includes('/api/proxy');
    const endpoint = isUsingProxy ? `/${propertyId}/legal/` : `/properties/${propertyId}/legal/`;
    return this.request<PropertyLegal>(endpoint);
  }

  // Obtener análisis de IA de una propiedad
  async getPropertyAI(propertyId: string): Promise<PropertyAI> {
    const isUsingProxy = this.baseUrl.includes('/api/proxy');
    const endpoint = isUsingProxy ? `/${propertyId}/ai/` : `/properties/${propertyId}/ai/`;
    return this.request<PropertyAI>(endpoint);
  }

  // Obtener datos de marketing de una propiedad
  async getPropertyMarketing(propertyId: string): Promise<PropertyMarketing> {
    const isUsingProxy = this.baseUrl.includes('/api/proxy');
    const endpoint = isUsingProxy ? `/${propertyId}/marketing/` : `/properties/${propertyId}/marketing/`;
    return this.request<PropertyMarketing>(endpoint);
  }

  // Obtener analíticas de una propiedad
  async getPropertyAnalytics(propertyId: string): Promise<PropertyAnalytics> {
    const isUsingProxy = this.baseUrl.includes('/api/proxy');
    const endpoint = isUsingProxy ? `/${propertyId}/analytics/` : `/properties/${propertyId}/analytics/`;
    return this.request<PropertyAnalytics>(endpoint);
  }

  // Métodos de administración (requieren autenticación)

  // Crear propiedad
  async createProperty(propertyData: Partial<Property>): Promise<Property> {
    const isUsingProxy = this.baseUrl.includes('/api/proxy');
    const endpoint = isUsingProxy ? "/" : "/properties/";
    return this.request<Property>(endpoint, {
      method: "POST",
      body: JSON.stringify(propertyData),
    });
  }

  // Actualizar propiedad
  async updateProperty(
    id: string,
    propertyData: Partial<Property>
  ): Promise<Property> {
    const isUsingProxy = this.baseUrl.includes('/api/proxy');
    const endpoint = isUsingProxy ? `/${id}/` : `/properties/${id}/`;
    return this.request<Property>(endpoint, {
      method: "PATCH",
      body: JSON.stringify(propertyData),
    });
  }

  // Eliminar propiedad
  async deleteProperty(id: string): Promise<void> {
    const isUsingProxy = this.baseUrl.includes('/api/proxy');
    const endpoint = isUsingProxy ? `/${id}/` : `/properties/${id}/`;
    await this.request<void>(endpoint, {
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
    const isUsingProxy = this.baseUrl.includes('/api/proxy');
    const endpoint = isUsingProxy ? `/${propertyId}/upload-image/` : `/properties/${propertyId}/upload-image/`;

    return this.request<PropertyMedia>(endpoint, {
      method: "POST",
      body: formData,
      headers: {}, // No Content-Type para multipart/form-data
    });
  }

  // Eliminar imagen de propiedad
  async deletePropertyImage(
    propertyId: string,
    imageId: string
  ): Promise<void> {
    const isUsingProxy = this.baseUrl.includes('/api/proxy');
    const endpoint = isUsingProxy ? `/${propertyId}/media/${imageId}/` : `/properties/${propertyId}/media/${imageId}/`;
    await this.request<void>(endpoint, {
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
