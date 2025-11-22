module.exports = {
  name: "link-guidelines",
  description: "Guidelines for Link component - used for navigation to other pages or external content",
  content: `# Muibook Guidelines: Link Component

## Overview
Links are used to navigate between pages or external content. They are visually distinct from surrounding text by using underlines — a familiar and accessible pattern that ensures clarity and consistency.

## Complete documentation, see: https://guides.muibook.com/link

## Usage Guidelines
- Use links to navigate to related content or different pages.
- Use for navigation only — use buttons for actions like submitting forms or changing data.
- Keep link text concise and descriptive. Avoid vague labels like “Click here.”
- Use full sentences or phrases that clearly describe the destination.
- Prefer inline links within body text unless a more prominent callout is needed.

## Anatomy
![Link Anatomy](https://images.ctfassets.net/i5uwscj4pkk2/6Rbr0KRWAiNRuPsagpreV7/2adc3626aa45ddc95ddf7d0a508c7917/Link_-_Anatomy.png)

- **Trigger**: The text or icon that activates the link.
- **Icon (optional)**: Can be paired before or after the text to reinforce meaning.
- **Underline**: Visual indicator that distinguishes links from body text.

## Variants
- **Size: Large**: Used in hero sections or alongside large headings. Small icon if paired.
- **Size: Medium (Default)**: Standard size for inline or standalone links. x-small icon if paired.
- **Size: Small**: For compact areas like cards, side panels, or footnotes. x-small icon if paired.
- **Size: XSmall**: Used sparingly in toolbars, metadata, or inline legal text. x-small icon if paired.

### Styles
- **Primary**: High emphasis, key navigation or call to action. Icon-only variant available.
- **Secondary**: Lower emphasis, supporting links. Icon-only variant available.
- **Tertiary**: Subtle, inline with body text. Icon-only variant available.
- **Attention**: Highlights urgency or warnings. Icon-only variant available.

## Behaviour
- Links should clearly indicate navigational intent.
- Icon-only links must have accessible labels or tooltips.

## Rules
### Link vs Button
**Do**
- Use a link when navigating to another page or view.  

**Don't**
- Don’t use a link to trigger tasks like submitting a form or saving data.

## Related Components
- **Button**: For triggering actions, submitting forms, or other interactive tasks.
- **Icons**: To reinforce meaning when paired with links.`,
};
