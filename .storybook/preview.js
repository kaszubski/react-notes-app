import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/theme/mainTheme';
import GlobalStyle from 'theme/GlobalStyle';

addDecorator(storyFn => <><GlobalStyle /><ThemeProvider theme={theme}>{storyFn()}</ThemeProvider></>);
