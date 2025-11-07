import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import { GroundHeaderMinimal } from "@/components/layout/GroundHeaderMinimal";
import { FooterMinimal } from "@/components/layout/FooterMinimal";
import { generateSEO, generateServiceSchema } from "@/lib/seo";
import { StructuredData } from "@/components/seo/StructuredData";
import { Button } from "@/components/ui/button";
import { Titulos } from '@/components/groundscript/subheader';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Search,
  Filter,
  MapPin,
  DollarSign,
  Bed,
  Bath,
  Square,
  Building,
  Home,
  TrendingUp,
  Shield,
} from "lucide-react";
import Link from "next/link";
import PropertyCard from "@/components/properties/PropertyCard";
import { PropertyFilters } from "@/types/properties";
import PropertySearchClient from "@/components/properties/PropertySearchClient";

interface PropertiesPageProps {
  params: { locale: string };
  searchParams: {
    search?: string;
    min_price?: string;
    max_price?: string;
    bedrooms?: string;
    bathrooms?: string;
    property_type?: string;
    city?: string;
    page?: string;
  };
}

export async function generateMetadata({
  params,
}: PropertiesPageProps): Promise<Metadata> {
  const t = await getTranslations("properties");
  const seoT = await getTranslations("seo");

  return generateSEO({
    title: `${t("title")} - Panama Golden Key`,
    description: t("subtitle"),
    keywords:
      "Panama real estate, Panama properties, Panama investment property, Panama homes for sale",
    canonical: `https://panamagoldenkey.com/${params.locale}/properties`,
    locale: params.locale,
    alternateLocales: params.locale === "en" ? ["zh"] : ["en"],
    ogImage: `/images/og-properties-${params.locale}.jpg`,
  });
}

