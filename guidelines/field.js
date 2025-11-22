module.exports = {
  name: "field-guidelines",
  description: "Guidelines for Field component - form field wrapper with labels and validation",
  content: `# Muibook Guidelines: Field Component

## Overview
A Field allows users to input or select data. It includes a label, an optional required indicator, and supports validation feedback to communicate errors or requirements.

## Complete documentation, see: https://guides.muibook.com/field

## Usage Guidelines
- Acts as a parent wrapper for form elements such as Input, Select, Textarea, etc.
- Use clear, descriptive labels so users understand the purpose of the form field.
- Mark required fields with an asterisk (*) and validate input before submission.
- Display validation messages in real-time or upon submission to guide corrections.

## Anatomy
![Field Anatomy](https://images.ctfassets.net/i5uwscj4pkk2/5nW3j8xOoMpTGLTljUAqPI/6ea6a47139a044feaa63697a40753cf2/Field_-_Anatomy.png)

- **Label**: The Field component supports a label, useful for grouping multiple inputs or when applying the label at the parent level is preferred.
- **Message**: Supports rendering static text or dynamic messages that reflect the field’s state, such as success, warning, or error.
- **Slot**: Allows insertion of related form components like Input or Select as children within the Field.

## Variants
- **Default**: Standard field with label and no message. Used when no additional feedback is required.
- **Default w/ Message**: Includes supporting text beneath the field. Use to provide guidance, context, or character limits.
- **Success w/ Message**: Indicates a successful validation state. Use to confirm correct input, such as valid formatting or completion.
- **Warning w/ Message**: Indicates a non-blocking issue. Use when input may be acceptable but needs user attention.
- **Error w/ Message**: Displays a validation error. Use when input is invalid or required and has not been completed.

## Compositions
Showcases actual use cases, demonstrating how the component fits into real-world UI scenarios.

### Onboarding Form
Demonstrates an onboarding form within a card, using logic to confirm terms acceptance. Components include Heading, Input Fields, Checkbox, and Button.

## Accessibility
- A visible or hidden label is required to describe the input’s purpose for screen readers.
- Using hide-label keeps the label accessible via aria-label while hiding it visually.
- The label and input are linked using 'for' and 'id'; an id is auto-generated if not provided.
- Clear focus styles are shown to support keyboard navigation.

## Related Components
- **Input**: Flexible, composable component for text-based input.
- **Select**: Dropdown component for choosing from a list of options.
- **File Upload**: Displays the selected file and emits a file-upload event.
- **Add On**: Enhances inputs with units, prefixes, or suffixes.`,
};
