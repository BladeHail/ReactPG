import { useState } from "react";
import PlayerCard from "./PlayerCard";
import { type Player } from "../../types/Player";

export default function PlayerGrid( {Players} : {Players : Player[]}) {
  const [loading, setLoading] = useState(true);

  if (loading) {
    setTimeout(() => {setLoading(false)}, 1000);
    return <div className="text-center text-base-content/60">불러오는 중...</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Players.map((player) => (
        <PlayerCard
          key={player.id}
          id={player.id}
          name={player.name}
          desc={player.type}
          media={player.media}
        />
      ))}
    </div>
  );
}
