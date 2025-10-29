import { HeaderWithCards } from "@/components/layout/HeaderWithCards";
import { InvestorVisaCard } from "@/components/groundscript/external/InvestorVisaCard";
import { GoldenKey } from "@/components/groundscript/external/GoldenKey";
import { HeaderCards } from "@/components/groundscript/external/HeaderCards";
import { HeaderDropdown } from "@/components/groundscript/external/HeaderDropdown";

export default function TestHeaderPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header with Cards */}
      <HeaderWithCards />
      
      {/* Spacer to push content below header */}
      <div className="h-32"></div>
      
      {/* Test Section */}
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-center mb-12">Componentes de Prueba</h1>
        
        {/* Full Size Components */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-xl font-semibold mb-6 text-center">InvestorVisaCard (Completo)</h2>
            <div className="flex justify-center">
              <InvestorVisaCard />
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-6 text-center">GoldenKey (Completo)</h2>
            <div className="flex justify-center">
              <GoldenKey />
            </div>
          </div>
        </div>
        
        {/* Compact Components */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div>
            <h2 className="text-lg font-semibold mb-4 text-center">HeaderCards (Carrusel)</h2>
            <div className="flex justify-center">
              <HeaderCards />
            </div>
          </div>
          
          <div>
            <h2 className="text-lg font-semibold mb-4 text-center">HeaderDropdown (Desplegable)</h2>
            <div className="flex justify-center">
              <HeaderDropdown />
            </div>
          </div>
          
          <div>
            <h2 className="text-lg font-semibold mb-4 text-center">Espacio reservado</h2>
            <div className="bg-white p-6 rounded-lg shadow-md text-center text-slate-600">
              Componente adicional
            </div>
          </div>
        </div>
        
        {/* Instructions */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Instrucciones de Prueba</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-700">
            <li>El header incluye un menú desplegable "Oportunidades" con las tarjetas compactas</li>
            <li>Prueba el carrusel de tarjetas usando los botones de navegación</li>
            <li>Expande las tarjetas compactas para ver más información</li>
            <li>Verifica la responsividad en diferentes tamaños de pantalla</li>
            <li>Prueba las animaciones y transiciones</li>
          </ul>
        </div>
      </div>
    </div>
  );
}