module.exports = {
  name: "loader-guidelines",
  description: "Guidelines for the Loader component - smooth transitions during loading states",
  content: `# Muibook Guidelines: Loader

## Overview
The Loader component applies smooth, built-in transitions during page loads, content updates, or skeleton placeholders to maintain a seamless, polished experience.

## Complete documentation, see: https://guides.muibook.com/loader

## Usage
- Wrap any page or UI section with <mui-loader> to automatically display loading animations.
- Ideal for initial page loads, content transitions, or skeleton screens while data is fetching.
- Applied to pages or key components for seamless load transitions.
- Works seamlessly with other MUI components and layouts without additional setup.
- Can be paired with skeletons, spinners, or other feedback to improve perceived performance.

## Anatomy

- Transition container that wraps the content region.
- Visual loading state (e.g., pulsate, fade, translate).
- Optional masking layer during data fetch or UI transition.

## Variants
**Pulsate**  
Smooth rhythmic animation indicating ongoing activity.

**Fade-In**  
Content fades into view once loading completes.

**Translate: Up**  
Default direction is Up. Can be configured to Up, Right, Down, or Left.

**Translate: Down**  
Same behavior as Translate: Up but direction moves downward.

**Translate: Left**  
Directional transition moving left.

**Translate: Right**  
Directional transition moving right.

## Compositions
Showcases real-world usage demonstrating how the component fits into live UI scenarios.

**Guru Outcomes – Dashboard**  
Use the <mui-loader> component to mask slow network or initial data load times. Combine its features to create a seamless loading experience.

Guru Outcomes – Dashboard

**Guru Outcomes – Roadmap**  
The Loader component in action on the roadmap page, smoothly loading the UI while masking delays and improving perceived performance.

Guru Outcomes – Roadmap

## Accessibility
- Announced to screen readers via \`role="status"\`, ensuring updates are conveyed politely.
- \`aria-busy="true"\` is set when loading, indicating the region is actively updating.
- A visually hidden “Loading…” text is included by default to provide meaningful content to assistive technologies.
- Respects user motion preferences via \`prefers-reduced-motion\`, reducing or removing animation where appropriate.
- Requires no additional labels, remaining lightweight, flexible, and accessible by default.`,
};