export default async function PropertiesPage({
  params,
  searchParams,
}: PropertiesPageProps) {
  const t = await getTranslations("properties");
  const commonT = await getTranslations("common");

  // Generate structured data
  const serviceSchema = generateServiceSchema(
    "Panama Real Estate Properties",
    t("subtitle")
  );

  // Convert search params to filters
  const initialFilters: PropertyFilters = {
    search: searchParams.search || undefined,
    min_price: searchParams.min_price
      ? parseInt(searchParams.min_price)
      : undefined,
    max_price: searchParams.max_price
      ? parseInt(searchParams.max_price)
      : undefined,
    bedrooms: searchParams.bedrooms
      ? parseInt(searchParams.bedrooms)
      : undefined,
    bathrooms: searchParams.bathrooms
      ? parseInt(searchParams.bathrooms)
      : undefined,
    property_types: searchParams.property_type
      ? [searchParams.property_type as any]
      : undefined,
    city: searchParams.city || undefined,
  };

  console.log("PropertiesPage: initialFilters:", initialFilters);

  const featuredLocations = [
    {
      name: "Panama City",
      description: "Vibrant urban center with modern amenities",
      count: "150+ Properties",
      image: "/images/panama-city.jpg",
    },
    {
      name: "Coronado",
      description: "Popular beach community for expats",
      count: "80+ Properties",
      image: "/images/coronado.jpg",
    },
    {
      name: "Boquete",
      description: "Mountain paradise with perfect climate",
      count: "60+ Properties",
      image: "/images/boquete.jpg",
    },
    {
      name: "Bocas del Toro",
      description: "Caribbean beach living at its finest",
      count: "45+ Properties",
      image: "/images/bocas.jpg",
    },
  ];

  const propertyTypes = [
    {
      icon: <Building className="w-6 h-6" />,
      title: "Apartments",
      description: "Modern urban living with amenities",
      count: "200+",
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: "Houses",
      description: "Single-family homes with privacy",
      count: "150+",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Land",
      description: "Build your dream property",
      count: "80+",
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Commercial",
      description: "Business and investment opportunities",
      count: "40+",
    },
  ];

  return (
    <>
      {/* Structured Data */}
      <StructuredData data={serviceSchema} />

      <div className="min-h-screen">
        <GroundHeaderMinimal />
        <main>
          <Titulos
            titleKey="title"
            descriptionKey="subtitle"
            translationNamespace="properties"
            backgroundImage="/assets/76e5680e5d714cfac7f82b40fc5d2a3a8b70421a.png"
            tabs={[
              { id: "luxury", labelKey: "luxury_market.title" },
              { id: "mid_range", labelKey: "mid_range.title" },
              { id: "emerging", labelKey: "emerging_areas.title" }
            ]}
            defaultActiveTab="luxury"
          />

          {/* Search Section */}
          <section className="py-12 bg-white border-b">
            <div className="w-full px-4">
              <PropertySearchClient
                initialFilters={initialFilters}
                locale={params.locale}
              />
            </div>
          </section>

          {/* Featured Locations */}
          <section className="py-16 bg-jade-green/5">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-brand text-jade-green font-bold mb-4">
                    Featured Locations
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Discover prime properties in Panama's most sought-after
                    areas
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {featuredLocations.map((location, index) => (
                    <Card
                      key={index}
                      className="group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden"
                    >
                      <div className="relative h-48 bg-gradient-to-br from-jade-green/20 to-emerald-700/20">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <MapPin className="w-12 h-12 text-jade-green" />
                        </div>
                        <div className="absolute top-2 right-2 bg-white/90 backdrop-blur px-2 py-1 rounded-full">
                          <span className="text-xs font-medium text-jade-green">
                            {location.count}
                          </span>
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-lg">
                          {location.name}
                        </CardTitle>
                        <CardDescription>
                          {location.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button
                          variant="outline"
                          className="w-full border-jade-green text-jade-green  hover:bg-jade-green hover:text-white"
                        >
                          View Properties
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Property Types */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-brand text-jade-green font-bold mb-4">
                    Property Types
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Find the perfect property type for your needs
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {propertyTypes.map((type, index) => (
                    <Card
                      key={index}
                      className="text-center border-jade-green/10 hover:shadow-lg transition-shadow"
                    >
                      <CardHeader>
                        <div className="w-16 h-16 bg-jade-green/10 rounded-full flex items-center justify-center mx-auto mb-4 text-jade-green">
                          {type.icon}
                        </div>
                        <CardTitle className="text-lg">{type.title}</CardTitle>
                        <CardDescription>{type.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <span className="text-sm font-medium text-jade-green">
                          {type.count} Available
                        </span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Investment Highlights */}
          <section className="py-16 bg-jade-green/5">
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-brand text-jade-green font-bold mb-4">
                    Investment Highlights
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Why Panama real estate is a smart investment choice
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <Card className="text-center border-jade-green/10">
                    <CardHeader>
                      <div className="w-16 h-16 bg-jade-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <DollarSign className="w-8 h-8 text-jade-green" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-jade-green">
                        8-12%
                      </CardTitle>
                      <CardDescription>Average Annual ROI</CardDescription>
                    </CardHeader>
                  </Card>

                  <Card className="text-center border-jade-green/10">
                    <CardHeader>
                      <div className="w-16 h-16 bg-jade-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <TrendingUp className="w-8 h-8 text-jade-green" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-jade-green">
                        40-80%
                      </CardTitle>
                      <CardDescription>Property Value Growth</CardDescription>
                    </CardHeader>
                  </Card>

                  <Card className="text-center border-jade-green/10">
                    <CardHeader>
                      <div className="w-16 h-16 bg-jade-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Shield className="w-8 h-8 text-jade-green" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-jade-green">
                        0%
                      </CardTitle>
                      <CardDescription>
                        Property Tax for 20 Years
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              </div>
            </div>
          </section>

           {/* Market Overview */}
                    <section className="py-16 bg-white">
                      <div className="container mx-auto px-4">
                        <div className="max-w-6xl mx-auto">
                          <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-brand text-jade-green font-bold mb-4">
                              Panama Real Estate Market Overview
                            </h2>
                            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                              Discover why Panama's real estate market offers exceptional
                              opportunities for investors
                            </p>
                          </div>
          
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                            <div className="text-center">
                              <div className="w-16 h-16 bg-jade-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <TrendingUp className="w-8 h-8 text-jade-green" />
                              </div>
                              <h3 className="text-2xl font-bold text-jade-green mb-2">
                                5-7%
                              </h3>
                              <p className="text-gray-600">Annual ROI</p>
                            </div>
                            <div className="text-center">
                              <div className="w-16 h-16 bg-jade-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <DollarSign className="w-8 h-8 text-jade-green" />
                              </div>
                              <h3 className="text-2xl font-bold text-jade-green mb-2">
                                $300K
                              </h3>
                              <p className="text-gray-600">Minimum Investment</p>
                            </div>
                            <div className="text-center">
                              <div className="w-16 h-16 bg-jade-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Building className="w-8 h-8 text-jade-green" />
                              </div>
                              <h3 className="text-2xl font-bold text-jade-green mb-2">
                                40-60%
                              </h3>
                              <p className="text-gray-600">Growth Potential</p>
                            </div>
                          </div>
          
                          <div className="bg-jade-green/10 rounded-lg p-8">
                            <h3 className="text-xl font-semibold text-jade-green mb-4">
                              Why Invest in Panama Real Estate?
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div className="flex items-start space-x-3">
                                <div className="w-6 h-6 bg-jade-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                  <span className="text-white text-xs">✓</span>
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-900 mb-1">
                                    Strong Economic Growth
                                  </h4>
                                  <p className="text-sm text-gray-600">
                                    Panama's economy continues to grow at 5-6% annually
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-start space-x-3">
                                <div className="w-6 h-6 bg-jade-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                  <span className="text-white text-xs">✓</span>
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-900 mb-1">
                                    Dollarized Economy
                                  </h4>
                                  <p className="text-sm text-gray-600">
                                    No currency risk with USD as official currency
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-start space-x-3">
                                <div className="w-6 h-6 bg-jade-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                  <span className="text-white text-xs">✓</span>
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-900 mb-1">
                                    Tax Benefits
                                  </h4>
                                  <p className="text-sm text-gray-600">
                                    Favorable tax regime for foreign investors
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-start space-x-3">
                                <div className="w-6 h-6 bg-jade-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                  <span className="text-white text-xs">✓</span>
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-900 mb-1">
                                    Strategic Location
                                  </h4>
                                  <p className="text-sm text-gray-600">
                                    Hub of the Americas with excellent connectivity
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>

          {/* CTA Section */}
          <section className="py-16 bg-jade-green text-white">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-brand text-white font-bold mb-6">
                  Find Your Dream Property in Panama
                </h2>
                <p className="text-xl text-gold/90 mb-8">
                  Let our experts help you discover the perfect investment
                  opportunity
                </p>
                <Button
                  asChild
                  className="bg-gold text-jade-green hover:bg-gold/90 font-brand text-lg px-8 py-3"
                >
                  <Link href={`/${params.locale}/contact`}>
                    {commonT("free_consultation")}
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        </main>

        <FooterMinimal />
      </div>
    </>
  );
}
