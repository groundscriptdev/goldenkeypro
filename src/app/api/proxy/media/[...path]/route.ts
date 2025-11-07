/**
 * API Route Proxy para Media (imágenes)
 * Este proxy maneja todas las solicitudes de imágenes para evitar problemas de CORS
 * y servir imágenes desde el backend externo
 */

import { NextRequest, NextResponse } from 'next/server';

const MEDIA_BASE_URL = process.env.NEXT_PUBLIC_MEDIA_URL || 'https://engine.panamagoldenkey.com';

export async function GET(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  try {
    // Reconstruir la ruta de la imagen
    const path = params.path.filter(segment => segment !== '').join('/');
    
    // Evitar doble /media/ si la ruta ya incluye /media/
    const cleanPath = path.startsWith('media/') ? path : `media/${path}`;
    const externalUrl = `${MEDIA_BASE_URL}/${cleanPath}`;
    
    
    // Hacer la solicitud al servidor externo
    const response = await fetch(externalUrl, {
      method: 'GET',
      headers: {
        // Puedes agregar headers adicionales si es necesario
        // 'Authorization': `Bearer ${process.env.API_TOKEN}`,
      },
    });

    if (!response.ok) {
      console.error('Error from media server:', response.status, response.statusText);
      return NextResponse.json(
        { error: `Error from media server: ${response.status}` },
        { status: response.status }
      );
    }

    // Obtener el tipo de contenido de la respuesta
    const contentType = response.headers.get('content-type') || 'image/jpeg';
    
    // Obtener los datos de la imagen como buffer
    const imageBuffer = await response.arrayBuffer();

    // Devolver la imagen con los headers correctos
    const responseHeaders = new Headers();
    responseHeaders.set('Content-Type', contentType);
    responseHeaders.set('Cache-Control', 'public, max-age=31536000, immutable'); // Cache por 1 año
    responseHeaders.set('Access-Control-Allow-Origin', '*');
    responseHeaders.set('Access-Control-Allow-Methods', 'GET');
    responseHeaders.set('Access-Control-Allow-Headers', 'Content-Type');

    return new NextResponse(imageBuffer, {
      status: 200,
      headers: responseHeaders,
    });

  } catch (error) {
    console.error('Media proxy error:', error);
    return NextResponse.json(
      { error: 'Internal server error in media proxy', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

// Manejar solicitudes OPTIONS para CORS preflight
export async function OPTIONS() {
  const responseHeaders = new Headers();
  responseHeaders.set('Access-Control-Allow-Origin', '*');
  responseHeaders.set('Access-Control-Allow-Methods', 'GET');
  responseHeaders.set('Access-Control-Allow-Headers', 'Content-Type');
  
  return new NextResponse(null, {
    status: 200,
    headers: responseHeaders,
  });
}