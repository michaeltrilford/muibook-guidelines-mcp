module.exports = {
  name: "select-guidelines",
  description: "Guidelines for the Select component - a versatile dropdown for single or multiple selection",
  content: `# Muibook Guidelines: Select

## Overview
A versatile dropdown component that allows users to choose from a list of options. Supports customisable styles and accessibility features to ensure usability across different contexts.

## Complete documentation, see: https://guides.muibook.com/select

## Usage
- Use for single or multiple selections from predefined options.
- Ideal for forms, filters, or settings where space is limited.
- Ensure options are clear and concise, with logical ordering.
- Avoid overly long lists without search or grouping functionality.

## Anatomy

![Select Anatomy](https://images.ctfassets.net/i5uwscj4pkk2/HcG0gphexJNvxrV1ZMe0G/39cb6647101b8fe95ead10bfe9f1bd6d/Select_-_Anatomy.png)

- **Label**: Describes the purpose of the Select; required for accessibility. Can be hidden visually if the context is clear.
- **Trigger**: Displays the currently selected option and opens the list on interaction.
- **Dropdown List**: Contains selectable options in a list format.
- **Option**: Individual choice the user can select; shows label, stores value.

## Variants
- **Default**: Common form input where users choose a single value from a set.
- **Hide Label**: For dense layouts; ensure the label is still provided for accessibility.
- **Disabled**: Options not currently applicable but still visible for context.
- **Error**: Indicates required or invalid input; used with Field for messaging.
- **Before**: Placed before an input area (e.g., filter type). Define width in code or Figma min-width.
- **After**: Placed after an input area (e.g., currency type). Define width in code or Figma min-width.

## Compositions
Showcases actual use cases, demonstrating how the component fits into real-world UI scenarios.

- **Form Fields**: Single select for choosing categories in forms.
- **Filters**: Multi-select for filtering dashboard items by status or type.
- **Settings Panel**: Select used for configuration options like language or region.

## Related Components
- **Field**: Parent wrapper for form inputs with labels and validation messages.
- **Input**: Flexible text-based input component.
- **File Upload**: Allows users to select and upload files.
- **Add on**: Displays supplementary info (units, prefixes, suffixes) adjacent to inputs.`,
};
