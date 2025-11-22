module.exports = {
  name: "file-upload-guidelines",
  description: "Guidelines for File Upload component - simple file input with feedback",
  content: `# Muibook Guidelines: File Upload Component

## Overview
A simple file input that displays the selected file name and emits a file-upload event.

## Complete documentation, see: https://guides.muibook.com/file-upload

## Usage Guidelines
- Use when users need to upload a file, such as documents, images, or other assets.
- Keep labels and instructions clear so users understand what file types and sizes are allowed.
- Display the selected file name once uploaded to confirm selection.
- Validate file type and size before submission and provide helpful error messages.
- Only use this component when uploading is essential to completing a task — avoid optional uploads unless necessary.

## Anatomy
![File Upload Anatomy](https://images.ctfassets.net/i5uwscj4pkk2/2sqEWKOyrgyXbePd1Y0QY1/36670de55b4f68391d073275b94b11e8/FileUpload_-_Anatomy.png)

- **Message**: This text indicates that no file has been selected.
- **Action**: Use this element as a call to action for the user to add a file.

## Compositions
Showcases actual use cases, demonstrating how the component fits into real-world UI scenarios.

### Onboarding Form
Demonstrates an onboarding form within a card, including File Upload fields to collect supporting documents along with Inputs, Checkboxes, and Buttons.

## Accessibility
- Provide a visible or accessible label to describe the purpose of the file input.
- Ensure focus styles are visible for keyboard navigation.
- Provide feedback to screen readers when a file is successfully selected or when an error occurs.

## Related Components
- **Field**: Wraps form elements, supports labels, and validation messaging.
- **Input**: Flexible, composable component for text-based input.
- **Select**: Dropdown component for choosing from a list of options.
- **Add On**: Enhances inputs with units, prefixes, or suffixes.`,
};
