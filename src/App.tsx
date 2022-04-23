import { Container, CssBaseline, ThemeOptions, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import React from 'react';
import './App.css';
import { GreenHouse } from './component/green-house';

export const themeOptions: ThemeOptions = {
  typography: {
    fontFamily: 'Space Mono',
  },
};

const Theme = createTheme(themeOptions);

function App() {
  return (
    <Container>
      <CssBaseline />
      <ThemeProvider theme={Theme}>
        <GreenHouse />
      </ThemeProvider>
    </Container>
  );
}

export default App;
