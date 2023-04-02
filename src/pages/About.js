import React from 'react';
import { Typography, Box } from '@mui/material';
import placeholder_office from '../logo.svg';

function About() {
  return (
    <Box sx={{ textAlign: 'center', mt: 4 }}>
      <Typography variant="h4">About Dr. X</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Dr. X graduated from Hunter College, with over 15 years of experience in pediatric care. 
        She specializes in child development and preventive care.
      </Typography>
      <img src={placeholder_office} alt="Office" style={{ width: '100%', maxWidth: '800px', borderRadius: '8px', marginTop: '16px' }} />
      <Typography variant="h4" sx={{ mt: 4 }}>Our Practice</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        At Our Pediatric Practice, our mission is to provide the highest quality care for your child in a 
        welcoming and compassionate environment. We strive to create lasting relationships with our patients 
        and their families, supporting their growth and development every step of the way.
      </Typography>
    </Box>
  );
}

export default About;
