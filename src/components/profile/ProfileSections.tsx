import { type Player } from "../../types/Player";

export default function ProfileSections({ player }: { player: Player }) {
  return (
    <section className="space-y-6">

      {/* 기본 정보 섹션 */}
      <div className="bg-base-200 rounded-xl shadow p-6">
        <h2 className="text-2xl font-semibold">기본 정보</h2>
        <div className="divider my-4"></div>
        
        <p className="text-lg text-base-content/70">{player.team}</p>
        <p className="text-lg text-base-content/70">{player.time}</p>
      </div>

      {/* 수상 경력 섹션 */}
      <div className="bg-base-200 rounded-xl shadow p-6">
        <h2 className="text-4xl font-semibold">수상 경력</h2>
        <div className="divider my-4"></div>
        
        <ul className="list-disc ml-6 mt-2 text-lg text-base-content/70">
          {player.awards?.map((award, idx) => {
            // [변수 분리] 조건 확인을 편하게 하기 위해 변수로 선언
            const isDivider = award.trim().startsWith("─");
            const isEmpty = award.trim() === "";
            return (
              <li 
                key={idx} 
                className={`
                  mb-1 
                  ${/* 빈 줄이거나 구분선이면 점(bullet) 제거 */ (isEmpty || isDivider) ? "list-none" : ""} 
                  ${/* 구분선이면 크기 키우고(2xl), 굵게(bold), 위아래 여백 추가 */ isDivider ? "text-2xl font-bold text-base-content mt-6 mb-2" : ""}
                `}
              >
                {award || <br />}
              </li>
            );
          })}
        </ul>
      </div>

    </section>
  );
}