import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/mainTheme';
import Button from './Button';

export default {
  title: 'Button',
  decorators: [withKnobs],
};

export const Primary = () => {
  const label = 'Colors';
  const options = {
    Primary: 'hsl(48, 100%, 58%)',
    Secondary: 'hsl(196, 83%, 75%)',
    Tertiary: 'hsl(106, 47%, 64%)',
  };
  const defaultValue = 'hsl(49, 100%, 58%)';
  const groupID = 'GROUP-ID1';

  const value = select(label, options, defaultValue, groupID);

  return (
    <ThemeProvider theme={theme}>
      <Button color={value}>
        CLICK
      </Button>
    </ThemeProvider>
  );
};

export const Secondary = () => (
  <Button secondary>
    CLICK
  </Button>
);
