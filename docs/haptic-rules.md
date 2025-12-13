# Haptic Feedback Interaction Criteria

## 1. Impact Feedback (Discrete "Click" Feel)
*Use for physical UI state changes.*

| User Action                                       | Haptic Style | Code Implementation                                       |
| :------------------------------------------------ | :----------- | :-------------------------------------------------------- |
| **Toggles & Switches** (Checkbox, Radio, Switch)  | `Light`      | `Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)`  |
| **Social Actions** (Like, Heart, Star)            | `Light`      | `Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)`  |
| **Secondary Buttons** (Cancel, Back within modal) | `Light`      | `Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)`  |
| **Primary Buttons** (Add, Post, Confirm, Save)    | `Medium`     | `Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)` |
| **Menu Actions** (Open Modal, Long Press)         | `Medium`     | `Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)` |
| **Destructive Actions** (Delete, Clear, Sign Out) | `Heavy`      | `Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)`  |

## 2. Selection Feedback (Movement Feel)
*Use for dragging or changing discrete values.*

| User Action                             | Haptic Style | Code Implementation        |
| :-------------------------------------- | :----------- | :------------------------- |
| **Wheel Picker** (Date, Time, List)     | `Selection`  | `Haptics.selectionAsync()` |
| **Slider / Seekbar** (Snap to position) | `Selection`  | `Haptics.selectionAsync()` |
| **Carousel** (Snap to card)             | `Selection`  | `Haptics.selectionAsync()` |

## 3. Notification Feedback (Status Indicators)
*Use for asynchronous task completion.*

| Event Result                             | Haptic Style | Code Implementation                                                   |
| :--------------------------------------- | :----------- | :-------------------------------------------------------------------- |
| **Success** (Task Completed, Saved)      | `Success`    | `Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)` |
| **Error** (Validation Failed, API Error) | `Error`      | `Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error)`   |
| **Warning** (Non-blocking alert)         | `Warning`    | `Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning)` |

## 4. Anti-Patterns (Do Not Implement)

* **Navigation:** Do NOT trigger haptics on standard page transitions (`navigation.navigate`, `push`, `goBack`).
* **Standard Typing:** Do NOT trigger custom haptics on `TextInput` `onChange` or `onKeyPress`.
* **Passive Scrolling:** Do NOT trigger haptics on standard list scrolling.
* **App Launch:** Do NOT trigger haptics on component mount (`useEffect`) unless it signifies a completed loading state.