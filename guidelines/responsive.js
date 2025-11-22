module.exports = {
  name: "responsive-guidelines",
  description: "Guidelines for the Responsive component - dynamically adapts UI elements based on viewport size",
  content: `# Muibook Guidelines: Responsive

## Overview
A layout helper that dynamically renders UI elements based on viewport size (e.g., below, middle, or above defined breakpoints). While not a Figma component, it’s important for designers to understand how responsive behaviour adapts interfaces across devices and screen sizes.

## Complete documentation, see: https://guides.muibook.com/responsive

## Usage
- Adjust or swap UI components according to screen size for optimal experience.
- Tailor layouts, navigation, or content density on different devices.
- Support breakpoint-driven rendering to maintain clarity and usability.
- Avoid overly complex responsive behaviours that may confuse users or complicate maintenance.

## Anatomy

- **Breakpoint conditions** – Define at which screen widths components render differently (e.g., below, middle, above).
- **Slot/Component variations** – Specify which component or layout variant appears for each breakpoint.
- **Spacing & padding** – Ensure consistent layout spacing across breakpoints for clarity and rhythm.

## Compositions
Showcases actual use cases, demonstrating how the component fits into real-world UI scenarios.

- **Outcomes Roadmap Dashboard**: Demonstrates layout, title, and padding adjustments across breakpoints.
- **Adaptive Navigation**: Example of a menu that swaps between a horizontal bar and a hamburger menu based on viewport size.

## Related Components
- **Stack**: Arranges children in a horizontal or vertical flow with consistent spacing.
- **Grid**: Arranges children into columns for complex or responsive layouts.`,
};
