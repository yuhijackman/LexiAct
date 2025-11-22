# LexiAct - Project Context

## Project Overview
**LexiAct** is a mobile application designed for **advanced English learners (B2-C2 level)** who have hit a "plateau." Unlike traditional vocabulary apps that focus on passive recognition (flashcards), LexiAct focuses on **active production**. Users must use new words in their own sentences.

**Core Value Proposition:** A "personal language gym" where users practice using new words in context.
**Future Vision:** AI-powered "naturalness" feedback to correct style and usage, acting as a private tutor.

## Directory Structure
This project is currently in the **design and planning phase**.

*   `docs/` - Project documentation.
    *   `brief.md` - High-level business objectives, vision, and strategy.
    *   `prd.md` - Product Requirements Document, detailing features, user stories, and data models.
    *   `ui-design.md` - Design system specifications ("Cozy Soft-Minimalism") and UI component blueprints.
    *   `architecture.md` - (Pending) Technical architecture details.
    *   `task.md` - (Pending) Task tracking.
    *   `inspirations/` - UI reference images.
*   `notes/` - General project notes and brainstorming.

## Technology Stack (Planned)
*   **Platform:** Mobile (iOS/Android) via **React Native** with **Expo**.
*   **Language:** **TypeScript**.
*   **Styling:** **NativeWind** (Tailwind CSS for React Native).
*   **UI Library:** **gluestack-ui** (planned).
*   **Local Database:** **WatermelonDB** or **Realm** (for offline-first capability).
*   **Backend:** Serverless (AWS Lambda/Google Cloud Functions) for API proxying.
*   **AI:** LLM integration (Gemini/OpenAI/Claude) for "naturalness checks" (Post-MVP).
*   **Linting/Formatting:** **Biome**.

## MVP Features (Scope)
1.  **User Auth:** Sign up/Login (Google/Apple).
2.  **Vocab Management:** Add words with definitions, images, and tags.
3.  **Quick Review:** Traditional flashcard mode with basic Spaced Repetition (SRS).
4.  **Deep Study:** The core feature - users MUST type a sentence using the target word.
5.  **Progress Tracking:** simple "Words Mastered" metrics.

## UI/UX Design System
*   **Theme:** "Cozy Soft-Minimalism"
*   **Visuals:** Playful, rounded corners (`rounded-3xl`), high-brightness background (`bg-background-light`), tactile feel.
*   **Typography:** Serif for headers/numbers, Sans-serif for body text.

## Development Guidelines (Planned)
*   **Code Style:** Strict adherence to Biome configuration.
*   **State Management:** To be determined (likely React Context or a lightweight library like Zustand).
*   **File Structure:** Feature-based grouping (e.g., `src/features/vocabulary`, `src/features/auth`).
