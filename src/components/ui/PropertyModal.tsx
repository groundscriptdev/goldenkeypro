"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Property } from "@/types/properties";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Bed,
  Bath,
  Square,
  MapPin,
  Heart,
  Share2,
  Calendar,
  Home,
  Building,
  DollarSign,
  X,
} from "lucide-react";

interface PropertyModalProps {
  property: Property | null;
  isOpen: boolean;
  onClose: () => void;
  locale: string;
}

export default function PropertyModal({
  property,
  isOpen,
  onClose,
  locale,
}: PropertyModalProps) {
  const [isSaved, setIsSaved] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const formatPrice = (price: string) => {
    const numPrice = parseFloat(price);
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(numPrice);
  };

  const getPropertyTypeIcon = (type: string) => {
    switch (type) {
      case "single_family":
        return <Home className="w-5 h-5" />;
      case "condo":
      case "apartment":
        return <Building className="w-5 h-5" />;
      case "commercial":
        return <Building className="w-5 h-5" />;
      default:
        return <Home className="w-5 h-5" />;
    }
  };

  const getPropertyTypeLabel = (type: string) => {
    switch (type) {
      case "single_family":
        return "Casa";
      case "condo":
        return "Condominio";
      case "apartment":
        return "Apartamento";
      case "commercial":
        return "Comercial";
      case "land":
        return "Terreno";
      default:
        return type;
    }
  };

  const handleSaveProperty = () => {
    setIsSaved(!isSaved);
    // Aquí iría la lógica para guardar propiedad
  };

  const handleShareProperty = () => {
    // Aquí iría la lógica para compartir propiedad
    if (navigator.share && property) {
      navigator.share({
        title: property.street_address,
        text: `Mira esta propiedad en ${property.city}: ${property.street_address}`,
        url: window.location.href,
      });
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen || !property) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-jade-green">
              {property.street_address}
            </h2>
            <div className="flex items-center text-gray-600 mt-1">
              <MapPin className="w-4 h-4 mr-1" />
              <span>{property.location}</span>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Property Image */}
            <div className="relative h-64 md:h-96 rounded-lg overflow-hidden bg-gradient-to-br from-jade-green/10 to-gold/10">
              {property.primary_image ? (
                <Image
                  src={property.primary_image}
                  alt={property.street_address}
                  fill
                  className="object-cover"
                  onError={() => setImageError(true)}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  {imageError ? (
                    <div className="text-center p-4">
                      <Building className="w-16 h-16 text-jade-green/30 mx-auto mb-2" />
                      <p className="text-jade-green/60 text-sm">
                        Imagen no disponible
                      </p>
                    </div>
                  ) : (
                    <div className="w-full h-full bg-jade-green/5 flex items-center justify-center">
                      <Building className="w-16 h-16 text-jade-green/30" />
                    </div>
                  )}
                </div>
              )}

              {/* Status Badge */}
              <div className="absolute top-4 left-4">
                <Badge className="bg-jade-green text-white border-0">
                  {property.status === "for_sale" ? "En Venta" : "Alquiler"}
                </Badge>
              </div>
            </div>

            {/* Property Details */}
            <div className="space-y-4">
              <div className="text-3xl font-bold text-jade-green">
                {formatPrice(property.price)}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Bed className="w-5 h-5 text-jade-green" />
                  <span className="font-medium">
                    {property.beds} Habitaciones
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Bath className="w-5 h-5 text-jade-green" />
                  <span className="font-medium">{property.baths} Baños</span>
                </div>
                <div className="flex items-center gap-2">
                  <Square className="w-5 h-5 text-jade-green" />
                  <span className="font-medium">{property.sqft} m²</span>
                </div>
                <div className="flex items-center gap-2">
                  {getPropertyTypeIcon(property.property_type)}
                  <span className="font-medium">
                    {getPropertyTypeLabel(property.property_type)}
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Descripción
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {property.description ||
                    "Propiedad exclusiva en excelente ubicación con características premium y gran potencial de valorización. Esta propiedad ofrece una combinación perfecta de lujo, comodidad y ubicación estratégica."}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Características Destacadas
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-jade-green rounded-full"></div>
                    Excelente ubicación en {property.city}
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-jade-green rounded-full"></div>
                    Alto potencial de valorización
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-jade-green rounded-full"></div>
                    ROI estimado: 8-12% anual
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-jade-green rounded-full"></div>
                    Ideal para inversión y residencia
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    Listado:{" "}
                    {new Date(property.created_at).toLocaleDateString("es-ES", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </div>
                  <div className="flex items-center font-medium text-jade-green">
                    <DollarSign className="w-4 h-4 mr-1" />
                    ROI: 8-12%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex gap-3 p-6 border-t border-gray-200">
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
          <Button
            variant="outline"
            className="border-jade-green text-jade-green hover:bg-jade-green hover:text-white"
            onClick={handleShareProperty}
          >
            <Share2 className="w-4 h-4 mr-2" />
            Compartir
          </Button>
          <Button
            className="bg-jade-green text-white hover:bg-jade-green/90"
            onClick={onClose}
          >
            Cerrar
          </Button>
        </div>
      </div>
    </div>
  );
}
