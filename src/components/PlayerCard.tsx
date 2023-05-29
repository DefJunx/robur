"use client";

import { Player } from "@prisma/client";

interface PlayerCardProps {
  player: Player;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ player }) => {
  
  return <h1>{player.name}</h1>;
};

export default PlayerCard;
