import React from 'react';
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';

import Home from './pages/Home';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4db6ac',
    },
    secondary: {
      main: '#ff7043',
    },
  },
  typography: {
    fontFamily: 'Nunito, Arial, sans-serif',
    h4: {
      fontWeight: 600,
    },
    body1: {
      fontSize: '1.1rem',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
