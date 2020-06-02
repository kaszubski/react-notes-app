import React from 'react';
import Button from './Button';

export default {
  component: Button,
  title: 'Button',
};

export const Primary = () => (
  <Button>
    CLICK
  </Button>
);

export const Secondary = () => (
  <Button secondary>
    CLICK
  </Button>
);
