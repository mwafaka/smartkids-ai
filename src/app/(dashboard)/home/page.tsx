"use client";

import * as React from "react";
import { ArrowRight, TrendingUp, Calendar, Star, Baby } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ActivityCard } from "@/components/features/activity-card";
import { DashboardLayout } from "@/components/layout/dashboard-layout";
import { useAppStore } from "@/stores/app-store";
import { calculateAge } from "@/lib/utils";
import { getActivitiesForAge } from "@/data/activities";
import { SKILL_LABELS } from "@/config/constants";
import Link from "next/link";
import type { SkillCategory } from "@/types";

export default function HomePage() {
  const { selectedChild, completedActivities } = useAppStore();
  const age = selectedChild ? calculateAge(selectedChild.dateOfBirth) : null;

  const ageActivities = age !== null ? getActivitiesForAge(age) : [];

  const todayActivities = ageActivities.slice(0, 3);
  const recommendedActivities = ageActivities.slice(3, 6);

  const childCompletions = selectedChild
    ? completedActivities.filter((c) => c.childId === selectedChild.id)
    : [];

  const skillsExplored = new Set(
    childCompletions.flatMap((c) => c.activity.skills)
  ).size;

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

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-semibold text-neutral-900 tracking-tight">
            {selectedChild ? `${selectedChild.name}'s activities` : "Welcome"}
          </h1>
          <p className="mt-1 text-sm text-neutral-500">
            {selectedChild
              ? age === 0
                ? `Age-appropriate activities for under 1 year`
                : `Age-appropriate activities for a ${age}-year-old`
              : "Add a child profile to get started"}
          </p>
        </div>

        {!selectedChild ? (
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="border-dashed">
              <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                <h3 className="mb-1 text-sm font-semibold text-neutral-900">Add your first child</h3>
                <p className="mb-4 text-xs text-neutral-500">
                  Create a profile to get personalized recommendations
                </p>
                <Link href="/my-child">
                  <Button size="sm">Get Started</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-dashed">
              <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                <h3 className="mb-1 text-sm font-semibold text-neutral-900">Ask AI Assistant</h3>
                <p className="mb-4 text-xs text-neutral-500">
                  Get instant activity ideas for any age
                </p>
                <Link href="/assistant">
                  <Button size="sm" variant="outline">Start Chat</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-dashed">
              <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                <h3 className="mb-1 text-sm font-semibold text-neutral-900">Browse Library</h3>
                <p className="mb-4 text-xs text-neutral-500">
                  Explore our curated activity collection
                </p>
                <Link href="/activities">
                  <Button size="sm" variant="outline">Explore</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between">
              <h2 className="text-base font-semibold text-neutral-900">Today&apos;s Activities</h2>
              <Link href="/activities" className="text-xs font-medium text-neutral-500 hover:text-neutral-900 flex items-center gap-1 transition-colors">
                View all <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            {todayActivities.length === 0 ? (
              <Card className="border-dashed">
                <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                  <Baby className="h-8 w-8 text-neutral-400 mb-2" />
                  <h3 className="mb-1 text-sm font-semibold text-neutral-900">No activities for this age</h3>
                  <p className="text-xs text-neutral-500">
                    Browse the library to find suitable activities
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {todayActivities.map((activity) => (
                  <ActivityCard key={activity.id} activity={activity} />
                ))}
              </div>
            )}

            <div className="grid gap-3 md:grid-cols-3">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-100">
                      <TrendingUp className="h-4 w-4 text-neutral-600" />
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
                      <p className="text-[11px] text-neutral-400">Activities Done</p>
                      <p className="text-lg font-semibold text-neutral-900">{childCompletions.length}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-100">
                      <Star className="h-4 w-4 text-neutral-600" />
                    </div>
                    <div>
                      <p className="text-[11px] text-neutral-400">Streak</p>
                      <p className="text-lg font-semibold text-neutral-900">{streak} days</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-base font-semibold text-neutral-900 mb-4">Recommended for {selectedChild.name}</h2>
              {recommendedActivities.length === 0 ? (
                <Card className="border-dashed">
                  <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                    <Baby className="h-8 w-8 text-neutral-400 mb-2" />
                    <h3 className="mb-1 text-sm font-semibold text-neutral-900">No more activities for this age</h3>
                    <p className="text-xs text-neutral-500">
                      Check back soon for new activities
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {recommendedActivities.map((activity) => (
                    <ActivityCard key={activity.id} activity={activity} />
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </DashboardLayout>
  );
}
