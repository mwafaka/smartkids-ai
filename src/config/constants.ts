export const APP_NAME = "SmartKids AI";
export const APP_DESCRIPTION = "AI-powered parenting guide for children ages 0-18";

export const SKILL_LABELS: Record<string, string> = {
  COGNITIVE: "Cognitive",
  LANGUAGE: "Language",
  MATH_LOGIC: "Math & Logic",
  CREATIVITY: "Creativity",
  SCIENCE: "Science",
  PROBLEM_SOLVING: "Problem Solving",
  EMOTIONAL_INTELLIGENCE: "Emotional Intelligence",
  SOCIAL_SKILLS: "Social Skills",
  PHYSICAL: "Physical",
  READING: "Reading & Learning",
  FOCUS_MEMORY: "Focus & Memory",
  CRITICAL_THINKING: "Critical Thinking",
  LIFE_SKILLS: "Life Skills",
};

export const SKILL_ICONS: Record<string, string> = {
  COGNITIVE: "C",
  LANGUAGE: "L",
  MATH_LOGIC: "M",
  CREATIVITY: "Cr",
  SCIENCE: "S",
  PROBLEM_SOLVING: "P",
  EMOTIONAL_INTELLIGENCE: "E",
  SOCIAL_SKILLS: "So",
  PHYSICAL: "Ph",
  READING: "R",
  FOCUS_MEMORY: "F",
  CRITICAL_THINKING: "CT",
  LIFE_SKILLS: "LS",
};

export const SKILL_COLORS: Record<string, string> = {
  COGNITIVE: "bg-violet-50 text-violet-700 border-violet-200",
  LANGUAGE: "bg-blue-50 text-blue-700 border-blue-200",
  MATH_LOGIC: "bg-emerald-50 text-emerald-700 border-emerald-200",
  CREATIVITY: "bg-rose-50 text-rose-700 border-rose-200",
  SCIENCE: "bg-teal-50 text-teal-700 border-teal-200",
  PROBLEM_SOLVING: "bg-amber-50 text-amber-700 border-amber-200",
  EMOTIONAL_INTELLIGENCE: "bg-red-50 text-red-700 border-red-200",
  SOCIAL_SKILLS: "bg-indigo-50 text-indigo-700 border-indigo-200",
  PHYSICAL: "bg-orange-50 text-orange-700 border-orange-200",
  READING: "bg-cyan-50 text-cyan-700 border-cyan-200",
  FOCUS_MEMORY: "bg-purple-50 text-purple-700 border-purple-200",
  CRITICAL_THINKING: "bg-lime-50 text-lime-700 border-lime-200",
  LIFE_SKILLS: "bg-yellow-50 text-yellow-700 border-yellow-200",
};

export const DURATION_OPTIONS = [
  { label: "5-10 min", value: 10 },
  { label: "10-20 min", value: 20 },
  { label: "20-30 min", value: 30 },
  { label: "30-60 min", value: 60 },
  { label: "60+ min", value: 90 },
];

export const AGE_RANGES = [
  { label: "Under 1", min: 0, max: 1 },
  { label: "1-3", min: 1, max: 3 },
  { label: "3-5", min: 3, max: 5 },
  { label: "5-7", min: 5, max: 7 },
  { label: "7-10", min: 7, max: 10 },
  { label: "10-13", min: 10, max: 13 },
  { label: "13-15", min: 13, max: 15 },
  { label: "15-18", min: 15, max: 18 },
];

export const RATE_LIMITS = {
  FREE: { aiQueries: 3, windowMs: 24 * 60 * 60 * 1000 },
  PRO: { aiQueries: 100, windowMs: 24 * 60 * 60 * 1000 },
  FAMILY: { aiQueries: -1, windowMs: 24 * 60 * 60 * 1000 },
};