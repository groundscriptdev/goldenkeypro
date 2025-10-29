# Panama Golden Key - Unified Platform

Una plataforma unificada que combina el contenido informativo de Panama Golden Key con las funcionalidades inmobiliarias avanzadas del sistema Zillow.

## Arquitectura del Proyecto

### Estructura Base

- **Frontend**: Next.js 14.2.5 con TypeScript y Tailwind CSS
- **Diseño**: Sistema minimalista basado en Panama Golden Key
- **Internacionalización**: Soporte para inglés, español y chino
- **Componentes**: Sistema de diseño unificado con componentes reutilizables

### Sistema de Backends Múltiples

#### Backend Panama (Contenido General)

- **URL**: `http://localhost:3001` (configurable via `NEXT_PUBLIC_PANAMA_API_URL`)
- **Propósito**: Gestión de contenido general, páginas informativas, formularios de contacto
- **Endpoints**: `/api/properties`, `/api/agents`, `/api/contact`

#### Backend Zillow (Datos Inmobiliarios)

- **URL**: `http://localhost:8001` (configurable via `NEXT_PUBLIC_ZILLOW_API_URL`)
- **Propósito**: Gestión de datos de propiedades, búsqueda avanzada, agentes inmobiliarios
- **Endpoints**: `/properties/api/v1/properties`, `/properties/api/v1/agents`

## Características Principales

### 1. Contenido Informativo Unificado

- **About Panama**: Contenido combinado de información general + infraestructura
- **Secciones Integradas**: Ubicación estratégica, beneficios económicos, ventajas fiscales, calidad de vida
- **Proyectos de Infraestructura**: Metro Línea 3, Cuarto Puente, Sistema Ferroviario

### 2. Sistema de Propiedades Avanzado

- **Búsqueda y Filtrado**: Búsqueda por ubicación, precio, tipo de propiedad, habitaciones
- **Vista de Propiedades**: Tarjetas de propiedades con diseño minimalista
- **Gestión de Favoritos**: Sistema para guardar propiedades preferidas
- **Contacto de Agentes**: Integración directa con agentes inmobiliarios

### 3. Routing Inteligente

- **Detección Automática**: El sistema enruta las peticiones al backend apropiado
- **Contenido vs Propiedades**: Separación clara entre contenido general y datos inmobiliarios
- **Transparencia**: Experiencia de usuario unificada sin importar el origen de los datos

## Instalación y Configuración

### Prerrequisitos

- Node.js 18+
- npm o yarn
- Acceso a ambos backends (Panama y Zillow)

### Pasos de Instalación

1. **Clonar el proyecto**

```bash
cd Out/panama-unified
```

2. **Instalar dependencias**

```bash
npm install
```

3. **Configurar variables de entorno**

```bash
cp .env.example .env.local
```

Editar `.env.local` con las URLs correctas de los backends:

```env
NEXT_PUBLIC_PANAMA_API_URL=http://localhost:3001
NEXT_PUBLIC_ZILLOW_API_URL=http://localhost:8001
```

4. **Ejecutar el proyecto**

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:3000`

## Estructura de Archivos Clave

### Componentes de Propiedades

- `src/components/properties/PropertyCard.tsx` - Tarjeta de propiedad adaptada
- `src/components/properties/PropertySearchClient.tsx` - Sistema de búsqueda y filtrado
- `src/types/properties.ts` - Tipos TypeScript para propiedades
- `src/hooks/useProperties.ts` - Hooks personalizados para gestión de propiedades
- `src/lib/api/properties.ts` - API con routing inteligente

### Páginas Principales

- `src/app/[locale]/(pages)/about-panama/page.tsx` - About Panama con contenido de infraestructura
- `src/app/[locale]/(pages)/properties/page.tsx` - Listado y búsqueda de propiedades

### Sistema de Diseño

- `src/styles/minimal-design-system.css` - Sistema de diseño minimalista
- `src/components/ui/` - Componentes UI base (Input, Select, Button, Card)

## Flujo de Datos

### Contenido General (About Panama, etc.)

1. Usuario navega a `/about-panama`
2. Frontend detecta que es contenido general
3. Petición se enruta al backend Panama (`NEXT_PUBLIC_PANAMA_API_URL`)
4. Contenido se renderiza con el diseño de Panama Golden Key

### Datos Inmobiliarios (Propiedades)

1. Usuario navega a `/properties`
2. Frontend detecta que son datos inmobiliarios
3. Petición se enruta al backend Zillow (`NEXT_PUBLIC_ZILLOW_API_URL`)
4. Datos se renderizan con el diseño adaptado de Panama Golden Key

## Características Técnicas

### Sistema de Diseño Adaptado

- **Colores**: Jade Green y Gold del proyecto original
- **Tipografía**: Inter con soporte para caracteres chinos
- **Componentes**: Cards minimalistas con hover effects
- **Responsive**: Mobile-first design

### Internacionalización

- **Idiomas**: Inglés, español, chino
- **Rutas**: `/[locale]/page` structure
- **Contenido**: Mensajes traducidos en `messages/`

### Optimización

- **Images**: Optimización automática con Next.js Image
- **Performance**: Código dividido por rutas
- **SEO**: Metadatos dinámicos y structured data

## Desarrollo Futuro

### Próximos Pasos

1. **Backend Integration**: Conectar con los backends reales
2. **Testing**: Implementar pruebas unitarias y de integración
3. **Deployment**: Configurar despliegue en producción
4. **Analytics**: Integrar Google Analytics y seguimiento de conversiones

### Mejoras Potenciales

- **Map Integration**: Mapas interactivos para ubicaciones de propiedades
- **Virtual Tours**: Tours 360° para propiedades destacadas
- **Mortgage Calculator**: Calculadora de hipotecas integrada
- **Investment Dashboard**: Panel de seguimiento de inversiones

## Troubleshooting

### Problemas Comunes

1. **Error de conexión con backend**
   - Verificar que los backends estén corriendo
   - Confirmar URLs en `.env.local`
   - Revisar configuración CORS

2. **Componentes no renderizan**
   - Verificar importaciones de componentes
   - Revisar tipos TypeScript
   - Confirmar que las dependencias estén instaladas

3. **Problemas de estilo**
   - Verificar que Tailwind CSS esté configurado
   - Revisar importación de `minimal-design-system.css`
   - Confirmar clases CSS

## Soporte

Para soporte técnico o preguntas sobre el proyecto:

- Email: info@panamagoldenkey.com
- Documentación: Revisar archivos de configuración y comentarios en el código
- Issues: Reportar problemas en el sistema de seguimiento del proyecto

---

**Panama Golden Key Unified Platform** - La mejor combinación de contenido informativo y herramientas inmobiliarias para inversiones en Panamá.
