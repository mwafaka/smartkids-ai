import { NextRequest, NextResponse } from "next/server";

const SAMPLE_ACTIVITIES = [
  {
    id: "1", title: "Dinosaur Math Adventure", description: "Count dinosaurs, sort them by size, and create simple addition problems.",
    ageMin: 3, ageMax: 6, duration: 20, materials: ["Toy dinosaurs", "Paper", "Markers"],
    instructions: ["Gather dinosaurs", "Sort by size", "Count each group", "Create addition problems"],
    skills: ["MATH_LOGIC", "COGNITIVE", "CREATIVITY"], difficulty: "EASY", indoor: true, outdoor: false, isAI: false,
    questions: ["How many altogether?"], easierVersion: "Count one by one", harderVersion: "Try multiplication"
  },
  {
    id: "2", title: "Kitchen Science: Color Mixing", description: "Explore primary colors using safe kitchen ingredients.",
    ageMin: 2, ageMax: 5, duration: 15, materials: ["Food coloring", "Water", "Cups"],
    instructions: ["Fill cups", "Add coloring", "Predict results", "Observe"],
    skills: ["SCIENCE", "CREATIVITY", "LANGUAGE"], difficulty: "EASY", indoor: true, outdoor: false, isAI: false,
    questions: ["What color will red and blue make?"], easierVersion: "Mix two colors", harderVersion: "Create specific shades"
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const age = searchParams.get("age");
  const skill = searchParams.get("skill");
  const duration = searchParams.get("duration");
  const search = searchParams.get("search");
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "12");

  let filtered = [...SAMPLE_ACTIVITIES];

  if (age) {
    const ageNum = parseInt(age);
    filtered = filtered.filter((a) => a.ageMin <= ageNum && a.ageMax >= ageNum);
  }
  if (skill) {
    filtered = filtered.filter((a) => a.skills.includes(skill));
  }
  if (duration) {
    filtered = filtered.filter((a) => a.duration <= parseInt(duration));
  }
  if (search) {
    const term = search.toLowerCase();
    filtered = filtered.filter(
      (a) => a.title.toLowerCase().includes(term) || a.description.toLowerCase().includes(term)
    );
  }

  const start = (page - 1) * limit;
  const paginated = filtered.slice(start, start + limit);

  return NextResponse.json({
    activities: paginated,
    total: filtered.length,
    page,
    totalPages: Math.ceil(filtered.length / limit),
  });
}
