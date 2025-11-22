# LexiAct

**LexiAct** is a mobile application designed for **advanced English learners (B2-C2 level)** who have hit a "plateau." Unlike traditional vocabulary apps that focus on passive recognition (flashcards), LexiAct focuses on **active production**. It serves as a "personal language gym" where users must use new words in their own sentences to truly master them.

> **Status:** 🚧 In early development/prototyping phase.

## 🎯 Core Concept

Most language apps are great for beginners but fail advanced learners. At the advanced level, the problem isn't *knowing* a word exists (passive vocabulary), but *using* it spontaneously in conversation (active vocabulary).

**LexiAct solves this by:**
1.  **Contextual Learning:** Words are never learned in isolation.
2.  **Active Production:** Users MUST write sentences using the target word.
3.  **Personalization:** The "gym" adapts to the user's specific vocabulary needs.
4.  **(Planned) AI Feedback:** "Naturalness checks" to correct style, nuance, and collocation, acting as a private tutor.

## 🛠 Tech Stack

*   **Framework:** [React Native](https://reactnative.dev/) with [Expo](https://expo.dev/) (SDK 52)
*   **Routing:** [Expo Router](https://docs.expo.dev/router/introduction/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [NativeWind](https://www.nativewind.dev/) (Tailwind CSS)
*   **Linting & Formatting:** [Biome](https://biomejs.dev/)
*   **Fonts:** [Nunito](https://fonts.google.com/specimen/Nunito) via `@expo-google-fonts`

## 📂 Project Structure

```
/
├── app/                # Expo Router pages and layout
│   ├── (tabs)/         # Main tab navigation
│   ├── _layout.tsx     # Root layout
│   └── ...
├── components/         # Reusable UI components
├── docs/               # Documentation (PRD, Design Specs, etc.)
├── assets/             # Images and fonts
└── ...
```

## 🚀 Getting Started

### Prerequisites

*   [Node.js](https://nodejs.org/) (LTS recommended)
*   [Expo Go](https://expo.dev/client) app on your mobile device (iOS/Android) OR an Android/iOS Emulator.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/yuhijackman/LexiAct.git
    cd LexiAct
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npx expo start
    ```

4.  **Run on device:**
    *   Scan the QR code with your phone's camera (iOS) or the Expo Go app (Android).
    *   Press `w` for Web, `a` for Android emulator, or `i` for iOS simulator.

## 🧹 Linting & Formatting

This project uses **Biome** for fast and standardized linting and formatting.

*   **Check for errors:**
    ```bash
    npm run lint
    ```
*   **Fix auto-fixable errors and format code:**
    ```bash
    npm run format
    ```

## 🗺 Roadmap

*   [x] Project Setup (Expo, Typescript, NativeWind, Biome)
*   [ ] **Phase 1 (MVP):**
    *   User Authentication
    *   Vocabulary Management (Add/Edit/Delete words)
    *   "Deep Study" Mode (Sentence construction)
*   [ ] **Phase 2:**
    *   Spaced Repetition System (SRS)
    *   Gamification (Streaks, Levels)
*   [ ] **Phase 3:**
    *   AI Integration for sentence feedback

## 📄 License

This project is private and proprietary.
