module.exports = {
  name: "drawer-guidelines",
  description: "Guidelines for Drawer component - navigation, tasks, and overlays",
  content: `# Muibook Guidelines: Drawer Component

## Overview
A drawer view that prompts users to take a specific action or provide additional information without navigating away from the current context.

## Complete documentation, see: https://guides.muibook.com/drawer

## Usage Guidelines
- Use for navigation, settings, or detailed tasks.
- Can be a temporary overlay drawer that appears over content (e.g., navigation).
- Can be a persistent push drawer until a workflow is complete (e.g., tasks).
- Task-based drawers are often positioned on the right side of the viewport.

## Anatomy
![Drawer Anatomy](https://images.ctfassets.net/i5uwscj4pkk2/7aOA4WtcFwev6f3tZy6VgX/83c0b087170d859406526e5d7ad66d6b/Drawer_-_Anatomy.png)

- **Heading**: Text that describes the purpose or contents of the drawer.
- **Close**: An icon or button that allows users to close the drawer.
- **Body**: Section to slot navigation links, settings, or other relevant information.
- **Footer**: Optional section for additional actions, such as "Cancel" or "Save".

## Compositions
Showcases actual use cases, demonstrating how the component fits into real-world UI scenarios.

### Navigation Menu
Overlay drawer used for navigating between major sections of the product. Ideal for mobile or smaller viewports where persistent navigation isn’t suitable.

### Create Roadmap Task
Overlay drawer used for completing temporary, focused tasks such as editing a field or filling out a short form.

### Invoice Details Task
Push drawer used for persistent tasks where surrounding content remains visible. Focus remains on the workflow.

### Review Items Task
Permanent drawer that remains visible at all times, typically for core navigation or tools supporting main content.

## Accessibility
- Overlay and push drawers act like dialogs; persistent drawers act like complementary content.
- Drawers have a clear title and description for screen readers.
- Focus is locked in the drawer while open; focus returns to the trigger on close.
- The close button is labeled “Close drawer.”
- Overlay and push drawers close with Escape key or backdrop click.
- Footer hides when empty to reduce noise.

## Behaviour
- Animate drawers smoothly to enhance user experience.
- Drawers often slide in from the right-side of the viewport.
- Avoid animations that are too slow, fast, or jarring.

## UX Writing Guidelines
- Keep content simple and concise.
- Use clear labels for navigation items or actions.
- Avoid overcrowding the drawer with too much information.

## Rules and Best Practices

### ✅ DO: Dismissing a Drawer
- Allow dismissal via close icon, cancel button, Escape key, or background click.

### ❌ DON'T: Hide Close Options
- Avoid hiding the close button or replacing footer actions with a close function.

### ✅ DO: Push Drawer
- Ensure the drawer does not obscure crucial information when users are working on a task.

### ❌ DON'T: Push Drawer
- Don’t cover key content or controls when the user is completing a task.

### ✅ DO: Overlay Drawer / Menu
- Ensure users can close the drawer via background click, the close (X) button, or Escape key.

### ❌ DON'T: Overlay Drawer / Menu
- Don’t use footer actions like “Save” or “Cancel” to close a navigation drawer; these are reserved for task workflows.

## Related Components
- **Dialog**: Modal windows for focused user actions without leaving context.
- **Button**: Essential for drawer actions, triggers, and navigation.
---
Always reference these guidelines when building with drawers to ensure consistency across the design system.`,
};
