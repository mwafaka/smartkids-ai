"use client";

import * as React from "react";
import { Search, X, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ActivityCard } from "@/components/features/activity-card";
import { ActivityDetailModal } from "@/components/features/activity-detail-modal";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { useAppStore } from "@/stores/app-store";
import { calculateAge } from "@/lib/utils";
import { SKILL_LABELS, SKILL_COLORS, AGE_RANGES, DURATION_OPTIONS } from "@/config/constants";
import { ALL_ACTIVITIES } from "@/data/activities";
import { cn } from "@/lib/utils";
import type { Activity, SkillCategory, ActivityDifficulty } from "@/types";

const ALL_SKILLS = Object.keys(SKILL_LABELS) as SkillCategory[];

export default function ActivitiesPage() {
  const { selectedChild, completeActivity } = useAppStore();
  const childAge = selectedChild ? calculateAge(selectedChild.dateOfBirth) : null;

  const [search, setSearch] = React.useState("");
  const [selectedSkills, setSelectedSkills] = React.useState<SkillCategory[]>([]);
  const [selectedAge, setSelectedAge] = React.useState<{ min: number; max: number } | null>(
    childAge ? { min: childAge, max: childAge } : null
  );
  const [selectedDuration, setSelectedDuration] = React.useState<number | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = React.useState<ActivityDifficulty | null>(null);
  const [preference, setPreference] = React.useState<"indoor" | "outdoor" | "both" | null>(null);
  const [showFilters, setShowFilters] = React.useState(false);
  const [selectedActivity, setSelectedActivity] = React.useState<Activity | null>(null);
  const [isDetailOpen, setIsDetailOpen] = React.useState(false);

  const filteredActivities = ALL_ACTIVITIES.filter((activity) => {
    if (search && !activity.title.toLowerCase().includes(search.toLowerCase()) && !activity.description.toLowerCase().includes(search.toLowerCase())) return false;
    if (selectedSkills.length > 0 && !selectedSkills.some((s) => activity.skills.includes(s))) return false;
    if (selectedAge && (activity.ageMin > selectedAge.max || activity.ageMax < selectedAge.min)) return false;
    if (selectedDuration && activity.duration > selectedDuration) return false;
    if (selectedDifficulty && activity.difficulty !== selectedDifficulty) return false;
    if (preference === "indoor" && !activity.indoor) return false;
    if (preference === "outdoor" && !activity.outdoor) return false;
    return true;
  });

  const toggleSkill = (skill: SkillCategory) => {
    setSelectedSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  const clearFilters = () => {
    setSearch("");
    setSelectedSkills([]);
    setSelectedAge(childAge !== null ? { min: childAge, max: childAge } : null);
    setSelectedDuration(null);
    setSelectedDifficulty(null);
    setPreference(null);
  };

  const hasFilters = selectedSkills.length > 0 || (childAge === null && selectedAge) || selectedDuration || selectedDifficulty || preference;

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold text-neutral-900 tracking-tight">
            {selectedChild ? `${selectedChild.name}'s Activities` : "Activity Library"}
          </h1>
          <p className="mt-1 text-sm text-neutral-500">
            {selectedChild
              ? `Activities matched for ${childAge === 0 ? "under 1 year" : `${childAge} years`}`
              : `Discover ${ALL_ACTIVITIES.length}+ activities for every age and skill`}
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search activities..."
              className="pl-10"
            />
          </div>
          <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className={cn(showFilters && "border-neutral-400 bg-neutral-50")}>
            <SlidersHorizontal className="h-4 w-4" />
            Filters {hasFilters && <Badge className="ml-1 bg-purple-600">{selectedSkills.length + (selectedAge ? 1 : 0) + (selectedDuration ? 1 : 0) + (selectedDifficulty ? 1 : 0) + (preference ? 1 : 0)}</Badge>}
          </Button>
        </div>

        {showFilters && (
          <Card>
            <CardContent className="space-y-4 p-4">
              <div>
                <label className="mb-2 block text-xs font-medium text-neutral-500 uppercase tracking-wide">Skills</label>
                <div className="flex flex-wrap gap-2">
                  {ALL_SKILLS.map((skill) => (
                    <Badge
                      key={skill}
                      variant={selectedSkills.includes(skill) ? "default" : "outline"}
                      className={cn("cursor-pointer transition-colors border", selectedSkills.includes(skill) && SKILL_COLORS[skill])}
                      onClick={() => toggleSkill(skill)}
                    >
                      {SKILL_LABELS[skill]}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs font-medium text-neutral-500 uppercase tracking-wide">Age Range</label>
                <div className="flex flex-wrap gap-2">
                  {AGE_RANGES.map((range) => (
                    <Badge
                      key={range.label}
                      variant={selectedAge?.min === range.min ? "default" : "outline"}
                      className={cn("cursor-pointer transition-colors", selectedAge?.min === range.min && "bg-neutral-900 text-white")}
                      onClick={() => setSelectedAge(selectedAge?.min === range.min ? null : range)}
                    >
                      {range.label} years
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs font-medium text-neutral-500 uppercase tracking-wide">Duration</label>
                <div className="flex flex-wrap gap-2">
                  {DURATION_OPTIONS.map((opt) => (
                    <Badge
                      key={opt.value}
                      variant={selectedDuration === opt.value ? "default" : "outline"}
                      className={cn("cursor-pointer transition-colors", selectedDuration === opt.value && "bg-neutral-900 text-white")}
                      onClick={() => setSelectedDuration(selectedDuration === opt.value ? null : opt.value)}
                    >
                      {opt.label}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs font-medium text-neutral-500 uppercase tracking-wide">Difficulty</label>
                <div className="flex gap-2">
                  {(["EASY", "MEDIUM", "HARD"] as const).map((diff) => (
                    <Badge
                      key={diff}
                      variant={selectedDifficulty === diff ? "default" : "outline"}
                      className={cn(
                        "cursor-pointer transition-colors",
                        selectedDifficulty === diff && "bg-neutral-900 text-white"
                      )}
                      onClick={() => setSelectedDifficulty(selectedDifficulty === diff ? null : diff)}
                    >
                      {diff}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs font-medium text-neutral-500 uppercase tracking-wide">Location</label>
                <div className="flex gap-2">
                  {(["indoor", "outdoor", "both"] as const).map((pref) => (
                    <Badge
                      key={pref}
                      variant={preference === pref ? "default" : "outline"}
                      className={cn("cursor-pointer transition-colors capitalize", preference === pref && "bg-neutral-900 text-white")}
                      onClick={() => setPreference(preference === pref ? null : pref)}
                    >
                      {pref === "indoor" ? "🏠 Indoor" : pref === "outdoor" ? "🌳 Outdoor" : "✨ Both"}
                    </Badge>
                  ))}
                </div>
              </div>

              {hasFilters && (
                <Button variant="ghost" size="sm" onClick={clearFilters} className="text-gray-500">
                  <X className="h-4 w-4" /> Clear all filters
                </Button>
              )}
            </CardContent>
          </Card>
        )}

        <div className="text-sm text-gray-500">
          Showing {filteredActivities.length} activities
        </div>

        {filteredActivities.length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center justify-center p-12 text-center">
              <h3 className="mb-2 text-sm font-semibold text-neutral-900">No activities found</h3>
              <p className="mb-4 text-xs text-neutral-500">Try adjusting your filters or search terms</p>
              <Button variant="outline" onClick={clearFilters}>Clear Filters</Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredActivities.map((activity) => (
              <ActivityCard
                key={activity.id}
                activity={activity}
                isFavorite={false}
                onToggleFavorite={() => {}}
                onComplete={(id) => {
                  const act = filteredActivities.find((a) => a.id === id);
                  if (act) {
                    setSelectedActivity(act);
                    setIsDetailOpen(true);
                  }
                }}
              />
            ))}
          </div>
        )}

        <ActivityDetailModal
          activity={selectedActivity}
          isOpen={isDetailOpen}
          onClose={() => { setIsDetailOpen(false); setSelectedActivity(null); }}
          onComplete={(id, rating) => {
            if (selectedChild && selectedActivity) {
              completeActivity(selectedChild.id, id, selectedActivity, rating);
            }
            setIsDetailOpen(false);
            setSelectedActivity(null);
          }}
        />
      </div>
    </DashboardLayout>
  );
}
