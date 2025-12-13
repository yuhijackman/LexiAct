# Project Architecture & Standards

## 1. Tech Stack Overview
* **Framework:** React Native / Expo (Managed Workflow)
* **Routing:** Expo Router (File-based routing)
* **Language:** TypeScript (Strict mode)
* **Styling:** NativeWind (Tailwind CSS) + Gluestack UI (Accessible Primitives)
* **Linting/Formatting:** Biome
* **State Management:** (Define your preference here, e.g., Zustand/React Context)

## 2. Architectural Pattern: Feature-First
We utilize a **Feature-Based Architecture**. Code is organized by **business domain** (feature) rather than technical type.

### Directory Structure
```text
/
├── app/                 # Expo Router entry points ONLY. Keep logic here minimal.
│   ├── (tabs)/          # Tab navigation groups
│   ├── _layout.tsx      # Root layouts and providers
│   └── [id].tsx         # Dynamic routes
├── components/      # Shared "Dumb" UI components (Global)
│   ├── ui/          # Gluestack primitives (customized)
│   └── Container.tsx
├── features/        # CORE BUSINESS LOGIC (The heart of the app)
│   ├── auth/        # Example Feature
│   │   ├── components/  # Components specific to Auth
│   │   ├── hooks/       # Hooks specific to Auth
│   │   ├── api/         # API calls specific to Auth
│   │   ├── types.ts     # Types specific to Auth
│   │   └── index.ts     # Public API for other features
├── hooks/           # Global/Shared hooks (e.g., useTheme, useOnlineStatus)
│   ├── lib/             # 3rd party configurations (axios, firebase, supabase)
│   ├── store/           # Global state definitions
│   ├── types/           # Global TS types (env.d.ts, api-response.ts)
│   └── utils/           # Pure utility functions (date formatting, string manipulation)
├── assets/              # Images, Fonts
├── biome.json           # Linter config
└── tailwind.config.js   # NativeWind config
## 3. Key Principles
### A. The "Thin Route" Rule
Files in app/ must remain minimal. They should serve as Controllers that:

Parse URL parameters.

Render a top-level Layout or Screen component from /features/.

DO NOT write complex useEffect or business logic inside app/.

Example app/home.tsx:
```
TypeScript

import { HomeScreen } from '@/features/feed/screens/HomeScreen';

export default function Page() {
  return <HomeScreen />;
}
```

### B. Component Classification
UI Components (components): Purely presentational. Props in, UI out. No API calls.

Feature Components (features/*/components): Can contain domain logic but should prioritize composition.

Screens: Composition roots that wire up Hooks to UI components.

### C. Styling Strategy (NativeWind + Gluestack)
Layout & Spacing: Use NativeWind (className).

Example: <View className="flex-1 bg-white p-4" />

Complex Primitives: Use Gluestack UI for accessible components (modals, toasts, switches).

Conflict Resolution: If a Gluestack component supports className, use it. If customization is complex, wrap it in a styled component.

## 4. Coding Standards
### TypeScript
No any: Use unknown if necessary, but prefer strict typing.

Interfaces vs Types: Use interface for object definitions (extensible), type for unions/intersections.

Exports: Use Named Exports (export const Component = ...) over Default Exports to ensure consistent naming during refactoring (Exception: app/ files require default export).

Biome Rules
Imports must be sorted (Biome does this automatically).

No unused variables.

Use const over let wherever possible.

Component Pattern (Function Components)
TypeScript
```
import { View, Text } from 'react-native';

interface Props {
  title: string;
  isActive?: boolean;
}

export const MyComponent = ({ title, isActive = false }: Props) => {
  return (
    <View className={`p-4 ${isActive ? 'bg-blue-500' : 'bg-gray-200'}`}>
      <Text className="text-lg font-bold">{title}</Text>
    </View>
  );
};
```
## 5. Data Fetching & State
API Layer: All API calls must exist in features/*/api. Do not call fetch directly inside components.

TanStack Query (Recommended): Use custom hooks to wrap queries.

useUserQuery not useQuery('user', ...) inside the UI.

## 6. Implementation Checklist for AI Generation
When generating code, ensure:

Imports use absolute paths alias @/ (e.g., import { Button } from '@/components/ui').

NativeWind classes are strings inside className.

Files are placed in the correct feature folder if specific to a domain.