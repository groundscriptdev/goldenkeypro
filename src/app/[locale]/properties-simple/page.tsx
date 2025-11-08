import { PropertiesAPI } from "@/lib/api/properties";
import PropertyCard from "@/components/properties/PropertyCard";

// Esta es una versión simplificada que evita problemas de hidratación
export default async function PropertiesSimplePage() {
  console.log("🚀 PropertiesSimplePage: Cargando datos en servidor");
  
  try {
    const api = new PropertiesAPI();
    const data = await api.getProperties("");
    
    console.log("🚀 PropertiesSimplePage: Datos cargados en servidor:", data.results?.length);
    
    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">Propiedades (Versión Simplificada)</h1>
        
        <div className="mb-4 p-4 bg-blue-100 border-2 border-blue-300 rounded">
          <p className="text-lg">
            ✅ <strong>Servidor:</strong> {data.results?.length || 0} propiedades cargadas
          </p>
          <p className="text-sm text-gray-600">
            Esta página evita problemas de hidratación al cargar datos en el servidor
          </p>
        </div>
        
        {data.results && data.results.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.results.map((property) => (
              <PropertyCard key={property.id} property={property} locale="es" />
            ))}
          </div>
        )}
        
        {(!data.results || data.results.length === 0) && (
          <div className="text-center p-8 text-gray-500">
            No se encontraron propiedades
          </div>
        )}
      </div>
    );
  } catch (error) {
    console.error("🚀 PropertiesSimplePage: Error en servidor:", error);
    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6 text-red-500">Error</h1>
        <p className="text-red-600">No se pudieron cargar las propiedades</p>
      </div>
    );
  }
}