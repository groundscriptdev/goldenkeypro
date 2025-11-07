import { NextRequest, NextResponse } from 'next/server';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://engine.panamagoldenkey.com/api';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    // Construir la URL del backend con los parámetros de búsqueda
    const backendUrl = new URL(`${API_BASE_URL}/properties/`);
    
    // Transferir todos los parámetros de búsqueda al backend
    searchParams.forEach((value, key) => {
      backendUrl.searchParams.append(key, value);
    });

    console.log('Proxying GET request to:', backendUrl.toString());

    const response = await fetch(backendUrl.toString(), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      console.error('Backend response error:', response.status, response.statusText);
      throw new Error(`Backend responded with ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    console.log('Backend response data:', data);

    return NextResponse.json(data);
  } catch (error) {
    console.error('Proxy error:', error);
    return NextResponse.json(
      { error: 'Failed to proxy request to backend', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}