// src/components/profile/ProfileSections.tsx

import {type Player} from "../../types/Player"

export default function ProfileSections({player}: {player : Player}) {
  return (
    <section className="space-y-6">

      <div className="bg-base-200 rounded-xl shadow p-6">
        {/* 섹션 제목: text-xl -> text-2xl로 변경 */}
        <h2 className="text-2xl font-semibold">기본 정보</h2>
        <div className="divider my-4"></div>
        
        {/* 본문 내용: text-lg 추가 */}
        <p className="text-lg text-base-content/70 mt-2">{player.body}</p>
        <p className="text-lg text-base-content/70">{player.team}</p>
        <p className="text-base-content/70">{player.time}</p>
      </div>

      <div className="bg-base-200 rounded-xl shadow p-6">
        {/* 섹션 제목: text-xl -> text-2xl로 변경 */}
        <h2 className="text-4xl font-semibold">수상 경력</h2>
        <div className="divider my-4"></div>
        
        {/* 리스트 내용: text-lg 추가 */}
        <ul className="list-disc ml-6 mt-2 text-lg text-base-content/70">
          {player.awards?.map((award, idx) => (
            <li key={idx} className="mb-1">{award}</li>
          ))}
        </ul>
      </div>

    </section>
  );
}