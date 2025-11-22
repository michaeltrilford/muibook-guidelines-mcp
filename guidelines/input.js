module.exports = {
  name: "input-guidelines",
  description: "Guidelines for Input component - flexible text-based input fields",
  content: `# Muibook Guidelines: Input Component

## Overview
Input is a flexible, composable component designed for various text-based input form experiences. It can be used without a label for custom layouts or combined with other elements for tailored solutions.

## Complete documentation, see: https://guides.muibook.com/input

## Usage Guidelines
- Ensure the purpose of the input is clear, either through placeholder text or surrounding context.
- Ensure validation feedback is considered when using an input. E.g., error text.
- Ensure the experience has clear focus states to support keyboard accessibility.
- Select the appropriate input types for the specific use case. E.g., Text, Email, Password.
- Use placeholder text to provide context of the input use; avoid using them as primary labels.
- Avoid relying solely on placeholder text for instructions, as it disappears when users start typing.

## Anatomy
![Input Anatomy](https://images.ctfassets.net/i5uwscj4pkk2/5aiWlqSJ4BYCGtXn9MbGd/2734f1771c0e666806060bc85f753927/Input_-_Anatomy.png)

An Input consists of the following parts:
- **Label**: Describes the purpose of the Input; required for accessibility. Can be hidden if the context is clear. Ensure the label text is still provided for developers to support screen reader access.
- **Text**: The label or placeholder text that describes the input field’s purpose.
- **Before**: Optional icons placed before the text input for additional functionality or clarity (e.g., search or password visibility icons).
- **After**: Optional icons placed after the text input for additional functionality or clarity.
- **Slot Before**: Allows insertion of an Add-On, Select, or Button before the input to provide contextual or interactive elements.
- **Slot After**: Allows insertion of an Add-On, Select, or Button after the input to support or clarify the user’s entry.

## Variants
- **Default**: The standard Input with visible label and no interaction or validation states applied. Used for most form field scenarios.
- **Hide Label**: The label is visually hidden but remains accessible to screen readers. Use when the label context is already clear from surrounding UI.
- **Hover**: Displays the hover state styling when a pointer is placed over the Input.
- **Focus**: Shows the focus ring or border to indicate that the Input is currently active.
- **Error**: Displays a visual error style to indicate invalid input. Used with the Field component to surface validation messaging.
- **Input + Field**: The Input is wrapped in a Field component to provide a label, optional required indicator, and validation messaging. Ensures accessibility and consistent layout.

## Compositions
Showcases actual use cases, demonstrating how the component fits into real-world UI scenarios.

### User Details (Step 1)
Uses an accordion to contain a step in a multi-step flow. Focuses on input fields with labels, placeholders, and optional states, keeping the layout compact and clear.

### Onboarding Form
Demonstrates an onboarding form within a card, using logic to confirm terms acceptance. Components include Heading, Input Fields, Checkbox, and Button.

## Related Components
- **Field**: Allows users to input or select data. Includes a label, optional required indicator, and supports validation feedback.
- **Select**: A versatile dropdown component that allows users to choose from a list of options.
- **File Upload**: A simple file input that displays the selected file name and emits a file-upload event.
- **Add On**: Enhances form inputs by displaying supplementary information such as units, prefixes, or suffixes adjacent to the input field.

---
When building with Inputs, always reference these guidelines to ensure consistency across the design system.`,
};
