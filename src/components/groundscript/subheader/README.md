# Componente Titulos

Componente de encabezado dinámico para páginas con pestañas de navegación. Ahora es completamente configurable y utiliza las variables de traducción existentes.

## Características

- ✅ Totalmente dinámico con props configurables
- ✅ Soporte completo de internacionalización con next-intl
- ✅ Usa las variables de traducción existentes
- ✅ Imagen de fondo configurable
- ✅ Pestañas personalizables con traducciones
- ✅ Animaciones con Framer Motion
- ✅ Diseño responsive
- ✅ Compatible con el sistema de diseño de groundscript

## Uso Básico

```tsx
import { Titulos } from '@/components/groundscript/subheader';

// En tu página o componente
<Titulos />
```

## Uso Dinámico

El componente ahora acepta props para personalizar completamente su contenido:

```tsx
import { Titulos } from '@/components/groundscript/subheader';

<Titulos
  titleKey="residency.title"
  descriptionKey="residency.subtitle"
  translationNamespace="residency"
  backgroundImage="/assets/custom-image.jpg"
  tabs={[
    { id: "visa", labelKey: "qualified_investor.title" },
    { id: "benefits", labelKey: "qualified_investor.benefits.title" },
    { id: "investment", labelKey: "investment_options.title" }
  ]}
  defaultActiveTab="visa"
/>
```

## Props

| Prop | Tipo | Valor por defecto | Descripción |
|------|------|-------------------|-------------|
| `titleKey` | `string` | `"title"` | Clave de traducción para el título principal |
| `descriptionKey` | `string` | `"subtitle"` | Clave de traducción para la descripción |
| `translationNamespace` | `string` | `"residency"` | Namespace para las traducciones |
| `backgroundImage` | `string` | `"/assets/1.png"` | URL de la imagen de fondo |
| `tabs` | `TabItem[]` | Ver abajo | Array de pestañas con claves de traducción |
| `defaultActiveTab` | `string` | `"visa"` | ID de la pestaña activa por defecto |

## TabItem

```tsx
interface TabItem {
  id: string;           // Identificador único de la pestaña
  labelKey: string;     // Clave de traducción para la etiqueta
}
```

## Ejemplos de Uso

### Para página de Bienes Raíces

```tsx
<Titulos
  titleKey="real_estate.title"
  descriptionKey="real_estate.subtitle"
  translationNamespace="real_estate"
  backgroundImage="/assets/real-estate.jpg"
  tabs={[
    { id: "luxury", labelKey: "luxury_market.title" },
    { id: "mid_range", labelKey: "mid_range.title" },
    { id: "emerging", labelKey: "emerging_areas.title" }
  ]}
  defaultActiveTab="luxury"
/>
```

### Para página de Turismo Médico

```tsx
<Titulos
  titleKey="medical_tourism.title"
  descriptionKey="medical_tourism.subtitle"
  translationNamespace="medical_tourism"
  backgroundImage="/assets/medical.jpg"
  tabs={[
    { id: "cost", labelKey: "cost_comparison.title" },
    { id: "quality", labelKey: "quality_care.title" },
    { id: "treatments", labelKey: "treatments.title" }
  ]}
  defaultActiveTab="cost"
/>
```

### Para página sobre Panamá

```tsx
<Titulos
  titleKey="about_panama.title"
  descriptionKey="about_panama.subtitle"
  translationNamespace="about_panama"
  backgroundImage="/assets/panama-skyline.jpg"
  tabs={[
    { id: "location", labelKey: "strategic_location.title" },
    { id: "economy", labelKey: "economic_benefits.title" },
    { id: "tax", labelKey: "tax_advantages.title" },
    { id: "quality", labelKey: "quality_of_life.title" }
  ]}
  defaultActiveTab="location"
/>
```

## Estructura del Componente

El componente consiste en:

1. **Imagen de fondo**: Configurable con la prop `backgroundImage`
2. **Título principal**: Dinámico usando `titleKey` y traducciones
3. **Descripción**: Dinámica usando `descriptionKey` y traducciones
4. **Navegación de pestañas**: Configurable con el array `tabs`

## Dependencias

- `next/image` para optimización de imágenes
- `motion/react` para animaciones
- `next-intl` para internacionalización

## Personalización CSS

El componente utiliza las variables CSS definidas en `minimal-design-system.css`:

- `--jade-green` para el color principal
- `--text-*` para la tipografía
- Clases de animación predefinidas

## Notas

- El componente es completamente responsive
- Utiliza posicionamiento relativo como se requiere en las especificaciones
- Las pestañas tienen estados hover y active con transiciones suaves
- El componente es accesible y sigue las mejores prácticas de React
- Todas las traducciones se manejan a través del sistema next-intl