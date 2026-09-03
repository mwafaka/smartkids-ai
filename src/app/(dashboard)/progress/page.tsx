"use client";

import * as React from "react";
import { TrendingUp, Calendar, Award, Clock, Baby } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SkillProgressBar } from "@/components/features/skill-progress-bar";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { useAppStore } from "@/stores/app-store";
import { calculateAge } from "@/lib/utils";
import { SKILL_LABELS } from "@/config/constants";
import type { SkillCategory } from "@/types";

export default function ProgressPage() {
  const { selectedChild, completedActivities } = useAppStore();
  const [view, setView] = React.useState<"skills" | "history">("skills");

  const childCompletions = selectedChild
    ? completedActivities.filter((c) => c.childId === selectedChild.id)
    : [];

  const totalActivities = childCompletions.length;

  const skillsExplored = new Set(
    childCompletions.flatMap((c) => c.activity.skills)
  ).size;

  const avgRating = totalActivities > 0
    ? (childCompletions.reduce((sum, c) => sum + c.rating, 0) / totalActivities).toFixed(1)
    : "0";

  const streak = React.useMemo(() => {
    if (childCompletions.length === 0) return 0;
    const dates = [...new Set(
      childCompletions.map((c) => new Date(c.completedAt).toDateString())
    )].sort((a, b) => new Date(b).getTime() - new Date(a).getTime());
    let count = 0;
    const today = new Date();
    for (let i = 0; i < dates.length; i++) {
      const expected = new Date(today);
      expected.setDate(expected.getDate() - i);
      if (new Date(dates[i]).toDateString() === expected.toDateString()) {
        count++;
      } else {
        break;
      }
    }
    return count;
  }, [childCompletions]);

  const skillScores = React.useMemo(() => {
    const skillCounts: Record<string, number> = {};
    childCompletions.forEach((c) => {
      c.activity.skills.forEach((skill) => {
        skillCounts[skill] = (skillCounts[skill] || 0) + 1;
      });
    });
    const maxCount = Math.max(...Object.values(skillCounts), 1);
    return (Object.keys(skillCounts) as SkillCategory[]).map((skill) => ({
      skill,
      score: Math.round((skillCounts[skill] / maxCount) * 100),
    })).sort((a, b) => b.score - a.score);
  }, [childCompletions]);

  const sortedHistory = [...childCompletions].sort(
    (a, b) => new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime()
  );

  if (!selectedChild) {
    return (
      <DashboardLayout>
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-semibold text-neutral-900 tracking-tight">Progress</h1>
            <p className="mt-1 text-sm text-neutral-500">Track development across skills and activities</p>
          </div>
          <Card className="border-2 border-dashed border-purple-200">
            <CardContent className="flex flex-col items-center justify-center p-12 text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100">
                <Baby className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-gray-900">No Child Selected</h3>
              <p className="mb-4 max-w-sm text-sm text-gray-500">
                Select a child profile from the My Children page to view their progress and development tracking.
              </p>
              <Link href="/my-child">
                <Button>Select a Child</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold text-neutral-900 tracking-tight">
            {selectedChild.name}&apos;s Progress
          </h1>
          <p className="mt-1 text-sm text-neutral-500">
            Age {calculateAge(selectedChild.dateOfBirth)} · Tracking development and activities
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-100">
                  <TrendingUp className="h-4 w-4 text-neutral-600" />
                </div>
                <div>
                  <p className="text-[11px] text-neutral-400">Total Activities</p>
                  <p className="text-lg font-semibold text-neutral-900">{totalActivities}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-100">
                  <Award className="h-4 w-4 text-neutral-600" />
                </div>
                <div>
                  <p className="text-[11px] text-neutral-400">Skills Explored</p>
                  <p className="text-lg font-semibold text-neutral-900">{skillsExplored}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-100">
                  <Calendar className="h-4 w-4 text-neutral-600" />
                </div>
                <div>
                  <p className="text-[11px] text-neutral-400">Current Streak</p>
                  <p className="text-lg font-semibold text-neutral-900">{streak} days</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-100">
                  <Clock className="h-4 w-4 text-neutral-600" />
                </div>
                <div>
                  <p className="text-[11px] text-neutral-400">Avg Rating</p>
                  <p className="text-lg font-semibold text-neutral-900">{avgRating}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex gap-1.5">
          {(["skills", "history"] as const).map((v) => (
            <button
              key={v}
              onClick={() => setView(v)}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors capitalize ${
                view === v
                  ? "bg-neutral-900 text-white"
                  : "bg-white text-neutral-500 hover:bg-neutral-50 border border-neutral-200"
              }`}
            >
              {v}
            </button>
          ))}
        </div>

        {view === "skills" && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-sm">
                <TrendingUp className="h-4 w-4 text-neutral-400" />
                Skills Development
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {skillScores.length === 0 ? (
                <p className="text-sm text-neutral-500 text-center py-4">
                  Complete activities to see skills development
                </p>
              ) : (
                skillScores.map((item) => (
                  <SkillProgressBar key={item.skill} skill={item.skill} score={item.score} />
                ))
              )}
            </CardContent>
          </Card>
        )}

        {view === "history" && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4 text-neutral-400" />
                Activity History
              </CardTitle>
            </CardHeader>
            <CardContent>
              {sortedHistory.length === 0 ? (
                <p className="text-sm text-neutral-500 text-center py-4">
                  No activities completed yet
                </p>
              ) : (
                <div className="space-y-2">
                  {sortedHistory.map((item) => (
                    <div key={item.id} className="flex items-center gap-3 rounded-lg border border-neutral-100 p-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-100 text-xs font-medium text-neutral-600">
                        {new Date(item.completedAt).getDate()}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-neutral-900">{item.activity.title}</h4>
                        <p className="text-[11px] text-neutral-400">
                          {item.activity.duration} min · {new Date(item.completedAt).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                        </p>
                      </div>
                      <div className="flex items-center gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <div
                            key={i}
                            className={`h-1.5 w-1.5 rounded-full ${
                              i < item.rating ? "bg-neutral-900" : "bg-neutral-200"
                            }`}
                          />
                        ))}
                      </div>
                      <Badge variant="secondary" className="text-[10px]">
                        {SKILL_LABELS[item.activity.skills[0]] || item.activity.skills[0]}
                      </Badge>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
}
