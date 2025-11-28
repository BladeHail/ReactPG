import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileSections from "../components/profile/ProfileSections";
import { useState } from "react";
import { type Player } from "../types/Player";
import { PlayerInfo } from "../types/PlayerInfo";

export default function ProfilePage({id} : {id : number}) {
  const [player, setPlayer] = useState<Player | null>(null);

  if (!player) {
    setTimeout(() => {setPlayer(PlayerInfo[id])}, 1000);
    return <div className="p-6">불러오는 중...</div>;
  }
  return (
    <main className="w-full max-w-5xl mx-auto flex flex-col lg:flex-row gap-6 p-4 lg:p-6">

      <div className="flex-1 space-y-6">

        {/* ⬇ 선수 데이터 props로 전달 */}
        <ProfileHeader player={player} />
        <ProfileSections player={player} />

      </div>
    </main>
  );
}
