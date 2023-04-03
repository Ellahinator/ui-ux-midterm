import React from 'react';
import { Button, Typography, Box, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import reviewImage from '../assets/review.png';


function Reviews() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        paddingTop: 8,
        background: (theme) =>
          `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
      }}
    >
      <Grid container alignItems="center" justifyContent="center">
        <Grid item xs={12} md={6}>
          <Box>
            <img
              src={reviewImage}
              alt="Reviews"
              style={{ width: '100%', borderRadius: '8px', margin: '20px' }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Typography variant="h4">See Our Reviews</Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              Check out our reviews on the following platforms:
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              component={Link}
              to={{ pathname: 'https://external-review-site1.com' }}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ m: 1, mt: 2 }}
            >
              Site 1
            </Button>
            <Button
              variant="contained"
              color="secondary"
              component={Link}
              to={{ pathname: 'https://external-review-site2.com' }}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ m: 1, mt: 2 }}
            >
              Site 2
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Reviews;
