"use client";

import { Modal } from "@/components/ui/modal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SKILL_LABELS, SKILL_COLORS } from "@/config/constants";
import { Clock, MapPin, CheckCircle, AlertTriangle } from "lucide-react";
import * as React from "react";
import type { Activity } from "@/types";

interface ActivityDetailModalProps {
  activity: Activity | null;
  isOpen: boolean;
  onClose: () => void;
  onComplete?: (id: string, rating: number) => void;
}

export function ActivityDetailModal({ activity, isOpen, onClose, onComplete }: ActivityDetailModalProps) {
  const [rating, setRating] = React.useState(5);
  if (!activity) return null;

  const difficultyColor = {
    EASY: "bg-green-100 text-green-700",
    MEDIUM: "bg-amber-100 text-amber-700",
    HARD: "bg-red-100 text-red-700",
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="" className="max-w-2xl max-h-[90vh] overflow-y-auto">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{activity.title}</h2>
          <p className="mt-2 text-gray-600">{activity.description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Badge className={cn(difficultyColor[activity.difficulty])}>{activity.difficulty}</Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            <Clock className="h-3 w-3" /> {activity.duration} min
          </Badge>
          <Badge variant="outline">Ages {activity.ageMin}-{activity.ageMax}</Badge>
          <Badge variant="outline" className="flex items-center gap-1">
            <MapPin className="h-3 w-3" /> {activity.indoor ? "Indoor" : "Outdoor"}
          </Badge>
        </div>

        <div>
          <h3 className="mb-2 text-sm font-semibold text-gray-700">Skills Supported</h3>
          <div className="flex flex-wrap gap-1.5">
            {activity.skills.map((skill) => (
              <Badge key={skill} className={cn(SKILL_COLORS[skill])}>{SKILL_LABELS[skill]}</Badge>
            ))}
          </div>
        </div>

        {activity.materials.length > 0 && (
          <div>
            <h3 className="mb-2 text-sm font-semibold text-gray-700">Materials Needed</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
              {activity.materials.map((mat, i) => <li key={i}>{mat}</li>)}
            </ul>
          </div>
        )}

        <div>
          <h3 className="mb-2 text-sm font-semibold text-gray-700">Step-by-Step Instructions</h3>
          <ol className="space-y-3">
            {activity.instructions.map((step, i) => (
              <li key={i} className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-100 text-xs font-bold text-purple-700">
                  {i + 1}
                </span>
                <span className="text-sm text-gray-600 pt-0.5">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {activity.questions.length > 0 && (
          <div>
            <h3 className="mb-2 text-sm font-semibold text-gray-700">Questions for Your Child</h3>
            <ul className="space-y-2">
              {activity.questions.map((q, i) => (
                <li key={i} className="rounded-lg bg-blue-50 p-3 text-sm text-blue-800">💬 {q}</li>
              ))}
            </ul>
          </div>
        )}

        {(activity.easierVersion || activity.harderVersion) && (
          <div className="grid grid-cols-2 gap-3">
            {activity.easierVersion && (
              <div className="rounded-xl bg-green-50 p-4">
                <h4 className="mb-1 text-sm font-semibold text-green-800">🟢 Easier Version</h4>
                <p className="text-sm text-green-700">{activity.easierVersion}</p>
              </div>
            )}
            {activity.harderVersion && (
              <div className="rounded-xl bg-orange-50 p-4">
                <h4 className="mb-1 text-sm font-semibold text-orange-800">🟠 Harder Version</h4>
                <p className="text-sm text-orange-700">{activity.harderVersion}</p>
              </div>
            )}
          </div>
        )}

        {activity.safetyNotes && (
          <div className="rounded-xl bg-amber-50 p-4 flex gap-3">
            <AlertTriangle className="h-5 w-5 shrink-0 text-amber-600" />
            <div>
              <h4 className="text-sm font-semibold text-amber-800">Safety Notes</h4>
              <p className="text-sm text-amber-700">{activity.safetyNotes}</p>
            </div>
          </div>
        )}

        <div className="space-y-3">
          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">How did it go?</p>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((value) => (
                <button
                  key={value}
                  onClick={() => setRating(value)}
                  className={`h-8 w-8 rounded-lg text-sm font-medium transition-colors ${
                    rating >= value
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-gray-100 text-gray-400 hover:bg-gray-200"
                  }`}
                >
                  {value}
                </button>
              ))}
            </div>
          </div>
          <Button className="w-full" size="lg" onClick={() => { onComplete?.(activity.id, rating); onClose(); }}>
            <CheckCircle className="h-5 w-5" />
            Mark as Complete
          </Button>
        </div>
      </div>
    </Modal>
  );
}
