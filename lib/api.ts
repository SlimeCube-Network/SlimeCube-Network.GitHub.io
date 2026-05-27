import { siteConfig } from "@/config/siteConfig";

export interface PlayerCountData {
  status: string;
  online: boolean;
  players: {
    now: number;
    max: number;
    sample: Array<{ name: string; id: string }>;
  };
  motd: string;
  favicon: string;
  version: string;
  protocol: number;
  hostname: string;
  software: string;
}

export async function getPlayerCount(): Promise<number | null> {
  try {
    const response = await fetch(
      `${siteConfig.apis.playerCount}?ip=${siteConfig.server.connect.apiIp}`
    );
    const data: PlayerCountData = await response.json();
    
    if (data.status === "success" && data.players) {
      return data.players.now;
    }
    return null;
  } catch (error) {
    console.error("Player count API error:", error);
    return null;
  }
}

export async function getDiscordMemberCount(): Promise<number | null> {
  try {
    const response = await fetch(
      `https://discordapp.com/api/guilds/${siteConfig.apis.discordId}/embed.json`
    );
    const data = await response.json();
    
    if (data.presence_count) {
      return data.presence_count;
    }
    return null;
  } catch (error) {
    console.error("Discord count API error:", error);
    return null;
  }
}