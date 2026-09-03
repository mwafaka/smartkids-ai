"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { SKILL_LABELS, SKILL_COLORS } from "@/config/constants";
import { cn } from "@/lib/utils";
import type { ChildProfile, SkillCategory } from "@/types";

interface ChildFormProps {
  initialData?: Partial<ChildProfile>;
  onSubmit: (data: Omit<ChildProfile, "id">) => void;
  onCancel: () => void;
}

const INTEREST_SUGGESTIONS = [
  "Dinosaurs", "Space", "Art", "Music", "Sports", "Animals", "Cooking",
  "Building", "Reading", "Dance", "Video games", "Nature", "Coding",
  "Crafts", "Puzzles", "Cars", "Princesses", "Superheroes", "Science",
];

const ALL_SKILLS = Object.keys(SKILL_LABELS) as SkillCategory[];

export function ChildForm({ initialData, onSubmit, onCancel }: ChildFormProps) {
  const [name, setName] = React.useState(initialData?.name || "");
  const [dateOfBirth, setDateOfBirth] = React.useState(
    initialData?.dateOfBirth || ""
  );
  const [interests, setInterests] = React.useState<string[]>(initialData?.interests || []);
  const [skills, setSkills] = React.useState<string[]>(initialData?.skills || []);
  const [timeAvailable, setTimeAvailable] = React.useState(initialData?.timeAvailable || 30);
  const [preference, setPreference] = React.useState(initialData?.preference || "both");
  const [customInterest, setCustomInterest] = React.useState("");

  const toggleInterest = (interest: string) => {
    setInterests((prev) =>
      prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]
    );
  };

  const toggleSkill = (skill: string) => {
    setSkills((prev) =>
      prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      name,
      dateOfBirth,
      interests,
      skills,
      timeAvailable,
      preference,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-700">Child&apos;s Name</label>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your child's name"
          required
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-700">Date of Birth</label>
        <Input
          type="date"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-700">Interests</label>
        <div className="flex flex-wrap gap-2">
          {INTEREST_SUGGESTIONS.map((interest) => (
            <Badge
              key={interest}
              variant={interests.includes(interest) ? "default" : "outline"}
              className={cn(
                "cursor-pointer transition-all hover:scale-105",
                interests.includes(interest) && "bg-purple-600 text-white"
              )}
              onClick={() => toggleInterest(interest)}
            >
              {interest}
            </Badge>
          ))}
        </div>
        <div className="flex gap-2 mt-2">
          <Input
            value={customInterest}
            onChange={(e) => setCustomInterest(e.target.value)}
            placeholder="Add custom interest"
          />
          <Button
            type="button"
            variant="outline"
            onClick={() => {
              if (customInterest.trim()) {
                toggleInterest(customInterest.trim());
                setCustomInterest("");
              }
            }}
          >
            Add
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-700">Skills to Encourage</label>
        <div className="grid grid-cols-2 gap-2">
          {ALL_SKILLS.map((skill) => (
            <Badge
              key={skill}
              variant={skills.includes(skill) ? "default" : "outline"}
              className={cn(
                "cursor-pointer transition-all hover:scale-105 justify-center py-2",
                skills.includes(skill) && SKILL_COLORS[skill]
              )}
              onClick={() => toggleSkill(skill)}
            >
              {SKILL_LABELS[skill]}
            </Badge>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-700">
          Available Time: {timeAvailable} min/day
        </label>
        <input
          type="range"
          min={5}
          max={120}
          step={5}
          value={timeAvailable}
          onChange={(e) => setTimeAvailable(Number(e.target.value))}
          className="w-full accent-purple-600"
        />
        <div className="flex justify-between text-xs text-gray-400">
          <span>5 min</span>
          <span>120 min</span>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-700">Activity Preference</label>
        <div className="grid grid-cols-3 gap-2">
          {[
            { value: "indoor", label: "🏠 Indoor" },
            { value: "outdoor", label: "🌳 Outdoor" },
            { value: "both", label: "✨ Both" },
          ].map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => setPreference(opt.value)}
              className={cn(
                "rounded-xl border-2 p-3 text-center text-sm font-medium transition-all",
                preference === opt.value
                  ? "border-purple-400 bg-purple-50 text-purple-700"
                  : "border-gray-200 hover:border-gray-300"
              )}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-3">
        <Button type="button" variant="outline" className="flex-1" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" className="flex-1">
          {initialData ? "Update Profile" : "Create Profile"}
        </Button>
      </div>
    </form>
  );
}
