import { SKILL_LABELS } from "@/config/constants";
import type { SkillCategory } from "@/types";

interface SkillProgressBarProps {
  skill: SkillCategory;
  score: number;
  maxScore?: number;
}

export function SkillProgressBar({ skill, score, maxScore = 100 }: SkillProgressBarProps) {
  const percentage = Math.min((score / maxScore) * 100, 100);

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <span className="text-sm text-neutral-700">
          {SKILL_LABELS[skill]}
        </span>
        <span className="text-sm font-medium text-neutral-900">{score}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-neutral-100">
        <div
          className="h-full rounded-full bg-neutral-900 transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}