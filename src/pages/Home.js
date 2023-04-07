import React from 'react';
import { Container, Grid, Box, Typography, Button } from '@mui/material';
import familydoctor from '../assets/familydoctor.jpeg';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      {/* Main content */}
      <Container>
        <Grid container spacing={2} alignItems="center" style={{ minHeight: 'calc(100vh - 60px)' }}>
          {/* Image */}
          <Grid item xs={12} md={6}>
            <Box>
              <img
                src={familydoctor}
                alt="Pediatrician and child"
                style={{ width: '100%', maxWidth: '900px', borderRadius: '8px' }}
              />
            </Box>
          </Grid>

          {/* Welcome text and buttons */}
          <Grid item xs={12} md={6}>
            {/* Welcome text */}
            <Typography variant="h4" sx={{ mt: 3 }}>
              Welcome to Our Pediatric Practice
            </Typography>
            <Typography variant="body1" sx={{ mt: 1 }}>
              Address: 123 Main St, City, State, 12345
            </Typography>
            <Typography variant="body1">Phone: (123) 456-7890</Typography>
            <Typography variant="body1">Office Hours: Mon-Fri, 9:00 AM - 5:00 PM</Typography>

            {/* Buttons */}
            <Grid container spacing={2} sx={{ mt: 3 }}>
              <Grid item>
                <Button 
                  variant="contained" 
                  component={Link} 
                  to = "/about"
                  sx={{
                    '&:hover': {
                      backgroundColor: (theme) => theme.palette.secondary.main,
                      color: (theme) => theme.palette.secondary.contrastText,
                    },
                  }} 
                >About</Button>
              </Grid>
              <Grid item>
                <Button 
                  variant="contained" 
                  component={Link} 
                  to = "/appointment-requests"
                  sx={{
                    '&:hover': {
                      backgroundColor: (theme) => theme.palette.secondary.main,
                      color: (theme) => theme.palette.secondary.contrastText,
                    },
                  }}
                >Appointment Requests</Button>
              </Grid>
              <Grid item>
                <Button 
                  variant="contained" 
                  component={Link} 
                  to = "/reviews"
                  sx={{
                    '&:hover': {
                      backgroundColor: (theme) => theme.palette.secondary.main,
                      color: (theme) => theme.palette.secondary.contrastText,
                    },
                  }}
                >Reviews</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Home;
