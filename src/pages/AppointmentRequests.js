import React from 'react';
import { Button, Typography, Box } from '@mui/material';

function AppointmentRequests() {
  return (
    <Box sx={{ textAlign: 'center', mt: 4 }}>
      <Typography variant="h4">Appointment Requests</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        To request an appointment with Dr. X, please click the button below.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        href="https://appointment-service.com"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ mt: 2 }}
      >
        Request an Appointment
      </Button>
    </Box>
  );
}

export default AppointmentRequests;
