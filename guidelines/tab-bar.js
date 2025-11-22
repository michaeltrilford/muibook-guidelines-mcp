module.exports = {
  name: "tab-bar-guidelines",
  description:
    "Guidelines for the Tab Bar component - switch between views or content sections within a single surface",
  content: `# Muibook Guidelines: Tab Bar

## Overview
Allows users to switch between views or content sections by selecting from a group of tabs. Tabs keep related content within a single surface, reducing the need for navigation and maintaining context.

## Complete documentation, see: https://guides.muibook.com/tab-bar

## Anatomy
![Tab Bar Anatomy](https://images.ctfassets.net/i5uwscj4pkk2/koeu63xbKYOWZgs8i0eev/983e09362714a2dcdcc7262889ba1236/Tabs_-_Anatomy.png)

- **Active**: Indicates the currently selected tab.
- **Inactive**: Indicates a tab that is not selected and is waiting for user interaction.

## Usage Guidelines
- **Organise related content** at the same level of hierarchy.
- **Toggle between sections** without navigating away from the page.
- **Keep labels short, clear, and consistent.**
- Avoid using when content is unrelated or exceeds a manageable number of tabs.

## Compositions
Showcases actual use cases, demonstrating how the component fits into real-world UI scenarios.

- **Wallet**: Shows a wallet view featuring a digital card, transaction, and statement tabs. Demonstrates how foundational components like tabs, slats, and buttons can be composed to create flexible, real-world layouts.
- **Product Carousel**: Demonstrates custom compositions and layouts within carousel panels.
- **Carousel Showcase**: Example from the GuruSuite website demonstrating carousel use with tab-based navigation.

## Accessibility
- Keyboard users can navigate across tabs using left/right arrow keys, Home, and End.
- Active tab shows a clear focus outline.
- Tabs are grouped for assistive technologies using standard roles and attributes.
- The system keeps track of the active tab behind the scenes to stay in sync for screen readers and keyboard users.

## Related Components
- **Carousel**: A carousel component featuring tab-based navigation, enabling users to switch between views or content sections with ease.`,
};
