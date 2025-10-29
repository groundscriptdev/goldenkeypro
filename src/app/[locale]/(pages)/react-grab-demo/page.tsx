'use client';

import { useState } from 'react';

export default function ReactGrabDemo() {
  const [selectedElement, setSelectedElement] = useState<string>('');
  const [copiedText, setCopiedText] = useState<string>('');
  const [contextOutput, setContextOutput] = useState<string>('');

  const testManualCopy = () => {
    const testElement = document.querySelector('button');
    if (testElement) {
      const elementInfo = {
        tagName: testElement.tagName,
        textContent: testElement.textContent,
        className: testElement.className,
        id: testElement.id,
        innerHTML: testElement.innerHTML,
        styles: window.getComputedStyle(testElement).cssText
      };
      
      const contextText = `
Elemento Capturado:
----------------
Tag: ${elementInfo.tagName}
Texto: ${elementInfo.textContent}
Clase: ${elementInfo.className}
ID: ${elementInfo.id}
HTML: ${elementInfo.innerHTML}
Estilos: ${elementInfo.styles}

Este contexto puede ser usado en herramientas de IA como Cursor, Claude Code, etc.
      `.trim();
      
      // Mostrar el contexto en la pantalla
      setContextOutput(contextText);
      
      // Intentar copiar al portapapeles
      navigator.clipboard.writeText(contextText).then(() => {
        setCopiedText('✅ ¡Contexto copiado al portapapeles!');
        setTimeout(() => setCopiedText(''), 5000);
      }).catch(err => {
        console.error('Error al copiar:', err);
        // Fallback
        try {
          const textArea = document.createElement('textarea');
          textArea.value = contextText;
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
          setCopiedText('✅ ¡Contexto copiado al portapapeles (fallback)!');
          setTimeout(() => setCopiedText(''), 5000);
        } catch (fallbackErr) {
          setCopiedText('⚠️ No se pudo copiar al portapapeles, pero el contexto se muestra abajo');
          setTimeout(() => setCopiedText(''), 5000);
        }
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">
          React Grab Demo
        </h1>
        
        <div className="bg-gradient-to-r from-emerald-100 to-teal-100 border-2 border-emerald-200 rounded-xl p-6 mb-8 shadow-lg">
          <h2 className="text-xl font-semibold text-emerald-900 mb-2">
            ¿Cómo usar React Grab?
          </h2>
          <ol className="list-decimal list-inside text-emerald-800 space-y-2">
            <li>Mantén presionada la tecla <kbd className="px-2 py-1 bg-emerald-200 text-emerald-800 rounded-md border border-emerald-300 font-mono">Ctrl</kbd> + <kbd className="px-2 py-1 bg-emerald-200 text-emerald-800 rounded-md border border-emerald-300 font-mono">Shift</kbd> + <kbd className="px-2 py-1 bg-emerald-200 text-emerald-800 rounded-md border border-emerald-300 font-mono">G</kbd></li>
            <li>Haz clic en cualquier elemento de esta página</li>
            <li>Verás una interfaz para capturar el elemento y su contexto</li>
            <li>Puedes enviar esta información a herramientas como Cursor, Claude Code, etc.</li>
          </ol>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-emerald-100">
            <h3 className="text-lg font-semibold text-emerald-800 mb-2">Tarjeta de Producto</h3>
            <p className="text-gray-600 mb-4">Este es un ejemplo de tarjeta que puedes seleccionar con React Grab.</p>
            <button className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-md hover:shadow-lg font-medium">
              Acción Principal
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-emerald-100">
            <h3 className="text-lg font-semibold text-emerald-800 mb-2">Formulario de Contacto</h3>
            <input 
              type="text" 
              placeholder="Nombre completo" 
              className="w-full p-3 border-2 border-emerald-200 rounded-lg mb-3 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-200 transition-all duration-200"
            />
            <input 
              type="email" 
              placeholder="Correo electrónico" 
              className="w-full p-3 border-2 border-emerald-200 rounded-lg mb-3 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-200 transition-all duration-200"
            />
            <textarea 
              placeholder="Mensaje" 
              className="w-full p-3 border-2 border-emerald-200 rounded-lg mb-3 h-20 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-200 transition-all duration-200 resize-none"
            />
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 rounded-xl p-8 text-white mb-8 shadow-xl">
          <h3 className="text-2xl font-bold mb-4">Elemento con Estilos Complejos</h3>
          <p className="mb-4 text-emerald-50">Este elemento tiene gradientes y estilos más complejos que puedes capturar.</p>
          <div className="flex space-x-4">
            <span className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-lg border border-white border-opacity-30">Etiqueta 1</span>
            <span className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-lg border border-white border-opacity-30">Etiqueta 2</span>
            <span className="bg-white bg-opacity-20 backdrop-blur-sm px-4 py-2 rounded-lg border border-white border-opacity-30">Etiqueta 3</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 border border-emerald-100">
          <h3 className="text-lg font-semibold text-emerald-800 mb-4">Lista de Tareas</h3>
          <ul className="space-y-3">
            <li className="flex items-center p-3 bg-emerald-50 rounded-lg border border-emerald-100">
              <input type="checkbox" className="mr-3 w-5 h-5 text-emerald-600 border-emerald-300 rounded focus:ring-emerald-200" />
              <span className="text-emerald-800 font-medium">Tarea número 1</span>
            </li>
            <li className="flex items-center p-3 bg-emerald-50 rounded-lg border border-emerald-100">
              <input type="checkbox" className="mr-3 w-5 h-5 text-emerald-600 border-emerald-300 rounded focus:ring-emerald-200" />
              <span className="text-emerald-800 font-medium">Tarea número 2</span>
            </li>
            <li className="flex items-center p-3 bg-emerald-50 rounded-lg border border-emerald-100">
              <input type="checkbox" className="mr-3 w-5 h-5 text-emerald-600 border-emerald-300 rounded focus:ring-emerald-200" />
              <span className="text-emerald-800 font-medium">Tarea número 3</span>
            </li>
          </ul>
        </div>

        <div className="mt-8 text-center text-emerald-600">
          <p className="text-lg font-medium">Intenta seleccionar diferentes elementos manteniendo Ctrl+Shift+G y haciendo clic</p>
          
          <div className="mt-6 p-6 bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-200 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold text-emerald-900 mb-4">Prueba Manual</h3>
            <p className="text-emerald-700 mb-6 text-lg">
              Si la combinación de teclas no funciona, prueba este botón manual:
            </p>
            <button 
              onClick={testManualCopy}
              className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-xl hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl font-bold text-lg"
            >
              Probar Copia Manual del Botón
            </button>
            {copiedText && (
              <div className="mt-6 p-4 bg-gradient-to-r from-green-100 to-emerald-100 border-2 border-green-300 rounded-xl text-green-800 font-medium shadow-md">
                {copiedText}
              </div>
            )}
            
            {contextOutput && (
              <div className="mt-8 p-6 bg-gradient-to-r from-gray-50 to-emerald-50 border-2 border-emerald-200 rounded-xl shadow-lg">
                <h4 className="font-bold text-emerald-900 mb-4 text-lg">Contexto Generado:</h4>
                <pre className="text-sm text-emerald-800 whitespace-pre-wrap bg-white p-4 rounded-lg border border-emerald-200 font-mono leading-relaxed">
                  {contextOutput}
                </pre>
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText(contextOutput).then(() => {
                      setCopiedText('✅ ¡Contexto copiado al portapapeles!');
                      setTimeout(() => setCopiedText(''), 5000);
                    });
                  }}
                  className="mt-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-xl hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-md hover:shadow-lg font-medium"
                >
                  Copiar Contexto
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}