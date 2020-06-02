import React from 'react';
import Button from 'components/Button/Button';
import GlobalStyle from 'theme/GlobalStyle';

const Root = () => (
  <div>
    <GlobalStyle />
    <h1>App</h1>
    <Button width="500px">click</Button>
    <Button secondary>remove</Button>
  </div>
);

export default Root;
