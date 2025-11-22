module.exports = {
  name: "body-guidelines",
  description: "Guidelines for Body component - paragraph text and contextual messaging",
  content: `# Muibook Guidelines: Body Component

## Overview
Use the Body component for clear and readable paragraph text across the UI. It’s ideal for longer-form content such as descriptions, explanations, or supporting information. Variant styles are available for status messages and other contextual needs.

## Complete documentation, see: https://guides.muibook.com/body

## Usage Guidelines
- Use for supporting content or descriptions.
- Apply states like Default, Success, Warning, and Error to align with feedback or messaging contexts.
- Match the body size to the layout’s overall design and readability.
- Adjust the size by selecting x-small, small, medium, or large.
- Ensure consistent line height, spacing, and alignment for readability.

## Anatomy

A Body component consists of the following parts:
- **Text Container**: Wraps the paragraph content and controls spacing and line-height.
- **Text Content**: The actual paragraph text displayed.
- **Variants / States**: Visual styling for context, e.g., Default, Success, Warning, Error.
- **Size Options**: x-small, small, medium, large for readability and layout fit.
- **Font Weight**: Options include regular and bold.

## Variants
- **Default**: Standard body text with size options x-small, small, medium, and large. Supports regular and bold weights.
- **Success**: Indicates positive feedback with size options and font weights.
- **Warning**: Highlights warning messages with size options and font weights.
- **Error**: Highlights error messages with size options and font weights.

## Compositions
Showcases actual use cases, demonstrating how the component fits into real-world UI scenarios.

### Muibook Resource
The Muibook documentation site uses Body alongside headings, lists, buttons, icons, and image components to compose its layout.

### Outcomes Roadmap Dashboard
Responsive example showing how Body adapts across breakpoints with appropriate size, spacing, and layout alignment.

### Outcome-Based Roadmap
Example showing objectives organized into Upcoming, Doing, and Finished columns. Progress bars indicate completion status, with Body used for descriptive content.

## Related Components
- **Heading**: Includes six levels (H1–H6) for structured heading usage, supporting hierarchy and text presentation.
- **Alert / Message**: Can use Body text for message content.
- **Field / Input Descriptions**: Body can be used for supporting instructions or validation text.

---
When building with Body, always reference these guidelines to ensure clarity, readability, and consistency across the design system.`,
};
