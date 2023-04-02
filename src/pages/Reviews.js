import React from 'react';
import { Button, Typography, Box } from '@mui/material';

function Reviews() {
  return (
    <Box sx={{ textAlign: 'center', mt: 4 }}>
      <Typography variant="h4">See Our Reviews</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        Check out our reviews on the following platforms:
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        href="https://external-review-site1.com"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ m: 1, mt: 2 }}
      >
        Site 1
      </Button>
      <Button
        variant="contained"
        color="secondary"
        href="https://external-review-site2.com"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ m: 1, mt: 2 }}
      >
        Site 2
      </Button>
    </Box>
  );
}

export default Reviews;
