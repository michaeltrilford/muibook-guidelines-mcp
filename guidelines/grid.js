module.exports = {
  name: "grid-guidelines",
  description: "Guidelines for Grid component - layout helper for arranging content into columns",
  content: `# Muibook Guidelines: Grid Component

## Overview
A layout helper component that arranges its children into columns based on a defined structure. It is mainly intended for larger page layouts but can also be used for internal layouts or more condensed arrangements.

## Complete documentation, see: https://guides.muibook.com/grid

## Usage Guidelines
- Use to organise content into multi-dimensional layouts with columns.
- Ideal for aligning items consistently across different screen sizes.
- Supports responsive design by adjusting column count, gaps, and alignment at breakpoints.
- Recognise it as a developer tool for layout control rather than a direct design asset.
- Use the space design token to maintain consistent gap spacing.

## Variants
- **Two Column**: Example of using a two-column layout, primarily for horizontal use when content needs to be presented side by side.
- **Three Columns**: Example of a three-column layout, optimized to distribute information evenly across three sections.
- **Custom Columns**: Example of a custom column layout with varied column sizes, demonstrating flexibility while maintaining horizontal orientation.

## Compositions
Showcases actual use cases, demonstrating how the component fits into real-world UI scenarios.

### Guidelines for Muibook
This example of the Muibook Guidelines website demonstrates the use of the <mui-grid> component for layout, along with actions, typography, links, and theme customisation. It shows how components are combined to create consistent and responsive UI patterns.

## Related Components
- **Stack**: Arranges children in a horizontal or vertical flow with consistent spacing.
- **Responsive**: Dynamically renders UI elements based on viewport size (e.g., below, middle, or above defined breakpoints).`,
};
