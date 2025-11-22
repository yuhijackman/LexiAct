### Business Objectives
*   Achieve 10,000 Monthly Active Users (MAU) within the first 12 months of launch.
*   Attain a 5% conversion rate from free trial to paid subscription within the first 6 months.
*   Establish a user Lifetime Value (LTV) of at least $150 within the first 18 months.

### User Success Metrics
*   Users successfully "master" an average of 20 new words per month (defined as using a word correctly and naturally in 3 different contexts).
*   Achieve a 70% user retention rate after the first month.
*   Receive an average app store rating of 4.7 stars or higher.

### Key Performance Indicators (KPIs)
*   **Daily Active Users (DAU) / Monthly Active Users (MAU) Ratio:** Target a ratio of 0.4 or higher, indicating strong user engagement.
*   **Session Duration:** Average user session duration of at least 10 minutes.
*   **AI Feedback Acceptance Rate:** Track the percentage of times a user accepts or "likes" the AI's suggested correction, aiming for an 85% acceptance rate as a measure of feedback quality.

### Monetization: Freemium Model
Free Tier:
Unlimited word saving & categorization.
Unlimited "Quick Review" mode.
Metered "Deep Study" Mode: 20 AI-powered "Naturalness Checks" per month.
Pro Tier (Subscription):
Unlimited "Deep Study" AI checks.
Unlimited pronunciation checks.
Access to all future V2 features (like Scenario Simulator).

### Non-Functional Requirements
Platform: React Native (for iOS and Android).
Local Database: Must use a fast local DB (e.g., WatermelonDB, Realm) for offline access to the user's word list.
API: All "Naturalness Checks" and "Collocation Fetching" will rely on external API calls (e.g., Gemini API). App must handle loading states and API errors gracefully.
UI/UX: The design must be clean, professional, minimalist, and fast. It must feel like a "pro" tool, not a "gamified" app for children.

### Out of Scope for MVP
*   Speech recognition and spoken feedback.
*   The "Style-Matcher" (Linguistic DNA) feature.
*   The "Cultural Connotation" AI feature.
*   Gamification elements (streaks, leaderboards, points).
*   Community or social features.
*   Multiple, complex pricing tiers. A single, simple subscription model will be used.

### MVP Success Criteria
The MVP will be considered successful if, within 3 months of a limited public launch, 50% of active users are completing at least 10 sentence exercises per week, and the churn rate for the first month is below 60%. This will validate that the core loop is engaging and provides real value.

## Post-MVP Vision
### Phase 2 Features (Next 6-12 months)
*   **Speech Recognition & Pronunciation Feedback:** Introduce the ability for users to speak their sentences and receive AI feedback on pronunciation and naturalness in spoken English.
*   **Advanced Spaced Repetition System (SRS):** Implement a sophisticated SRS algorithm to create highly personalized and efficient review schedules for each user.
*   **Expanded Content & Word Decks:** Introduce specialized vocabulary decks for different industries (e.g., Finance, Tech, Law, Medicine) and interests.
*   **Gamification:** Add features like streaks, achievements, and leaderboards to increase user motivation and engagement.

### Long-term Vision (1-2 Years)
*   **The "Style-Matcher" (Linguistic DNA):** Fully develop and integrate the Style-Matcher feature, allowing users to upload samples and receive feedback tailored to a specific linguistic persona (e.g., "Academic," "Tech CEO," "Witty Journalist"). This will be a premium, subscription-tier feature.
*   **The "Cultural Connotation" AI:** Build and launch the cultural feedback engine to provide users with invaluable context on the social and professional implications of their word choices. This will solidify the app's position as a market leader.

### Expansion Opportunities
*   **Expansion to Other Languages:** Adapt the core technology to help advanced learners of other languages (e.g., French, Spanish, Mandarin) bridge the same active/passive vocabulary gap.

## Technical Considerations
### Platform Requirements
*   **Target Platforms:** iOS.
*   **Performance Requirements:** The AI feedback loop (user submits sentence -> receives feedback) must complete within 3 seconds to feel responsive.

