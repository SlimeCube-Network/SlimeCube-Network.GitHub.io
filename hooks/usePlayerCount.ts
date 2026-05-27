'use client';

import { useState, useEffect } from 'react';

export function usePlayerCount() {
  const [playerCount, setPlayerCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlayerCount = async () => {
      try {
        const response = await fetch('/api/player-count');
        if (!response.ok) {
          throw new Error(`Player count request failed: ${response.status}`);
        }

        const data = await response.json();
        const count = data?.players?.now ?? data?.now ?? null;
        setPlayerCount(count ?? 0);
      } catch (error) {
        console.error('Failed to fetch player count:', error);
        setPlayerCount(0);
      } finally {
        setLoading(false);
      }
    };

    fetchPlayerCount();
    const interval = setInterval(fetchPlayerCount, 30000);

    return () => clearInterval(interval);
  }, []);

  return { playerCount, loading };
}