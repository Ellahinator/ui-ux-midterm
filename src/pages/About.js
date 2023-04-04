import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import portrait from '../assets/portrait.png';

function About() {
  return (
    <div>
      {/* Main content */}
      <Container maxWidth="x1">
      <Grid container spacing={2} alignItems="center" sx={{ minHeight: 'calc(100vh - 60px)', marginTop: (theme) => theme.spacing(8) }}>
          {/* Image */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                width: '100%',
                maxWidth: '800px',
                height: 'calc(100vh - 60px)',
                borderRadius: '8px',
                overflow: 'hidden',
              }}
            >
              <img
                src={portrait}
                alt="Office"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </Box>
          </Grid>

          {/* About text */}
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: 'center', mt: 4, maxWidth: '800px' }}>
              <Typography variant="h4" component="div">
                <Box component="span" borderBottom={2} borderColor="secondary.main">
                  About Dr. X
                </Box>
              </Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                Dr. X graduated from Hunter College, with over{' '}
                <Box component="span" color="secondary.main">15 years</Box>{' '}
                of experience in pediatric care. He specializes in child development and preventive care.
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center', mt: 4, maxWidth: '800px' }}>
              <Typography variant="h4" component="div">
                <Box component="span" borderBottom={2} borderColor="secondary.main">
                  Our Practice
                </Box>
              </Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                At Our Pediatric Practice, our mission is to provide the highest quality care for your child in a 
                welcoming and compassionate environment. We strive to create lasting relationships with our patients 
                and their families, supporting their growth and development every step of the way.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default About;
