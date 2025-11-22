# LexiAct Brownfield Enhancement PRD

## Intro Project Analysis and Context
**Product Concept:** An English vocabulary app, "LexiAct," that moves beyond passive recognition to focus on active production. It forces users to use words in their own sentences and provides AI-powered feedback on how "natural" their usage is, mimicking feedback from a native speaker.

**Problem Solved:** The app targets the "Advanced Learner's Plateau," where learners add words to memorize actively and learn natural usage of words so that they can use them confidently in speech and writing (productive vocabulary)


**Target Market:** Advanced non-native English speakers (B2-C2 level) who want to expand their vocaburaly to fixate them in brain and actively use them in daily life.
In addition to it, users can learn how target words are used by native speakers in real world. It helps their English more natural.

**Key Value Proposition:** LexiAct provides a place where users actively use target words and receive AI-powered "naturalness" feedback from private, AI-powered "tutor" that gives learners the confidence to use advanced vocabulary correctly and naturally in real-world conversations by offering contextual, style-aware feedback.

## Problem Statement
**Current State and Pain Points:** Advanced English learners (B2-C2 level) consume sophisticated English content daily, from tv shows/movies to professional articles and academic papers. Their passive, receptive vocabulary is extensive. However, they find it difficult to memorize words in a long term memory and use them in conversations or writings. And they need to someone to ask to know how target words are used in real world.

**Why Existing Solutions Fall Short:** The current market of language-learning apps is overwhelmingly focused on beginners and intermediate learners. Tools like Duolingo and standard flashcard apps (e.g., Anki) are built for passive recognition and recall of pre-made sentences. They do not provide a framework for original sentence production, nor do they offer the nuanced feedback on naturalness, style, and cultural context that advanced learners desperately need. They are the wrong tool for advanced learners.

**Key Differentiators:**
1.  **AI-Powered Naturalness Feedback:** This is the app's cornerstone. The AI doesn't just check for grammatical correctness; it evaluates the sentence for naturalness, collocation (words that naturally go together), and context. It provides feedback like, "Grammatically correct, but a native speaker would more likely say it this way..."
2.  **Focus on Production, Not Recognition:** The app's entire methodology is built around forcing active use, which is the only way to move words from passive to productive vocabulary.
3.  **Personalized Learning Loops:** The app uses intelligent algorithms to reintroduce words that the user struggles with, creating a personalized and efficient learning path.


#### Current Project State
This is a new project in the planning phase. The core concept is an English vocabulary app for advanced learners, focusing on active sentence production with AI-powered "naturalness" feedback.

### Available Documentation Analysis

