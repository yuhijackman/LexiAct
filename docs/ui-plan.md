# ActiveVocab UI Development Specification (MVP)
This document outlines the required screens and components for the LexiAct Minimum Viable Product (MVP) user interface. The focus is on implementing the specified layouts and components using React Native, Nativewind, and gluestack-ui, adhering to the high-level design principle of a "Cozy Soft-Minimalism" style.
Note to Coding Agent:
All data displayed should be hardcoded (mock data) to focus exclusively on UI and navigation implementation.
Logic for database access (WatermelonDB), API calls (LLM/Collocations), and SRS scheduling is excluded from this UI task.
Ensure all code uses TypeScript and adheres to Biome formatting standards.
## 1. Navigation Architecture (Four-Tab Structure)
The application utilizes a main Tab Bar Navigator, accessible after successful authentication.
| Tab Order | Tab Name            | Purpose & Source Alignment                                                |
| :-------- | :------------------ | :------------------------------------------------------------------------ |
| 1.        | Lexicon (Word List) | The user's personalized vocabulary library (FR2, Story 1.2).              |
| 2.        | Study               | The main action hub for active production practice (FR5, Story 1.4, 1.5). |
| 3.        | Progress            | Dedicated space for tracking and visualizing user metrics (Story 1.7).    |
| 4.        | Profile             | User settings and configuration (FR1).                                    |

## 2. Standalone Screens (Authentication)
| Screen Name  | Description                                                                                                                            | Mock Data Required |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------------- | :----------------- |
| AuthScreen   | The initial sign-up/sign-in screen.                                                                                                    | N/A                |
| Design Notes | Clean, minimalist screen with clear call-to-action buttons. Must include placeholders for Google and Apple social login buttons (FR1). | N/A                |

## 3. Tab Screens & Components
### A. Tab 1: Lexicon (Word List)
| Screen/Component   | Description                                                                                                                   | Mock Data Required                                                  |
| :----------------- | :---------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------ |
| LexiconScreen      | Main list of all user words. Should support viewing words in a list format.                                                   | Array of 10 mock WordEntry objects (Target Word, Definition, Tags). |
| WordCard Component | A list item component displaying: Target Word, Tags, and a snippet of the definition. Must support swipe/tap to open details. | N/A                                                                 |
| Add Word Button    | A prominent, persistent Floating Action Button (FAB) or Header Button to initiate the AddWordScreen flow (FR2).               | N/A                                                                 |
| Search/Filter Bar  | Simple search bar and a mechanism (e.g., chip filter) to filter by Tags (FR3).                                                |
| N/A                |

### B. Tab 2: Study / Review
| Screen/Component        | Description                                                                                                                                                 | Mock Data Required                                                   |
| :---------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------- |
| StudySelectorScreen     | Landing page for the Study tab, prompting the user to choose their mode.                                                                                    | N/A                                                                  |
| Design Notes            | Two distinct, large buttons (e.g., gluestack-ui Cards) for "Quick Review" and "Deep Study".                                                                 | N/A                                                                  |
| QuickReviewScreen       | Flashcard interface (FR5).                                                                                                                                  | 5 mock WordEntry objects for review.                                 |
| Flashcard Component     | Must implement a clear flip animation. Front shows Target Word. Back shows Definition and Example Sentences.                                                | N/A                                                                  |
| Grading Buttons         | Buttons at the bottom: "Again," "Hard," "Good," "Easy".                                                                                                     | N/A                                                                  |
| DeepStudyScreen         | The core production environment (FR6).                                                                                                                      | 1 mock WordEntry object (Target Word, Definition, Example Sentence). |
| SentenceInput Component | Core Requirement: Large text input field required for the user to type an original sentence. Display the Target Word prominently above the input.           | N/A                                                                  |
| Submission Flow         | A "Submit Sentence" button. On press, reveal the "Self-Assessment" prompt dialog/modal ("Did I successfully create an original sentence using this word?"). | N/A                                                                  |

### C. Tab 3: Progress
| Screen/Component              | Description                                                                                                                                                                                                          | Mock Data Required            |
| :---------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------- |
| ProgressScreen                | A dedicated screen for detailed progress visualization.                                                                                                                                                              | Mock data for key statistics. |
| Design Notes                  | :---                                                                                                                                                                                                                 | :---                          |
| Summary Cards                 | Display large, easily readable metrics: "Words Studied" (e.g., 342) and "Words Mastered" (e.g., 87).                                                                                                                 | N/A                           |
| Visualizations (Placeholders) | Include placeholder components for future charts (e.g., a simple bar chart representing words reviewed per week, or a metric showing the 'Average Mastery Score'). This prepares for future detailed implementation. | N/A                           |
| Mastery Breakdown Section     | Show a breakdown by Tags (e.g., "Academic: 65% Mastered," "Business: 40% Mastered").                                                                                                                                 | N/A                           |

### D. Tab 4: Profile
| Screen/Component | Description                                                                                                                                           | Mock Data Required                    |
| :--------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------ |
| ProfileScreen    | User identity and app settings.                                                                                                                       | Mock user data (Name, Profile Image). |
| Design Notes     | Display user information (name, profile image). Include sections for "Account Settings," "Notification Preferences," and a visible "Sign Out" button. | N/A                                   |

4. Global Modals (Complex Forms)
| Modal Name              | Description                                                                                                                                                                                                                        | Mock Data Required                                                                   |
| :---------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------- |
| AddWordScreen (Modal)   | Full-screen modal for adding a new word (FR2, FR3).                                                                                                                                                                                | N/A                                                                                  |
| Form Inputs             | Must include fields for: targetWord, definition, exampleSentences (multi-line input), and tags (input with suggestion chips).                                                                                                      | N/A                                                                                  |
| Placeholder Integration | The UI must include clear placeholder fields for the Collocations and Phonetic Symbols that will be auto-filled by the AI in Phase 2 (FR4 - currently deferred). These should be visible but non-editable placeholders in the MVP. | Mock placeholder text for future features.                                           |
| WordDetailModal         | Displays all saved data for a word.                                                                                                                                                                                                | Full mock WordEntry data, including mock phoneticSymbols and mock example sentences. |
| EditWordModal           | Allows editing of the word's data.                                                                                                                                                                                                 | Full mock WordEntry data pre-filled in inputs.                                       |


