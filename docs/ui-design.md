UI Design System: Cozy Soft-Minimalism
1. Design Philosophy
"Cozy Soft-Minimalism" is the core aesthetic. The app should feel warm, personal, and inviting, moving away from cold corporate utility. It mimics the high-quality interactions of iOS native apps but with a softer, friendlier coat of paint.
Key Adjectives: Playful, Rounded, Airy, Tactile, Clean.
Visual Metaphor: A well-organized, colorful storybook.
2. Visual Rules & Tailwind Tokens
Use the following guidelines when generating markup. These map directly to the custom tailwind.config.js.
A. Color Palette
Backgrounds:
Screen Background: ALWAYS use bg-background-light (#F2F2F7). The app is never pure white background.
Content Cards: ALWAYS use bg-background-card (#FFFFFF) for content containers.
Primary Actions:
Use bg-primary (#34C759 - Green) for the main "Call to Action" (e.g., 'Start Lesson', 'Continue').
Use text-white on primary buttons.
Brand & Accents:
Use text-secondary (#5856D6 - Purple) for brand headers or active tab icons.
Use bg-tertiary (#FF9500 - Orange) for streaks, warnings, or highlight badges.
Text:
Headings: text-typography-950 (Soft Black).
Subtitles: text-typography-500 (Gray). Never use pure black (#000000).
B. Typography
Display / Numbers / Headers: Use font-serif.
Context: Use this for the "Big Numbers" (e.g., "50 Words Learned"), Streak counts, or Greeting headers. This provides the "Storybook" feel.
UI Text / Body / Buttons: Use font-body (Sans-serif).
Context: Use this for button text, settings labels, and lesson content.
C. Shape Language (Crucial)
Cards: rounded-3xl (approx 24px). The UI should feel bubbly.
Buttons: rounded-4xl or rounded-full (Pill shape). NEVER use sharp corners.
Inputs: rounded-2xl with bg-background-subtle (#F9F9FB).
3. Component Blueprints
The "Inset Grouped" Layout (Standard Page Structure)
Most screens should follow this structure:
Outer Container: flex-1 bg-background-light
Header Area: Large Serif Title, subtle padding.
Content Area: NOT edge-to-edge. Use margin (mx-4 or mx-5) to float content in the center.
Content Cards (The "Luna" Card)
Used for displaying list items (like Lessons, Vocab, Settings).
<div class="bg-background-card rounded-3xl p-4 shadow-soft-1 flex flex-row items-center gap-4 mb-3">
  <!-- Icon Box -->
  <div class="h-12 w-12 rounded-full bg-secondary-100 flex items-center justify-center">
     <Icon class="text-secondary-600" />
  </div>
  <!-- Text -->
  <div class="flex-1">
     <h3 class="font-body font-bold text-typography-950">Grammar</h3>
     <p class="font-body text-sm text-typography-500">12 lessons left</p>
  </div>
  <!-- Status -->
  <div class="bg-background-subtle px-3 py-1 rounded-full">
     <span class="text-xs font-bold text-typography-500">$0.00 / XP</span>
  </div>
</div>


The "Big Pill" Button (Primary Action)
Used at the bottom of screens.
<button class="w-full bg-primary py-4 rounded-4xl shadow-float active:scale-95 transition-all">
  <span class="font-body font-bold text-white text-lg">Continue</span>
</button>


4. Domain Translation (Budget -> Language)
| Budget App Element | Language App Equivalent | Design Implementation |
| :--- | :--- | :--- |
| **Total Balance ($0.00)** | **Daily Goal / XP** | Big Serif Font centered at top. |
| **Transactions List** | **Lesson List / Vocab** | Inset White Cards with colorful icons. |
| **Income/Expense Toggle** | **Learn / Quiz Toggle** | Segmented Control (Pill shape background). |
| **Category Icons** | **Language Skills** | Circle-bg icons (Book=Read, Ear=Listen). |
| **"No Transactions"** | **"Lesson Complete"** | Centered Mascot Illustration + encouraging text. |
| **NumPad Input** | **Quiz Answer Grid** | Round buttons for multiple choice answers. |

5. Accessibility & Polish Checklist
Touch Targets: Ensure all tappable rows have adequate padding (py-4).
Contrast: Ensure text on colored badges is readable (dark text on light backgrounds).
Active States: All buttons should have active:opacity-80 or active:scale-95 for tactile feedback.
