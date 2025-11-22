module.exports = {
  name: "carousel-guidelines",
  description: "Guidelines for Carousel component - tabbed navigation and horizontal panels",
  content: `# Muibook Guidelines: Carousel Component

## Overview
The Carousel offers tab-based navigation combined with horizontal content panels, letting users browse related content without leaving the surface. It supports bespoke content, with internal margins and layout managed by the user.

## Complete documentation, see: https://guides.muibook.com/carousel

## Usage Guidelines
- Use to present grouped content that benefits from both tabbed access and horizontal transitions.
- Ideal for feature highlights, onboarding steps, or content previews.
- Ensure tab labels are short and clearly indicate the content behind each panel.
- Avoid using for unrelated content or when vertical scrolling is more appropriate.
- When adding custom content, account for the placement of carousel controls and maintain sufficient whitespace for readability and alignment.
- Swap out default controls when a different interaction pattern better suits the content or context.

## Anatomy
![Carousel Anatomy](https://images.ctfassets.net/i5uwscj4pkk2/7lrQyuy00XTDGTww5lWXsH/427804b3af03935cc06e8a691a5006a0/Carousel_-_Anatomy.png)

A Carousel consists of the following parts:
- **Wrapper**: The outer container that defines the structure, sliding behavior, and background styling.
- **Content Area**: A flexible area where custom content is added. Designers are responsible for internal spacing, layout, and composition.
- **Navigation Controls**: Elements such as tabs, dots, or arrows that float above the content. Can be customized or replaced depending on context.

## Variants
- **Position**: Carousel controls can be positioned at any side or corner of the container, including top center, right middle, bottom center, left middle, top left, top right, bottom left, and bottom right.
- Controls are visually floated above content. When adding panels, maintain proper alignment and whitespace with respect to the coded component.

## Compositions
Showcases actual use cases, demonstrating how the component fits into real-world UI scenarios.

### Product Carousel
Demonstrates how to add custom compositions and layouts within the carousel panels.

### Carousel Showcase
Example from the GuruSuite website demonstrating the carousel used to showcase two products.

## Accessibility
- Users can navigate between carousel items using the left/right arrow keys, as well as Home and End keys.
- The active tab is always keyboard-focusable and shows a visible focus outline.
- Tabs are marked up using semantic roles (like tablist and tab) to help assistive technologies understand the structure.
- Attributes like aria-selected and tabindex update automatically to reflect which tab is active.

## Related Components
- **Tab Bar**: Allows users to switch between views or content sections by selecting from a group of tabs.

---
When building with Carousels, always reference these guidelines to ensure usability, clarity, and accessibility across the design system.`,
};
