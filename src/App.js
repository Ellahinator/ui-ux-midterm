import React from 'react';
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import AppointmentRequests from './pages/AppointmentRequests';
import Reviews from './pages/Reviews';

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
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/appointment-requests" element={<AppointmentRequests />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
