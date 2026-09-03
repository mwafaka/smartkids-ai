"use client";

import { calculateAge, getAgeGroup } from "@/lib/utils";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Edit, Trash2, ChevronRight } from "lucide-react";
import type { ChildProfile } from "@/types";

interface ChildProfileCardProps {
  child: ChildProfile;
  isSelected?: boolean;
  onSelect?: (child: ChildProfile) => void;
  onEdit?: (child: ChildProfile) => void;
  onDelete?: (child: ChildProfile) => void;
}

export function ChildProfileCard({ child, isSelected, onSelect, onEdit, onDelete }: ChildProfileCardProps) {
  const age = calculateAge(child.dateOfBirth);
  const ageGroup = getAgeGroup(age);

  return (
    <Card
      className={`cursor-pointer transition-all duration-200 ${
        isSelected
          ? "border-purple-400 ring-2 ring-purple-500/20 shadow-lg"
          : "hover:border-gray-300"
      }`}
      onClick={() => onSelect?.(child)}
    >
      <CardContent className="p-4">
        <div className="flex items-center gap-4">
          <Avatar alt={child.name} size="lg" />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold text-gray-900">{child.name}</h3>
              {onEdit && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onEdit(child);
                  }}
                  className="rounded-lg p-1 hover:bg-gray-100"
                >
                  <Edit className="h-3.5 w-3.5 text-gray-400" />
                </button>
              )}
              {onDelete && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onDelete(child);
                  }}
                  className="rounded-lg p-1 hover:bg-red-50"
                >
                  <Trash2 className="h-3.5 w-3.5 text-gray-400" />
                </button>
              )}
            </div>
            <p className="text-sm text-gray-500">
              Age {age} · {ageGroup} group
            </p>
            <div className="mt-2 flex flex-wrap gap-1">
              {child.interests.slice(0, 3).map((interest) => (
                <Badge key={interest} variant="secondary" className="text-xs">
                  {interest}
                </Badge>
              ))}
              {child.interests.length > 3 && (
                <Badge variant="secondary" className="text-xs">
                  +{child.interests.length - 3}
                </Badge>
              )}
            </div>
          </div>
          <ChevronRight className="h-5 w-5 text-gray-300" />
        </div>
      </CardContent>
    </Card>
  );
}
