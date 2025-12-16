"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { propertiesApi } from "@/lib/api/properties";
import { PropertyFilters } from "@/types/properties";
import { useSimplePropertiesWorking } from "@/hooks/useSimplePropertiesWorking";
import { useTranslations } from "next-intl";
import PropertyCard from "./PropertyCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Search,
  Filter,
  Grid,
  List,
  Map,
  MapPin,
  DollarSign,
  Bed,
  Bath,
  Square,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PropertyMap from "./PropertyMap";

interface PropertySearchClientProps {
  initialFilters: PropertyFilters;
  locale: string;
  mapView?: boolean;
}

export default function PropertySearchClient({
  initialFilters,
  locale,
  mapView = false,
}: PropertySearchClientProps) {
  const t = useTranslations("property_search");
  console.log("🔥 PropertySearchClient: Componente renderizado - typeof window:", typeof window);
  
  const router = useRouter();
  const searchParams = useSearchParams();
  const [filters, setFilters] = useState<PropertyFilters>(initialFilters);
  const [searchInput, setSearchInput] = useState(initialFilters.search || "");
  const [viewMode, setViewMode] = useState<"grid" | "list" | "map">("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [properties, setProperties] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Log inmediato para verificar si estamos en cliente
  if (typeof window !== 'undefined') {
    console.log("🔥 PropertySearchClient: ✅ Estamos en CLIENTE");
  } else {
    console.log("🔥 PropertySearchClient: ❌ Estamos en SERVIDOR");
  }

  // Cargar propiedades con filtros
  useEffect(() => {
    /* console.log("🔥 PropertySearchClient: useEffect INICIADO");
    console.log("🔥 PropertySearchClient: Filtros actuales:", filters); */
    
    // Forzar ejecución en cliente
    if (typeof window !== 'undefined') {
      setLoading(true);
      setError(null);

      console.log("🔥 PropertySearchClient: Llamando a propertiesApi.searchProperties()");
      propertiesApi
        .searchProperties(filters)
        .then((response) => {
          console.log("🔥 PropertySearchClient: ✅ Respuesta recibida:", response);
          
          if (response && response.results && Array.isArray(response.results)) {
            setProperties(response.results);
          } else {
            setProperties([]);
          }
          setLoading(false);
        })
        .catch((err) => {
          console.error("🔥 PropertySearchClient: ❌ Error:", err);
          setError(err instanceof Error ? err.message : "Error al cargar propiedades");
          setLoading(false);
        });
    }
  }, [filters]);
/* 
  console.log("PropertySearchClient: Componente renderizado");
  console.log("PropertySearchClient: initialFilters:", initialFilters);
  console.log("PropertySearchClient: properties:", properties, "loading:", loading, "error:", error);
 */
  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams();

    if (filters.search) params.set("search", filters.search);
    if (filters.min_price)
      params.set("min_price", filters.min_price.toString());
    if (filters.max_price)
      params.set("max_price", filters.max_price.toString());
    if (filters.bedrooms) params.set("bedrooms", filters.bedrooms.toString());
    if (filters.bathrooms)
      params.set("bathrooms", filters.bathrooms.toString());
    if (filters.property_types && filters.property_types.length > 0) {
      params.set("property_type", filters.property_types[0]);
    }
    if (filters.city) params.set("city", filters.city);

    const queryString = params.toString();
    const newPath = queryString
      ? `/${locale}/properties?${queryString}`
      : `/${locale}/properties`;

    router.replace(newPath, { scroll: false });
  }, [filters, locale, router]);

  const handleFilterChange = (key: keyof PropertyFilters, value: any) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    handleFilterChange("search", searchInput);
  };

  const clearFilters = () => {
    const emptyFilters: PropertyFilters = {};
    setFilters(emptyFilters);
  };

  return (
    <div className={`${mapView ? "w-full" : "space-y-6"}`}>
      {!mapView && (
        <>
          {/* Search Bar */}
          <Card>
            <CardHeader>
              <form onSubmit={handleSearch} className="flex gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    type="text"
                    placeholder={t("search_placeholder")}
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    className="pl-10 h-12"
                  />
                </div>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2"
                >
                  <Filter className="w-4 h-4" />
                  {t("filters_button")}
                </Button>
                <Button
                  type="submit"
                  className=" ground-jade bg-jade-green hover:bg-jade-green/90"
                >
                  {t("search_button")}
                </Button>
              </form>
            </CardHeader>

            {/* Advanced Filters */}
            {showFilters && (
              <CardContent className="border-t">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                       {t("labels.property_type")}
                    </label>
                    <Select
                      value={filters.property_types?.[0] || "all"}
                      onValueChange={(value) =>
                        handleFilterChange(
                          "property_types",
                          value === "all" ? [] : [value]
                        )
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder={t("placeholders.all_types")} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">{t("placeholders.all_types")}</SelectItem>
                        <SelectItem value="apartment">{t("types.apartment")}</SelectItem>
                        <SelectItem value="house">{t("types.house")}</SelectItem>
                        <SelectItem value="condo">{t("types.condo")}</SelectItem>
                        <SelectItem value="townhouse">{t("types.townhouse")}</SelectItem>
                        <SelectItem value="land">{t("types.land")}</SelectItem>
                        <SelectItem value="commercial">{t("types.commercial")}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t("labels.min_price")}
                    </label>
                    <Input
                      type="number"
                      placeholder={t("placeholders.no_minimum")}
                      value={filters.min_price || ""}
                      onChange={(e) =>
                        handleFilterChange(
                          "min_price",
                          e.target.value ? parseInt(e.target.value) : undefined
                        )
                      }
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t("labels.max_price")}
                    </label>
                    <Input
                      type="number"
                      placeholder={t("placeholders.no_maximum")}
                      value={filters.max_price || ""}
                      onChange={(e) =>
                        handleFilterChange(
                          "max_price",
                          e.target.value ? parseInt(e.target.value) : undefined
                        )
                      }
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t("labels.bedrooms")}
                    </label>
                    <Select
                      value={filters.bedrooms?.toString() || "any"}
                      onValueChange={(value) =>
                        handleFilterChange(
                          "bedrooms",
                          value === "any" ? undefined : parseInt(value)
                        )
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder={t("placeholders.any")} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">{t("placeholders.any")}</SelectItem>
                        <SelectItem value="1">1+</SelectItem>
                        <SelectItem value="2">2+</SelectItem>
                        <SelectItem value="3">3+</SelectItem>
                        <SelectItem value="4">4+</SelectItem>
                        <SelectItem value="5">5+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {t("labels.city")}
                    </label>
                    <Input
                      type="text"
                      placeholder={t("placeholders.enter_city")}
                      value={filters.city || ""}
                      onChange={(e) =>
                        handleFilterChange("city", e.target.value)
                      }
                    />
                  </div>

                  <div className="flex items-end">
                    <Button
                      variant="outline"
                      onClick={clearFilters}
                      className="w-full"
                    >
                      {t("labels.clear_filters")}
                    </Button>
                  </div>
                </div>
              </CardContent>
            )}
          </Card>
        </>
      )}

      {!mapView && (
        <>
          {/* Results Header */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {loading
                  ? t("results.searching")
                  : t("results.found", { count: properties.length })}
              </h2>
              <p className="text-gray-600">
                {filters.search && t("results.searching_for", { query: filters.search })}
                {filters.city && t("results.in_city", { city: filters.city })}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                <List className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "map" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("map")}
              >
                <Map className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </>
      )}

      {/* Error Message */}
      {error && !mapView && (
        <Card className="border-red-200 bg-red-50">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <p className="text-red-600">Error: {error}</p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Properties Grid */}
      {loading && properties.length === 0 && !mapView ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <Card key={index} className="animate-pulse">
              <div className="h-48 bg-gray-200 rounded-t-lg"></div>
              <CardContent className="p-4">
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <>
          {viewMode === "map" || mapView ? (
            <div className="w-full">
              <PropertyMap properties={properties} locale={locale} />
            </div>
          ) : (
            <div
              className={`grid gap-6 ${
                viewMode === "grid"
                  ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                  : "grid-cols-1"
              }`}
            >
              {properties.map((property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  locale={locale}
                  className={viewMode === "list" ? "md:flex" : ""}
                />
              ))}
            </div>
          )}
        </>
      )}

      {/* Load More Button */}
      {!loading && properties.length > 0 && false && !mapView && (
        <div className="text-center">
          <Button
            onClick={() => {}}
            disabled={loading}
            variant="outline"
            className="border-jade-green text-jade-green hover:bg-jade-green hover:text-white"
          >
            {loading ? t("results.loading") : t("results.load_more")}
          </Button>
        </div>
      )}

      {/* No Results */}
      {!loading && properties.length === 0 && !error && !mapView && (
        <Card>
          <CardContent className="text-center py-12">
            <MapPin className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {t("results.no_results_title")}
            </h3>
            <p className="text-gray-600 mb-4">
              {t("results.no_results_desc")}
            </p>
            <Button onClick={clearFilters} variant="outline">
              {t("results.clear_search_filters")}
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
