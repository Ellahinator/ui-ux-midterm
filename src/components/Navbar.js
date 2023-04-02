import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box flexGrow={1}>
          <Typography variant="h6" component={Link} to="/" sx={{ textDecoration: 'none', color: 'inherit' }}>
            Our Pediatric Practice
          </Typography>
        </Box>
        {/* <Button color="inherit" component={Link} to="/about">About</Button> */}
        {/* <Button color="inherit" component={Link} to="/appointment-requests">Appointment Requests</Button> */}
        {/* <Button color="inherit" component={Link} to="/see-reviews">See Reviews</Button> */}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
