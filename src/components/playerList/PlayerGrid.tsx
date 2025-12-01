import PlayerCard from "./PlayerCard";
import { type Player } from "../../types/Player"; // [중요] Player 타입을 여기서 가져와야 합니다.

export default function PlayerGrid({ Players }: { Players: Player[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Players.map((player) => (
        <PlayerCard
          key={player.id}
          id={player.id}
          name={player.name}
          desc={player.type}
          media={player.media}
          // [중요] PlayerCard에 age 값을 전달합니다.
          age={player.age} 
        />
      ))}
    </div>
  );
}