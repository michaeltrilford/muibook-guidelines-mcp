module.exports = {
  name: "dialog-guidelines",
  description: "Guidelines for Dialog component - modal windows and overlays",
  content: `# Muibook Guidelines: Dialog Component

## Overview
A modal window that prompts users to take a specific action or provide additional information without navigating away from the current context.

## Complete documentation, see: https://guides.muibook.com/dialog

## Usage Guidelines
- Used to alert the user of potentially harmful actions.
- Use for focused interactions that require attention and immediate action.

## Anatomy
![Dialog Anatomy](https://images.ctfassets.net/i5uwscj4pkk2/3Qs9rIWX7LeUjQ3ioObKBe/4848a3b0ad303a12eef5739ddd1c6169/Dialog_-_Anatomy.png)

A dialog consists of the following parts:
- **Heading**: Text that describes the purpose or contents of the dialog.
- **Close**: An icon or button that allows users to close the dialog.
- **Container**: Controls the position of the dialog and appears as an overlay.
- **Footer**: Optional section for additional actions, such as "Cancel" or "Save".

## Accessibility
- Ensure dialogs are accessible via keyboard and screen readers.
- Use ARIA roles and properties to indicate the state of the dialog (visible/hidden).
- Ensure the focus remains within the dialog while it is open.

## Behaviour
- Dialogs appear as a temporary overlay on top of the main content.
- The dialog smoothly animates onto the screen to enhance user experience.
- Users can click the background to dismiss the dialog.
- Focus is trapped within the dialog while open.
- When closed, focus returns to the element that triggered the dialog.

## UX Writing
- **Concise Information**: Keep dialog content simple and to the point.
- **Clear Labels**: Use clear labels for actions and navigation items.
- **Avoid Overcrowding**: Do not overcrowd the dialog with too much information.

## Rules

### Dismiss the Dialog
#### ✅ DO
- Dismiss the Dialog by clicking the cross icon, cancel button, or the surrounding background.

#### ❌ DON'T
- Avoid hiding the close button or replacing the footer action with a close function.

### Content Clarity
#### ✅ DO
- Use a simple, stacked layout that ensures clarity and flexibility in the limited space.
- Keep the content clear, concise, and easy to read.

#### ❌ DON'T
- Don’t use complex layouts like grids or overcrowd the dialog with excessive content that may hinder readability.

## Related
- **Drawer**: A drawer view that prompts users to take a specific action or provide additional information without navigating away from the current context.
- **Button**: Buttons are essential UI elements that trigger actions when clicked or tapped. They should be easily recognisable, provide clear feedback, and be accessible to all users.
- **Alert**: For simpler notifications that don't require user interaction.

---
When building with dialogs, always reference these guidelines to ensure consistency across the design system.`,
};
