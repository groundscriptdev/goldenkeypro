/**
 * API Route Proxy para Properties
 * Este proxy evita problemas de CORS al hacer solicitudes servidor-a-servidor
 */

import { NextRequest, NextResponse } from 'next/server';

const API_BASE_URL = process.env.NEXT_PUBLIC_PANAMA_API_URL || "https://engine.panamagoldenkey.com/api";

export async function GET(request: NextRequest) {
  try {
    // Obtener la URL de la solicitud
    const { searchParams } = new URL(request.url);
    
    // Construir la URL de la API externa
    const externalUrl = `${API_BASE_URL}/properties/?${searchParams.toString()}`;
    
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

    // Devolver la respuesta con los mismos headers CORS necesarios
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
    const externalUrl = `${API_BASE_URL}/properties/`;
    
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

    // Devolver la respuesta con los mismos headers CORS necesarios
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