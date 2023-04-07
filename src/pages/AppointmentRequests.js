import React from 'react';
import { Button, Typography, Box, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { OpenInNew } from '@mui/icons-material';
import appointmentImage from '../assets/appointmentImage.png';

function AppointmentRequests() {
  return (
    <Box sx={{ mt: 4 }}>
      <Grid container alignItems="center" justifyContent="center">
        <Grid item xs={12}>
          <Box>
            <img
              src={appointmentImage}
              alt="Appointment Image"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                zIndex: -1
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              position: 'absolute',
              top: '35%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.1)', 
              borderRadius: '8px',
              p: 3,
            }}
          >
            <Typography variant="h4" >Appointment Requests</Typography>
            <Typography variant="body1"  sx={{ mt: 2 }}>
              To request an appointment with Dr. X, please click the button below.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to={{ pathname: 'https://appointment-service.com' }}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ 
                mt: 2, 
                '&:hover': {
                  backgroundColor: (theme) => theme.palette.secondary.main,
                  color: (theme) => theme.palette.secondary.contrastText,
                },
              }}
              endIcon={<OpenInNew />}
            >
              Request an Appointment
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AppointmentRequests;
