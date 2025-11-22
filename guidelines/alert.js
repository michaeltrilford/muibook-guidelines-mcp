module.exports = {
  name: "alert-guidelines",
  description: "Guidelines for Alert component - system messages and notifications",
  content: `# Muibook Guidelines: Alert Component

## Overview
Alerts surface meaningful system messages related to the users' current task or action.

## Complete documentation, see: https://guides.muibook.com/alert

## Usage Guidelines
- **Success**: Confirm completed actions such as form submissions, data saves, or task completion.
- **Info**: Share new features, updates, contextual tips, or non-urgent system statuses.
- **Warning**: Alert users to unsaved changes, deprecated features, or risky actions.
- **Error**: Alert users of form validation issues, system failures, or tasks that need attention.

## Anatomy
![Alert Anatomy](https://images.ctfassets.net/i5uwscj4pkk2/17j3DxAFlne6rvMi6QUXqZ/aedab2c349c8f8b0a8414b41132cda51/Alert_-_Anatomy.png)

An Alert consists of the following parts:
- **Preset Icon**: Communicates the type of alert visually (info, success, warning, error).
- **Preset Title**: Provides a clear, predefined heading that reflects the alert’s purpose.
- **Customisable Text**: Allows for specific details or guidance relevant to the situation.

## Variants

### Success
Indicates that an operation or action has been completed successfully. Use this variant for scenarios such as form submissions processed without errors, successful data updates or saves, and confirmations of completed tasks or actions. For accessibility, this variant uses an **aria-live** value of polite.

### Info
Provides general information or updates that are helpful but not critical. Use this variant for announcing new features or updates, offering contextual information or tips, and informing users about non-urgent system statuses. For accessibility, it uses **aria-live** polite.

### Warning
Alerts users to potential issues or situations that require caution. Common use cases include notifying about unsaved changes, indicating deprecated features or upcoming changes, and highlighting actions that may have unintended consequences. For accessibility, it uses **aria-live** assertive.

### Error
Indicates that an error has occurred, requiring user attention or action. Typically used for form validation errors, system failures or exceptions, and failed operations or transactions. For accessibility, it uses **aria-live** assertive.

## Compositions
Showcases actual use cases, demonstrating how the component fits into real-world UI scenarios.

### AI Playground (Error)
Demonstrates the Muiplay AI Playground showing a floating error positioned close to the field where a prompt is required to generate a task.

## Accessibility
- **ARIA-live** is built in, using **POLITE** + **ASSERTIVE** for screen readers.
- The role is set to **ALERT** for immediate screen reader feedback.

## Related Components
- **Message**: Provides persistent, non-dismissible notifications that remain visible until the system determines they should be suspended.
- **Link**: Used to navigate between pages or external content.

---
When building with Alerts, always reference these guidelines to ensure consistency across the design system.`,
};