### Technology Preferences
*   **Frontend:** React Native with Expo for cross-platform development.
*   **Language:** TypeScript for type safety and improved developer experience.
*   **Backend:** A serverless architecture (e.g., AWS Lambda, Google Cloud Functions) is preferred to manage costs and scale with demand, especially for the AI API calls. Node.js is a likely candidate.
*   **Database:** A NoSQL database like Firestore or DynamoDB for flexibility in storing user data and progress.
*   **AI:** A third-party large language model (LLM) via API. Initial candidates are OpenAI's GPT-4, Anthropic's Claude 3, or Google's Gemini, depending on which provides the best balance of quality, speed, and cost for the specific task of "naturalness" feedback.

### Architecture Considerations
*   **Security/Compliance:** All user data must be handled securely. If speech is implemented, ensure compliance with data privacy regulations regarding voice data.

## Constraints & Assumptions
### Constraints
*   **Budget:** To be determined. The primary cost driver will be the AI API usage, which needs careful monitoring and management.
*   **Timeline:** To be determined.
*   **Resources:** Initially, the project will be developed by a small team (or a solo developer).
*   **Technical:** The mobile application must be built using React Native/Expo with TypeScript.

### Key Assumptions
*   **AI Feasibility & Cost:** We are assuming that a third-party LLM API can provide consistently high-quality, fast, and concise feedback for a cost that is commercially viable within a subscription model. This is the single largest assumption.
*   **User Willingness to Pay:** We assume that advanced learners, particularly professionals, are willing to pay a recurring subscription fee for a tool that provides significant value in their career development.
*   **Problem-Solution Fit:** We assume that the "active production with AI naturalness feedback" model is the correct and most effective solution to the "Advanced Learner's Plateau" problem.
*   **Content Curation:** We assume we can effectively curate high-quality, relevant vocabulary lists that are compelling to the target audience.

## Risks & Open Questions
### Key Risks
*   **High AI API Costs (Financial Risk):** The cost of the LLM API calls could become prohibitively expensive, making the business model unsustainable. **Impact: High**
*   **Poor AI Feedback Quality (Product Risk):** The AI may provide feedback that is inaccurate, unnatural, too verbose, or unhelpful. This would destroy user trust and invalidate the core value proposition. **Impact: High**
*   **Lack of Market Differentiation (Market Risk):** A larger competitor (like Duolingo or a major dictionary brand) could add a similar feature, making it difficult to gain a foothold. **Impact: Medium**
*   **User Churn (Business Risk):** Users may not find the core loop engaging enough to stick with it long-term, leading to high churn and low Lifetime Value (LTV). **Impact: Medium**

### Open Questions
*   Which specific LLM provider (OpenAI, Anthropic, Google, etc.) offers the best combination of quality, speed, and cost for our specific use case?
*   What is the optimal pricing for the subscription to be both attractive to users and profitable for the business?
*   How can we design the AI prompts to ensure the feedback is consistently brief, helpful, and encouraging?
*   What is the most effective way to curate the initial vocabulary decks to provide maximum value to new users?

### Areas Needing Further Research
*   **AI Model Prototyping:** A technical spike to build a small-scale prototype to directly compare the feedback quality and API costs of the top 3 LLM candidates.

## Appendices
### A. Research Summary
The primary input for this brief was a structured brainstorming session conducted on October 25, 2025. The session utilized the "Six Thinking Hats" methodology to explore the problem space, user emotions, risks, benefits, and creative feature ideas. Key outputs from this session, including the "Style-Matcher" and "Cultural Connotation AI" concepts, have been integrated directly into this brief. The full results of that session are available in `docs/brainstorming-session-results.md`.

### C. References
*   Brainstorming Session Results: `docs/brainstorming-session-results.md`

## Next Steps
### Immediate Actions
1.  **Technical Spike:** Conduct a focused technical investigation to build a prototype that calls multiple LLM APIs (e.g., OpenAI, Anthropic, Google). The goal is to directly compare the quality, speed, and cost of the "naturalness feedback" from each provider and make a data-driven decision.
2.  **User Validation:** Conduct interviews with 5-10 individuals from the primary target user segment ("The Ambitious Professional"). Present the core concept and the MVP feature set to validate the problem-solution fit and gather initial feedback.
3.  **Develop a High-Level Roadmap:** Based on the technical spike and user validation, create a more detailed project roadmap with estimated timelines for the MVP development and launch.
