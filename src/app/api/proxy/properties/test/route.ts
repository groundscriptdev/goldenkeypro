import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('https://engine.panamagoldenkey.com/api/properties/1/');
    const data = await response.json();
    
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: 'Error en test', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}