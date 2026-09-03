import { SkillCategory } from "@/types";

interface AIActivityResponse {
  title: string;
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

interface AIChatResponse {
  message: string;
  activities: AIActivityResponse[];
}

const SYSTEM_PROMPT = `You are SmartKids AI, an expert parenting assistant that helps parents find age-appropriate activities for their children ages 0-18.

IMPORTANT RULES:
1. Never claim activities will increase IQ or guarantee a child will become smarter
2. Position all suggestions as supporting learning, curiosity, development, creativity, and problem solving
3. Never diagnose medical or developmental conditions
4. Generate safe, age-appropriate content only
5. Consider the child's age, interests, available time, and skill goals
6. Always include safety notes for activities involving physical activity or materials
7. Provide structured responses with: activity name, age range, duration, materials, step-by-step instructions, skills supported, questions to ask the child, and easier/harder versions

ACTIVITY FORMAT:
Each activity should include:
- title: Clear, engaging name
- age: Recommended age range
- duration: Time needed
- materials: List of required items
- stepByStep: Numbered instructions
- skillsSupported: Which of the 13 skills this activity supports
- questionsForChild: Questions to ask during/after the activity
- easierVersion: Simplified version for younger/less experienced children
- harderVersion: More challenging version for advanced children
- safetyNotes: Any safety considerations

AVAILABLE SKILLS:
COGNITIVE, LANGUAGE, MATH_LOGIC, CREATIVITY, SCIENCE, PROBLEM_SOLVING, EMOTIONAL_INTELLIGENCE, SOCIAL_SKILLS, PHYSICAL, READING, FOCUS_MEMORY, CRITICAL_THINKING, LIFE_SKILLS`;

export async function generateAIResponse(
  userMessage: string,
  childProfile?: { name: string; age: number; interests: string[]; skills: string[] },
  apiKey?: string
): Promise<AIChatResponse> {
  if (!apiKey) {
    return generateMockResponse(userMessage, childProfile);
  }

  const context = childProfile
    ? `\n\nChild context:\n- Name: ${childProfile.name}\n- Age: ${childProfile.age}\n- Interests: ${childProfile.interests.join(", ")}\n- Skills to develop: ${childProfile.skills.join(", ")}`
    : "";

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: SYSTEM_PROMPT + context },
          { role: "user", content: userMessage },
        ],
        temperature: 0.7,
        max_tokens: 2000,
      }),
    });

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content || "";

    const activities = parseAIResponse(content);

    return {
      message: content,
      activities,
    };
  } catch {
    return generateMockResponse(userMessage, childProfile);
  }
}

