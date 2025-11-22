module.exports = {
  name: "chip-guidelines",
  description: "Guidelines for Chip component - tags, filters, and interactive labels",
  content: `# Muibook Guidelines: Chip Component

## Overview
A Chip is a compact, interactive element representing an attribute or action. It can include text, icons, avatars, badges, or a dismiss option, and is used for choices, filters, or tags.

## Complete documentation, see: https://guides.muibook.com/chip

## Usage Guidelines
- Use to visually indicate states or properties, such as tags, categories, or labels.
- Chips are clickable for filtering content or initiating events.
- Allow users to remove Chips when they no longer apply (e.g., removing filters).

## Anatomy
![Chip Anatomy](https://images.ctfassets.net/i5uwscj4pkk2/5nPL0GnBA9X5HjthQO9TBl/80e75a4e6b5fe189b42b8fbdf411fd47/chip-anatomy.png)

A Chip consists of the following parts:
- **Before**: Optional area for icons, badges, status indicators, or avatars before the text. Use consistently to enhance the UI pattern.
- **Text**: Text describing the chip action or filter.
- **After**: Optional area for icons or badges, such as a close/chevron icon or "Beta" label.
- **Dismiss**: Enables the ability to remove or dismiss the Chip.

## Variants
- **Default**: Simple, concise text labels.
- **Icon (Before or After)**: Displays a badge with an icon to represent actions or attributes.
- **Badge**: Emphasizes a number or label, often for counts or notifications.
- **Dismiss**: Allows users to remove or dismiss the Chip.
- **Dropdown**: Indicates an expandable menu or options associated with the Chip.

## Rules and Best Practices

### ✅ Dismiss Icon Placement
- **Do**: Use the "After" slot to correctly position the dismiss icon.  
- **Don't**: Avoid using the "Before" slot for the dismiss icon.

### ✅ Filters
- **Do**: Use appropriate states for filter Chips, ensuring they are secondary and less visually prominent.  
- **Don't**: Don’t use the active state for filter Chips, as it can create excessive visual noise.

### ✅ Multi-Select Groups
- **Do**: Allow Chips to wrap within the group; avoid dismissing tags since the action is toggling selection.  
- **Don't**: Don’t include a dismiss icon on a selected Chip; this implies deletion.

### ✅ Sub Navigation
- **Do**: Ensure only one Chip is selected at a time in a group.  
- **Don't**: Don’t allow multiple Chips to be selected simultaneously in this pattern; use filter groups for that purpose.

## Related Components
- **Icons**: Ideal for reinforcing meaning in buttons, menus, or navigation.  
- **Badge**: Non-interactive indicators for counts or statuses.

---
When building with Chips, always reference these guidelines to ensure consistency, clarity, and accessibility across the design system.`,
};
