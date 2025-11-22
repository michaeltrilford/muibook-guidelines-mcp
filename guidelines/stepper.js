module.exports = {
  name: "stepper-guidelines",
  description: "Guidelines for the Stepper component - visual representation of multi-step workflows",
  content: `# Muibook Guidelines: Stepper

## Overview
A Stepper component visually represents a sequence of steps in a process. It helps users understand progress and navigate through multi-step workflows. Supports both horizontal and vertical orientations.

## Complete documentation, see: https://guides.muibook.com/stepper

## Anatomy
![Stepper Anatomy](https://images.ctfassets.net/i5uwscj4pkk2/6Y5iyISdhK7PX8d1cHJxWv/761efb630c924af42ebf8d8bd5fabfb2/Stepper_-_Anatomy.png)

The stepper uses two simple styles: active and inactive. Their meaning changes based on position in the sequence, representing progress through different states.

- **Active / Completed**: Indicates the current step or a task that has been successfully finished.
- **Upcoming**: Represents a step or task that has not yet been completed.

## Compositions
Showcases actual use cases, demonstrating how the component fits into real-world UI scenarios.

- **Review Items Task**: A permanent drawer remains visible at all times and is typically used for core navigation or tools that support the main content. It doesn’t open or close, and is always part of the current layout or workflow.

## Related Components
- **Loader**: Provides smooth transitions during content updates or page loads.
- **Progress**: Visually represents completion status of a task or process.
- **Stepper Variants**: Horizontal and vertical layouts for workflow representation.`,
};
