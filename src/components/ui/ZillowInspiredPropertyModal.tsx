"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Property } from "@/types/properties";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { InfiniteCarousel } from "@/components/ui/carousel";
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
  Phone,
  Mail,
  User,
  Star,
  Camera,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  Car,
  Wifi,
  Dumbbell,
  Waves,
  Trees,
  Shield,
  CheckCircle,
} from "lucide-react";

interface ZillowInspiredPropertyModalProps {
  property: Property | null;
  isOpen: boolean;
  onClose: () => void;
  locale: string;
}

export default function ZillowInspiredPropertyModal({
  property,
  isOpen,
  onClose,
  locale,
}: ZillowInspiredPropertyModalProps) {
  const [isSaved, setIsSaved] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

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
    if (navigator.share && property) {
      const address = property.location?.address_full ||
                     `${property.location?.neighborhood || ''}, ${property.location?.province || ''}`;
      navigator.share({
        title: property.title || address,
        text: `Mira esta propiedad en ${property.location?.province || 'Panamá'}: ${address}`,
        url: window.location.href,
      });
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log("Formulario enviado:", formData);
    setShowContactForm(false);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Mock additional images for carousel
  const propertyImages = property?.media?.gallery?.length
    ? property.media.gallery
    : property?.media?.image_cover
      ? [property.media.image_cover]
      : property?.image_url
        ? [property.image_url]
        : [];

  // Add placeholder images if we don't have enough
  const placeholderImages = [
    "data:image/svg+xml,%3Csvg width='800' height='600' xmlns='http://www.w3.org/2000/svg'%3E%3Crect fill='%23f3f4f6' width='800' height='600'/%3E%3Ctext fill='%236b7280' font-size='24' font-family='Arial' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3EImagen 1%3C/text%3E%3C/svg%3E",
    "data:image/svg+xml,%3Csvg width='800' height='600' xmlns='http://www.w3.org/2000/svg'%3E%3Crect fill='%23e5e7eb' width='800' height='600'/%3E%3Ctext fill='%236b7280' font-size='24' font-family='Arial' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3EImagen 2%3C/text%3E%3C/svg%3E",
    "data:image/svg+xml,%3Csvg width='800' height='600' xmlns='http://www.w3.org/2000/svg'%3E%3Crect fill='%23d1d5db' width='800' height='600'/%3E%3Ctext fill='%236b7280' font-size='24' font-family='Arial' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3EImagen 3%3C/text%3E%3C/svg%3E",
    "data:image/svg+xml,%3Csvg width='800' height='600' xmlns='http://www.w3.org/2000/svg'%3E%3Crect fill='%239ca3af' width='800' height='600'/%3E%3Ctext fill='%236b7280' font-size='24' font-family='Arial' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3EImagen 4%3C/text%3E%3C/svg%3E",
    "data:image/svg+xml,%3Csvg width='800' height='600' xmlns='http://www.w3.org/2000/svg'%3E%3Crect fill='%236b7280' width='800' height='600'/%3E%3Ctext fill='%23ffffff' font-size='24' font-family='Arial' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3EImagen 5%3C/text%3E%3C/svg%3E",
  ];

  while (propertyImages.length < 5) {
    propertyImages.push(placeholderImages[propertyImages.length]);
  }

  if (!isOpen || !property) return null;

  return (
    <div
      className="fixed  inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={handleBackdropClick}
    >
      <div className="ground-script-bg-white rounded-lg shadow-2xl max-w-7xl w-full max-h-[95vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-white border-b border-gray-200 relative z-10">
          <div className="flex items-center gap-4">
            <div>
              <h2 className="text-2xl font-bold text-jade">
                {formatPrice(property.price?.toString() || "0")}
              </h2>
              <div className="flex items-center text-gray-600 mt-1">
                <MapPin className="w-4 h-4 mr-1 text-jade" />
                <span className="text-jade-light">
                  {property.location?.address_full ||
                   `${property.location?.neighborhood || ''}, ${property.location?.province || ''}`}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="bg-jade text-white border-0">
                {property.status === "for_sale" || property.status === "VENTA" ? "En Venta" : "Alquiler"}
              </Badge>
              <Badge
                variant="outline"
                className="border-gold text-gold"
              >
                {getPropertyTypeLabel(property.type)}
              </Badge>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleSaveProperty}
              className="text-gray-600 hover:text-gray-900"
            >
              <Heart
                className={`w-5 h-5 ${isSaved ? "fill-current text-red-500" : ""}`}
              />
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

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {/* Image Gallery */}
          <div className="relative h-96 md:h-[500px] bg-gray-100">
            <InfiniteCarousel
              autoPlay={false}
              showArrows={true}
              showDots={true}
              className="h-full"
            >
              {propertyImages.map((image, index) => (
                <div key={index} className="relative w-full h-full">
                  <Image
                    src={image}
                    alt={`${property.title || 'Propiedad'} - Imagen ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 80vw"
                  />
                  <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full flex items-center gap-2">
                    <Camera className="w-4 h-4" />
                    <span className="text-sm">
                      {index + 1} / {propertyImages.length}
                    </span>
                  </div>
                </div>
              ))}
            </InfiniteCarousel>
          </div>

          <div className="grid md:grid-cols-3 gap-6 p-6">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-6">
              {/* Quick Stats */}
              <div className="grid grid-cols-4 gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-gray-700 mb-1">
                    <Bed className="w-4 h-4" />
                    <span className="font-semibold text-lg">
                      {property.bedrooms}
                    </span>
                  </div>
                  <span className="text-sm text-gray-600">Habitaciones</span>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-gray-700 mb-1">
                    <Bath className="w-4 h-4" />
                    <span className="font-semibold text-lg">
                      {property.bathrooms}
                    </span>
                  </div>
                  <span className="text-sm text-gray-600">Baños</span>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-gray-700 mb-1">
                    <Square className="w-4 h-4" />
                    <span className="font-semibold text-lg">
                      {property.area_built}
                    </span>
                  </div>
                  <span className="text-sm text-gray-600">m²</span>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-gray-700 mb-1">
                    {getPropertyTypeIcon(property.type)}
                  </div>
                  <span className="text-sm text-gray-600">
                    {getPropertyTypeLabel(property.type)}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Descripción
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {property.description ||
                    "Propiedad exclusiva en excelente ubicación con características premium y gran potencial de valorización. Esta propiedad ofrece una combinación perfecta de lujo, comodidad y ubicación estratégica. Con acabados de alta calidad y diseño funcional, es ideal tanto para residencia como para inversión."}
                </p>
              </div>

              {/* Features & Amenities */}
              <div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Características y Amenidades
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    {
                      icon: <Car className="w-5 h-5" />,
                      label: "Estacionamiento",
                    },
                    {
                      icon: <Wifi className="w-5 h-5" />,
                      label: "Internet de alta velocidad",
                    },
                    {
                      icon: <Dumbbell className="w-5 h-5" />,
                      label: "Gimnasio",
                    },
                    { icon: <Waves className="w-5 h-5" />, label: "Piscina" },
                    {
                      icon: <Trees className="w-5 h-5" />,
                      label: "Áreas verdes",
                    },
                    {
                      icon: <Shield className="w-5 h-5" />,
                      label: "Seguridad 24/7",
                    },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 groundgreen-bg rounded-lg"
                    >
                      <div className="text-jade-green">{feature.icon}</div>
                      <span className="text-gray-300">{feature.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Investment Highlights */}
              <div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Información de Inversión
                </h3>
                <div className="text-jade-green border groundgreen-bg-blue border-green-200 rounded-lg p-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-gold mb-1">
                        ROI Estimado
                      </div>
                      <div className="text-xl font-bold text-green-200">
                        8-12% anual
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gold mb-1">
                        Potencial de apreciación
                      </div>
                      <div className="text-xl font-bold text-gold">
                        Alto
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gold mb-1">
                        Tiempo en mercado
                      </div>
                      <div className="text-xl font-bold text-jade">
                        {Math.floor(
                          (Date.now() -
                            new Date(property.created_at).getTime()) /
                            (1000 * 60 * 60 * 24)
                        )}{" "}
                        días
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gold mb-1">
                        Tipo de inversión
                      </div>
                      <div className="text-xl font-bold text-jade">
                        Residencial/Comercial
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div>
                <h3 className="text-xl font-bold text-gold mb-3">
                  Ubicación
                </h3>
                <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600">
                      Mapa interactivo de la ubicación
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      {property.location?.address_full ||
                       `${property.location?.neighborhood || ''}, ${property.location?.province || ''}`}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Card */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Contactar Agente
                </h3>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-jade-green rounded-full flex items-center justify-center">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      Agente Inmobiliario
                    </div>
                    <div className="text-sm text-gray-600">
                      Experto en la zona
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm text-gray-600">
                        4.8 (47 reseñas)
                      </span>
                    </div>
                  </div>
                </div>

                {!showContactForm ? (
                  <div className="space-y-3">
                    <Button
                      className="w-full bg-jade-green text-white hover:bg-jade-green/90"
                      onClick={() => setShowContactForm(true)}
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Contactar Agente
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-jade-green text-jade-green hover:bg-jade-green hover:text-white"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Llamar ahora
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-3">
                    <input
                      type="text"
                      name="name"
                      placeholder="Tu nombre"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-jade-green"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Tu email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-jade-green"
                      required
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Tu teléfono"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-jade-green"
                    />
                    <textarea
                      name="message"
                      placeholder="Mensaje (opcional)"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-jade-green"
                    />
                    <div className="flex gap-2">
                      <Button
                        type="submit"
                        className="flex-1 bg-jade-green text-white hover:bg-jade-green/90"
                      >
                        Enviar mensaje
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setShowContactForm(false)}
                        className="border-gray-300 text-gray-700"
                      >
                        Cancelar
                      </Button>
                    </div>
                  </form>
                )}
              </div>

              {/* Property Facts */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Información de la Propiedad
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tipo de propiedad</span>
                    <span className="font-medium text-gray-900">
                      {getPropertyTypeLabel(property.type)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Año de construcción</span>
                    <span className="font-medium text-gray-900">
                      {property.construction_year || "N/A"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Estado</span>
                    <span className="font-medium text-gray-900">
                      {property.status === "for_sale" ? "En Venta" : "Alquiler"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Listado</span>
                    <span className="font-medium text-gray-900">
                      {new Date(property.created_at).toLocaleDateString(
                        "es-ES",
                        {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        }
                      )}
                    </span>
                  </div>
                </div>
              </div>

              {/* Save Property */}
              <Button
                variant="outline"
                className={`w-full ${isSaved ? "bg-red-50 border-red-200 text-red-600" : "border-jade-green text-jade-green hover:bg-jade-green hover:text-white"}`}
                onClick={handleSaveProperty}
              >
                <Heart
                  className={`w-4 h-4 mr-2 ${isSaved ? "fill-current" : ""}`}
                />
                {isSaved ? "Propiedad Guardada" : "Guardar Propiedad"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
