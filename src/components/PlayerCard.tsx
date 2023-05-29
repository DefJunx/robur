"use client";

import { CENTER_BACK, ROLE_LABELS } from "@/constants/roles";
import { Player } from "@prisma/client";
import Image from "next/image";
import { useMemo } from "react";

interface PlayerCardProps {
  player: Player;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ player: { dob, name, photoUrl, role, birthPlace } }) => {
  const dateFormatter = useMemo(() => new Intl.DateTimeFormat("it-IT"), []);

  return (
    <div className="rounded-md shadow-md flex flex-col group">
      <Image
        src={photoUrl ?? "/player_placeholder.jpg"}
        alt="Player Picture"
        className="object-cover h-full w-full group-hover:scale-110 transition"
        height="100"
        width="100"
      />
      <hr />
      <div className="p-4">
        <p>Nome: {name}</p>
        <p>Luogo di nascita: {birthPlace}</p>
        <p>Data di nascita: {dateFormatter.format(dob)}</p>
        <p>Ruolo: {ROLE_LABELS[role] ?? "N/A"}</p>
      </div>
    </div>
  );
};

export default PlayerCard;
