import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { Home, Info, EventNote, RateReview } from '@mui/icons-material';

function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: (theme) => theme.palette.primary.main }}>
      <Toolbar>
        <Box flexGrow={1}>
        <IconButton color="inherit" component={Link} to="/">
          <Home />
        </IconButton>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{ textDecoration: 'none', color: (theme) => theme.palette.common.black }}
          >
            Our Pediatric Practice
          </Typography>
        </Box>
        <Button
          color="inherit"
          component={Link}
          to="/about"
          startIcon={<Info />}
          sx={{ '&:hover': { textDecoration: 'underline' } }}
        >
          About
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/appointment-requests"
          startIcon={<EventNote />}
          sx={{ '&:hover': { textDecoration: 'underline' } }}
        >
          Appointment Requests
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/reviews"
          startIcon={<RateReview />}
          sx={{ '&:hover': { textDecoration: 'underline' } }}
        >
          Reviews
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
