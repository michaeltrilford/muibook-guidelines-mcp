module.exports = {
  name: "slat-guidelines",
  description: "Guidelines for the Slat component - a stacked layout for structured data on narrow or small viewports",
  content: `# Muibook Guidelines: Slat

## Overview
Used to display structured data in a stacked format, typically on smaller viewports or within narrow-width layouts. Slats offer flexibility to surface key content and support custom layouts, stacking, or expansion of additional details.

## Complete documentation, see: https://guides.muibook.com/slat

## Usage
- Suitable for displaying data in narrow-width containers, such as side panels.
- Use as a responsive alternative to tables on mobile or narrow viewports.
- Ideal for presenting structured data in a compact, scannable format.
- Supports stacking labels and values for easier readability.
- Can include expandable sections to reveal more content on demand.

## Anatomy
![Slat Anatomy](https://images.ctfassets.net/i5uwscj4pkk2/0OzwVoT0EyK1sR1ufn3Vw/3cbee51beec1240ebeaaad485bff5970/Slat_-_Anatomy.png)

- **Header (Start)**: Slot for the main header of slat items.
- **Header (End)**: Optional area for secondary information.
- **Row (Start)**: Primary content slot in a slat layout.
- **Row (End)**: Secondary content slot in a slat layout.
- **Accessory**: Optional icon or element within the limited space.
- **Action**: Makes the slat a clickable action if needed.

## Compositions
Showcases actual use cases, demonstrating how the component fits into real-world UI scenarios.

- **Smart Card**: Uses slats to present structured information in a compact format. Helps organise titles, descriptions, and supporting actions for easy scanning.
- **Account Activity**: Displays recent actions in a list, breaking down primary and optional secondary information for clarity and consistency.

## Related Components
- **Icons**: Reinforce meaning in buttons, menus, or navigation.`,
};