function parseAIResponse(content: string): AIActivityResponse[] {
  const activities: AIActivityResponse[] = [];

  const activityBlocks = content.split(/\*\*Activity\s*\d/i).slice(1);

  for (const block of activityBlocks) {
    const titleMatch = block.match(/(?:Title|Name)[:\s]*([^\n]+)/i);
    const ageMatch = block.match(/(?:Age|Age Range)[:\s]*([^\n]+)/i);
    const durationMatch = block.match(/(?:Duration|Time)[:\s]*([^\n]+)/i);

    const materialsSection = block.match(/Materials[:\s]*([\s\S]*?)(?=\n\s*\n|\n\s*(?:Step|Instructions))/i);
    const materials = materialsSection
      ? materialsSection[1].split(/\n/).filter((l) => l.trim().startsWith("-") || l.trim().startsWith("•")).map((m) => m.replace(/^[-•]\s*/, "").trim())
      : [];

    const stepsSection = block.match(/(?:Step|Instructions)[:\s]*([\s\S]*?)(?=\n\s*\n|\n\s*(?:Skills|Questions))/i);
    const stepByStep = stepsSection
      ? stepsSection[1].split(/\n/).filter((l) => /^\d/.test(l.trim())).map((s) => s.replace(/^\d+[.)]\s*/, "").trim())
      : [];

    const skillsSection = block.match(/Skills[:\s]*([\s\S]*?)(?=\n\s*\n|\n\s*(?:Questions|Easier))/i);
    const skillsText = skillsSection?.[1] || "";
    const skillsSupported: SkillCategory[] = [];
    const skillKeywords: Record<string, SkillCategory> = {
      cognitive: "COGNITIVE", language: "LANGUAGE", math: "MATH_LOGIC", logic: "MATH_LOGIC",
      creativity: "CREATIVITY", creative: "CREATIVITY", science: "SCIENCE",
      problem: "PROBLEM_SOLVING", emotional: "EMOTIONAL_INTELLIGENCE", social: "SOCIAL_SKILLS",
      physical: "PHYSICAL", reading: "READING", focus: "FOCUS_MEMORY", memory: "FOCUS_MEMORY",
      critical: "CRITICAL_THINKING", life: "LIFE_SKILLS",
    };
    for (const [keyword, skill] of Object.entries(skillKeywords)) {
      if (skillsText.toLowerCase().includes(keyword)) skillsSupported.push(skill);
    }

    const questionsSection = block.match(/Questions[:\s]*([\s\S]*?)(?=\n\s*\n|\n\s*(?:Easier|Harder|Safety))/i);
    const questionsForChild = questionsSection
      ? questionsSection[1].split(/\n/).filter((l) => l.trim().startsWith("-") || l.trim().startsWith("•") || l.trim().startsWith("?")).map((q) => q.replace(/^[-•?]\s*/, "").trim())
      : [];

    const easierMatch = block.match(/Easier[:\s]*([^\n]+)/i);
    const harderMatch = block.match(/Harder[:\s]*([^\n]+)/i);
    const safetyMatch = block.match(/Safety[:\s]*([^\n]+)/i);

    activities.push({
      title: titleMatch?.[1]?.trim() || "Fun Activity",
      age: ageMatch?.[1]?.trim() || "3-10 years",
      duration: durationMatch?.[1]?.trim() || "20 minutes",
      materials: materials.length ? materials : ["No special materials needed"],
      stepByStep: stepByStep.length ? stepByStep : ["Follow the activity instructions"],
      skillsSupported: skillsSupported.length ? skillsSupported : ["COGNITIVE"],
      questionsForChild: questionsForChild.length ? questionsForChild : ["What did you enjoy most?"],
      easierVersion: easierMatch?.[1]?.trim(),
      harderVersion: harderMatch?.[1]?.trim(),
      safetyNotes: safetyMatch?.[1]?.trim(),
    });
  }

  return activities;
}

function generateMockResponse(
  userMessage: string,
  childProfile?: { name: string; age: number; interests: string[]; skills: string[] }
): AIChatResponse {
  const name = childProfile?.name || "your child";
  const age = childProfile?.age || 5;
  const interests = childProfile?.interests || ["general learning"];

  return {
    message: `Here are some personalized activity suggestions for ${name} (age ${age}) based on their interests in ${interests.join(", ")}. Remember, every child develops at their own pace — focus on enjoying the process together!`,
    activities: [
      {
        title: `Creative ${interests[0] || "Learning"} Adventure`,
        age: `${Math.max(0, age - 1)}-${age + 2} years`,
        duration: "20 minutes",
        materials: ["Paper", "Markers", "Household items"],
        stepByStep: [
          `Start by discussing ${name}'s favorite ${interests[0] || "topic"}`,
          "Gather the materials together",
          "Follow the child's lead and explore",
          "Ask open-ended questions throughout",
          "Celebrate their efforts and creativity"
        ],
        skillsSupported: childProfile?.skills?.slice(0, 3) as SkillCategory[] || ["COGNITIVE", "CREATIVITY", "LANGUAGE"],
        questionsForChild: [
          "What do you think about this?",
          "Can you tell me more about your idea?",
          "What would happen if we tried this differently?"
        ],
        easierVersion: "Simplify by focusing on one step at a time",
        harderVersion: "Add more complexity or combine with other skills",
        safetyNotes: age < 3 ? "Always supervise with small items" : undefined
      }
    ]
  };
}

export { SYSTEM_PROMPT, type AIActivityResponse, type AIChatResponse };
