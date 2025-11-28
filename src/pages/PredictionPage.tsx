import {  useState } from "react";
import PredictionCard from "../components/predictions/PredictionCard";
import { type MatchDto } from "../types/MatchDto";

export default function PredictionPage( {matches} : {matches : MatchDto[]}) {
  const [loading, setLoading] = useState(true);

  if (loading) {
    setTimeout(() => {setLoading(false)}, 1000);
    return <div className="p-6">불러오는 중...</div>;
  }

  return (
    <div className="w-full max-w-3xl bg-base-200 mx-auto p-4 space-y-4 rounded-xl">
      <h1 className="text-2xl font-bold mb-4">승부 예측</h1>

      {matches.length === 0 && (
        <p className="text-base-content/60">예측 가능한 경기가 없습니다.</p>
      )}

      {matches.map((match) => (
        <PredictionCard key={match.id} match={match} />
      ))}
    </div>
  );
}
