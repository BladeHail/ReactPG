import PlayerGrid from "../components/playerList/PlayerGrid";
import {PlayerInfo} from "../types/PlayerInfo";

export default function PlayerListPage() {

  return (
    <div className="w-full max-w-5xl mx-auto p-4 lg:p-6">
      <PlayerGrid Players={PlayerInfo} />
    </div>
  );
}