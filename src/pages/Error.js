import React from 'react';
import { Typography, Box } from '@mui/material';

function Error() {
  return (
    <Box sx={{ textAlign: 'center', mt: 4 }}>
      <Typography variant="h4">Oops! Page not found.</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        The page you're looking for doesn't exist.
      </Typography>
    </Box>
  );
}

export default Error;