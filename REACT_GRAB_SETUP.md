# React Grab - Guía de Instalación y Uso

## ¿Qué es React Grab?

React Grab es una herramienta que permite capturar cualquier elemento de tu aplicación web para proporcionar contexto a herramientas de IA como Cursor, Claude Code, etc. Es especialmente útil para desarrollo asistido por IA.

## Instalación Completada ✅

React Grab ha sido instalado y configurado en tu proyecto Next.js con los siguientes componentes:

### 1. Script Global (layout.tsx)
- **Archivo**: `src/app/layout.tsx`
- **Función**: Carga el script de React Grab en modo desarrollo
- **Activación**: Solo se carga cuando `NODE_ENV === "development"`

### 2. Componente de Integración
- **Archivo**: `src/components/ReactGrabIntegration.tsx`
- **Función**: Proporciona una interfaz React para interactuar con React Grab
- **Características**:
  - Configuración personalizable
  - Manejo de eventos
  - Soporte para adaptadores personalizados

### 3. Página de Demostración
- **Ruta**: `/react-grab-demo`
- **Función**: Ejemplos interactivos para probar React Grab
- **Elementos**: Tarjetas, formularios, listas, elementos con estilos complejos

### 4. Documentación Completa
- **Ruta**: `/react-grab-docs`
- **Contenido**: 
  - Uso básico
  - Configuración avanzada
  - Integración con herramientas de IA
  - Ejemplos de código

## Cómo Usar React Grab

### Uso Básico
1. Mantén presionada la tecla `⌘` + `C`
2. Haz clic en cualquier elemento de la página
3. Verás una interfaz para capturar el elemento
4. Copia el contexto para usarlo en herramientas de IA

### Configuración Personalizada

Puedes personalizar React Grab usando el componente `ReactGrabIntegration`:

```tsx
import ReactGrabIntegration from '@/components/ReactGrabIntegration';

const MyComponent = () => {
  const handleElementSelected = (elementData) => {
    console.log('Elemento capturado:', elementData);
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
};
```

### Opciones de Configuración

```typescript
{
  enabled: boolean,                    // Activar/desactivar
  hotkey: string | string[],           // Teclas de acceso rápido (default: ["Meta", "C"])
  keyHoldDuration: number,             // Duración de la tecla en ms (default: 1000)
  adapter: Adapter                     // Adaptador personalizado
}
```

## Integración con Herramientas de IA

### Cursor
- Captura un elemento con ⌘+C
- Pega el contexto en el chat de Cursor
- Cursor usará el contexto para generar código más preciso

### Claude Code
- Usa el contexto capturado en tus prompts
- Claude Code tendrá información precisa sobre los elementos

### OpenCode
- Configura un adaptador personalizado
- OpenCode puede recibir contexto directamente

## Archivos Modificados/Creados

### Archivos Modificados
- `src/app/layout.tsx` - Agregado script de React Grab

### Archivos Creados
- `src/components/ReactGrabIntegration.tsx` - Componente de integración
- `src/app/react-grab-demo/page.tsx` - Página de demostración
- `src/app/react-grab-docs/page.tsx` - Documentación completa
- `REACT_GRAB_SETUP.md` - Esta guía

## Notas Importantes

1. **Solo en Desarrollo**: React Grab solo se carga en modo desarrollo para no afectar el rendimiento en producción
2. **Sin Impacto en Producción**: El script no se incluye en el bundle de producción
3. **Compatibilidad**: Funciona con todos los navegadores modernos
4. **Seguridad**: No expone información sensible, solo estructura DOM y estilos

## Pruebas

Para probar React Grab:

1. Visita `http://localhost:3000/react-grab-demo`
2. Sigue las instrucciones en la página
3. Prueba capturar diferentes elementos
4. Verifica la documentación en `http://localhost:3000/react-grab-docs`

## Soporte

Para más información:
- Documentación oficial: https://react-grab.com
- Repositorio: https://github.com/aidenybai/react-grab
- Issues: https://github.com/aidenybai/react-grab/issues

---

**¡React Grab está listo para usar en tu proyecto!** 🎉