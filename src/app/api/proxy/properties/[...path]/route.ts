/**
 * API Route Proxy dinámico para Properties
 * Este proxy maneja todas las rutas de la API de propiedades para evitar problemas de CORS
 */

import { NextRequest, NextResponse } from 'next/server';

const API_BASE_URL = process.env.NEXT_PUBLIC_PANAMA_API_URL?.replace('/properties', '') || "https://engine.panamagoldenkey.com/api";

export async function GET(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  try {
    // Reconstruir la ruta de la API externa
    const path = params.path.join('/');
    const { searchParams } = new URL(request.url);
    const externalUrl = `${API_BASE_URL}/properties/${path}${searchParams.toString() ? '?' + searchParams.toString() : ''}`;
    
    console.log('Proxying GET request to:', externalUrl);
    
    // Hacer la solicitud al servidor externo
    const response = await fetch(externalUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // Puedes agregar headers adicionales si es necesario
        // 'Authorization': `Bearer ${process.env.API_TOKEN}`,
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error from external API:', response.status, errorText);
      return NextResponse.json(
        { error: `Error from external API: ${response.status}`, details: errorText },
        { status: response.status }
      );
    }

    // Obtener los datos de la respuesta
    const data = await response.json();

    // Devolver la respuesta con los headers CORS necesarios
    const responseHeaders = new Headers();
    responseHeaders.set('Access-Control-Allow-Origin', '*');
    responseHeaders.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    responseHeaders.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    responseHeaders.set('Content-Type', 'application/json');

    return NextResponse.json(data, {
      status: 200,
      headers: responseHeaders,
    });

  } catch (error) {
    console.error('Proxy error:', error);
    return NextResponse.json(
      { error: 'Internal server error in proxy', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  try {
    // Reconstruir la ruta de la API externa
    const path = params.path.join('/');
    const externalUrl = `${API_BASE_URL}/properties/${path}`;
    
    console.log('Proxying POST request to:', externalUrl);
    
    // Obtener el body de la solicitud
    const body = await request.text();
    const contentType = request.headers.get('content-type') || '';
    
    // Hacer la solicitud al servidor externo
    const response = await fetch(externalUrl, {
      method: 'POST',
      headers: {
        'Content-Type': contentType,
        // Puedes agregar headers adicionales si es necesario
        // 'Authorization': `Bearer ${process.env.API_TOKEN}`,
      },
      body: body,
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error from external API:', response.status, errorText);
      return NextResponse.json(
        { error: `Error from external API: ${response.status}`, details: errorText },
        { status: response.status }
      );
    }

    // Obtener los datos de la respuesta
    const data = await response.json();

    // Devolver la respuesta con los headers CORS necesarios
    const responseHeaders = new Headers();
    responseHeaders.set('Access-Control-Allow-Origin', '*');
    responseHeaders.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    responseHeaders.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    responseHeaders.set('Content-Type', 'application/json');

    return NextResponse.json(data, {
      status: 200,
      headers: responseHeaders,
    });

  } catch (error) {
    console.error('Proxy error:', error);
    return NextResponse.json(
      { error: 'Internal server error in proxy', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  try {
    // Reconstruir la ruta de la API externa
    const path = params.path.join('/');
    const externalUrl = `${API_BASE_URL}/properties/${path}`;
    
    console.log('Proxying PATCH request to:', externalUrl);
    
    // Obtener el body de la solicitud
    const body = await request.text();
    const contentType = request.headers.get('content-type') || '';
    
    // Hacer la solicitud al servidor externo
    const response = await fetch(externalUrl, {
      method: 'PATCH',
      headers: {
        'Content-Type': contentType,
        // Puedes agregar headers adicionales si es necesario
        // 'Authorization': `Bearer ${process.env.API_TOKEN}`,
      },
      body: body,
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error from external API:', response.status, errorText);
      return NextResponse.json(
        { error: `Error from external API: ${response.status}`, details: errorText },
        { status: response.status }
      );
    }

    // Obtener los datos de la respuesta
    const data = await response.json();

    // Devolver la respuesta con los headers CORS necesarios
    const responseHeaders = new Headers();
    responseHeaders.set('Access-Control-Allow-Origin', '*');
    responseHeaders.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    responseHeaders.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    responseHeaders.set('Content-Type', 'application/json');

    return NextResponse.json(data, {
      status: 200,
      headers: responseHeaders,
    });

  } catch (error) {
    console.error('Proxy error:', error);
    return NextResponse.json(
      { error: 'Internal server error in proxy', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  try {
    // Reconstruir la ruta de la API externa
    const path = params.path.join('/');
    const externalUrl = `${API_BASE_URL}/properties/${path}`;
    
    console.log('Proxying DELETE request to:', externalUrl);
    
    // Hacer la solicitud al servidor externo
    const response = await fetch(externalUrl, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        // Puedes agregar headers adicionales si es necesario
        // 'Authorization': `Bearer ${process.env.API_TOKEN}`,
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error from external API:', response.status, errorText);
      return NextResponse.json(
        { error: `Error from external API: ${response.status}`, details: errorText },
        { status: response.status }
      );
    }

    // Para DELETE, puede que no haya contenido en la respuesta
    const contentType = response.headers.get('content-type');
    let data = null;
    if (contentType && contentType.includes('application/json')) {
      data = await response.json();
    }

    // Devolver la respuesta con los headers CORS necesarios
    const responseHeaders = new Headers();
    responseHeaders.set('Access-Control-Allow-Origin', '*');
    responseHeaders.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    responseHeaders.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    responseHeaders.set('Content-Type', 'application/json');

    return NextResponse.json(data, {
      status: 200,
      headers: responseHeaders,
    });

  } catch (error) {
    console.error('Proxy error:', error);
    return NextResponse.json(
      { error: 'Internal server error in proxy', details: error instanceof Error ? error.message : 'Unknown error' },
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