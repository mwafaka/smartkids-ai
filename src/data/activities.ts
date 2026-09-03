import type { Activity } from "@/types";

export const ALL_ACTIVITIES: Activity[] = [
  {
    id: "b1", title: "Tummy Time Fun", description: "Encourage baby to lift their head and strengthen neck muscles during supervised tummy time with engaging toys.",
    ageMin: 0, ageMax: 1, duration: 10, materials: ["Soft play mat", "Colorful toys", "High contrast cards"],
    instructions: ["Place baby on their tummy on a soft mat", "Position colorful toys just out of reach", "Lie down face-to-face to encourage them", "Talk and sing to keep baby engaged", "Gradually increase tummy time duration"],
    skills: ["PHYSICAL", "COGNITIVE"], difficulty: "EASY", indoor: true, outdoor: false, isAI: false,
    questions: ["Can baby lift their head to look at you?"], easierVersion: "Place baby on your chest tummy-to-tummy", harderVersion: "Place toys further to encourage reaching"
  },
  {
    id: "b2", title: "Peek-a-Boo Discovery", description: "Play peek-a-boo to teach object permanence and build emotional bonds with your baby.",
    ageMin: 0, ageMax: 1, duration: 10, materials: ["Soft blanket", "Your hands"],
    instructions: ["Cover your face with your hands", "Say 'Where's baby?' then reveal with 'Peek-a-boo!'", "Watch baby's reaction and smile", "Let baby try to pull blanket away", "Repeat with variations"],
    skills: ["COGNITIVE", "EMOTIONAL_INTELLIGENCE", "SOCIAL_SKILLS"], difficulty: "EASY", indoor: true, outdoor: true, isAI: false,
    questions: ["Does baby smile or laugh when you reappear?"], easierVersion: "Use shorter hiding times", harderVersion: "Hide a toy instead of your face"
  },
  {
    id: "b3", title: "Sensory Touch Exploration", description: "Let baby explore different textures to develop tactile awareness and cognitive connections.",
    ageMin: 0, ageMax: 1, duration: 15, materials: ["Soft fabric swatches", "Crinkly paper", "Smooth wooden toy", "Fuzzy ball"],
    instructions: ["Sit with baby on your lap", "Offer one texture at a time", "Describe the feel: 'soft', 'smooth', 'crinkly'", "Let baby hold and mouth safe items", "Observe which textures baby prefers"],
    skills: ["COGNITIVE", "SCIENCE"], difficulty: "EASY", indoor: true, outdoor: false, isAI: false,
    questions: ["Which texture does baby touch the longest?"], easierVersion: "Start with just 2 textures", harderVersion: "Introduce temperature variations (safe warm/cool)"
  },
  {
    id: "b4", title: "Music & Rattles Shake", description: "Shake rattles and play gentle music to develop hearing, tracking, and early rhythm awareness.",
    ageMin: 0, ageMax: 1, duration: 10, materials: ["Baby rattle", "Soft music source", "Shaker toys"],
    instructions: ["Shake a rattle near baby's ear", "Move it side to side for sound tracking", "Place rattle in baby's hand to shake", "Play gentle music and sway together", "Try different rhythms and sounds"],
    skills: ["COGNITIVE", "CREATIVITY", "FOCUS_MEMORY"], difficulty: "EASY", indoor: true, outdoor: true, isAI: false,
    questions: ["Does baby turn their head toward the sound?"], easierVersion: "Use softer, slower sounds", harderVersion: "Create call-and-response with rhythms"
  },
  {
    id: "b5", title: "High Contrast Visual Play", description: "Show black and white high contrast images to stimulate baby's developing vision.",
    ageMin: 0, ageMax: 1, duration: 10, materials: ["High contrast cards or books", "Black and white patterns"],
    instructions: ["Hold card 8-12 inches from baby's face", "Let baby focus for 10-15 seconds", "Slowly move the card side to side", "Switch to a new pattern when baby looks away", "Talk about what you see"],
    skills: ["COGNITIVE", "FOCUS_MEMORY"], difficulty: "EASY", indoor: true, outdoor: false, isAI: false,
    questions: ["Does baby's eyes follow the pattern?"], easierVersion: "Use simpler geometric shapes", harderVersion: "Add one bright color to patterns"
  },
  {
    id: "b6", title: "Mirror Play & Recognition", description: "Let baby explore their reflection in a safe mirror to develop self-awareness and social skills.",
    ageMin: 0, ageMax: 1, duration: 10, materials: ["Unbreakable baby mirror", "Colorful stickers"],
    instructions: ["Place baby in front of a safe mirror", "Point to baby's reflection and say their name", "Make faces and watch baby's reactions", "Tap the mirror gently together", "Let baby touch the mirror surface"],
    skills: ["SOCIAL_SKILLS", "EMOTIONAL_INTELLIGENCE", "COGNITIVE"], difficulty: "EASY", indoor: true, outdoor: false, isAI: false,
    questions: ["Does baby smile or talk to their reflection?"], easierVersion: "Sit with baby facing the mirror together", harderVersion: "Add stickers around the mirror edge"
  },
  {
    id: "b7", title: "Gentle Baby Massage", description: "Practice gentle massage strokes to bond with baby and support physical development.",
    ageMin: 0, ageMax: 1, duration: 15, materials: ["Baby-safe oil (optional)", "Soft towel", "Calming music"],
    instructions: ["Warm your hands and oil if using", "Start with gentle legs strokes upward", "Move to arms and gentle chest circles", "Massage back with soft strokes", "Talk softly or hum throughout"],
    skills: ["PHYSICAL", "EMOTIONAL_INTELLIGENCE", "SOCIAL_SKILLS"], difficulty: "EASY", indoor: true, outdoor: false, isAI: false,
    questions: ["Does baby seem relaxed during massage?"], easierVersion: "Just massage legs and feet", harderVersion: "Incorporate gentle stretches"
  },
  {
    id: "b8", title: "Floor Rolling Play", description: "Encourage baby to roll from tummy to back and back, building core strength and coordination.",
    ageMin: 0, ageMax: 1, duration: 10, materials: ["Soft play mat", "Favorite toy", "Pillows for support"],
    instructions: ["Place baby on their back with a toy to one side", "Gently guide their hip to encourage rolling", "Cheer when baby rolls over", "Place toy on the other side to roll back", "Practice 3-5 times per session"],
    skills: ["PHYSICAL", "COGNITIVE"], difficulty: "EASY", indoor: true, outdoor: false, isAI: false,
    questions: ["Can baby roll from back to tummy?"], easierVersion: "Assist by gently guiding their legs", harderVersion: "Place toy further to encourage reaching while rolling"
  },
  {
    id: "b9", title: "Water Splash Time", description: "Supervised water play to explore cause and effect while having fun splashing.",
    ageMin: 0, ageMax: 1, duration: 10, materials: ["Baby tub or small basin", "Warm water", "Plastic cups", "Floating toys"],
    instructions: ["Ensure water is warm and safe", "Let baby sit and splash freely", "Pour water slowly over baby's hands", "Float toys and let baby grab them", "Narrate: 'splash splash!'"],
    skills: ["SCIENCE", "PHYSICAL", "COGNITIVE"], difficulty: "EASY", indoor: true, outdoor: true, isAI: false,
    questions: ["Does baby enjoy splashing the water?"], easierVersion: "Just dip baby's hands in water", harderVersion: "Use cups to pour and practice cause-effect"
  },
  {
    id: "b10", title: "Crawl Chase Game", description: "Encourage crawling by placing favorite toys just out of reach to motivate movement.",
    ageMin: 0, ageMax: 1, duration: 15, materials: ["Soft mat", "Favorite toy", "Pillows for safe boundaries"],
    instructions: ["Place baby on tummy on soft mat", "Put favorite toy just out of reach", "Encourage baby to move toward it", "Cheer and celebrate any movement", "Gradually increase distance"],
    skills: ["PHYSICAL", "PROBLEM_SOLVING", "COGNITIVE"], difficulty: "EASY", indoor: true, outdoor: false, isAI: false,
    questions: ["Is baby trying to reach the toy?"], easierVersion: "Place toy very close to encourage reaching", harderVersion: "Create a simple pillow obstacle course"
  },
  {
    id: "1", title: "Dinosaur Math Adventure", description: "Count dinosaurs, sort them by size, and create simple addition problems using toy dinosaurs.",
    ageMin: 3, ageMax: 6, duration: 20, materials: ["Toy dinosaurs", "Paper", "Markers"],
    instructions: ["Gather 10-15 toy dinosaurs", "Sort by size", "Count each group", "Create addition problems"],
    skills: ["MATH_LOGIC", "COGNITIVE", "CREATIVITY"], difficulty: "EASY", indoor: true, outdoor: false, isAI: false,
    questions: ["How many dinosaurs altogether?"], easierVersion: "Simply count one by one", harderVersion: "Try multiplication"
  },
  {
    id: "2", title: "Kitchen Science: Color Mixing", description: "Explore primary colors and create new ones using safe kitchen ingredients.",
    ageMin: 2, ageMax: 5, duration: 15, materials: ["Food coloring", "Water", "Clear cups"],
    instructions: ["Fill 3 cups with water", "Add food coloring", "Predict mixing results", "Pour and observe"],
    skills: ["SCIENCE", "CREATIVITY", "LANGUAGE"], difficulty: "EASY", indoor: true, outdoor: false, isAI: false,
    questions: ["What color will red and blue make?"], easierVersion: "Mix two colors", harderVersion: "Create specific shades"
  },
  {
    id: "3", title: "Story Building Chain", description: "Take turns adding sentences to create a collaborative story together.",
    ageMin: 5, ageMax: 10, duration: 25, materials: ["Paper and pen", "Imagination"],
    instructions: ["Parent starts the story", "Child adds next sentence", "Continue alternating", "Create beginning, middle, end"],
    skills: ["LANGUAGE", "CREATIVITY", "SOCIAL_SKILLS", "FOCUS_MEMORY"], difficulty: "MEDIUM", indoor: true, outdoor: true, isAI: false,
    questions: ["What should happen next?"], easierVersion: "Use picture prompts", harderVersion: "Add a villain and problem"
  },
  {
    id: "4", title: "Nature Scavenger Hunt", description: "Explore the outdoors finding items that match specific clues.",
    ageMin: 4, ageMax: 12, duration: 30, materials: ["Paper", "Pencil", "Bag"],
    instructions: ["Create a search list", "Walk and explore", "Check off items found", "Sort and discuss"],
    skills: ["SCIENCE", "COGNITIVE", "PHYSICAL", "PROBLEM_SOLVING"], difficulty: "EASY", indoor: false, outdoor: true, isAI: false,
    questions: ["Why is this leaf shaped this way?"], easierVersion: "Use pictures on list", harderVersion: "Add riddles"
  },
  {
    id: "5", title: "Feelings Charades", description: "Act out emotions and discuss when we feel them.",
    ageMin: 3, ageMax: 8, duration: 15, materials: ["Emotion cards", "Timer"],
    instructions: ["Draw an emotion card", "Act it out", "Partner guesses", "Discuss the feeling"],
    skills: ["EMOTIONAL_INTELLIGENCE", "SOCIAL_SKILLS", "LANGUAGE"], difficulty: "EASY", indoor: true, outdoor: true, isAI: false,
    questions: ["When did you last feel this way?"], easierVersion: "Use 3 basic emotions", harderVersion: "Add complex emotions"
  },
  {
    id: "6", title: "Build a Bridge Challenge", description: "Design and build a bridge from household items that can hold weight.",
    ageMin: 7, ageMax: 14, duration: 40, materials: ["Popsicle sticks", "Tape", "Glue", "Coins"],
    instructions: ["Discuss bridge types", "Sketch a design", "Build the bridge", "Test with weights"],
    skills: ["PROBLEM_SOLVING", "SCIENCE", "CRITICAL_THINKING", "MATH_LOGIC"], difficulty: "MEDIUM", indoor: true, outdoor: false, isAI: false,
    questions: ["Why is the arch shape stronger?"], easierVersion: "Use pre-cut shapes", harderVersion: "Span 30cm and hold a book"
  },
  {
    id: "7", title: "Music Pattern Clap", description: "Create rhythmic patterns by clapping, tapping, and using household items as instruments.",
    ageMin: 3, ageMax: 7, duration: 15, materials: ["Spoons", "Pots", "Hands"],
    instructions: ["Start a simple beat", "Add claps in a pattern", "Have child repeat", "Take turns creating patterns"],
    skills: ["COGNITIVE", "CREATIVITY", "FOCUS_MEMORY"], difficulty: "EASY", indoor: true, outdoor: true, isAI: false,
    questions: ["Can you repeat my pattern?"], easierVersion: "Copy a 2-beat pattern", harderVersion: "Create a 4-beat pattern"
  },
  {
    id: "8", title: "Sorting Laundry Game", description: "Turn laundry time into a learning game by sorting by color, size, and type.",
    ageMin: 2, ageMax: 5, duration: 10, materials: ["Clean laundry", "Baskets"],
    instructions: ["Dump clean laundry together", "Sort by color first", "Then by who it belongs to", "Count items in each pile"],
    skills: ["MATH_LOGIC", "COGNITIVE", "LIFE_SKILLS"], difficulty: "EASY", indoor: true, outdoor: false, isAI: false,
    questions: ["Which color has the most?"], easierVersion: "Sort just by color", harderVersion: "Sort by size within colors"
  },
  {
    id: "9", title: "Poetry Slam for Kids", description: "Write and perform silly poems together using rhymes and wordplay.",
    ageMin: 6, ageMax: 12, duration: 25, materials: ["Paper", "Pen", "Imagination"],
    instructions: ["Pick a topic together", "Brainstorm rhyming words", "Write short poems", "Perform them dramatically"],
    skills: ["LANGUAGE", "CREATIVITY", "SOCIAL_SKILLS"], difficulty: "MEDIUM", indoor: true, outdoor: true, isAI: false,
    questions: ["What word rhymes with that?"], easierVersion: "Use fill-in-the-blank poems", harderVersion: "Write a haiku"
  },
  {
    id: "10", title: "Indoor Obstacle Course", description: "Design and navigate an obstacle course using furniture and pillows.",
    ageMin: 3, ageMax: 10, duration: 20, materials: ["Pillows", "Chairs", "Blankets", "Tape"],
    instructions: ["Map out the course", "Set up obstacles", "Time the run", "Try to beat your record"],
    skills: ["PHYSICAL", "PROBLEM_SOLVING", "FOCUS_MEMORY"], difficulty: "EASY", indoor: true, outdoor: false, isAI: false,
    questions: ["How can you go faster?"], easierVersion: "Walk through the course", harderVersion: "Add timing challenges"
  },
  {
    id: "11", title: "Solar System Model", description: "Build a scale model of the solar system using balls and craft materials.",
    ageMin: 8, ageMax: 14, duration: 45, materials: ["Different sized balls", "Paint", "Cardboard", "Glue"],
    instructions: ["Research planet sizes", "Choose materials for each planet", "Paint and decorate", "Arrange in order with distances"],
    skills: ["SCIENCE", "MATH_LOGIC", "CREATIVITY", "PROBLEM_SOLVING"], difficulty: "HARD", indoor: true, outdoor: false, isAI: false,
    questions: ["How much bigger is Jupiter than Earth?"], easierVersion: "Make just the inner planets", harderVersion: "Include dwarf planets and asteroid belt"
  },
  {
    id: "12", title: "Emotion Journal", description: "Draw or write about feelings experienced during the day.",
    ageMin: 5, ageMax: 12, duration: 15, materials: ["Journal", "Crayons", "Stickers"],
    instructions: ["Set a daily time", "Draw or write about the day", "Name the emotions", "Rate the day 1-5 stars"],
    skills: ["EMOTIONAL_INTELLIGENCE", "READING", "FOCUS_MEMORY"], difficulty: "EASY", indoor: true, outdoor: false, isAI: false,
    questions: ["What made you feel happy today?"], easierVersion: "Draw faces showing emotions", harderVersion: "Write a paragraph about the day"
  }
];

export function getActivitiesForAge(age: number): Activity[] {
  return ALL_ACTIVITIES.filter((a) => a.ageMin <= age && a.ageMax >= age);
}
