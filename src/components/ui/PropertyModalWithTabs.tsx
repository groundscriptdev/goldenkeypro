"use client";

import { useState, useEffect } from "react";
import { Property } from "@/types/properties";
import { propertiesApi } from "@/lib/api/properties";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Home, 
  DollarSign, 
  MapPin, 
  Camera, 
  User, 
  FileText, 
  BarChart3, 
  Brain, 
  Target,
  X,
  Heart,
  Share2,
  Loader2
} from "lucide-react";

interface PropertyModalWithTabsProps {
  propertyId: string;
  isOpen: boolean;
  onClose: () => void;
  locale: string;
}

type TabType = "overview" | "financials" | "location" | "media" | "agent" | "legal" | "analytics" | "ai" | "marketing";

export default function PropertyModalWithTabs({
  propertyId,
  isOpen,
  onClose,
  locale,
}: PropertyModalWithTabsProps) {
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<TabType>("overview");
  const [isSaved, setIsSaved] = useState(false);

  // Tabs configuration
  const tabs = [
    { id: "overview", label: "Resumen", icon: <Home className="w-4 h-4" /> },
    { id: "financials", label: "Finanzas", icon: <DollarSign className="w-4 h-4" /> },
    { id: "location", label: "Ubicación", icon: <MapPin className="w-4 h-4" /> },
    { id: "media", label: "Multimedia", icon: <Camera className="w-4 h-4" /> },
    { id: "agent", label: "Agente", icon: <User className="w-4 h-4" /> },
    { id: "legal", label: "Legal", icon: <FileText className="w-4 h-4" /> },
    { id: "analytics", label: "Análisis", icon: <BarChart3 className="w-4 h-4" /> },
    { id: "ai", label: "IA", icon: <Brain className="w-4 h-4" /> },
    { id: "marketing", label: "Marketing", icon: <Target className="w-4 h-4" /> },
  ];

  // Fetch property data when modal opens
  useEffect(() => {
    if (isOpen && propertyId) {
      fetchPropertyData();
    }
  }, [isOpen, propertyId]);

  const fetchPropertyData = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Validar que el propertyId no sea nulo o vacío
      if (!propertyId || propertyId.trim() === '') {
        throw new Error("ID de propiedad no válido");
      }

      // Llamada al endpoint que devuelve todos los datos anidados
      const propertyData = await propertiesApi.getProperty(propertyId);
      
      // Validar que los datos recibidos sean válidos
      if (!propertyData) {
        throw new Error("No se recibieron datos de la propiedad");
      }

      // Validar estructura mínima de la propiedad
      if (!propertyData.id || !propertyData.title) {
        throw new Error("Estructura de datos de propiedad inválida");
      }

      setProperty(propertyData);
    } catch (err) {
      console.error('Error fetching property data:', err);
      const errorMessage = err instanceof Error ? err.message : "Error al cargar la propiedad";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveProperty = () => {
    setIsSaved(!isSaved);
    // Lógica para guardar propiedad
  };

  const handleShareProperty = () => {
    try {
      if (navigator.share && property) {
        const shareData = {
          title: property.title || "Propiedad",
          text: `Mira esta propiedad: ${property.location?.address_full || 'Ubicación no disponible'}`,
          url: window.location.href,
        };
        
        navigator.share(shareData).catch((error) => {
          console.error('Error sharing property:', error);
          // Fallback: copiar al portapapeles
          if (navigator.clipboard) {
            navigator.clipboard.writeText(window.location.href);
          }
        });
      } else {
        // Fallback: copiar al portapapeles si no hay Web Share API
        if (navigator.clipboard && window.location.href) {
          navigator.clipboard.writeText(window.location.href);
        }
      }
    } catch (error) {
      console.error('Error in share functionality:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-7xl w-full max-h-[95vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-white border-b border-gray-200">
          <div className="flex items-center gap-4">
            {property && (
              <>
                <div>
                  <h2 className="text-2xl font-bold text-jade">
                    {property.financials?.price_formatted ||
                     new Intl.NumberFormat("en-US", {
                       style: "currency",
                       currency: property.financials?.currency || "USD",
                       minimumFractionDigits: 0,
                     }).format(property.financials?.price || property.price || 0)}
                  </h2>
                  <div className="flex items-center text-gray-600 mt-1">
                    <MapPin className="w-4 h-4 mr-1 text-jade" />
                    <span className="text-jade-light">
                      {property.location?.address_full ||
                       `${property.location?.neighborhood || ''}, ${property.location?.province || ''}`.trim() ||
                       'Ubicación no disponible'}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-jade text-white border-0">
                    {property.status === "for_sale" || property.status === "VENTA" ? "En Venta" :
                     property.status === "to_rent" || property.status === "RENTA" ? "Alquiler" :
                     property.status || 'Estado no especificado'}
                  </Badge>
                </div>
              </>
            )}
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleSaveProperty}
              className="text-gray-600 hover:text-gray-900"
            >
              <Heart className={`w-5 h-5 ${isSaved ? "fill-current text-red-500" : ""}`} />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleShareProperty}
              className="text-gray-600 hover:text-gray-900"
            >
              <Share2 className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-gray-600 hover:text-gray-900"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <Loader2 className="w-8 h-8 animate-spin text-jade mx-auto mb-4" />
              <p className="text-gray-600">Cargando información de la propiedad...</p>
            </div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <p className="text-red-600 mb-4">{error}</p>
              <Button onClick={fetchPropertyData} className="bg-jade text-white">
                Reintentar
              </Button>
            </div>
          </div>
        )}

        {/* Content */}
        {property && !loading && !error && (
          <>
            {/* Tabs Navigation */}
            <div className="border-b border-gray-200 bg-gray-50">
              <div className="flex overflow-x-auto">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as TabType)}
                    className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors whitespace-nowrap ${
                      activeTab === tab.id
                        ? "border-jade text-jade bg-white"
                        : "border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    }`}
                  >
                    {tab.icon}
                    <span className="text-sm font-medium">{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="flex-1 overflow-y-auto">
              {activeTab === "overview" && <OverviewTab property={property} />}
              {activeTab === "financials" && <FinancialsTab financials={property.financials} />}
              {activeTab === "location" && <LocationTab location={property.location} />}
              {activeTab === "media" && <MediaTab media={property.media} />}
              {activeTab === "agent" && <AgentTab agent={property.agent} />}
              {activeTab === "legal" && <LegalTab legal={property.legal} />}
              {activeTab === "analytics" && <AnalyticsTab analytics={property.analytics} />}
              {activeTab === "ai" && <AITab ai={property.ai} />}
              {activeTab === "marketing" && <MarketingTab marketing={property.marketing} />}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// Componentes para cada tab
function OverviewTab({ property }: { property: Property }) {
  return (
    <div className="p-6 space-y-6">
      {/* Información básica */}
      <div className="grid grid-cols-4 gap-4 p-4 bg-gray-50 rounded-lg">
        <div className="text-center">
          <div className="text-2xl font-bold text-jade">{property.bedrooms || 0}</div>
          <div className="text-sm text-gray-600">Habitaciones</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-jade">{property.bathrooms || 0}</div>
          <div className="text-sm text-gray-600">Baños</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-jade">{property.area_built || 0}</div>
          <div className="text-sm text-gray-600">m²</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-jade">{property.parking_spaces || 0}</div>
          <div className="text-sm text-gray-600">Estacionamientos</div>
        </div>
      </div>

      {/* Información adicional */}
      <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Tipo</h4>
          <p className="text-gray-700">{property.type || 'No especificado'}</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Estado</h4>
          <p className="text-gray-700">
            {property.status === 'VENTA' ? 'En Venta' :
             property.status === 'RENTA' ? 'En Alquiler' :
             property.status || 'No especificado'}
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Código</h4>
          <p className="text-gray-700">{property.property_code || 'N/A'}</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">Año de construcción</h4>
          <p className="text-gray-700">{property.construction_year || 'No especificado'}</p>
        </div>
      </div>

      {/* Descripción */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">Descripción</h3>
        <p className="text-gray-700 leading-relaxed">
          {property.description || "Sin descripción disponible"}
        </p>
      </div>

      {/* Características */}
      {property.features && Array.isArray(property.features) && property.features.length > 0 && (
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Características</h3>
          <div className="grid grid-cols-2 gap-2">
            {property.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-jade rounded-full"></div>
                <span className="text-gray-700">{feature || 'Característica sin nombre'}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tags */}
      {property.tags && Array.isArray(property.tags) && property.tags.length > 0 && (
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Etiquetas</h3>
          <div className="flex flex-wrap gap-2">
            {property.tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="border-jade text-jade">
                {tag || 'Etiqueta sin nombre'}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function FinancialsTab({ financials }: { financials?: Property['financials'] }) {
  if (!financials) {
    return (
      <div className="p-6 text-center">
        <p className="text-gray-500">Información financiera no disponible</p>
      </div>
    );
  }

  // Formatear precio
  const formatPrice = (price: number, currency: string = 'USD') => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 0,
    }).format(price);
  };

  // Calcular rango de ROI con validación mejorada
  const roiRange = financials.roi_projected_min !== undefined && financials.roi_projected_min !== null &&
                   financials.roi_projected_max !== undefined && financials.roi_projected_max !== null
    ? `${financials.roi_projected_min}% - ${financials.roi_projected_max}%`
    : financials.roi_projected_min !== undefined && financials.roi_projected_min !== null
    ? `${financials.roi_projected_min}%`
    : financials.roi_projected_max !== undefined && financials.roi_projected_max !== null
    ? `${financials.roi_projected_max}%`
    : 'No disponible';

  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">Precio</h3>
          <div className="text-2xl font-bold text-jade">
            {formatPrice(financials.price, financials.currency || 'USD')}
          </div>
        </div>
        
        {financials.previous_price && financials.previous_price > 0 && (
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Descuento</h3>
            <div className="text-2xl font-bold text-red-600">
              {financials.discount_percent ? `${financials.discount_percent}%` : 'N/A'}
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">ROI Proyectado</h3>
          <div className="text-xl font-bold text-jade">
            {roiRange}
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">Renta Bruta</h3>
          <div className="text-xl font-bold text-jade">
            {financials.rental_yield_gross ? `${financials.rental_yield_gross}%` : 'No disponible'}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {financials.hoa_fee && financials.hoa_fee > 0 && (
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Cuota de Administración</h3>
            <div className="text-xl font-bold text-jade">
              ${financials.hoa_fee}/mes
            </div>
          </div>
        )}
        
        {financials.annual_tax && financials.annual_tax > 0 && (
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Impuesto Anual</h3>
            <div className="text-xl font-bold text-jade">
              ${financials.annual_tax}/año
            </div>
          </div>
        )}
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="font-semibold text-gray-900 mb-2">Financiamiento</h3>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${financials.mortgage_available ? 'bg-green-500' : 'bg-red-500'}`}></div>
            <span className="text-gray-700">
              {financials.mortgage_available ? 'Hipoteca disponible' : 'Hipoteca no disponible'}
            </span>
          </div>
          {financials.financing_terms && (
            <p className="text-gray-600 text-sm">{financials.financing_terms}</p>
          )}
        </div>
      </div>

      {financials.tokenized_investment_available && (
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">Inversión Tokenizada</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="text-gray-700">Disponible</span>
            </div>
            {financials.token_price_usd && (
              <p className="text-gray-600">Precio por token: ${financials.token_price_usd}</p>
            )}
            {financials.min_investment_usd && (
              <p className="text-gray-600">Inversión mínima: ${financials.min_investment_usd}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function LocationTab({ location }: { location?: Property['location'] }) {
  if (!location) {
    return (
      <div className="p-6 text-center">
        <p className="text-gray-500">Información de ubicación no disponible</p>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="font-semibold text-gray-900 mb-2">Dirección</h3>
        <p className="text-gray-700">{location.address_full || 'No disponible'}</p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">Barrio</h3>
          <p className="text-gray-700">{location.neighborhood || 'No disponible'}</p>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">Provincia</h3>
          <p className="text-gray-700">{location.province || 'No disponible'}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">Distrito</h3>
          <p className="text-gray-700">{location.district || 'No disponible'}</p>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">País</h3>
          <p className="text-gray-700">{location.country || 'No disponible'}</p>
        </div>
      </div>

      {location.walk_score && (
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">Walk Score</h3>
          <div className="text-xl font-bold text-jade">
            {location.walk_score}/100
          </div>
        </div>
      )}

      {location.transit_score && (
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">Transit Score</h3>
          <div className="text-xl font-bold text-jade">
            {location.transit_score}/100
          </div>
        </div>
      )}

      {/* Coordenadas */}
      {location.latitude && location.longitude && (
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">Coordenadas</h3>
          <p className="text-gray-700">
            Lat: {location.latitude}, Lng: {location.longitude}
          </p>
        </div>
      )}

      {/* Mapa placeholder */}
      <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
        <div className="text-center">
          <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
          <p className="text-gray-600">Mapa interactivo de la ubicación</p>
          {location.latitude && location.longitude && (
            <p className="text-gray-500 text-sm mt-2">
              Coordenadas: {location.latitude}, {location.longitude}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function MediaTab({ media }: { media?: Property['media'] }) {
  if (!media) {
    return (
      <div className="p-6 text-center">
        <p className="text-gray-500">Contenido multimedia no disponible</p>
      </div>
    );
  }

  // Imagen principal
  const coverImage = media.image_cover;

  return (
    <div className="p-6 space-y-6">
      {/* Imagen principal */}
      {coverImage && (
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Imagen Principal</h3>
          <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={coverImage}
              alt="Imagen principal"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}

      {/* Galería de imágenes */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">Galería de Imágenes</h3>
        <div className="grid grid-cols-3 gap-4">
          {media.gallery && Array.isArray(media.gallery) && media.gallery.length > 0 ? (
            media.gallery.map((image, index) => (
              <div key={index} className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={image || '/placeholder-image.jpg'}
                  alt={`Imagen ${index + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = '/placeholder-image.jpg';
                  }}
                />
              </div>
            ))
          ) : (
            <div className="col-span-3 text-center py-8">
              <Camera className="w-12 h-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-600">No hay imágenes disponibles en la galería</p>
            </div>
          )}
        </div>
      </div>

      {/* Video tour */}
      {media.video_tour_url && (
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Video Tour</h3>
          <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
            <video
              src={media.video_tour_url}
              controls
              className="w-full h-full"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        </div>
      )}

      {/* Tour virtual */}
      {media.virtual_tour_url && (
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Tour Virtual 360°</h3>
          <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
            <iframe
              src={media.virtual_tour_url}
              className="w-full h-full"
              allowFullScreen
              title="Tour virtual 360°"
            />
          </div>
        </div>
      )}

      {/* Estadísticas de multimedia */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-jade">{media.total_images || 0}</div>
          <div className="text-sm text-gray-600">Imágenes totales</div>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-jade">{media.total_videos || 0}</div>
          <div className="text-sm text-gray-600">Videos totales</div>
        </div>
      </div>

      {/* Documentos adicionales */}
      <div className="grid grid-cols-2 gap-4">
        {media.floor_plan_pdf && (
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Plano del Piso</h3>
            <Button variant="outline" size="sm" className="w-full">
              Ver Plano
            </Button>
          </div>
        )}
        
        {media.brochure_pdf && (
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Folleto</h3>
            <Button variant="outline" size="sm" className="w-full">
              Ver Folleto
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

function AgentTab({ agent }: { agent?: Property['agent'] }) {
  if (!agent) {
    return (
      <div className="p-6 text-center">
        <div className="flex flex-col items-center gap-4">
          <User className="w-16 h-16 text-gray-400" />
          <p className="text-gray-500">Información del agente no disponible</p>
          <p className="text-gray-400 text-sm">Esta propiedad aún no tiene un agente asignado</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-6">
        {agent.agent_photo ? (
          <img
            src={agent.agent_photo}
            alt={agent.agent_name || 'Agente'}
            className="w-24 h-24 rounded-full object-cover"
            onError={(e) => {
              e.currentTarget.src = '/placeholder-avatar.jpg';
            }}
          />
        ) : (
          <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
            <User className="w-12 h-12 text-gray-400" />
          </div>
        )}
        <div>
          <h3 className="text-2xl font-bold text-gray-900">{agent.agent_name || 'Nombre no disponible'}</h3>
          <p className="text-gray-600">{agent.agency_name || 'Agencia no especificada'}</p>
          <div className="flex items-center gap-2 mt-2">
            <div className="text-yellow-500">★</div>
            <span className="text-gray-700">
              {agent.client_satisfaction_score ? `${agent.client_satisfaction_score}/5.0` : 'Sin calificación'}
              {agent.properties_sold ? ` (${agent.properties_sold} ventas)` : ''}
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">Contacto</h3>
          <p className="text-gray-700">{agent.agent_phone || 'Teléfono no disponible'}</p>
          <p className="text-gray-700">{agent.agent_email || 'Email no disponible'}</p>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">Experiencia</h3>
          <p className="text-gray-700">{agent.years_experience ? `${agent.years_experience} años` : 'Experiencia no especificada'}</p>
          <p className="text-gray-700">{agent.properties_sold ? `${agent.properties_sold} propiedades vendidas` : 'Sin ventas registradas'}</p>
        </div>
      </div>

      {agent.specialties && Array.isArray(agent.specialties) && agent.specialties.length > 0 && (
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">Especialidades</h3>
          <div className="flex flex-wrap gap-2">
            {agent.specialties.map((specialty, index) => (
              <Badge key={index} variant="outline" className="border-jade text-jade">
                {specialty || 'Especialidad no especificada'}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {agent.languages_spoken && Array.isArray(agent.languages_spoken) && agent.languages_spoken.length > 0 && (
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">Idiomas</h3>
          <div className="flex flex-wrap gap-2">
            {agent.languages_spoken.map((language, index) => (
              <Badge key={index} variant="outline" className="border-jade text-jade">
                {language || 'Idioma no especificado'}
              </Badge>
            ))}
          </div>
        </div>
      )}

      <div className="flex gap-4">
        <Button className="flex-1 bg-jade text-white hover:bg-jade/90">
          Contactar Agente
        </Button>
        {agent.agent_phone && (
          <Button variant="outline" className="border-jade text-jade hover:bg-jade hover:text-white">
            Llamar ahora
          </Button>
        )}
      </div>
    </div>
  );
}

function LegalTab({ legal }: { legal?: Property['legal'] }) {
  if (!legal) {
    return (
      <div className="p-6 text-center">
        <div className="flex flex-col items-center gap-4">
          <FileText className="w-16 h-16 text-gray-400" />
          <p className="text-gray-500">Información legal no disponible</p>
          <p className="text-gray-400 text-sm">La información legal de esta propiedad aún no ha sido verificada</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">Estado del Título</h3>
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${legal.has_clear_title ? 'bg-green-500' : 'bg-red-500'}`}></div>
            <span className="text-gray-700">
              {legal.has_clear_title ? 'Título Limpio' : 'Problemas Legales'}
            </span>
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">Due Diligence</h3>
          <span className="text-gray-700">{legal.due_diligence_status || 'No especificado'}</span>
        </div>
      </div>

      {legal.title_deed_number && (
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">Información del Título</h3>
          <p className="text-gray-700">Número: {legal.title_deed_number}</p>
          {legal.title_deed_date && <p className="text-gray-700">Fecha: {legal.title_deed_date}</p>}
        </div>
      )}

      {legal.registry_number && (
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">Información de Registro</h3>
          <p className="text-gray-700">Número de registro: {legal.registry_number}</p>
          {legal.registry_book && <p className="text-gray-700">Libro: {legal.registry_book}</p>}
          {legal.registry_page && <p className="text-gray-700">Página: {legal.registry_page}</p>}
        </div>
      )}

      {legal.tax_id && (
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">Información Fiscal</h3>
          <p className="text-gray-700">ID de impuesto predial: {legal.tax_id}</p>
          <p className="text-gray-700">Estado: {legal.property_tax_status || 'No especificado'}</p>
          {legal.property_tax_arrears && legal.property_tax_arrears > 0 && (
            <p className="text-red-600">Atrasos: ${legal.property_tax_arrears}</p>
          )}
        </div>
      )}

      {legal.documents && Array.isArray(legal.documents) && legal.documents.length > 0 && (
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Documentos Legales</h3>
          <div className="space-y-2">
            {legal.documents.map((doc, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{doc.type || 'Documento sin tipo'}</p>
                  {doc.description && <p className="text-sm text-gray-600">{doc.description}</p>}
                </div>
                <Button variant="outline" size="sm">
                  Ver Documento
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}

      {legal.mortgage_status && (
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">Información de Hipoteca</h3>
          <p className="text-gray-700">Estado: {legal.mortgage_status}</p>
          {legal.mortgage_amount && <p className="text-gray-700">Monto: ${legal.mortgage_amount}</p>}
          {legal.mortgage_lender && <p className="text-gray-700">Prestamista: {legal.mortgage_lender}</p>}
        </div>
      )}
    </div>
  );
}

function AnalyticsTab({ analytics }: { analytics?: Property['analytics'] }) {
  if (!analytics) {
    return (
      <div className="p-6 text-center">
        <div className="flex flex-col items-center gap-4">
          <BarChart3 className="w-16 h-16 text-gray-400" />
          <p className="text-gray-500">Análisis no disponibles</p>
          <p className="text-gray-400 text-sm">Los datos de análisis de esta propiedad aún no están disponibles</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-gray-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-jade">{analytics.views_count || 0}</div>
          <div className="text-sm text-gray-600">Vistas Totales</div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-jade">{analytics.leads_count || 0}</div>
          <div className="text-sm text-gray-600">Contactos</div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-jade">{analytics.favorite_count || 0}</div>
          <div className="text-sm text-gray-600">Favoritos</div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-jade">{analytics.share_count || 0}</div>
          <div className="text-sm text-gray-600">Compartidos</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">Tasa de Conversión</h3>
          <div className="text-xl font-bold text-jade">
            {analytics.conversion_rate ? `${analytics.conversion_rate}%` : 'N/A'}
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">Índice de Demanda</h3>
          <div className="text-xl font-bold text-jade">
            {analytics.demand_index || 'N/A'}
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="font-semibold text-gray-900 mb-2">Rendimiento</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600">Calidad del Anuncio:</span>
            <span className="font-medium text-gray-900">{analytics.quality_score || 0}/100</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Completitud:</span>
            <span className="font-medium text-gray-900">{analytics.completeness_score || 0}/100</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Atractivo:</span>
            <span className="font-medium text-gray-900">{analytics.appeal_score || 0}/100</span>
          </div>
        </div>
      </div>

      {/* Métricas adicionales */}
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">Vistas Únicas</h3>
          <div className="text-xl font-bold text-jade">
            {analytics.unique_views_count || 0}
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">Tasa de Lead/Vista</h3>
          <div className="text-xl font-bold text-jade">
            {analytics.lead_to_view_ratio ? `${analytics.lead_to_view_ratio}%` : 'N/A'}
          </div>
        </div>
      </div>

      {/* Comparación con mercado */}
      {analytics.price_vs_market_avg !== undefined && (
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">Comparación con Mercado</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Precio vs Promedio:</span>
              <span className={`font-medium ${analytics.price_vs_market_avg > 0 ? 'text-red-600' : 'text-green-600'}`}>
                {analytics.price_vs_market_avg > 0 ? '+' : ''}{analytics.price_vs_market_avg}%
              </span>
            </div>
            {analytics.views_vs_similar_avg !== undefined && analytics.views_vs_similar_avg !== null && (
              <div className="flex justify-between">
                <span className="text-gray-600">Vistas vs Similares:</span>
                <span className={`font-medium ${analytics.views_vs_similar_avg > 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {analytics.views_vs_similar_avg > 0 ? '+' : ''}{analytics.views_vs_similar_avg}%
                </span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function AITab({ ai }: { ai?: Property['ai'] }) {
  if (!ai) {
    return (
      <div className="p-6 text-center">
        <div className="flex flex-col items-center gap-4">
          <Brain className="w-16 h-16 text-gray-400" />
          <p className="text-gray-500">Análisis de IA no disponible</p>
          <p className="text-gray-400 text-sm">El análisis de inteligencia artificial aún no se ha generado para esta propiedad</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-jade">{ai.ai_investment_score || 0}/100</div>
          <div className="text-sm text-gray-600">Puntuación de Inversión</div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-jade">{ai.ai_rental_score || 0}/100</div>
          <div className="text-sm text-gray-600">Puntuación de Alquiler</div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-jade">{ai.ai_appreciation_score || 0}/100</div>
          <div className="text-sm text-gray-600">Potencial de Apreciación</div>
        </div>
      </div>

      {ai.ai_summary_short && (
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">Resumen de IA</h3>
          <p className="text-gray-700">{ai.ai_summary_short}</p>
        </div>
      )}

      {ai.ai_highlights && Array.isArray(ai.ai_highlights) && ai.ai_highlights.length > 0 && (
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Puntos Destacados</h3>
          <div className="space-y-2">
            {ai.ai_highlights.map((highlight, index) => (
              <div key={index} className="flex items-start gap-2">
                <div className="w-2 h-2 bg-jade rounded-full mt-2"></div>
                <span className="text-gray-700">{highlight || 'Punto destacado sin descripción'}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {ai.ai_recommendation_reason && (
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">Recomendación de IA</h3>
          <p className="text-gray-700">{ai.ai_recommendation_reason}</p>
        </div>
      )}

      {ai.market_trend_prediction !== undefined && ai.market_trend_prediction !== null && (
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">Predicción de Mercado</h3>
          <div className="text-xl font-bold text-jade">
            {ai.market_trend_prediction > 0 ? '+' : ''}{ai.market_trend_prediction}%
          </div>
        </div>
      )}

      {/* Información adicional de IA */}
      <div className="grid grid-cols-2 gap-6">
        {ai.price_appreciation_1yr !== undefined && ai.price_appreciation_1yr !== null && (
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Apreciación 1 año</h3>
            <div className="text-xl font-bold text-jade">
              {ai.price_appreciation_1yr > 0 ? '+' : ''}{ai.price_appreciation_1yr}%
            </div>
          </div>
        )}
        
        {ai.rental_demand_forecast !== undefined && ai.rental_demand_forecast !== null && (
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Demanda de Alquiler</h3>
            <div className="text-xl font-bold text-jade">
              {ai.rental_demand_forecast > 0 ? '+' : ''}{ai.rental_demand_forecast}%
            </div>
          </div>
        )}
      </div>

      {ai.investment_risk_level && (
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">Nivel de Riesgo</h3>
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${
              ai.investment_risk_level === 'Bajo' ? 'bg-green-500' :
              ai.investment_risk_level === 'Medio' ? 'bg-yellow-500' : 'bg-red-500'
            }`}></div>
            <span className="text-gray-700">{ai.investment_risk_level}</span>
          </div>
        </div>
      )}

      {ai.ai_target_audience && Array.isArray(ai.ai_target_audience) && ai.ai_target_audience.length > 0 && (
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">Audiencia Objetivo</h3>
          <div className="flex flex-wrap gap-2">
            {ai.ai_target_audience.map((audience, index) => (
              <Badge key={index} variant="outline" className="border-jade text-jade">
                {audience || 'Audiencia no especificada'}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function MarketingTab({ marketing }: { marketing?: Property['marketing'] }) {
  if (!marketing) {
    return (
      <div className="p-6 text-center">
        <div className="flex flex-col items-center gap-4">
          <Target className="w-16 h-16 text-gray-400" />
          <p className="text-gray-500">Información de marketing no disponible</p>
          <p className="text-gray-400 text-sm">Los datos de marketing de esta propiedad aún no están disponibles</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-gray-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-jade">{marketing.leads_count || 0}</div>
          <div className="text-sm text-gray-600">Leads Totales</div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-jade">{marketing.qualified_leads || 0}</div>
          <div className="text-sm text-gray-600">Leads Calificados</div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-jade">{marketing.converted_leads || 0}</div>
          <div className="text-sm text-gray-600">Convertidos</div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-jade">{marketing.marketing_roi ? `${marketing.marketing_roi}%` : 'N/A'}</div>
          <div className="text-sm text-gray-600">ROI de Marketing</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">Tasa de Conversión</h3>
          <div className="text-xl font-bold text-jade">
            {marketing.conversion_rate ? `${marketing.conversion_rate}%` : 'N/A'}
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">Costo por Adquisición</h3>
          <div className="text-xl font-bold text-jade">
            {marketing.cost_per_acquisition ? `$${marketing.cost_per_acquisition}` : 'N/A'}
          </div>
        </div>
      </div>

      {marketing.target_segments && Array.isArray(marketing.target_segments) && marketing.target_segments.length > 0 && (
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Segmentos Objetivo</h3>
          <div className="flex flex-wrap gap-2">
            {marketing.target_segments.map((segment, index) => (
              <Badge key={index} variant="outline" className="border-jade text-jade">
                {segment || 'Segmento no especificado'}
              </Badge>
            ))}
          </div>
        </div>
      )}

      {marketing.unique_selling_points && Array.isArray(marketing.unique_selling_points) && marketing.unique_selling_points.length > 0 && (
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Puntos de Venta Únicos</h3>
          <div className="space-y-2">
            {marketing.unique_selling_points.map((point, index) => (
              <div key={index} className="flex items-start gap-2">
                <div className="w-2 h-2 bg-jade rounded-full mt-2"></div>
                <span className="text-gray-700">{point || 'Punto de venta no especificado'}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Información adicional de marketing */}
      <div className="grid grid-cols-2 gap-6">
        {marketing.cost_per_lead !== undefined && marketing.cost_per_lead !== null && (
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Costo por Lead</h3>
            <div className="text-xl font-bold text-jade">
              ${marketing.cost_per_lead}
            </div>
          </div>
        )}
        
        {marketing.marketing_spend !== undefined && marketing.marketing_spend !== null && (
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Inversión en Marketing</h3>
            <div className="text-xl font-bold text-jade">
              ${marketing.marketing_spend}
            </div>
          </div>
        )}
      </div>

      {marketing.best_performing_channel && (
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">Mejor Canal</h3>
          <p className="text-gray-700">{marketing.best_performing_channel}</p>
        </div>
      )}

      {marketing.market_positioning && (
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">Posicionamiento en Mercado</h3>
          <p className="text-gray-700">{marketing.market_positioning}</p>
        </div>
      )}

      {marketing.value_proposition && (
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-2">Propuesta de Valor</h3>
          <p className="text-gray-700">{marketing.value_proposition}</p>
        </div>
      )}
    </div>
  );
}