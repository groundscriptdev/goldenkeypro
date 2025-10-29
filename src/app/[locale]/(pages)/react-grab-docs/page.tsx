'use client';

import { useState } from 'react';

export default function ReactGrabDocs() {
  const [activeTab, setActiveTab] = useState('basico');

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Documentación de React Grab
        </h1>

        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {['basico', 'avanzado', 'integracion'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {activeTab === 'basico' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                ¿Qué es React Grab?
              </h2>
              <p className="text-gray-600 mb-4">
                React Grab es una herramienta que te permite capturar cualquier elemento de tu aplicación web 
                y proporcionar contexto a herramientas de IA como Cursor, Claude Code, etc.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-blue-800">
                  <strong>Características principales:</strong>
                </p>
                <ul className="list-disc list-inside text-blue-700 mt-2">
                  <li>Captura de elementos con ⌘+C</li>
                  <li>Integración con herramientas de IA</li>
                  <li>Solo se activa en modo desarrollo</li>
                  <li>No afecta el rendimiento en producción</li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Uso Básico
              </h2>
              <ol className="list-decimal list-inside text-gray-600 space-y-2">
                <li>Mantén presionada la tecla <kbd className="px-2 py-1 bg-gray-100 rounded">⌘</kbd> + <kbd className="px-2 py-1 bg-gray-100 rounded">C</kbd></li>
                <li>Haz clic en cualquier elemento de la página</li>
                <li>Verás una interfaz para capturar el elemento</li>
                <li>Copia el contexto para usarlo en herramientas de IA</li>
              </ol>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Configuración en el Proyecto
              </h2>
              <p className="text-gray-600 mb-4">
                React Grab ya está configurado en tu proyecto en los siguientes archivos:
              </p>
              <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm">
                <p><span className="text-blue-600">1.</span> <code>src/app/layout.tsx</code> - Script global</p>
                <p><span className="text-blue-600">2.</span> <code>src/components/ReactGrabIntegration.tsx</code> - Componente de integración</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'avanzado' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Configuración Avanzada
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-700 mb-2">Opciones de Configuración</h3>
                  <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm">
                    <pre>{`{
  enabled: true,                    // Activar/desactivar
  hotkey: ['Meta', 'C'],            // Teclas de acceso rápido
  keyHoldDuration: 1000,            // Duración de la tecla (ms)
  adapter: customAdapter            // Adaptador personalizado
}`}</pre>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-700 mb-2">Adaptadores Personalizados</h3>
                  <p className="text-gray-600 mb-2">
                    Puedes crear adaptadores personalizados para integrar con diferentes herramientas:
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm">
                    <pre>{`const customAdapter = {
  name: 'mi-herramienta',
  open: (promptText) => {
    // Lógica para enviar a tu herramienta
    console.log('Enviando:', promptText);
  }
};`}</pre>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Eventos y Estado
              </h2>
              <p className="text-gray-600 mb-4">
                React Grab expone un store con el siguiente estado:
              </p>
              <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm">
                <pre>{`{
  keyPressTimestamps: Map,     // Timestamps de teclas presionadas
  mouseX: number,              // Posición X del mouse
  mouseY: number,              // Posición Y del mouse
  overlayMode: 'copying' | 'hidden' | 'visible',
  pressedKeys: Set             // Teclas actualmente presionadas
}`}</pre>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'integracion' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Integración con Herramientas de IA
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-700 mb-2">Cursor</h3>
                  <p className="text-gray-600">
                    React Grab funciona perfectamente con Cursor. Simplemente captura un elemento 
                    y pega el contexto en el chat de Cursor.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-700 mb-2">Claude Code</h3>
                  <p className="text-gray-600">
                    Para usar con Claude Code, captura el elemento y usa el contexto generado 
                    en tus prompts.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-700 mb-2">OpenCode</h3>
                  <p className="text-gray-600">
                    OpenCode puede recibir directamente el contexto de React Grab a través 
                    de adaptadores personalizados.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Ejemplo de Integración Personalizada
              </h2>
              <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm">
                <pre>{`import ReactGrabIntegration from '@/components/ReactGrabIntegration';

const MyComponent = () => {
  const handleElementSelected = (elementData) => {
    // Procesar el elemento seleccionado
    console.log('Elemento capturado:', elementData);
    
    // Enviar a tu herramienta personalizada
    sendToMyTool(elementData);
  };

  return (
    <ReactGrabIntegration
      enabled={true}
      onElementSelected={handleElementSelected}
      customAdapter={{
        name: 'my-tool',
        open: (promptText) => sendToMyTool(promptText)
      }}
    />
  );
};`}</pre>
              </div>
            </div>
          </div>
        )}

        <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-green-800 mb-2">
            ¡Listo para usar!
          </h2>
          <p className="text-green-700 mb-4">
            React Grab ya está configurado y listo para usar en tu proyecto. 
            Prueba visitando la página de demostración:
          </p>
          <a 
            href="/react-grab-demo" 
            className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Ver Demostración
          </a>
        </div>
      </div>
    </div>
  );
}