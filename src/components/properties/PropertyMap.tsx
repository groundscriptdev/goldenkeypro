"use client";

import { useState, useEffect, useRef } from "react";
import { Property } from "@/types/properties";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PropertyModal from "@/components/ui/ZillowInspiredPropertyModal";
import {
  MapPin,
  Bed,
  Bath,
  Square,
  Home,
  Building,
  X,
  Maximize2,
  Filter,
} from "lucide-react";

interface PropertyMapProps {
  properties: Property[];
  locale: string;
}

interface MapMarker {
  id: string;
  property: Property;
  position: { lat: number; lng: number };
}

export default function PropertyMap({ properties, locale }: PropertyMapProps) {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  // Generate mock coordinates for properties (in a real app, these would come from the backend)
  const generateMockCoordinates = (property: Property) => {
    // Base coordinates for Panama
    const baseLat = 8.9828;
    const baseLng = -79.5199;

    // Add some random variation based on property ID
    const idHash = property.id
      .split("")
      .reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const latVariation = (idHash % 100) / 1000 - 0.05;
    const lngVariation = ((idHash * 2) % 100) / 1000 - 0.05;

    return {
      lat: baseLat + latVariation,
      lng: baseLng + lngVariation,
    };
  };

  // Create map markers from properties
  const mapMarkers: MapMarker[] = properties.map((property) => ({
    id: property.id,
    property,
    position: generateMockCoordinates(property),
  }));

  // Initialize map
  useEffect(() => {
    if (!mapRef.current || mapLoaded) return;

    // This is a mock map implementation
    // In a real app, you would use a library like Google Maps, Mapbox, or Leaflet
    const mockMap = {
      center: { lat: 8.9828, lng: -79.5199 },
      zoom: 11,
      markers: mapMarkers,
    };

    mapInstanceRef.current = mockMap;
    setMapLoaded(true);

    return () => {
      // Cleanup map instance if needed
      mapInstanceRef.current = null;
    };
  }, [mapLoaded, mapMarkers]);

  const formatPrice = (price: number | string | undefined) => {
    if (!price) return "$0";
    const numPrice = typeof price === "string" ? parseFloat(price) : price;
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(numPrice);
  };

  // Función para obtener precio - compatible con nueva arquitectura
  const getPropertyPrice = (property: Property) => {
    if (property.financials?.price) {
      return property.financials.price;
    }
    if (property.price) {
      return property.price;
    }
    return 0;
  };

  // Función para obtener dirección completa - compatible con nueva arquitectura
  const getPropertyAddress = (property: Property) => {
    if (property.location?.address_full) {
      return property.location.address_full;
    }
    if (property.location?.neighborhood && property.location?.province) {
      return `${property.location.neighborhood}, ${property.location.province}`;
    }
    return property.title || "Ubicación no disponible";
  };

  const getPropertyTypeIcon = (type: string) => {
    switch (type) {
      case "single_family":
      case "casa":
        return <Home className="w-4 h-4" />;
      case "condo":
      case "apartment":
      case "apartamento":
      case "condominio":
        return <Building className="w-4 h-4" />;
      case "commercial":
      case "comercial":
        return <Building className="w-4 h-4" />;
      case "land":
      case "terreno":
        return <Square className="w-4 h-4" />;
      default:
        return <Home className="w-4 h-4" />;
    }
  };

  const getPropertyTypeLabel = (type: string) => {
    switch (type) {
      case "single_family":
      case "casa":
        return "Casa";
      case "condo":
      case "condominio":
        return "Condominio";
      case "apartment":
      case "apartamento":
        return "Apartamento";
      case "commercial":
      case "comercial":
        return "Comercial";
      case "land":
      case "terreno":
        return "Terreno";
      default:
        return type;
    }
  };

  const handlePropertyClick = (property: Property) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div
      className={`relative ${isFullscreen ? "fixed inset-0 z-50 bg-white" : "w-full h-96 md:h-[500px]"}`}
    >
      {/* Map Container */}
      <div
        ref={mapRef}
        className={`w-full h-full bg-gray-100 relative overflow-hidden ${
          isFullscreen ? "rounded-none" : "rounded-lg"
        }`}
      >
        {/* Mock Map Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50">
          {/* Grid lines to simulate map */}
          <div className="absolute inset-0 opacity-20">
            {[...Array(10)].map((_, i) => (
              <div
                key={`h-${i}`}
                className="absolute w-full border-t border-gray-300"
                style={{ top: `${i * 10}%` }}
              />
            ))}
            {[...Array(10)].map((_, i) => (
              <div
                key={`v-${i}`}
                className="absolute h-full border-l border-gray-300"
                style={{ left: `${i * 10}%` }}
              />
            ))}
          </div>
        </div>

        {/* Property Markers */}
        {mapLoaded &&
          mapMarkers.map((marker) => (
            <div
              key={marker.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
              style={{
                left: `${((marker.position.lng + 80) / 0.5) * 10}%`,
                top: `${((marker.position.lat - 8.8) / 0.3) * 100}%`,
              }}
              onClick={() => handlePropertyClick(marker.property)}
            >
              <div className="relative group">
                <div className="w-8 h-8 bg-jade-green rounded-full flex items-center justify-center shadow-lg">
                  <MapPin className="w-4 h-4 text-white" />
                </div>

                {/* Property Popup on Hover */}
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                  <Card className="w-64 shadow-lg">
                    <CardContent className="p-3">
                      <div className="flex items-start justify-between mb-2">
                        <div className="font-semibold text-sm truncate">
                          {getPropertyAddress(marker.property)}
                        </div>
                        <Badge className="bg-blue-600 text-white border-0 text-xs">
                          {marker.property.status === "for_sale"
                            ? "En Venta"
                            : "Alquiler"}
                        </Badge>
                      </div>
                      <div className="text-lg font-bold text-jade-green mb-1">
                        {formatPrice(getPropertyPrice(marker.property))}
                      </div>
                      <div className="mt-2">
                        <button
                          className="ground-jade gold-text px-3 py-1 rounded text-sm font-medium hover:bg-jade-green hover:text-white transition-colors"
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePropertyClick(marker.property);
                          }}
                        >
                          Ver Detalles
                        </button>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-gray-600">
                        <div className="flex items-center gap-1">
                          <Bed className="w-3 h-3" />
                          <span>{marker.property.bedrooms}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Bath className="w-3 h-3" />
                          <span>{marker.property.bathrooms}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Square className="w-3 h-3" />
                          <span>{marker.property.area_built}m²</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          ))}

        {/* Map Controls */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={toggleFullscreen}
            className="bg-white shadow-md"
          >
            {isFullscreen ? (
              <X className="w-4 h-4" />
            ) : (
              <Maximize2 className="w-4 h-4" />
            )}
          </Button>
        </div>

        {/* Map Legend */}
        <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-md p-3">
          <div className="text-xs font-semibold mb-2">Propiedades</div>
          <div className="flex items-center gap-2 text-xs">
            <div className="w-3 h-3 bg-jade-green rounded-full"></div>
            <span>Disponibles ({properties.length})</span>
          </div>
        </div>
      </div>

      {/* Property Modal */}
      {selectedProperty && (
        <PropertyModal
          property={selectedProperty}
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedProperty(null);
          }}
          locale={locale}
        />
      )}
    </div>
  );
}
