module.exports = {
  name: "heading-guidelines",
  description: "Guidelines for Heading component - structured heading usage H1–H6",
  content: `# Muibook Guidelines: Heading Component

## Overview
The Heading component includes six levels (H1–H6) for structured heading usage, supporting a range of hierarchies in text presentation.

## Complete documentation, see: https://guides.muibook.com/heading

## Usage Guidelines
- **Blog / Info Pages**: Follow a structured, descending order to create clear sections (H1 → H2 → H3).
- **Rich Data or Workflows**: Headings may be used out of strict order to maintain visual balance and usability (skip H3 if H4 better suits layout).
- Use only **one H1 per page** to establish a primary title and improve accessibility.
- Use **H2–H6** to structure content logically, maintaining clear hierarchy.

## Variants
- **Heading 1**: Primary heading, typically the page’s main title. Important for accessibility and SEO.
- **Heading 2**: Secondary heading introducing major sections within a page.
- **Heading 3**: Structures content under H2 for additional hierarchy.
- **Heading 4**: Organises detailed content under H3, maintaining readability.
- **Heading 5**: Introduces lower-level content, often for minor divisions within H4 sections.
- **Heading 6**: Lowest-level heading, used for minimal emphasis or supplementary labeling.

## Compositions
Showcases actual use cases, demonstrating how the component fits into real-world UI scenarios.

- **Muibook Resource**: The Muibook documentation site uses MUI components to compose its layout, including headings, text, lists, buttons, icons, and image components.
- **Guru Outcomes - Roadmap**: The Loader component in action on the roadmap page, smoothly loading the UI while masking delays.
- **Guru Outcomes - Dashboard**: Use the <mui-loader> component to mask slow network or initial data load times, creating a seamless experience.

## Related Components
- **Body**: Use the Body component for clear and readable paragraph text across the UI. Ideal for longer-form content such as descriptions, explanations, or supporting information. Variant styles are also available for status messages and other contextual needs.`,
};
