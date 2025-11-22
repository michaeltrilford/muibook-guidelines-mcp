const prompts = [
  {
    role: "system",
    content: `# Muibook Guidelines: Button Component

## Overview
Buttons are essential UI elements that trigger actions when clicked or tapped. They should be easily recognizable, provide clear feedback, and be accessible to all users.

## Usage Guidelines
- Reserve buttons for core actions on a page
- Avoid using too many buttons on a single page to prevent confusion
- Use clear and concise label text on buttons
- Ensure labels are action-oriented (e.g., 'Save', 'Submit', 'Delete')
- Ensure sufficient contrast between button text and background

## Anatomy

![Button Anatomy](https://images.ctfassets.net/2waay8xeshgg/4joJCZUNPBSxqtK69FxhLj/3090e35cd00b42d096bb94905f8b5fa1/button-anatomy.png)

For complete button documentation, see: https://guides.muibook.com/button

A button consists of the following parts:
- **LABEL**: Text describing the button action. Use action verbs or phrases to tell the user what will happen next
- **BUTTON**: The selectable area of the button
- **BEFORE**: An optional area to include an icon before the label. Use an icon to add additional affordance where the icon has a clear and well-established meaning. Most buttons don't require an icon, so be consistent and deliberate when you do
- **AFTER**: An optional area to include an icon after the label, often used for a chevron-down-arrow icon to indicate a dropdown menu or accordion experiences where the placement is on the far right of the button

[Anatomy diagram placeholder - refer to design system documentation]

## Button Variants

### Primary
Used for the main action on a page. It should stand out visually and be used sparingly to avoid confusion.
[Primary button visual placeholder]

### Secondary
Used for secondary actions that are not as critical as the primary action. It should be distinguishable but less prominent.
[Secondary button visual placeholder]

### Tertiary
Used for less important actions or actions that complement primary and secondary actions. They should be the least prominent.
[Tertiary button visual placeholder]

### Link
Inline text used for navigation or secondary actions (e.g., 'More info').
[Link button visual placeholder]

### Icon
Icon buttons use recognizable icons to represent actions, providing a minimal and efficient way to perform common tasks.
[Icon button visual placeholder]

## Accessibility Requirements
- Never put tooltips on disabled buttons as tooltips can't be reached on all devices or by some assistive technologies
- Provide accessible labels for buttons
- Ensure buttons are focusable via keyboard navigation
- Use appropriate ARIA roles and properties

## Button States
Buttons should provide visual feedback on hover and click. These states should be factored into the component and baked into the corresponding states in code:
- **Default**: Normal state
- **Hover**: Changes when a user hovers over the button
- **Active**: Changes when the button is clicked
- **Disabled**: Non-interactive, faded appearance

[Button states diagram placeholder]

## UX Writing Guidelines
- Keep button text short and action-oriented
- Use sentence case for button text
- Avoid using multiple lines of text on a button

## Rules and Best Practices

### ✅ DO: Primary Actions
- Use only one primary call-to-action per page or view
- Primary buttons signify the key action within a page or view
- Use secondary buttons for supplementary actions

### ❌ DON'T: Multiple Primary Actions
- Avoid multiple primary actions on a single page or view to prevent confusion

### ✅ DO: Form Validation Over Disabled Buttons
- Use form validation in combination with alerts to provide clear instructions on how to resolve issues
- Provide feedback on why users can't proceed and how to resolve the issue

### ❌ DON'T: Disable Call-to-Action Buttons
- Avoid disabling actions, as it prevents users from receiving feedback on why they can't proceed

### ✅ DO: Page Actions Placement
- Place primary actions in an accessible area, typically above the fold and at the top of the page
- Primary actions for an entire page should be positioned at the top, with secondary actions beside them
- Actions can be placed within relevant sections if there are different groups of content

### ❌ DON'T: Actions Below the Fold
- Avoid placing primary actions below the fold or at the bottom of the page, as this makes them less accessible

### ✅ DO: Card, Dialog, and Drawer Actions
- Place actions in a footer for cards, dialogs, and drawers
- This provides a consistent location for users to find and interact with them

### ❌ DON'T: Unconventional Action Placement
- Avoid placing actions in hard-to-find locations within cards, dialogs, or drawers

### ✅ DO: Clear Label Text
- Use clear and concise labels for buttons
- Ensure each button clearly indicates its action (e.g., 'Submit', 'Save', 'Delete')

### ❌ DON'T: Ambiguous Labels
- Avoid unclear or generic terms for buttons (e.g., 'Click here', 'OK')

### ✅ DO: Primary Button Usage
- Use Primary button variant for critical actions like form submissions (e.g., 'Submit', 'Save')

### ❌ DON'T: Primary for Non-Critical Actions
- Avoid using Primary variant for non-critical actions like navigating to additional content (e.g., 'Read more')

### ✅ DO: Tertiary for Non-Critical Actions
- Use Tertiary button or link component for non-critical actions (e.g., 'Read more', 'View details')

### ❌ DON'T: Primary for Navigation
- Don't use Primary button variant for non-critical navigation actions

### ✅ DO: Link Variant for Navigation
- Use the Link button variant for navigation or secondary actions (e.g., 'Learn more', 'View details')

### ❌ DON'T: Link Variant for Form Submission
- Avoid using the Link button variant to submit actions (e.g., 'Save', 'Submit')

## Related Components
- **Dialog**: For dialogs or additional content that requires user interaction
- **Drawer**: For side panels that provide additional navigation or information without navigating away from the main content
- **Icons**: To enhance button labels with visual cues

---

When building with buttons, always reference these guidelines to ensure consistency across the design system.`,
  },
  {
    role: "system",
    content: `# Muibook Guidelines: Dialog Component

## Overview
A modal window that prompts users to take a specific action or provide additional information without navigating away from the current context.

## Usage Guidelines
- Use to alert the user of potentially harmful actions
- Use for focused interactions that require attention and immediate action
- Ensure dialogs don't interrupt the user's workflow unnecessarily

## Anatomy

![Dialog Anatomy](https://images.ctfassets.net/2waay8xeshgg/OTFCO4r3D0TAsIHZu1j8p/181e5bc320b587b3864817e82f4d0f3d/dialog-anatomy.png)

For complete button documentation, see: https://guides.muibook.com/dialog

A dialog consists of the following parts:
- **Container**: Controls the position of the dialog and appears as an overlay
- **Header**: The top section of the dialog, containing the title and a close button
- **Title**: Text that describes the purpose or contents of the dialog
- **Close**: An icon or button that allows users to close the dialog
- **Body**: Custom section to slot the primary message, forms, or other relevant info
- **Footer**: Optional section for additional actions, such as "Cancel" or "Save"
- **Footer (Slot)**: Add auxiliary indicators, such as Processing, Uploading or Saving

[Dialog anatomy diagram placeholder - refer to design system documentation]

## Accessibility Requirements
- Ensure dialogs are accessible via keyboard and screen readers
- Use ARIA roles and properties to indicate the state of the dialog (visible/hidden)
- Ensure the focus remains within the dialog while it is open
- Focus should move to the first focusable element when dialog opens
- Provide a way to close the dialog via keyboard (ESC key)

## Behavior
- Dialogs appear as a temporary overlay on top of the main content
- The dialog smoothly animates onto the screen to enhance user experience
- Users can click the background to dismiss the dialog
- Focus is trapped within the dialog while open
- When closed, focus returns to the element that triggered the dialog

[Dialog behavior states placeholder]

## UX Writing Guidelines
- **Concise Information**: Keep dialog content simple and to the point
- **Clear Labels**: Use clear labels for actions and navigation items
- **Avoid Overcrowding**: Do not overcrowd the dialog with too much information

## Rules and Best Practices

### ✅ DO: Dismiss the Dialog
- Provide multiple ways to dismiss: clicking the cross icon, cancel button, or the surrounding background
- Make it clear to users how they can exit the dialog
- Ensure all dismiss methods are easily accessible

[Dismiss dialog example placeholder]

### ❌ DON'T: Hide Close Options
- Avoid hiding the close button or replacing the footer action with a close function
- Don't force users to complete an action if they want to dismiss
- Don't make it difficult to exit the dialog

### ✅ DO: Content Clarity
- Use a simple, stacked layout that ensures clarity and flexibility in the limited space
- Keep the content clear, concise, and easy to read
- Organize content hierarchically with proper spacing
- Use the body section for the main message and footer for actions

[Clear content example placeholder]

### ❌ DON'T: Complex Layouts
- Don't use complex layouts like grids or overcrowd the dialog with excessive content
- Avoid content that may hinder readability
- Don't nest multiple levels of information in the limited space
- Avoid using too many form fields or overwhelming amounts of text

## Related Components
- **Drawer**: For side panels that provide additional navigation or information without navigating away from the main content
- **Button**: Essential for dialog actions and interactions
- **Alert**: For simpler notifications that don't require user interaction

---

When building with dialogs, always reference these guidelines to ensure consistency across the design system.`,
  },
];

module.exports = { prompts };
