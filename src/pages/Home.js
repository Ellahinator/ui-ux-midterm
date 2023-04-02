import React from 'react';
import { Typography, Box } from '@mui/material';
import placeholder from '../logo.svg';

function Home() {
  return (
    <Box sx={{ textAlign: 'center', mt: 4 }}>
      <img src={placeholder} alt="Pediatrician and child" style={{ width: '100%', maxWidth: '800px', borderRadius: '8px' }} />
      <Typography variant="h4" sx={{ mt: 3 }}>
        Welcome to Our Pediatric Practice
      </Typography>
      <Typography variant="body1" sx={{ mt: 1 }}>
        Address: 123 Main St, City, State, 12345
      </Typography>
      <Typography variant="body1">Phone: (123) 456-7890</Typography>
      <Typography variant="body1">Office Hours: Mon-Fri, 9:00 AM - 5:00 PM</Typography>
    </Box>
  );
}

export default Home;
