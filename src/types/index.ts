export type SkillCategory = 
  | "COGNITIVE" | "LANGUAGE" | "MATH_LOGIC" | "CREATIVITY" 
  | "SCIENCE" | "PROBLEM_SOLVING" | "EMOTIONAL_INTELLIGENCE"
  | "SOCIAL_SKILLS" | "PHYSICAL" | "READING" | "FOCUS_MEMORY"
  | "CRITICAL_THINKING" | "LIFE_SKILLS";

export type ActivityDifficulty = "EASY" | "MEDIUM" | "HARD";
export type SubscriptionTier = "FREE" | "PRO" | "FAMILY";
export type PlanType = "DAILY" | "WEEKLY";

export interface ChildProfile {
  id: string;
  name: string;
  dateOfBirth: string;
  avatar?: string;
  interests: string[];
  skills: string[];
  timeAvailable: number;
  preference: string;
}

export interface Activity {
  id: string;
  title: string;
  description: string;
  ageMin: number;
  ageMax: number;
  duration: number;
  materials: string[];
  instructions: string[];
  skills: SkillCategory[];
  difficulty: ActivityDifficulty;
  indoor: boolean;
  outdoor: boolean;
  isAI: boolean;
  imageUrl?: string;
  safetyNotes?: string;
  questions: string[];
  easierVersion?: string;
  harderVersion?: string;
  rating?: number;
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
  activities?: Activity[];
}

export interface AIResponse {
  activity: string;
  age: string;
  duration: string;
  materials: string[];
  stepByStep: string[];
  skillsSupported: SkillCategory[];
  questionsForChild: string[];
  easierVersion?: string;
  harderVersion?: string;
  safetyNotes?: string;
}

export interface ProgressData {
  skill: SkillCategory;
  score: number;
  activitiesCount: number;
}

export interface Plan {
  id: string;
  type: PlanType;
  startDate: string;
  endDate: string;
  activities: { dayIndex: number; activity: Activity; order: number }[];
}

export interface User {
  id: string;
  email: string;
  name?: string;
  avatar?: string;
  subscription: SubscriptionTier;
}

export interface FilterOptions {
  age?: number;
  skills?: SkillCategory[];
  duration?: number;
  difficulty?: ActivityDifficulty;
  indoor?: boolean;
  outdoor?: boolean;
  search?: string;
}

export interface CompletedActivity {
  id: string;
  childId: string;
  activityId: string;
  activity: Activity;
  rating: number;
  completedAt: string;
}
