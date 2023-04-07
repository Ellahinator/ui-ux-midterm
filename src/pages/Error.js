import React from 'react';
import { Typography, Box, Grid } from '@mui/material';

function Error() {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh' }}
    >
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h4">Oops! Page not found.</Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          The page you're looking for doesn't exist.
        </Typography>
      </Box>
    </Grid>
  );
}

export default Error;
