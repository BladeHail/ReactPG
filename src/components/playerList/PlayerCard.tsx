import { useNavigate } from "react-router-dom";

interface PlayerCardProps {
  id: number;
  name: string;
  desc: string;
  media: string | null;
}

export default function PlayerCard({ id, name, desc, media }: PlayerCardProps) {
  const navigate = useNavigate();

  return (
    <div
      className="card bg-base-200 shadow-xl cursor-pointer hover:shadow-2xl transition overflow-hidden" 
      onClick={() => navigate(`/players/${id}`)}
    >
      {/* 이미지 영역: 높이를 h-72 (약 288px)로 고정 */}
      <figure className="w-full h-80">
        {media ? (
          <img 
            src={media} 
            alt={name} 
            // object-cover: 비율 유지하며 꽉 채우기 (남는 부분 자름)
            // object-top: 인물이므로 위쪽(얼굴)을 기준으로 정렬
            className="w-full h-full object-cover object-top" 
          />
        ) : (
          // 이미지가 없을 때 회색 배경 처리
          <div className="w-full h-full bg-base-300 flex items-center justify-center">
            이미지 없음
          </div>
        )}
      </figure>

      <div className="card-body p-6 text-center">
        <h2 className="text-xl font-bold">
          {name}
        </h2>

        <div className="divider my-2"></div>


        <p className="text-lg font-semibold text-base-content/400">
          {desc}
      </p>
      </div>
    </div>
  );
}