# LexiAct MVP Development Tasks

## 1. Project Initialization & Setup
- [x] **Initialize Expo Project**
    - Create new Expo app with TypeScript.
    - Configure `tsconfig.json` paths.
- [x] **Tooling Setup**
    - Install and configure **NativeWind** (Tailwind CSS).
    - Install and configure **Biome** for linting/formatting.
    - Setup **Expo Router** for navigation.
- [x] **Folder Structure**
    - Create standard directories: `src/app`, `src/components`, `src/lib`, `src/db`, `src/types`.

## 2. Database & Data Layer (Local-First)
- [ ] **WatermelonDB Setup**
    - Install `@nozbe/watermelondb` and dependencies.
    - Configure IOS/Android native bridges if necessary (or use Expo plugins).
- [ ] **Schema Definition**
    - Define `Word` model (targetWord, definition, phoneticSymbols, exampleSentences, tags, masteryScore, nextReviewAt).
    - Define `Tag` model (name, color).
- [ ] **Database Service**
    - Implement `createWord`, `updateWord`, `deleteWord`, `getWords`.
    - Implement `getWordsDueForReview` query.

## 3. Authentication (Story 1.1)
- [ ] **Supabase Integration**
    - Install `@supabase/supabase-js` and secure storage adapter.
    - Initialize Supabase client.
- [ ] **Auth Logic**
    - Create `AuthProvider` context.
    - Implement `signIn`, `signUp`, `signOut`.
- [ ] **Auth Screens**
    - Build `LoginScreen` (Google/Apple auth buttons).
    - Build `SignUpScreen`.

## 4. Core Vocabulary Features (Story 1.2)
- [ ] **Word List UI**
    - Create `WordCard` component ("Cozy Soft-Minimalism" style).
    - Build `WordListScreen` with search/filter.
- [ ] **Add/Edit Word UI**
    - Build form inputs (Word, Definition, Examples, Tags).
    - Implement "Auto-fill" placeholder UI (mock API for MVP).
- [ ] **Word Detail UI**
    - Display full word details, collocations (placeholder), and examples.

## 5. Study Modes (Stories 1.4 & 1.5)
- [ ] **SRS Logic**
    - Implement basic Spaced Repetition algorithm (e.g., Leitner system or simple interval multiplier).
- [ ] **Quick Review Mode (Flashcards)**
    - Build `Flashcard` component with flip animation.
    - Implement grading buttons (Again, Hard, Good, Easy) linked to SRS logic.
- [ ] **Deep Study Mode (Sentence Production)**
    - Build `SentenceInput` component.
    - Display Target Word + Collocation hints.
    - Implement "Self-Correction" flow (User submits -> Confirms if valid -> Updates score).

## 6. Progress & Profile (Story 1.7)
- [ ] **Profile Screen**
    - Display user info.
    - Show "Words Mastered" and "Words Studied" stats.
- [ ] **Progress Calculation**
    - Create DB queries to aggregate mastery scores.

## 7. UI/UX Polish
- [ ] **Theming**
    - Enforce `bg-background-light`, `rounded-3xl`, `font-serif` headers.
- [ ] **Navigation**
    - Configure Tab Bar (Home, Study, Profile) with custom icons.
