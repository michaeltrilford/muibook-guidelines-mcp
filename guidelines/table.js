module.exports = {
  name: "table-guidelines",
  description: "Guidelines for the Table component - display structured data in a grid layout",
  content: `# Muibook Guidelines: Table

## Overview
Displays data in a grid layout to support scanability and comparison across rows and columns. Best suited for structured, repeatable content.

## Complete documentation, see: https://guides.muibook.com/table

## Anatomy
![Table Anatomy](https://images.ctfassets.net/i5uwscj4pkk2/2KHxAyGbYW7qwySwCLYrbo/0ffc98c3eef07098afaf64bebc6afd4a/Table_-_Anatomy.png)

- **Heading**: The header row accepts headings and other arrangements as needed.
- **Data**: The row contains standard data as well as other arrangements, such as grouped content.
- **Actions**: The main actions for each table row can be included in a dedicated column or slot.

## Usage Guidelines
- Use for structured content that benefits from a grid format.
- Ideal for comparing data across multiple rows and columns.
- Supports sorting, filtering, or action buttons if needed.
- Avoid for unstructured, visual, or narrative-based content.
- Adapt tables for smaller viewports by switching to the Slat component.
- Prioritise key content and simplify structure when transitioning to mobile views.

## Compositions
Showcases actual use cases, demonstrating how the component fits into real-world UI scenarios.

- **Prop Types Table**: Standard example demonstrating general data presentation for component prop types.
- **Simple Table w/ Dropdown**: Example of a simple table with a dropdown action on the far right. Demonstrates usage within a card layout.
- **Compliance Dashboard Table**: Desktop view example of a table used within an accounting compliance dashboard.

## Related Components
- **Slat**: A responsive alternative for tables on mobile or narrow-width viewports.
- **Add on**: Displays supplementary information adjacent to table cells or headers.
- **Button**: Use for table row actions.`,
};
