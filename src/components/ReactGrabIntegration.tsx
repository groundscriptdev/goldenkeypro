'use client';

import { useEffect, useRef, useState } from 'react';

interface ReactGrabIntegrationProps {
  enabled?: boolean;
  onElementSelected?: (elementData: any) => void;
  customAdapter?: {
    name: string;
    open: (promptText: string) => void;
  };
}

export default function ReactGrabIntegration({
  enabled = true,
  onElementSelected,
  customAdapter
}: ReactGrabIntegrationProps) {
  const isInitialized = useRef(false);

  useEffect(() => {
    // Solo ejecutar en el cliente y en desarrollo
    if (typeof window === 'undefined' || process.env.NODE_ENV !== 'development') {
      return;
    }

    const initReactGrab = async () => {
      try {
        // Esperar a que el script global esté disponible
        const waitForReactGrab = () => {
          return new Promise((resolve) => {
            const checkInterval = setInterval(() => {
              if ((window as any).ReactGrab) {
                clearInterval(checkInterval);
                resolve((window as any).ReactGrab);
              }
            }, 100);

            // Timeout después de 10 segundos
            setTimeout(() => {
              clearInterval(checkInterval);
              resolve(null);
            }, 10000);
          });
        };

        const reactGrab = await waitForReactGrab() as any;

        if (!reactGrab) {
          console.warn('React Grab no se pudo cargar después de 10 segundos');
          return;
        }

        if (!isInitialized.current && enabled) {
          const { init, cursorAdapter, libStore } = reactGrab;

          // Crear un adaptador personalizado que copia al portapapeles
          const clipboardAdapter = {
            name: 'clipboard',
            open: (promptText: string) => {
              // Copiar al portapapeles
              navigator.clipboard.writeText(promptText).then(() => {
                console.log('Contexto copiado al portapapeles');
              }).catch(err => {
                console.error('Error al copiar al portapapeles:', err);
                // Fallback: usar método antiguo
                const textArea = document.createElement('textarea');
                textArea.value = promptText;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                console.log('Contexto copiado al portapapeles (fallback)');
              });
            }
          };

          // Configurar opciones personalizadas si se proporcionan
          const options = {
            enabled,
            adapter: customAdapter || clipboardAdapter,
            hotkey: ['Control', 'Shift', 'G'], // Ctrl+Shift+G como alternativa
            keyHoldDuration: 500, // 0.5 segundos para facilitar prueba
          };

          // Inicializar react-grab
          const cleanup = init(options);

          // Suscribirse a cambios en el store para capturar selecciones
          if (onElementSelected && libStore) {
            const unsubscribe = libStore.subscribe((state: any, prevState: any) => {
              if (state.overlayMode === 'visible' && prevState?.overlayMode !== 'visible') {
                // Cuando la overlay se hace visible, significa que se seleccionó un elemento
                onElementSelected({
                  mouseX: state.mouseX,
                  mouseY: state.mouseY,
                  timestamp: Date.now()
                });
              }
            });

            isInitialized.current = true;
            console.log('React Grab inicializado correctamente');
            
            return () => {
              unsubscribe();
              if (cleanup && typeof cleanup === 'function') {
                cleanup();
              }
            };
          }

          isInitialized.current = true;
          console.log('React Grab inicializado correctamente');
          return cleanup;
        }
      } catch (error) {
        console.warn('React Grab no está disponible o ya fue inicializado:', error);
      }
    };

    const cleanupPromise = initReactGrab();

    return () => {
      if (cleanupPromise) {
        cleanupPromise.then(cleanupFn => {
          if (cleanupFn && typeof cleanupFn === 'function') {
            cleanupFn();
          }
        });
      }
    };
  }, [enabled, onElementSelected, customAdapter]);

  // Este componente no renderiza nada visualmente
  return null;
}

// Hook personalizado para usar react-grab en otros componentes
export function useReactGrab() {
  const [isGrabbing, setIsGrabbing] = useState(false);
  const [lastSelectedElement, setLastSelectedElement] = useState<any>(null);

  const handleElementSelected = (elementData: any) => {
    setLastSelectedElement(elementData);
    setIsGrabbing(false);
  };

  return {
    isGrabbing,
    lastSelectedElement,
    handleElementSelected
  };
}