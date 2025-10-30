# Solución para Problemas de CORS en Panama Golden Key

## Problema Original

La aplicación Next.js experimentaba errores de CORS al intentar hacer solicitudes a la API externa:
```
Solicitud desde otro origen bloqueada: la política de mismo origen impide leer el recurso remoto en https://engine.panamagoldenkey.com/api/properties/
```

## Solución Implementada

Se ha implementado un proxy API en Next.js que actúa como intermediario entre el frontend y la API externa, evitando así los problemas de CORS.

### Componentes de la Solución

#### 1. Rutas API Proxy

**Archivo**: `src/app/api/proxy/properties/[...path]/route.ts`

Esta ruta dinámica maneja todas las solicitudes a la API de propiedades:
- Redirige solicitudes GET, POST, PATCH, DELETE
- Incluye cabeceras CORS necesarias
- Maneja errores de forma transparente
- Soporta todas las rutas de la API original

**Archivo**: `src/app/api/proxy/properties/route.ts`

Ruta específica para el endpoint principal de propiedades.

#### 2. Configuración del Cliente API

**Archivo**: `src/lib/api/properties.ts`

Se ha modificado el cliente para:
- Detectar automáticamente si está en modo desarrollo
- Usar el proxy local en desarrollo (`/api/proxy/properties`)
- Usar la API directa en producción (`https://engine.panamagoldenkey.com/api`)

```typescript
// Determinar si estamos en desarrollo o producción
const isDevelopment = process.env.NODE_ENV === 'development';

// Usar el proxy en desarrollo para evitar CORS, usar la API directa en producción
const API_BASE_URL = isDevelopment 
  ? "/api/proxy/properties"  // Proxy local para desarrollo
  : (process.env.NEXT_PUBLIC_PANAMA_API_URL || "https://engine.panamagoldenkey.com/api");
```

## Cómo Funciona

### En Desarrollo
1. El frontend hace una solicitud a `/api/proxy/properties`
2. Next.js intercepta la solicitud y la procesa en el servidor
3. El servidor hace una solicitud servidor-a-servidor a `https://engine.panamagoldenkey.com/api/properties`
4. La respuesta se devuelve al frontend con las cabeceras CORS apropiadas

### En Producción
1. El frontend hace solicitudes directamente a `https://engine.panamagoldenkey.com/api`
2. Se asume que el servidor de producción tiene configuradas las cabeceras CORS

## Ventajas de esta Solución

1. **Sin Cambios en el Frontend**: Los componentes React no necesitan modificaciones
2. **Transparente**: El manejo de errores y respuestas es idéntico
3. **Automático**: Detección automática del entorno (desarrollo/producción)
4. **Completo**: Soporta todos los métodos HTTP (GET, POST, PATCH, DELETE)
5. **Seguro**: No expone credenciales sensibles en el cliente

## Pruebas Realizadas

### Proxy API
```bash
curl http://localhost:3000/api/proxy/properties
```
✅ Respuesta: 200 OK con datos de propiedades

### Frontend
```bash
curl http://localhost:3000/en/properties
```
✅ Respuesta: 200 OK, página carga sin errores de CORS

## Mantenimiento

### Para agregar nuevos endpoints de la API
Los nuevos endpoints se manejan automáticamente a través de la ruta dinámica `[...path]`. No se requiere configuración adicional.

### Para modificar la URL de la API
Actualizar la variable de entorno `NEXT_PUBLIC_PANAMA_API_URL` en `.env.local`:

```bash
NEXT_PUBLIC_PANAMA_API_URL=https://nueva-api-url.com/api
```

### Para deshabilitar el proxy
Cambiar la detección de entorno en `src/lib/api/properties.ts`:

```typescript
const API_BASE_URL = process.env.NEXT_PUBLIC_PANAMA_API_URL || "https://engine.panamagoldenkey.com/api";
```

## Consideraciones de Seguridad

1. **Validación de Entrada**: El proxy valida las rutas antes de reenviarlas
2. **Manejo de Errores**: Los errores de la API externa se registran y se reenvían de forma segura
3. **Headers CORS**: Se configuran cabeceras CORS específicas en lugar de usar comodines
4. **Logs**: Todas las solicitudes se registran para auditoría

## Alternativas Consideradas

1. **Configurar CORS en el servidor externo**: No posible sin acceso al backend
2. **Usar JSONP**: No adecuado para APIs REST modernas
3. **Browser extensions**: No viable para usuarios finales
4. **Proxy de desarrollo separado**: Más complejo de mantener

La solución implementada es la más robusta y mantenible para este caso de uso.