#### Available Documentation
- [ ] Source Tree/Architecture (not yet defined)
- [ ] Coding Standards (not yet defined)
- [ ] API Documentation (not yet defined)
- [ ] External API Documentation (to be researched)
- [ ] Nativewind V4 Documentation(https://www.nativewind.dev/docs)
- [ ] Expo Documentation(https://docs.expo.dev/)
- [ ] Biome Documentation(https://biomejs.dev/guides/)
- [ ] React Native Documentation(https://archive.reactnative.dev/docs/next/getting-started)
- [ ] Supabase Documentation(https://supabase.com/docs/guides/)
- [ ] UX/UI Guidelines (high-level principles in `ui-design.md`)
- [ ] Design Inspiration Images (`inspirations/*.PNG`)
- [ ] Technical Debt Documentation (N/A for a new project)

### Enhancement Scope Definition

#### Enhancement Type
- New Feature Addition (This is a greenfield project, so we are defining the initial feature set).

#### Enhancement Description
Build the Minimum Viable Product (MVP) for the LexiAct application as defined in the project brief.

#### Impact Assessment
- Major Impact (This involves building the entire initial application).

### Goals and Background Context

#### Goals
*   Develop the MVP of the LexiAct application, enabling users to add vocabulary with example sentences.
*   The MVP includes features to encounter vocabulary like flashcard apps but with the extra practice of using the vocabulary in their own sentences.
*   Establish a clear distinction from existing vocabulary apps by focusing on active production.
*   In the future(not included in the MVP), we will add features to receive AI-powered feedback on its naturalness and correctness.

#### Background Context
This project aims to address the "Advanced Learner's Plateau," a common frustration for non-native English speakers who have a large passive vocabulary but struggle to use it actively and naturally. Existing solutions like Durolingo or Anki are designed for passive recognition and fail to provide the nuanced feedback required for advanced learners to gain confidence in their productive vocabulary.

LexiAct will provide a "personal language gym" where users can practice using new words in their own sentences and receive instant, AI-powered feedback on the naturalness and correctness of their usage. This will bridge the gap between passive knowledge and active, confident communication.

### Change Log

| Change | Date | Version | Description | Author |
| --- | --- | --- | --- | --- |
| Initial Draft | 2025-10-26 | 1.0 | First draft of the PRD | John (PM) |

## Requirements

### Functional
*   FR1: Users must be able to create an account and log in using social providers (Google, Apple).
*   FR2: Users must be able to add new words or phrases to their personal vocabulary list.
*   FR3: For each entry, users must be able to add a definition, example sentences, and tags(to group the words and phrases).
*   FR4: When a user adds a new word, the app must automatically fetch and display common collocations and phonetic symbols for that word. these can be fetched through an external API.
*   FR5: The app must provide two review modes: "Quick Review" (traditional flashcards) and "Deep Study" (active sentence production).
*   FR6: In "Deep Study" mode, users must be able to submit their own sentence for a given word.
*   FR7: Users must be able to track their progress, including the number of words studied and mastered.

### Non Functional
*   NFR1: The app must be built using React Native with Expo, TypeScript, Biome, Nativewind and gluestack ui.
*   NFR2: The app must use a local database for offline access to the user's word list.
*   NFR3: The user interface must be a playful, rounded, high-brightness iOS-style interface that mixes modern clean utility with cozy, illustrative warmth
*   NFR4: The app must handle API errors and loading states gracefully.

### Future Functional Requirements(Not In The MVP)
*   FFR1: Users must be able to receive AI-powered feedback on the naturalness and correctness of their sentences.
*   FFR2: The AI feedback must be clear, concise, and provide a more natural alternative if the user's sentence is grammatically correct but stylistically awkward.

### Future Non Functional Requirements(Not In The MVP)
*   FNFR1: The AI feedback loop must complete within 3 seconds.
*   FNFR2: The app must store the user's word list in the cloud database for sharing data between devices.

### Compatibility Requirements
*   CR1: The app must be compatible with iOS.

### Future Compatibility Requirements(Not In The MVP)
*   CR1: The app must be compatible with Web.

## Technical Constraints and Integration Requirements

### Existing Technology Stack
*   **Languages**: TypeScript
*   **Frameworks**: React Native with Expo
*   **Database**: A fast local database (e.g., WatermelonDB, Realm)
*   **Infrastructure**: Serverless architecture (e.g., AWS Lambda, Google Cloud Functions)
*   **External Dependencies**: A third-party Large Language Model (LLM) via API (e.g., Gemini).

### Integration Approach
*   **Database Integration Strategy**: The app will use both local database approach for the user's word list.
*   **Frontend Integration Strategy**: The React Native frontend will communicate with the serverless backend via REST API.
*   **Testing Integration Strategy**: We will use a testing library for unit and integration testing of the React Native components and business logic.


### Future Integration Approach(Not In The MVP)
*   **API Integration Strategy**: All "Naturalness Checks" and "Collocation Fetching" will be handled through API calls to a serverless backend, which will in turn call the external LLM API.

### Code Organization and Standards
*   **File Structure Approach**: We will follow a standard React Native project structure, with a clear separation of components, screens, services, and state management.
*   **Naming Conventions**: We will adhere to standard TypeScript and React naming conventions.
*   **Coding Standards**: We will use Biome to ensure a consistent code style.
*   **Documentation Standards**: We will use TSDoc for inline documentation of all functions and components.

### Deployment and Operations
*   **Build Process Integration**: We will use Expo's build service to create the iOS application bundle.
*   **Deployment Strategy**: We will use a continuous integration and continuous deployment (CI/CD) pipeline to automate the build and deployment process to the App Store.
*   **Monitoring and Logging**: We will use a cloud-based monitoring service to track the performance and stability of the serverless backend and the mobile app.
*   **Configuration Management**: We will use environment variables to manage configuration for different environments (development, staging, production).

### Risk Assessment and Mitigation
*   **Technical Risks**:
    *   High AI API costs.
    *   Poor AI feedback quality.
    *   Slow AI API response times.
*   **Integration Risks**:
    *   The chosen LLM API may have breaking changes or downtime.
*   **Deployment Risks**:
    *   The App Store review process may cause delays.
*   **Mitigation Strategies**:
    *   Conduct a technical spike to compare different LLM providers on cost, quality, and speed.
    *   Implement a circuit breaker pattern to handle LLM API downtime.
    *   Thoroughly test the app before submitting it to the App Store.

## Data Model Enhancements (Word Entry Schema)
| Field Name | Type | Description | Rationale (SLA/Cognitive) |
| :--- | :--- | :--- | :--- |
| **targetWord** | `String` | The word, phrase, or Formulaic Sequence (FS) being studied. | — |
| **definition** | `String` | Definition | Tactic 1: Check Meaning. |
| **image** | `String` | Focusing on the image, minimizing direct L1 translation reliance. | Tactic 1: Check Meaning. |
| **phoneticSymbols** | `String` | The phonetic transcription. Must be auto-filled if possible. | Tactic 2: Pronounce; crucial for accurate sound/form memory. |
| **exampleSentences** | `Array<String>` | Sentences saved by the user during input. | Provides context and reinforces comprehension. |
| **tags** | `Array<String>` | User-defined categories (e.g., "Academic," "Business," "My Presentation"). | — |
| **masteryScore** | `Number` | Tracks progress and is updated after Deep Study production attempts. | — |
| **reviewSchedule** | `Timestamp` | Basic SRS scheduling for next review. | — |

## Epic and Story Structure

### Epic Approach
**Epic Structure Decision**: This project will be structured as a single, comprehensive epic. The rationale is that we are building a new, self-contained Minimum Viable Product (MVP) from the ground up. This approach ensures all foundational work is completed in a logical sequence before tackling more complex features, resulting in a cohesive and stable initial release.

## Epic 1: LexiAct MVP Launch

**Epic Goal**: To launch a functional Minimum Viable Product of the LexiAct application on the iOS platform that successfully delivers the core user value proposition: allowing advanced English learners to practice active vocabulary production.

**Integration Requirements**: This epic requires the successful integration of a React Native/Expo mobile frontend, a serverless backend, a local database for offline functionality for the core feedback feature.

### Story 1.1 User Authentication & Profile Setup
As an ambitious professional,
I want to create an account and log in easily,
so that I can securely track my vocabulary progress.

#### Acceptance Criteria
1.  Users can sign up and log in using Google.
2.  Users can sign up and log in using Apple.
3.  A basic user profile is created upon registration.(name, profile image, etc.)

#### Integration Verification
*   IV1: Authentication service (e.g., Supabase Auth) is correctly integrated.
*   IV2: User data is securely stored in the backend database.
*   IV3: Login and signup flows do not negatively impact app startup time.

### Story 1.2 Core Vocabulary Management (Add, View, Tag Words)
As an advanced learner,
I want to add, view, and organize my own words and phrases,
so that I can create a personalized learning library.

#### Acceptance Criteria
1.  Users can add a new word or phrase.
2.  For each entry, users can add a definition(have an option to auto fill it from an external dictionary API), example sentences(have an option to auto fill it from an external dictionary API), and phonetic symbols(better be auto filled if possible from an external dictionary API) and an image(minimizing direct L1 translation reliance).
3. Users can add one or more tags to any entry for sorting and filtering.
4. The user's word list is persisted locally for offline access.
5. Users can edit and delete their own words.
6. Users can view their own words in a list or grid format.

#### Integration Verification
*   IV1: Local database (e.g., WatermelonDB) is correctly integrated and persists data across app sessions.
*   IV2: The UI for adding and viewing words is responsive and intuitive.
*   IV3: Performance remains fast even with hundreds of words in the local database.

### Story 1.3 AI-Powered Collocation Engine Integration(Not In The MVP)
As a user,
I want to immediately learn what "friend" words a new word has,
so I can use it correctly and naturally in context.

#### Acceptance Criteria
1.  When a user saves a new word, an API call is made to the backend.
2.  The backend queries the LLM API to find common collocations.
3.  The collocations are displayed on the word's entry page.
4.  The app gracefully handles loading states and potential API errors.

#### Integration Verification
*   IV1: The serverless backend function for fetching collocations is deployed and accessible.
*   IV2: The LLM API provides accurate and relevant collocations.
*   IV3: The entire process from saving a word to displaying collocations takes less than 3 seconds.

### Story 1.4 "Quick Review" SRS Flashcard Mode
As a user,
I want a quick and easy way to review my words,
so that I can study effectively even when I'm short on time.
Goal: Provide a fast, efficient review mechanism leveraging Spaced Repetition

#### Acceptance Criteria
1. The mode presents words to facilitate Active Retrieval.This means the card front should challenge the user's memory (e.g., L1 cue/definition/gap-fill, requiring the L2 word/phrase as output)
2.  The mode presents words as traditional flashcards (Front: Word, Back: Definition/Collocations).
3.  Users can self-report their recall ability ("Again," "Hard," "Good," "Easy").
4.  The app uses a basic Spaced Repetition System (SRS) to schedule the next review.

#### Integration Verification
*   IV1: The SRS logic correctly schedules cards for future review based on user input.
*   IV2: The flashcard interface is smooth and allows for rapid review.
*   IV3: The review state is saved locally and persists across sessions.

### Story 1.5 "Deep Study" Mode UI & Sentence Submission
As a user,
I want a dedicated space to practice using a word in my own sentence,
so that I can move from passive knowledge to active skill.
Goal: Force active language production and syntactic processing, which is essential for moving words to the active reservoir

#### Acceptance Criteria
1.  A "Deep Study" mode is available and prioritized in the UI
2.  The UI displays the target word and its collocations as a hint. 
3.  Core Requirement: The interface must contain a text input field where the user is required to type/write an original sentence using the target word (Tactic 3: Make a Sentence)
4.  The user must manually click "Submit Sentence" to confirm production.
5. Since AI feedback is deferred, the submission immediately prompts a self-assessment/reflection step. The user is asked to verify: "Did I successfully create an original sentence using this word?"
6. Confirmation updates the masteryScore and reviewSchedule.


#### Integration Verification
*   IV1: The UI is clean and focuses the user on the task of sentence creation.

### Story 1.6 Core AI "Naturalness" Feedback Integration(Not In The MVP)
As an advanced learner,
I want to get instant, reliable feedback on my sentence,
so that I can learn to sound more like a native speaker.

#### Acceptance Criteria
1.  The backend receives the user's sentence and queries the LLM API for a "naturalness check."
2.  The LLM API returns feedback that is either a validation or a more natural alternative.
3.  The feedback is displayed clearly to the user in the app.
4.  The entire feedback loop completes in under 3 seconds.

#### Integration Verification
*   IV1: The prompt to the LLM API is well-engineered to produce concise and helpful feedback.
*   IV2: The feedback quality is consistently high and accurate.
*   IV3: The end-to-end latency from submission to feedback display meets the NFR.

### Story 1.7 Basic Progress Tracking
As a motivated learner,
I want to see my progress over time,
so that I can stay motivated and see how far I've come.

#### Acceptance Criteria
1.  A user profile screen is available.
2.  The screen displays simple metrics, such as "Words Studied" and "Words Mastered."
3.  These metrics are updated in real-time as the user interacts with the app.

#### Integration Verification
*   IV1: The progress data is stored accurately in the local database.
*   IV2: The metrics on the profile screen are always in sync with the user's actions.
*   IV3: The tracking logic does not negatively impact the performance of the core review loops.

### Story 1.8 Freemium Metering (20 AI Checks/Month)(Not In The MVP)
As a business,
I want to limit the number of free AI checks,
so that I can create a sustainable business model and encourage users to subscribe.

#### Acceptance Criteria
1.  Non-subscribed users are limited to 20 "Deep Study" AI checks per calendar month.
2.  The app tracks the number of checks used.
3.  When the limit is reached, the user is prompted with an offer to upgrade to the Pro tier.
4.  The check count resets on the first day of each month.

#### Integration Verification
*   IV1: The metering logic is handled securely on the backend to prevent tampering.
*   IV2: The user is clearly informed of their remaining checks.
*   IV3: The upgrade prompt is displayed correctly when the limit is reached.
