module.exports = {
  name: "addon-guidelines",
  description: "Guidelines for Add On component - supplementary input context",
  content: `# Muibook Guidelines: Add On Component

## Overview
Enhances form inputs by displaying supplementary information such as units, prefixes, or suffixes adjacent to the input field. Add Ons improve clarity by providing context without adding clutter to the input area.

## Complete documentation, see: https://guides.muibook.com/add-on

## Usage Guidelines
- Use to display units (e.g. %, $, kg) or fixed prefixes/suffixes alongside inputs.
- Ideal for improving data entry accuracy and user understanding.
- Ensure Add Ons are visually distinct but do not overpower the main input content.
- Avoid overcrowding inputs with multiple Add Ons to maintain clarity.

## Anatomy
![Add On Anatomy](https://images.ctfassets.net/i5uwscj4pkk2/13NH06kdHIzm8hDGNBgihx/f5715279e5ab5e2ce6bfd5d38f5f2d1d/Add_on_-_Anatomy.png)

An Add On consists of the following parts:
- **Before**: Add-on placed before the Input Field.
- **After**: Add-on placed after the Input Field.
- **Content**: Short text, an icon, or both to support Input context.

## Variants

### Text
Use for units, currency, or short static labels.

### Icon
Use for symbolic cues or clarification of the input’s intent.

## Related Components
- **Field**: Allows users to input or select data. It includes a label, an optional required indicator, and supports validation feedback to communicate errors or requirements.
- **Input**: A flexible, composable component designed for various text-based input form experiences.
- **Select**: A versatile dropdown component that allows users to choose from a list of options.
- **File Upload**: A simple file input that displays the selected file name and emits a file-upload event.
- **Icons**: Ideal for reinforcing meaning in buttons, menus, or navigation.

---
When building with Add Ons, always reference these guidelines to ensure consistency across the design system.`,
};
