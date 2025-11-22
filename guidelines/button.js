module.exports = {
  name: "button-guidelines",
  description: "Guidelines for Button component - actions and interactions",
  content: `# Muibook Guidelines: Button Component

## Overview
Buttons are essential UI elements that trigger actions when clicked or tapped. They should be easily recognisable, provide clear feedback, and be accessible to all users.

## Complete documentation, see: https://guides.muibook.com/button

## Usage Guidelines
- Reserve buttons for core actions on a page.
- Avoid using too many buttons on a single page to prevent confusion.
- Use clear and concise label text on buttons.
- Ensure labels are action-oriented. E.g. 'Save'.
- Ensure sufficient contrast between button text and background.

## Anatomy
![Button Anatomy](https://images.ctfassets.net/i5uwscj4pkk2/2LUuCpBtbL794vr5DyhMCz/44b7a3b75d0418915ebcdbf43bf1214c/button-anatomy.png)

A button consists of the following parts:
- **LABEL**: Text describing the button action. Use action verbs or phrases to tell the user what will happen next, and follow the button label content guidelines.
- **BEFORE**: An optional area to include an icon before the label. Use an icon to add additional affordance where the icon has a clear and well-established meaning. Most buttons don't require an icon, so be consistent and deliberate when you do.
- **AFTER**: An optional area to include an icon after the label, often used for a chevron-down-arrow icon to indicate a dropdown menu or accordion experiences where the placement is on the far right of the button.
- **ICON ONLY**: Use when the action is easily understood and space is limited. For example: close, add, or menu toggle. Avoid for unfamiliar or complex actions.

## Button Variants

### Primary
Used for the main action on a page. It should stand out visually and be used sparingly to avoid confusion. Use x-small size icon when it is paired with text or the icon-only action is used in a button group.

### Primary: Icon-Only
An icon-only version of the primary button. Best when the icon meaning is immediately clear, such as submitting, navigating forward, or creating new items. Uses a small size icon.

### Secondary
Used for secondary actions that are not as critical as the primary action. It should be distinguishable but less prominent. Use x-small size icon when it is paired with text or the icon-only action is used in a button group.

### Secondary: Icon-Only
An icon-only version of the secondary button. Best for actions like edit, copy, or open in a new window. Uses a small size icon.

### Tertiary
Used for less important actions or actions that complement primary and secondary actions. They should be the least prominent. Use x-small size icon when it is paired with text or the icon-only action is used in a button group.

### Tertiary: Icon-Only
An icon-only version of the tertiary button. Designed for lightweight or supporting actions with minimal emphasis. Uses a small size icon.

### Attention
Used for critical or potentially destructive actions, such as deleting an item or submitting sensitive information. Should stand out clearly. Use x-small size icon when paired with text or in icon-only mode.

### Attention: Icon-Only
An icon-only version of the attention button. Used for critical or potentially destructive actions such as delete, remove, or report. Uses a small size icon.

## Compositions
Showcases actual use cases, demonstrating how the component fits into real-world UI scenarios.

### In-browser Design Guidelines
A promotional example showcasing the in-browser design guidelines feature available on the Muibook website.

### Onboarding Form
Demonstrates an onboarding form within a card, using logic to confirm terms acceptance. Components include Heading, Input Fields, Checkbox, and Button.

## Accessibility
- Never put tooltips on disabled buttons as Tooltips can't be reached on all devices or by some assistive technologies.
- Provide accessible labels for buttons.
- For icon-only buttons, ensure an aria-label is provided to describe the action, as screen readers cannot interpret icons alone.
- Ensure buttons are focusable via keyboard navigation.
- Use appropriate ARIA roles and properties.

## Behaviour
Buttons should provide visual feedback on hover and click. These states should be factored into the component and baked into the corresponding states in code:
- **Default**: Normal state
- **Hover**: Changes when a user hovers over the button
- **Focus**: Ensure buttons display a visible focus indicator when navigated to via keyboard.
- **Disabled**: Non-interactive, faded appearance.

## UX Writing
- Keep button text short and action-oriented.
- Use sentence case for button text.
- Avoid using multiple lines of text on a button.

## Rules and Best Practices

### Primary vs Secondary
Primary buttons signify the main action on a page or view. Use only one per context to avoid confusion. Secondary buttons support the primary action and are used for supplementary or less critical choices.

#### ✅ DO
Use one clear primary action, supported by a secondary button for an alternative or reversible choice.

#### ❌ DON'T
Avoid giving multiple buttons equal visual weight, as this creates confusion about what to do next.

### Primary and Tertiary
Tertiary actions are low-priority, optional paths that support the experience without distracting from the primary or secondary actions.

#### ✅ DO
The tertiary action offers an optional, less prominent path that doesn’t compete visually with the primary action.

#### ❌ DON'T
A tertiary action styled like a primary button creates visual confusion and implies equal importance, which undermines the intended hierarchy.

### Pairing Buttons
When an icon-only button is paired with a labeled button, use a small icon for the icon-only button and an x-small icon for the labeled button. Place primary action on the right.

#### ✅ DO
Place the primary action on the right and use appropriate icon sizes.

#### ❌ DON'T
Don’t place the primary action on the left or mismatch icon sizing.

### Table Button-Group
Group multiple actions in a table’s action cell carefully, showing only the most relevant actions per row.

#### ✅ DO
Use a secondary button for labeled actions paired with a tertiary icon-only button, small and x-small icons as appropriate.

#### ❌ DON'T
Avoid using primary, tertiary, or attention variants for labeled buttons in table cells.

### Button vs Link
Buttons trigger actions; links navigate.

#### ✅ DO
Use a link when navigating to another page or view.

#### ❌ DON'T
Don’t use a link to trigger tasks like submitting a form.

### Label Clarity
#### ✅ DO
Use clear and concise labels for buttons. E.g. 'Submit'.

#### ❌ DON'T
Avoid unclear or generic terms. E.g. 'Click here'.

### Disabled Actions
Avoid disabling call-to-action buttons; use form validation, toasts, or alerts instead.

#### ✅ DO
Provide clear instructions on how to resolve issues via form validation and alerts.

#### ❌ DON'T
Avoid disabling actions, as users won’t get feedback.

### Table Button: Icon-Only
Use icon-only buttons in the far right cell of table rows.

#### ✅ DO
Use a tertiary icon-only button with a small icon in the end table cell.

#### ❌ DON'T
Don’t use other button variants or icon sizes in place of the designated icon-only approach.

### Card, Dialog, and Drawer Actions
Place actions in a footer to provide a consistent location.

#### ✅ DO
Place actions in a footer within cards, dialogs, and drawers.

#### ❌ DON'T
Avoid unconventional or hard-to-find locations.

## Related Components
- **Link**: Navigate between pages or external content.
- **Icons**: Ideal for reinforcing meaning in buttons, menus, or navigation.  

---
When building with buttons, always reference these guidelines to ensure consistency across the design system.`,
};
