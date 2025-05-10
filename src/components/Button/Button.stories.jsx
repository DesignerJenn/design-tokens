import React from 'react';

export default {
  title: 'UI/Button',
  component: () => <button>Click me</button>,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/mdVxwnycKfxwawfOJgou4I/OptAdEasy?type=design&node-id=196%3A12304',
    },
  },
};

// Primary button
export const Primary = () => <button>Primary Button</button>;

// Secondary button
export const Secondary = () => <button>Secondary Button</button>;
