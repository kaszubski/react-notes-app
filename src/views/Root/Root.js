import React from 'react';
import { ThemeProvider } from 'styled-components';
import Button from 'components/atoms/Button/Button';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';

const Root = () => (
  <div>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
        <h1>App</h1>
        <Button width="500px">click</Button>
        <Button secondary>remove</Button>
      </>
    </ThemeProvider>
  </div>
);

export default Root;
