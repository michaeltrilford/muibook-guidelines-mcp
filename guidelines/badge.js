module.exports = {
  name: "badge-guidelines",
  description: "Guidelines for Badge component - non-interactive status and count indicators",
  content: `# Muibook Guidelines: Badge Component

## Overview
Badges are non-interactive elements that indicate counts, statuses, or conditions within the interface. They provide visual cues without requiring user interaction.

## Complete documentation, see: https://guides.muibook.com/badge

## Usage Guidelines
- Show the number of unread notifications – e.g., '4' unread messages.
- Indicate the status of a user – e.g., Online, Busy, or Away.
- Use badges sparingly to avoid visual clutter.
- Ensure badges are easily distinguishable from other UI elements.
- Maintain sufficient contrast and legibility for text or numbers displayed within the badge.

## Anatomy

A Badge consists of the following parts:
- **Container**: The outer visual element that holds the badge content.
- **Content**: The number, label, or status displayed inside the badge.
- **Color / Variant**: Visual styling communicates status or priority (default, positive, warning, error).

## Variants
- **Default**: Used for standard counts or statuses that are visually in the foreground.
- **Positive**: Represents positive or completed statuses.
- **Warning**: Represents urgent or important statuses.
- **Error**: Represents an error, issue, or critical state.

## Compositions
Showcases actual use cases, demonstrating how the component fits into real-world UI scenarios.

### Outcome-Based Roadmap
Example of an Outcome-Based Roadmap page showing objectives organized into Upcoming, Doing, and Finished columns. Progress bars indicate the completion status of each task, providing a clear view of overall progress.

### Compliance Dashboard Table
Desktop view of a table used within an accounting compliance dashboard, showing how badges indicate critical statuses or counts per row.

### Carousel Showcase
Demonstrates badges used in a carousel to indicate product counts or statuses on the GuruSuite website.

### Outcomes Roadmap Dashboard
Responsive example showing badges in the Outcomes Roadmap Dashboard, demonstrating layout, title, and padding adjustments across breakpoints.

## Related Components
- **Icons**: To reinforce meaning in badges for status or alerts.
- **Button**: When badges are paired with buttons to indicate counts or notifications.
- **Field / Table Cells**: Badges can complement table or field elements to visually display status or counts.

---
When building with Badges, always reference these guidelines to ensure consistency across the design system.`,
};
