module.exports = {
  name: "card-guidelines",
  description: "Guidelines for Card component - grouping content and actions",
  content: `# Muibook Guidelines: Card Component

## Overview
The Card provides the ability to group items or components in a visually distinct block, supporting hierarchy, structure, and clarity.

## Complete documentation, see: https://guides.muibook.com/card

## Usage Guidelines
- Use cards to visually group related content, actions, or components in a structured block.
- Use the header for titles or key actions, the body for primary content, and the footer for secondary actions or metadata.
- Avoid overloading cards with too much content — keep them focused and scannable.
- Maintain consistent spacing and alignment between multiple cards to support visual rhythm.
- Cards can include other components like Accordion, Input, Add-On, or Button as needed.

## Anatomy
![Card Anatomy](https://images.ctfassets.net/i5uwscj4pkk2/4EryBp3RZrsXmWloz4qX6m/d2a5dc1b34d7c65aeb62c9b0bf8cce52/Card_-_Anatomy.png)

A Card consists of the following parts:
- **Header**: Includes a title and optionally icons, actions, or helper text.
- **Body**: Main content area that can include text, inputs, or other relevant components.
- **Footer**: Optional section for actions, metadata, or secondary interactions.
- **Variants / Layouts**: Cards can be used full-width, within grids, or inline blocks depending on context.

## Compositions
Showcases actual use cases, demonstrating how the component fits into real-world UI scenarios.

### Code Snippets
An accordion in a card footer allows code snippets or supporting details to be revealed on demand, keeping the card compact while still providing access to additional information.

### Account Activity (Accordion + Card)
Accordions can split account activity into segments, such as by year, with the ability to expand each section for detailed transactions. This makes large sets of data easier to scan and navigate.

### Account Activity (Card)
Example showing how Card can present grouped account activity, combining header, body, and footer for clear information hierarchy.

## Related Components
- **Slat**: Composable component designed to display table data on mobile devices.
- **Accordion**: Stores content underneath a collapsible heading, revealing it through progressive disclosure in the UI.
- **Button / Input / Add-On**: Often used within Cards to provide actions or collect input.

---
When building with Cards, always reference these guidelines to ensure clarity, hierarchy, and consistency across the design system.`,
};
