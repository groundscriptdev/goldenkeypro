"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Property } from "@/types/properties";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import PropertyModalWithTabs from "@/components/ui/PropertyModalWithTabs";
import { LogoSVG } from "@/components/ui/LogoSVG";
import {
  Bed,
  Bath,
  Square,
  MapPin,
  Heart,
  Share2,
  Eye,
  Calendar,
  Home,
  Building,
  DollarSign,
  X,
} from "lucide-react";

interface PropertyCardProps {
  property: Property;
  className?: string;
  locale: string;
}

export default function PropertyCard({
  property,
  className = "",
  locale,
}: PropertyCardProps) {
  const [isSaved, setIsSaved] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Función para formatear precio - compatible con nueva arquitectura
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

  // Función para obtener icono de tipo de propiedad
  const getPropertyTypeIcon = (type: string) => {
    switch (type) {
      case "single_family":
      case "casa":
      case "CASA":
        return <Home className="w-4 h-4" />;
      case "condo":
      case "apartment":
      case "apartamento":
      case "condominio":
      case "APARTMENT":
      case "CONDO":
      case "CONDOMINIO":
        return <Building className="w-4 h-4" />;
      case "commercial":
      case "comercial":
      case "COMERCIAL":
        return <Building className="w-4 h-4" />;
      case "land":
      case "terreno":
      case "TERRENO":
      case "LAND":
        return <Square className="w-4 h-4" />;
      default:
        return <Home className="w-4 h-4" />;
    }
  };

  // Función para obtener etiqueta de tipo de propiedad
  const getPropertyTypeLabel = (type: string) => {
    switch (type) {
      case "single_family":
      case "casa":
      case "CASA":
        return "Casa";
      case "condo":
      case "condominio":
      case "CONDO":
      case "CONDOMINIO":
        return "Condominio";
      case "apartment":
      case "apartamento":
      case "APARTMENT":
        return "Apartamento";
      case "commercial":
      case "comercial":
      case "COMERCIAL":
        return "Comercial";
      case "land":
      case "terreno":
      case "TERRENO":
      case "LAND":
        return "Terreno";
      default:
        return type;
    }
  };

  // Función para obtener dirección completa - compatible con nueva arquitectura
  const getFullAddress = () => {
    if (property.location?.address_full) {
      return property.location.address_full;
    }
    // Fallback a campos antiguos si existen
    if (property.location?.neighborhood && property.location?.province) {
      return `${property.location.neighborhood}, ${property.location.province}`;
    }
    return "Ubicación no disponible";
  };

  // Función para obtener imagen principal - compatible con nueva arquitectura
  const getMainImage = () => {
    if (property.media?.image_cover) {
      return property.media.image_cover;
    }
    if (property.image_url) {
      return property.image_url;
    }
    return null;
  };

  // Función para obtener precio - compatible con nueva arquitectura
  const getPrice = () => {
    if (property.financials?.price) {
      return property.financials.price;
    }
    if (property.price) {
      return property.price;
    }
    return 0;
  };

  // Función para obtener ROI - compatible con nueva arquitectura
  const getROI = () => {
    if (
      property.financials?.roi_projected_min &&
      property.financials?.roi_projected_max
    ) {
      return `${property.financials.roi_projected_min}-${property.financials.roi_projected_max}%`;
    }
    if (property.roi) {
      return property.roi;
    }
    return "8-12%";
  };

  const handleSaveProperty = () => {
    setIsSaved(!isSaved);
    // Aquí iría la lógica para guardar propiedad
  };

  const handleShareProperty = () => {
    // Aquí iría la lógica para compartir propiedad
    if (navigator.share) {
      navigator.share({
        title: property.title || getFullAddress(),
        text: `Mira esta propiedad en ${property.location?.province || "Panamá"}: ${getFullAddress()}`,
        url: window.location.href,
      });
    }
  };

  return (
    <Card
      className={`group overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-jade-green/30 ${className}`}
    >
      <CardContent className="p-0">
        {/* Image Section */}
        <div className="relative h-64 overflow-hidden bg-gradient-to-br from-jade-green/10 to-gold/10">
          {getMainImage() ? (
            <Image
              src={getMainImage()!}
              alt={property.title || getFullAddress()}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              onError={() => setImageError(true)}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              {imageError ? (
                <div className="text-center p-4">
                  <LogoSVG
                    width={64}
                    height={64}
                    className="w-16 h-16 text-jade-green/30 mx-auto mb-2"
                  />
                  <p className="text-jade-green/60 text-sm">
                    Imagen no disponible
                  </p>
                </div>
              ) : (
                <div className="w-full h-full bg-jade-green/5 flex items-center justify-center">
                  <LogoSVG
                    width={64}
                    height={64}
                    className="w-16 h-16 text-jade-green/30"
                  />
                </div>
              )}
            </div>
          )}

          {/* Status Badge */}
          <div className="absolute top-4 left-4">
            <Badge className="bg-jade-green text-white border-0">
              {property.status === "for_sale" || property.status === "VENTA"
                ? "En Venta"
                : property.status === "for_rent" || property.status === "RENTA"
                  ? "Alquiler"
                  : property.status === "sold" || property.status === "VENDIDO"
                    ? "Vendida"
                    : property.status === "RESERVADO"
                      ? "Reservado"
                      : property.status}
            </Badge>
          </div>

          {/* Action Buttons */}
          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button
              size="sm"
              variant="outline"
              className="bg-white/90 hover:bg-white border-white/20 text-gray-700 hover:text-jade-green"
              onClick={handleSaveProperty}
            >
              <Heart className={`w-4 h-4 ${isSaved ? "fill-current" : ""}`} />
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="bg-white/90 hover:bg-white border-white/20 text-gray-700 hover:text-jade-green"
              onClick={handleShareProperty}
            >
              <Share2 className="w-4 h-4" />
            </Button>
          </div>

          {/* Quick Stats Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <Bed className="w-4 h-4" />
                  <span className="text-sm font-medium">
                    {property.bedrooms}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Bath className="w-4 h-4" />
                  <span className="text-sm font-medium">
                    {property.bathrooms}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Square className="w-4 h-4" />
                  <span className="text-sm font-medium">
                    {property.area_built}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold">
                  {formatPrice(getPrice())}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                {getPropertyTypeIcon(property.type)}
                <Badge
                  variant="outline"
                  className="border-jade-green/20 text-jade-green"
                >
                  {getPropertyTypeLabel(property.type)}
                </Badge>
              </div>
              <h3 className="text-xl font-bold text-gray-900 leading-tight mb-2 line-clamp-2">
                {property.title || getFullAddress()}
              </h3>
              <div className="flex items-center text-gray-600 mb-3">
                <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                <span className="text-sm">
                  {property.location?.neighborhood &&
                  property.location?.province
                    ? `${property.location.neighborhood}, ${property.location.province}`
                    : getFullAddress()}
                </span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-jade-green mb-1">
                {formatPrice(getPrice())}
              </div>
              <div className="text-sm text-gray-500">
                {property.bedrooms} hab • {property.bathrooms} baños •{" "}
                {property.area_built}m²
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Bed className="w-4 h-4 text-jade-green" />
              <span>{property.bedrooms} Habitaciones</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Bath className="w-4 h-4 text-jade-green" />
              <span>{property.bathrooms} Baños</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Square className="w-4 h-4 text-jade-green" />
              <span>{property.area_built} m²</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Building className="w-4 h-4 text-jade-green" />
              <span>{getPropertyTypeLabel(property.type)}</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
            {property.description ||
              "Propiedad exclusiva en excelente ubicación con características premium y gran potencial de valorización."}
          </p>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button
              className="flex-1 ground-jade bg-jade-green text-white hover:gold-text"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsModalOpen(true);
              }}
            >
              <Eye className="w-4 h-4 mr-2" />
              Ver Detalles
            </Button>
            <Button
              variant="outline"
              className="border-jade-green text-jade-green hover:bg-jade-green hover:text-white"
              onClick={handleSaveProperty}
            >
              <Heart
                className={`w-4 h-4 mr-2 ${isSaved ? "fill-current" : ""}`}
              />
              {isSaved ? "Guardada" : "Guardar"}
            </Button>
          </div>

          {/* Additional Info */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex items-center text-sm text-gray-500">
              <Calendar className="w-4 h-4 mr-1" />
              Listado:{" "}
              {new Date(
                property.published_at || property.created_at
              ).toLocaleDateString("es-ES", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </div>
            <div className="flex items-center text-sm font-medium text-jade-green">
              <DollarSign className="w-4 h-4 mr-1" />
              ROI estimado: {getROI()}
            </div>
          </div>
        </div>
      </CardContent>

      {/* Property Details Modal */}
      <PropertyModalWithTabs
        propertyId={property.id}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        locale={locale}
      />
    </Card>
  );
}
