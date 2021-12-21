import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './Theme';
import { Switch as Routes } from './Routes/Routes';
import { NavMenu } from './Components/NavMenu/NavMenu';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <NavMenu />
        <Routes />
      </ThemeProvider>
    </>
  );
};

export default App;
