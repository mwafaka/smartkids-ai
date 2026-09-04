# SmartKids AI

An AI-powered parenting guide that provides personalized, age-appropriate activity recommendations for children aged 0-18. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Onboarding Wizard** -- Guided 3-step setup to create your first child profile
- **Child Profile Management** -- Create, edit, and delete profiles with interests, skills, and preferences
- **Activity Library** -- 22 curated activities covering ages 0-14, filterable by skill, age, duration, difficulty, and location
- **AI Assistant** -- Interactive chat powered by OpenAI (gpt-4o-mini) with mock fallback when no API key is configured
- **Progress Tracking** -- Skills development progress bars, activity history, streaks, and average ratings
- **Dashboard** -- Personalized homepage with today's activities, recommendations, and stats
- **Settings** -- Notification toggles, data export (JSON), and data management
- **Admin Panel** -- Mock administration dashboard with user stats, charts, and system alerts
- **Privacy Compliant** -- GDPR/DSGVO-compliant privacy policy and legal imprint pages
- **Responsive Design** -- Desktop sidebar and mobile bottom navigation, mobile-first approach

## Tech Stack

| Category | Technology |
|---|---|
| Framework | [Next.js](https://nextjs.org/) 16.3 (App Router) |
| Language | [TypeScript](https://www.typescriptlang.org/) 5 |
| UI | [React](https://react.dev/) 19, [Tailwind CSS](https://tailwindcss.com/) 4 |
| State | [Zustand](https://zustand-demo.pmnd.rs/) (persisted to localStorage) |
| AI | [OpenAI API](https://platform.openai.com/) (gpt-4o-mini) |
| Validation | [Zod](https://zod.dev/) |
| Icons | [Lucide React](https://lucide.dev/) |
| ORM | [Prisma](https://www.prisma.io/) (scaffolded) |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+
- npm, yarn, or pnpm

### Installation

```bash
git clone <repository-url>
cd smartkids-ai
npm install
```

### Environment Variables

```bash
cp .env.example .env.local
```

| Variable | Description | Required |
|---|---|---|
| `OPENAI_API_KEY` | OpenAI API key for AI chat features | No (mock fallback used) |
| `DATABASE_URL` | PostgreSQL connection string | No (not yet implemented) |
| `NEXTAUTH_URL` | NextAuth.js base URL | No (not yet implemented) |
| `NEXTAUTH_SECRET` | NextAuth.js secret key | No (not yet implemented) |
| `NEXT_PUBLIC_APP_URL` | Public app URL | No |
| `NEXT_PUBLIC_APP_NAME` | Public app name | No |

> The app is fully functional with zero environment variables configured. The AI assistant falls back to mock responses when `OPENAI_API_KEY` is not set.

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production

```bash
npm run build
npm run start
```

### Linting

```bash
npm run lint
```

## Project Structure

```
src/
  app/
    (dashboard)/         # Dashboard route group
      home/              # Dashboard home with today's activities
      activities/        # Activity library with filters
      assistant/         # AI chat interface
      my-child/          # Child profile management
      progress/          # Progress tracking
      settings/          # Settings and data management
    admin/               # Admin dashboard
    onboarding/          # Onboarding wizard
    datenschutz/         # Privacy policy (German)
    impressum/           # Legal imprint (German)
    api/
      activities/        # Activity API endpoints
      chat/              # AI chat API endpoint
  components/
    features/            # Feature-specific components
    layout/              # Layout components (sidebar, header, nav)
    ui/                  # Reusable UI primitives
  config/                # App constants and skill categories
  data/                  # Curated activity data
  lib/                   # AI service and utility functions
  stores/                # Zustand state stores
  types/                 # TypeScript type definitions
```

## Skill Categories

The app tracks development across 13 skill categories:

- Cognitive
- Language
- Math & Logic
- Creativity
- Science
- Problem Solving
- Emotional Intelligence
- Social Skills
- Physical
- Reading
- Focus & Memory
- Critical Thinking
- Life Skills

## License

Private project for educational purposes. All rights reserved.
