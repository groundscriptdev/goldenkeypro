import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import { GroundHeaderMinimal } from "@/components/layout/GroundHeaderMinimal";
import { FooterMinimal } from "@/components/layout/FooterMinimal";
import { generateSEO } from "@/lib/seo";
import TestPropertyCardWrapper from "@/components/test/TestPropertyCardWrapper";

interface TestModalPageProps {
  params: { locale: string };
}

export async function generateMetadata({
  params,
}: TestModalPageProps): Promise<Metadata> {
  return generateSEO({
    title: "Test Property Modal - Panama Golden Key",
    description: "Página de prueba para el Property Modal con tabs",
    keywords: "test modal, property tabs, panama real estate",
    canonical: `https://panamagoldenkey.com/${params.locale}/test-modal`,
    locale: params.locale,
  });
}

export default async function TestModalPage({
  params,
}: TestModalPageProps) {
  const t = await getTranslations("common");

  // IDs de propiedades de prueba (ajusta según tus datos reales)
  const testPropertyIds = [
    "1", // Reemplaza con IDs reales de tu backend
    "2",
    "3",
  ];

  return (
    <>
      <div className="min-h-screen">
        <GroundHeaderMinimal />
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-jade-green mb-4">
                Test Property Modal con Tabs
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Prueba el nuevo modal con 8 tabs para propiedades
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Propiedades de Prueba
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {testPropertyIds.map((propertyId) => (
                  <TestPropertyCardWrapper
                    key={propertyId}
                    propertyId={propertyId}
                    locale={params.locale}
                  />
                ))}
              </div>

              <div className="bg-jade-green/10 border border-jade-green/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-jade-green mb-4">
                  📋 Instrucciones de Prueba
                </h3>
                <ol className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">1.</span>
                    Haz clic en "Ver Detalles" en cualquier propiedad de prueba
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">2.</span>
                    El modal se abrirá y cargará los datos desde el backend
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">3.</span>
                    Navega por las 8 tabs: Resumen, Finanzas, Ubicación, Multimedia, Agente, Legal, Análisis, IA, Marketing
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">4.</span>
                    Verifica que cada tab muestre los datos correspondientes del backend
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">5.</span>
                    Prueba los estados de carga y error
                  </li>
                </ol>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">
                    🔧 Características Implementadas
                  </h3>
                  <ul className="space-y-2 text-blue-700">
                    <li>✅ 8 tabs organizadas</li>
                    <li>✅ Consumo de API /api/properties/{"{id}"}</li>
                    <li>✅ Datos anidados completos</li>
                    <li>✅ Estados de carga y error</li>
                    <li>✅ Diseño responsive</li>
                    <li>✅ Manejo de datos vacíos</li>
                  </ul>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-green-800 mb-3">
                    🎯 Estructura de Datos
                  </h3>
                  <ul className="space-y-2 text-green-700">
                    <li><strong>financials:</strong> precio, ROI, rentabilidad</li>
                    <li><strong>location:</strong> dirección, coordenadas, walk score</li>
                    <li><strong>media:</strong> imágenes, videos, tours virtuales</li>
                    <li><strong>agent:</strong> info del agente y contacto</li>
                    <li><strong>legal:</strong> documentos y estado legal</li>
                    <li><strong>analytics:</strong> métricas y estadísticas</li>
                    <li><strong>ai:</strong> análisis y predicciones</li>
                    <li><strong>marketing:</strong> datos de CRM</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
        <FooterMinimal />
      </div>
    </>
  );
}
