'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Home, Plus, X, MapPin, DollarSign, Bed, Bath, Square } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface Property {
  id: string;
  name: string;
  type: string;
  location: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  area: number;
  yearBuilt: number;
  roi: number;
  image: string;
  features: string[];
}

export function PropertyComparison() {
  const t = useTranslations('property_comparison');
  
  const [properties, setProperties] = useState<Property[]>([
    {
      id: '1',
      name: 'Ocean View Luxury Condo',
      type: 'Condominium',
      location: 'Punta Pacifica, Panama City',
      price: 450000,
      bedrooms: 2,
      bathrooms: 2,
      area: 120,
      yearBuilt: 2020,
      roi: 6.5,
      image: '/images/properties/ocean-view-condo.jpg',
      features: ['Ocean View', 'Gym', 'Pool', '24/7 Security', 'Concierge'],
    },
    {
      id: '2',
      name: 'Casco Viejo Colonial House',
      type: 'House',
      location: 'Casco Viejo, Panama City',
      price: 650000,
      bedrooms: 3,
      bathrooms: 2,
      area: 180,
      yearBuilt: 2018,
      roi: 7.2,
      image: '/images/properties/casco-viejo-house.jpg',
      features: ['Historic District', 'Rooftop Terrace', 'Renovated', 'Parking', 'Garden'],
    },
  ]);
  
  const [selectedProperties, setSelectedProperties] = useState<Property[]>([]);
  const [showAddProperty, setShowAddProperty] = useState(false);

  // Sample properties for demo
  const availableProperties: Property[] = [
    {
      id: '3',
      name: 'Santa Maria Golf Villa',
      type: 'Villa',
      location: 'Santa Maria, Panama City',
      price: 850000,
      bedrooms: 4,
      bathrooms: 3,
      area: 250,
      yearBuilt: 2019,
      roi: 8.0,
      image: '/images/properties/santa-maria-villa.jpg',
      features: ['Golf Course View', 'Private Pool', 'Garden', 'Maid Room', '3 Car Garage'],
    },
    {
      id: '4',
      name: 'Costa del Este Penthouse',
      type: 'Penthouse',
      location: 'Costa del Este, Panama City',
      price: 750000,
      bedrooms: 3,
      bathrooms: 3,
      area: 220,
      yearBuilt: 2021,
      roi: 7.5,
      image: '/images/properties/costa-del-este-penthouse.jpg',
      features: ['Panoramic View', 'Private Elevator', 'Rooftop Pool', 'Home Theater', 'Wine Cellar'],
    },
    {
      id: '5',
      name: 'San Francisco Modern Apartment',
      type: 'Apartment',
      location: 'San Francisco, Panama City',
      price: 320000,
      bedrooms: 2,
      bathrooms: 1,
      area: 90,
      yearBuilt: 2022,
      roi: 5.8,
      image: '/images/properties/san-francisco-apartment.jpg',
      features: ['Modern Design', 'Co-working Space', 'Gym', 'Social Area', 'Pet Friendly'],
    },
  ];

  const handleAddProperty = (property: Property) => {
    if (selectedProperties.length < 3) {
      setSelectedProperties([...selectedProperties, property]);
      setShowAddProperty(false);
    }
  };

  const handleRemoveProperty = (propertyId: string) => {
    setSelectedProperties(selectedProperties.filter(p => p.id !== propertyId));
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getPropertyTypeIcon = (type: string) => {
    return <Home className="w-4 h-4" />;
  };

  const getBestValue = (values: number[], isLowerBetter = false) => {
    if (values.length === 0) return [];
    
    let bestValue: number;
    if (isLowerBetter) {
      bestValue = Math.min(...values);
    } else {
      bestValue = Math.max(...values);
    }
    
    return values.map(value => value === bestValue);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Home className="w-6 h-6 text-jade-green mr-2" />
          <h2 className="text-2xl font-brand text-jade-green font-bold">
            {t('title')}
          </h2>
        </div>
        <div className="text-sm text-muted-foreground">
          {t('selected_count', { count: selectedProperties.length, max: 3 })}
        </div>
      </div>
      
      <p className="text-muted-foreground mb-8">
        {t('description')}
      </p>
      
      {/* Add Property Button */}
      <div className="mb-8">
        {selectedProperties.length < 3 ? (
          <Button
            onClick={() => setShowAddProperty(true)}
            className="bg-gold text-jade-green hover:bg-gold/90 font-brand"
          >
            <Plus className="w-4 h-4 mr-2" />
            {t('add_property_button')}
          </Button>
        ) : (
          <div className="p-4 bg-jade-green/10 rounded-lg border border-jade-green/20">
            <p className="text-sm text-jade-green">
              {t('max_properties_reached')}
            </p>
          </div>
        )}
      </div>
      
      {/* Add Property Modal */}
      {showAddProperty && (
        <div className="mb-8 p-6 border border-jade-green/20 rounded-lg bg-jade-green/5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-brand text-jade-green font-semibold">
              {t('select_property_title')}
            </h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowAddProperty(false)}
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {availableProperties.map((property) => (
              <div
                key={property.id}
                className="border border-gray-200 rounded-lg p-4 hover:border-jade-green/50 cursor-pointer transition-colors"
                onClick={() => handleAddProperty(property)}
              >
                <div className="aspect-square bg-gray-100 rounded-lg mb-3 relative overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-semibold text-foreground mb-1">{property.name}</h4>
                <p className="text-sm text-muted-foreground mb-2">{property.location}</p>
                <p className="text-lg font-bold text-jade-green">{formatCurrency(property.price)}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Comparison Table */}
      {selectedProperties.length > 0 && (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-jade-green/20">
                <th className="text-left py-3 px-4 font-medium text-foreground">
                  {t('property')}
                </th>
                {selectedProperties.map((property) => (
                  <th key={property.id} className="text-center py-3 px-4">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-gray-100 rounded-lg mb-2 relative overflow-hidden">
                        <img
                          src={property.image}
                          alt={property.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-foreground">{property.name}</p>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleRemoveProperty(property.id)}
                          className="h-6 w-6 p-0 mt-1"
                        >
                          <X className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Price */}
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 font-medium text-foreground flex items-center">
                  <DollarSign className="w-4 h-4 mr-2 text-jade-green" />
                  {t('price')}
                </td>
                {selectedProperties.map((property, index) => {
                  const prices = selectedProperties.map(p => p.price);
                  const isBest = getBestValue(prices, true)[index];
                  return (
                    <td
                      key={property.id}
                      className={cn(
                        "text-center py-3 px-4",
                        isBest && "bg-gold/10 font-semibold text-jade-green"
                      )}
                    >
                      {formatCurrency(property.price)}
                    </td>
                  );
                })}
              </tr>
              
              {/* Type */}
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 font-medium text-foreground flex items-center">
                  <Home className="w-4 h-4 mr-2 text-jade-green" />
                  {t('type')}
                </td>
                {selectedProperties.map((property) => (
                  <td key={property.id} className="text-center py-3 px-4">
                    {property.type}
                  </td>
                ))}
              </tr>
              
              {/* Location */}
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 font-medium text-foreground flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-jade-green" />
                  {t('location')}
                </td>
                {selectedProperties.map((property) => (
                  <td key={property.id} className="text-center py-3 px-4 text-sm">
                    {property.location}
                  </td>
                ))}
              </tr>
              
              {/* Bedrooms */}
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 font-medium text-foreground flex items-center">
                  <Bed className="w-4 h-4 mr-2 text-jade-green" />
                  {t('bedrooms')}
                </td>
                {selectedProperties.map((property, index) => {
                  const bedrooms = selectedProperties.map(p => p.bedrooms);
                  const isBest = getBestValue(bedrooms)[index];
                  return (
                    <td
                      key={property.id}
                      className={cn(
                        "text-center py-3 px-4",
                        isBest && "bg-gold/10 font-semibold text-jade-green"
                      )}
                    >
                      {property.bedrooms}
                    </td>
                  );
                })}
              </tr>
              
              {/* Bathrooms */}
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 font-medium text-foreground flex items-center">
                  <Bath className="w-4 h-4 mr-2 text-jade-green" />
                  {t('bathrooms')}
                </td>
                {selectedProperties.map((property, index) => {
                  const bathrooms = selectedProperties.map(p => p.bathrooms);
                  const isBest = getBestValue(bathrooms)[index];
                  return (
                    <td
                      key={property.id}
                      className={cn(
                        "text-center py-3 px-4",
                        isBest && "bg-gold/10 font-semibold text-jade-green"
                      )}
                    >
                      {property.bathrooms}
                    </td>
                  );
                })}
              </tr>
              
              {/* Area */}
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 font-medium text-foreground flex items-center">
                  <Square className="w-4 h-4 mr-2 text-jade-green" />
                  {t('area')}
                </td>
                {selectedProperties.map((property, index) => {
                  const areas = selectedProperties.map(p => p.area);
                  const isBest = getBestValue(areas)[index];
                  return (
                    <td
                      key={property.id}
                      className={cn(
                        "text-center py-3 px-4",
                        isBest && "bg-gold/10 font-semibold text-jade-green"
                      )}
                    >
                      {property.area} m²
                    </td>
                  );
                })}
              </tr>
              
              {/* Year Built */}
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 font-medium text-foreground">
                  {t('year_built')}
                </td>
                {selectedProperties.map((property, index) => {
                  const years = selectedProperties.map(p => p.yearBuilt);
                  const isBest = getBestValue(years)[index];
                  return (
                    <td
                      key={property.id}
                      className={cn(
                        "text-center py-3 px-4",
                        isBest && "bg-gold/10 font-semibold text-jade-green"
                      )}
                    >
                      {property.yearBuilt}
                    </td>
                  );
                })}
              </tr>
              
              {/* ROI */}
              <tr className="border-b border-gray-100">
                <td className="py-3 px-4 font-medium text-foreground">
                  {t('roi')}
                </td>
                {selectedProperties.map((property, index) => {
                  const rois = selectedProperties.map(p => p.roi);
                  const isBest = getBestValue(rois)[index];
                  return (
                    <td
                      key={property.id}
                      className={cn(
                        "text-center py-3 px-4",
                        isBest && "bg-gold/10 font-semibold text-jade-green"
                      )}
                    >
                      {property.roi}%
                    </td>
                  );
                })}
              </tr>
              
              {/* Features */}
              <tr>
                <td className="py-3 px-4 font-medium text-foreground">
                  {t('features')}
                </td>
                {selectedProperties.map((property) => (
                  <td key={property.id} className="text-center py-3 px-4">
                    <div className="flex flex-wrap justify-center gap-1">
                      {property.features.slice(0, 3).map((feature, index) => (
                        <span
                          key={index}
                          className="inline-block px-2 py-1 bg-jade-green/10 text-jade-green text-xs rounded"
                        >
                          {feature}
                        </span>
                      ))}
                      {property.features.length > 3 && (
                        <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                          +{property.features.length - 3}
                        </span>
                      )}
                    </div>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      )}
      
      {/* Empty State */}
      {selectedProperties.length === 0 && (
        <div className="text-center py-12">
          <Home className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-foreground mb-2">
            {t('empty_title')}
          </h3>
          <p className="text-muted-foreground mb-6">
            {t('empty_description')}
          </p>
          <Button
            onClick={() => setShowAddProperty(true)}
            className="bg-gold text-jade-green hover:bg-gold/90 font-brand"
          >
            <Plus className="w-4 h-4 mr-2" />
            {t('add_property_button')}
          </Button>
        </div>
      )}
      
      {/* Legend */}
      {selectedProperties.length > 0 && (
        <div className="mt-6 p-4 bg-jade-green/5 rounded-lg border border-jade-green/20">
          <p className="text-sm text-jade-green">
            <span className="inline-block w-3 h-3 bg-gold/30 rounded mr-2"></span>
            {t('best_value_indicator')}
          </p>
        </div>
      )}
    </div>
  );
}