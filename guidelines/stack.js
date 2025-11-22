module.exports = {
  name: "stack-guidelines",
  description:
    "Guidelines for the Stack component - a layout helper arranging children in horizontal or vertical flows with consistent spacing",
  content: `# Muibook Guidelines: Stack

## Overview
A layout helper component that arranges its children in a horizontal or vertical flow with consistent spacing.

## Complete documentation, see: https://guides.muibook.com/stack

## Usage
- Use to organise content or components in a single, consistent direction.
- Ideal for managing spacing without manual margin or padding adjustments.
- Supports responsive layouts by changing direction or spacing at breakpoints.
- Recognise it as a developer layout tool rather than a design asset.
- Use the space design token to maintain consistent gap spacing.

## Variants
While not a Figma component (designers should use auto-layout), it’s useful for designers to understand this pattern as engineers commonly use it to control layout and spacing.

- **Horizontal**: Arranges children in a horizontal flow.
- **Vertical**: Arranges children in a vertical flow.

## Compositions
Showcases actual use cases, demonstrating how the component fits into real-world UI scenarios.

- **Outcomes Roadmap Dashboard**: Demonstrates layout, title, and padding adjustments across breakpoints.
- **Outcome-Based Roadmap**: Objectives organised into Upcoming, Doing, and Finished columns. Progress bars indicate completion status.
- **Carousel Showcase**: GuruSuite example showing carousel used to feature products.
- **Smart Card**: Uses slats to present structured information in a compact format, organising titles, descriptions, and supporting actions.

## Related Components
- **Grid**: Arranges children into columns based on a defined structure for larger or condensed layouts.
- **Responsive**: Dynamically renders UI elements based on viewport size, adjusting layout for optimal experience.`,
};
