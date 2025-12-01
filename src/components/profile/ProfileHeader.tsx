import { type Player } from "../../types/Player";

export default function ProfileHeader({ player }: { player: Player }) {
  return (
    <section className="bg-base-200 rounded-xl shadow p-8 flex flex-col items-center text-center">
      {/* 프로필 이미지 영역 */}
      <div className="avatar">
        <div className="w-36 h-36 rounded-full ring ring-primary/30 ring-offset-base-100 ring-offset-2 overflow-hidden">
          {player.media ? (
            <img 
              src={player.media} 
              alt={player.name} 
              className="w-full h-full object-cover object-top" 
            />
          ) : (
            <div className="w-full h-full bg-base-300 flex items-center justify-center">
              No Image
            </div>
          )}
        </div>
      </div>
      
      {/* 이름 */}
      <h1 className="text-4xl font-bold mt-4">{player.name}</h1>
      
      {/* 종목 */}
      <p className="text-xl text-base-content/70 mt-2">{player.type}</p>

      {/* 소속(국가) */}
      <p className="text-lg text-base-content/60 mt-1">
        {player.team}
      </p>
    </section>
  );
}