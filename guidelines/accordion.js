module.exports = {
  name: "accordion-guidelines",
  description: "Guidelines for Accordion component - collapsible containers for related content",
  content: `# Muibook Guidelines: Accordion Component

## Overview
A collapsible container used to reveal sections of related content. Useful for progressive disclosure, especially when space is limited or the content is secondary. On smaller viewports, accordions can replace tables to group and reveal related rows of data.

## Complete documentation, see: https://guides.muibook.com/accordion

## Usage Guidelines
- Use to progressively reveal grouped or secondary content.
- Can replace tables on small viewports when content is grouped by row.
- Ideal for mobile or narrow layouts where space is constrained.
- Stack, slat, or grid layouts can be used inside an accordion for custom structures.

## Anatomy
![Accordion Anatomy](https://images.ctfassets.net/i5uwscj4pkk2/4JgAhsxwz3YOt28fLTVgDB/b404f3407eb06e2f26a196da04f7d217/Accordion_-_Anatomy.png)

An accordion consists of the following parts:
- **Heading**: Provides the accordion with a heading.
- **Icon**: A chevron icon that indicates the state of the Accordion (expanded/collapsed).
- **Detail**: Define the detail content for the expanded section within the Accordion.

## Variants

### Accordion Block
The block accordion is typically used within a page layout, full-width to the parent container.

### Accordion Inline
The inline accordion is typically used within a block layout as a secondary UI element to a block element.

## Compositions
Showcases actual use cases, demonstrating how the component fits into real-world UI scenarios.

### Menu Groups
Accordions can be used in menus to collapse and expand groups of related items, helping keep navigation organized and reducing visual clutter.

### Code Snippets
An accordion in a card footer allows code snippets or supporting details to be revealed on demand, keeping the card compact while still providing access to additional information.

### Account Activity (Accordion + Card)
Accordions can split account activity into segments, such as by year, with the ability to expand each section for detailed transactions. This makes large sets of data easier to scan and navigate.

## Related Components
- **Card**: Provides the ability to group items or components.
- **Slat**: A composable component designed to display table data on mobile devices.

---
When building with accordions, always reference these guidelines to ensure consistency across the design system.`,
};
