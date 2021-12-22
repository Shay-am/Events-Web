import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './Theme';
import { Switch as Routes } from './Routes/Routes';
import { Nav } from './Components';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Nav />
        <Routes />
      </ThemeProvider>
    </>
  );
};

export default App;
