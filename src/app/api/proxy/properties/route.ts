/**
 * API Route Proxy para Properties
 * Este proxy evita problemas de CORS al hacer solicitudes servidor-a-servidor
 */

import { NextRequest, NextResponse } from 'next/server';

const API_BASE_URL = process.env.NEXT_PUBLIC_PANAMA_API_URL || "https://engine.panamagoldenkey.com/api";

// Función para normalizar URLs de imágenes
function normalizeImageUrl(url: string | null): string | null {
  if (!url) return null;
  
  console.log('Normalizando URL:', url);
  
  // Si ya es una URL completa y no es localhost, devolverla tal cual
  if (url.startsWith('http') && !url.includes('localhost')) {
    return url;
  }
  
  // Si es una URL relativa o de localhost, convertirla a producción
  const mediaUrl = 'https://panamagoldenkey.com'; // Forzar producción
  
  if (url.startsWith('http://localhost')) {
    // Reemplazar localhost con el dominio de producción
    const normalized = url.replace('http://localhost:8000', mediaUrl);
    console.log('URL normalizada:', normalized);
    return normalized;
  } else if (url.startsWith('/')) {
    // Es una URL relativa, agregar el dominio
    const normalized = `${mediaUrl}${url}`;
    console.log('URL normalizada:', normalized);
    return normalized;
  } else {
    // Es una ruta sin barra inicial
    const normalized = `${mediaUrl}/${url}`;
    console.log('URL normalizada:', normalized);
    return normalized;
  }
}

// Función para normalizar URLs en un objeto de propiedad
function normalizePropertyImages(property: any): any {
  if (!property) return property;
  
  const normalized = { ...property };
  
  // Normalizar image_url principal
  if (normalized.image_url) {
    normalized.image_url = normalizeImageUrl(normalized.image_url);
  }
  
  // Normalizar otras URLs de imágenes si existen
  if (normalized.images && Array.isArray(normalized.images)) {
    normalized.images = normalized.images.map((img: any) => {
      if (typeof img === 'string') {
        return normalizeImageUrl(img);
      } else if (img && img.url) {
        return { ...img, url: normalizeImageUrl(img.url) };
      }
      return img;
    });
  }
  
  return normalized;
}

// Función para normalizar URLs en una respuesta de API
function normalizeApiResponse(data: any): any {
  if (!data) return data;
  
  // Si es un array de resultados
  if (data.results && Array.isArray(data.results)) {
    return {
      ...data,
      results: data.results.map(normalizePropertyImages)
    };
  }
  
  // Si es un solo objeto de propiedad
  if (data.id || data.uuid) {
    return normalizePropertyImages(data);
  }
  
  return data;
}

export async function GET(request: NextRequest) {
  try {
    // Obtener la URL de la solicitud
    const { searchParams } = new URL(request.url);
    
    // Construir la URL de la API externa
    const externalUrl = `${API_BASE_URL}/properties${searchParams.toString() ? '?' + searchParams.toString() : ''}`;
    
    // Hacer la solicitud al servidor externo
    const response = await fetch(externalUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Puedes agregar headers adicionales si es necesario
        // 'Authorization': `Bearer ${process.env.API_TOKEN}`,
      },
      // Importante: no incluir credentials para evitar problemas CORS
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error from external API:', response.status, errorText);
      return NextResponse.json(
        { error: `Error from external API: ${response.status}` },
        { status: response.status }
      );
    }

    // Obtener los datos de la respuesta
    const data = await response.json();
    
    // Normalizar URLs de imágenes en la respuesta
    const normalizedData = normalizeApiResponse(data);

    // Devolver la respuesta con los mismos headers CORS necesarios
    const responseHeaders = new Headers();
    responseHeaders.set('Access-Control-Allow-Origin', '*');
    responseHeaders.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    responseHeaders.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    responseHeaders.set('Content-Type', 'application/json');

    return NextResponse.json(normalizedData, {
      status: 200,
      headers: responseHeaders,
    });

  } catch (error) {
    console.error('Proxy error:', error);
    return NextResponse.json(
      { error: 'Internal server error in proxy' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    // Obtener el body de la solicitud
    const body = await request.json();
    
    // Construir la URL de la API externa
    const externalUrl = `${API_BASE_URL}/properties`;
    
    // Hacer la solicitud al servidor externo
    const response = await fetch(externalUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Puedes agregar headers adicionales si es necesario
        // 'Authorization': `Bearer ${process.env.API_TOKEN}`,
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error from external API:', response.status, errorText);
      return NextResponse.json(
        { error: `Error from external API: ${response.status}` },
        { status: response.status }
      );
    }

    // Obtener los datos de la respuesta
    const data = await response.json();
    
    // Normalizar URLs de imágenes en la respuesta
    const normalizedData = normalizeApiResponse(data);

    // Devolver la respuesta con los mismos headers CORS necesarios
    const responseHeaders = new Headers();
    responseHeaders.set('Access-Control-Allow-Origin', '*');
    responseHeaders.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    responseHeaders.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    responseHeaders.set('Content-Type', 'application/json');

    return NextResponse.json(normalizedData, {
      status: 200,
      headers: responseHeaders,
    });

  } catch (error) {
    console.error('Proxy error:', error);
    return NextResponse.json(
      { error: 'Internal server error in proxy' },
      { status: 500 }
    );
  }
}

// Manejar solicitudes OPTIONS para CORS preflight
export async function OPTIONS() {
  const responseHeaders = new Headers();
  responseHeaders.set('Access-Control-Allow-Origin', '*');
  responseHeaders.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  responseHeaders.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  return new NextResponse(null, {
    status: 200,
    headers: responseHeaders,
  });
}