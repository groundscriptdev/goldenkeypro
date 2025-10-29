# Componentes Externos Adaptados

Esta carpeta contiene componentes adaptados de otros proyectos para ser utilizados en el header de Panama Golden Key.

## Componentes Creados

### 1. InvestorVisaCard.tsx
- **Descripción**: Versión completa del componente VisaCard del proyecto 8676
- **Uso**: Para mostrar información completa sobre la Visa de Inversionista
- **Características**: 
  - Diseño con fondo verde (#1B3D36)
  - Información sobre beneficios y requisitos
  - Botón de llamada a la acción

### 2. InvestorVisaCardCompact.tsx
- **Descripción**: Versión compacta y expandible del componente VisaCard
- **Uso**: Para espacios reducidos como el header
- **Características**: 
  - Diseño plegable con opción de expandir
  - Muestra información clave por defecto
  - Botón para ver más detalles

### 3. GoldenKey.tsx
- **Descripción**: Versión completa del componente ComponenteRazonGoldenKey del proyecto 6533653
- **Uso**: Para mostrar información completa sobre Panama Golden Key
- **Características**: 
  - Diseño con animaciones de fondo
  - Tarjeta central con información principal
  - Cuatro pilares fundamentales

### 4. GoldenKeyCompact.tsx
- **Descripción**: Versión compacta y expandible del componente GoldenKey
- **Uso**: Para espacios reducidos como el header
- **Características**: 
  - Diseño plegable con opción de expandir
  - Muestra información clave por defecto
  - Animaciones sutiles

### 5. HeaderCards.tsx
- **Descripción**: Componente carrusel que combina ambas tarjetas compactas
- **Uso**: Para mostrar ambas opciones en un espacio reducido
- **Características**: 
  - Navegación con botones anterior/siguiente
  - Indicadores visuales
  - Transiciones suaves

### 6. HeaderDropdown.tsx
- **Descripción**: Componente desplegable para el header
- **Uso**: Para integrar las tarjetas en el menú de navegación
- **Características**: 
  - Diseño con pestañas para cambiar entre tarjetas
  - Cierra al hacer clic fuera o presionar Escape
  - Responsive

### 7. HeaderWithCards.tsx
- **Descripción**: Versión modificada del header original que incluye el dropdown
- **Uso**: Reemplazo directo del header original
- **Características**: 
  - Mantiene toda la funcionalidad del header original
  - Añade el dropdown "Oportunidades"
  - Compatible con el diseño existente

## Integración

Para usar estos componentes en el header:

1. Reemplaza el componente `Header` por `HeaderWithCards` en tu layout principal
2. O importa individualmente los componentes que necesites
3. Asegúrate de tener instaladas las dependencias necesarias:
   - `motion/react` para animaciones
   - `lucide-react` para iconos

## Pruebas

Para probar los componentes, visita la página de prueba:
```
http://localhost:3000/test-header
```

Esta página muestra todos los componentes en diferentes formatos para facilitar las pruebas.

## Personalización

Los componentes están diseñados para ser fácilmente personalizables:

- Colores definidos con variables CSS
- Tipografías configuradas con familias de fuentes específicas
- Espaciados y tamaños ajustables
- Animaciones configurables

## Notas de Implementación

- Los componentes compactos están optimizados para dispositivos móviles
- Las animaciones están optimizadas para rendimiento
- Se utilizan técnicas modernas de React (hooks, motion)
- El código sigue las mejores prácticas de accesibilidad