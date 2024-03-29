import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { Info, EventNote, RateReview } from '@mui/icons-material';

function Navbar() {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: (theme) => theme.palette.primary.main, borderBottom: (theme) => `1px solid ${theme.palette.secondary.main}` }}>
      <Toolbar>
        <Box flexGrow={1}>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{ 
                textDecoration: 'none', 
                color: (theme) => theme.palette.primary.contrastText, 
                fontWeight: 'bold',
                '&:hover': {
                    color: (theme) => theme.palette.secondary.main,
                    cursor: 'pointer',
                  },
            }}
          >
            Our Pediatric Practice
          </Typography>
        </Box>
        <Button
          color="inherit"
          component={Link}
          to="/about"
          startIcon={<Info />}
          sx={{ '&:hover': { textDecoration: 'underline', color: (theme) => theme.palette.secondary.dark } }}
        >
          About
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/appointment-requests"
          startIcon={<EventNote />}
          sx={{ '&:hover': { textDecoration: 'underline', color: (theme) => theme.palette.secondary.dark } }}
        >
          Appointment Requests
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/reviews"
          startIcon={<RateReview />}
          sx={{ '&:hover': { textDecoration: 'underline', color: (theme) => theme.palette.secondary.dark } }}
        >
          Reviews
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
