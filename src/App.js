import React from 'react';
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import AppointmentRequests from './pages/AppointmentRequests';
import Reviews from './pages/Reviews';
import Error from './pages/Error';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#8cddf2',
    },
    secondary: {
      main: '#f2a18c',
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
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/appointment-requests" element={<AppointmentRequests />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
