module.exports = {
  name: "message-guidelines",
  description: "Guidelines for the Message component - persistent, non-dismissible system messages",
  content: `# Muibook Guidelines: Message

## Overview
The Message component provides persistent, non-dismissible notifications that remain visible until the system determines they should be suspended. Unlike alerts, messages are static elements integrated into the page layout, offering continuous information without disrupting the user’s workflow.

## Complete documentation, see: https://guides.muibook.com/message

## Usage
- **Plain**: Subtle, transparent style suited for vibrant backgrounds where minimal visual impact is preferred.
- **Neutral**: Calm, balanced tone for non-critical, persistent messages.
- **Positive**: Confirms successful actions like submissions, saves, or completed tasks.
- **Info**: Shares feature announcements, enhancements, or onboarding tips.
- **Warning**: Cautions users about potential issues, unsaved changes, or upcoming expirations.
- **Attention**: Highlights urgent issues like system errors or security breaches requiring immediate action.

## Anatomy
![Message Anatomy](https://images.ctfassets.net/i5uwscj4pkk2/6S1MOtZZKP2bxYuIUNScSC/993a910363fbfbba29a3de384ecb182a/Message_-_Anatomy.png)

- **Preset icon**: Communicates the type of message visually (neutral, positive, info, warning, attention).
- **Customisable title**: General heading describing details or guidance.
- **Customisable text**: Specific supporting information or instructions.

## Variants

**Plain**  
A subtle, transparent style designed for vibrant backgrounds. Best for passive messages such as accessibility notes or routine system status. Uses \`aria-live="polite"\` and \`role="status"\`.

**Neutral**  
A calm, balanced tone for non-urgent information, such as sync confirmations or explanations. Uses \`aria-live="polite"\` and \`role="status"\`.

**Positive**  
Signals successful actions or achievements, such as completed tasks or saved changes. Uses \`aria-live="polite"\` and \`role="status"\`.

**Info**  
Provides helpful, non-urgent information such as feature updates or onboarding guidance. Uses \`aria-live="polite"\` and \`role="status"\`.

**Warning**  
Alerts users to potential issues requiring attention, such as unsaved changes or time-sensitive consequences. Uses \`aria-live="assertive"\` and \`role="alert"\`.

**Attention**  
Demands immediate focus for critical issues such as system errors or security breaches. Uses \`aria-live="assertive"\` and \`role="alert"\`.

## Compositions
Real-world examples showing how the component fits into applied UI.

**Plain message**  
Ideal for passive information on white or colored backgrounds, such as accessibility notes.

Plain message

**Info message**  
Used at the page level to remind users to log in so MUI Guidelines are shown instead of default content.

Info message

## Accessibility
- ARIA-live is built in, using POLITE and ASSERTIVE automatically based on variant.
- Neutral, Positive, and Info use \`role="status"\` for screen reader feedback.
- Warning and Attention use \`role="alert"\` for higher-priority announcements.

## Related
**Alert**  
Alerts surface meaningful system messages related to the user's current task or action.`,
};
