module.exports = {
  name: "dropdown-guidelines",
  description: "Guidelines for Dropdown component - trigger actions and overlay menus",
  content: `# Muibook Guidelines: Dropdown Component

## Overview
The dropdown has a trigger action and an overlay menu. The action can use any mui-button variant, while menu options follow a predefined style. The menu auto-positions to stay within the viewport.

## Complete documentation, see: https://guides.muibook.com/dropdown

## Usage Guidelines
- Dropdowns are ideal for actions that are contextual or used infrequently.
- Ensure the trigger is clear using a label, icon, or ellipsis; include accessible labels for icon-only triggers.
- Keep menu items concise (around 5–7 options). Group related actions and use dividers for clarity.
- Ensure dropdowns remain visible and are not covered by other interface elements. Adjust z-index as needed.
- Ensure essential or frequently-used actions are not hidden within a dropdown.

## Anatomy
![Dropdown Anatomy](https://images.ctfassets.net/i5uwscj4pkk2/62rDy7PEOfeUJMNBF6qxw6/568ea65c17aca538a30397cf2eedc00e/Dropdown_-_Anatomy.png)

- **ICON ONLY**: Compact dropdown triggers when meaning is obvious and space is limited.
- **LABEL & ICON**: Use when clarity is needed. Pair a short label with an icon to indicate the menu opens or expands.
- **MENU ITEMS**: Options should be concise (5–7 items), grouped logically, avoiding long or overwhelming lists.

## Compositions
Showcases actual use cases, demonstrating how the component fits into real-world UI scenarios.

### Outcomes Dashboard
Example of the Dropdown component used in the Outcomes-based Roadmap tool at outcomes.gurusuite.xyz.

## Accessibility
- Built-in accessibility: Dropdown trigger uses the system button component, providing keyboard navigation, focus states, and ARIA roles out of the box.
- Icon-only triggers: Ensure tooltips or labels are present so screen readers can interpret the action.
- Persistent dropdowns: Users can interact with inputs or buttons inside the dropdown without losing focus or accessibility support.

## Related Components
- **Button**: Essential UI elements that trigger actions.
- **Icons**: Ideal for reinforcing meaning in buttons, menus, or navigation.

---
Always reference these guidelines when building with dropdowns to ensure consistency across the design system.`,
};
