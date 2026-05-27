import { NextResponse } from 'next/server';
import { siteConfig } from '@/config/siteConfig';

export async function GET() {
  const url = `${siteConfig.apis.playerCount}?ip=${siteConfig.server.connect.apiIp}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      return NextResponse.json({ error: 'Player count fetch failed' }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Player count proxy error:', error);
    return NextResponse.json({ error: 'Player count proxy error' }, { status: 500 });
  }
}
