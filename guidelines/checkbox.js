module.exports = {
  name: "checkbox-guidelines",
  description: "Guidelines for Checkbox component - single and multi-select options",
  content: `# Muibook Guidelines: Checkbox Component

## Overview
A Checkbox component for capturing single or multiple selections.

## Complete documentation, see: https://guides.muibook.com/checkbox

## Usage Guidelines
- Use for single or multiple option selection.
- Can be used in forms, tables, filters, or settings.
- For multi-select groups, consider parent-child relationships with indeterminate states.

## Anatomy
![Checkbox Anatomy](https://images.ctfassets.net/i5uwscj4pkk2/1SHtTzFQSQIBPnva1futiT/6c55b1596af31b1f93a4da82ea2a4fa2/Checkbox_-_Anatomy.png)

A Checkbox consists of the following states:
- **Unselected**: Default state; can become active through user interaction or changes in shared state.
- **Checked**: Fully marked, indicating complete selection.
- **Indeterminate**: Used on parent checkboxes in multi-select groups to indicate partial selection.

## Compositions
Showcases actual use cases, demonstrating how the component fits into real-world UI scenarios.

### Onboarding Form
Demonstrates an onboarding form within a card, using logic to confirm terms acceptance. Components include Heading, Input Fields, Checkbox, and Button.

## Accessibility
- A visible label or accessible name is required for screen reader support to describe the checkbox’s purpose.
- If no visible label is provided, use **aria-label** or **aria-labelledby** to supply an accessible name.
- Clear focus styles must be present for keyboard users.
- The native **disabled** attribute is fully supported by assistive technologies.

## Related Components
- **Input**: Used for text-based data entry.
- **Field**: Wraps inputs or checkboxes to provide labels, validation, and required indicators.
- **Radio Button**: For mutually exclusive option selection.

---
When building with Checkboxes, always reference these guidelines to ensure accessibility, clarity, and consistency across the design system.`,
};
