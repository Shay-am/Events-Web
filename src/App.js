import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './Theme';
import { Home } from './Pages';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </>
  );
};

export default App;
