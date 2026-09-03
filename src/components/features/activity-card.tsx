"use client";

import { Heart, Clock, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SKILL_LABELS, SKILL_COLORS } from "@/config/constants";
import type { Activity } from "@/types";

interface ActivityCardProps {
  activity: Activity;
  isFavorite?: boolean;
  onToggleFavorite?: (id: string) => void;
  onComplete?: (id: string) => void;
}

export function ActivityCard({ activity, isFavorite, onToggleFavorite, onComplete }: ActivityCardProps) {
  const difficultyLabel = {
    EASY: "Easy",
    MEDIUM: "Medium",
    HARD: "Hard",
  };

  return (
    <Card className="group overflow-hidden">
      <div className="relative h-36 bg-neutral-100 flex items-center justify-center">
        <span className="text-4xl font-bold text-neutral-300">
          {activity.skills[0] === "CREATIVITY" ? "Cr" :
           activity.skills[0] === "SCIENCE" ? "Sc" :
           activity.skills[0] === "MATH_LOGIC" ? "Ma" :
           activity.skills[0] === "LANGUAGE" ? "La" :
           activity.skills[0] === "PHYSICAL" ? "Ph" : "Sk"}
        </span>
        {onToggleFavorite && (
          <button
            onClick={() => onToggleFavorite(activity.id)}
            className="absolute right-2.5 top-2.5 rounded-full bg-white/90 p-1.5 shadow-sm backdrop-blur-sm transition-all hover:bg-white"
          >
            <Heart
              className={cn(
                "h-3.5 w-3.5",
                isFavorite ? "fill-neutral-900 text-neutral-900" : "text-neutral-400"
              )}
            />
          </button>
        )}
        <div className="absolute left-2.5 top-2.5">
          <Badge variant="secondary" className="text-[10px] bg-white/90 backdrop-blur-sm border-0">
            {difficultyLabel[activity.difficulty]}
          </Badge>
        </div>
      </div>

      <CardContent className="p-4">
        <h3 className="mb-1 text-sm font-semibold text-neutral-900 group-hover:text-neutral-600 transition-colors">
          {activity.title}
        </h3>
        <p className="mb-3 line-clamp-2 text-xs text-neutral-500">{activity.description}</p>

        <div className="mb-3 flex flex-wrap gap-1">
          {activity.skills.slice(0, 2).map((skill) => (
            <Badge key={skill} variant="outline" className={cn("text-[10px] border", SKILL_COLORS[skill])}>
              {SKILL_LABELS[skill]}
            </Badge>
          ))}
          {activity.skills.length > 2 && (
            <Badge variant="secondary" className="text-[10px]">+{activity.skills.length - 2}</Badge>
          )}
        </div>

        <div className="mb-3 flex items-center gap-3 text-[11px] text-neutral-400">
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {activity.duration}m
          </span>
          <span>Ages {activity.ageMin}-{activity.ageMax}</span>
          <span className="flex items-center gap-1">
            {activity.indoor ? "Indoor" : "Outdoor"}
          </span>
        </div>

        <Button
          size="sm"
          variant="outline"
          className="w-full text-xs h-9"
          onClick={() => onComplete?.(activity.id)}
        >
          Start
          <ChevronRight className="h-3.5 w-3.5" />
        </Button>
      </CardContent>
    </Card>
  );
}