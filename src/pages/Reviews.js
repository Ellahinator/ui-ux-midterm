import React, { useState } from 'react';
import { Box, Button, Card, CardContent, Grid, IconButton, Typography, Rating } from '@mui/material';
import { Link } from 'react-router-dom';
import { OpenInNew, ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const reviews = [
  {
    name: 'LeBron James',
    rating: 5,
    text:
      "We've been taking our kids to this pediatric practice for years, and we couldn't be happier. The staff is always friendly and accommodating, and Dr. X genuinely cares about his patients.",
  },
  {
    name: 'Danyal Ellahi',
    rating: 4,
    text:
      "Dr. X has been our pediatrician for both of our children, and he has been wonderful. he is knowledgeable, patient, and always willing to answer any questions we have. Highly recommended!",
  },
  {
    name: 'Anonymous',
    rating: 4.5,
    text:
      "Our Pediatric Practice is the best! Dr. X and his team are not only professional but also compassionate and understanding. I trust them completely with my child’s healthcare.",
  },
];

function Reviews() {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const currentReview = reviews[currentReviewIndex];

  const handleNext = () => {
    setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const handlePrevious = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex - 1 < 0 ? reviews.length - 1 : prevIndex - 1,
    );
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        paddingTop: 8,
        background: (theme) =>
          `linear-gradient(135deg, white 0%, ${theme.palette.primary.main} 100%)`,
      }}
    >
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        spacing={4}
        style={{ minHeight: 'calc(100vh - 64px)' }}
      >
        <Grid item ={12} md={6}>
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
              endIcon={<OpenInNew />}
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
              endIcon={<OpenInNew />}
            >
              Site 2
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
            <Typography variant="h5" sx={{ mt: 2, mb: 2 }}>
              Featured Reviews
            </Typography>
        <Card sx={{ maxWidth: 600, position: 'relative', pl:3, pr:3 }}>
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography gutterBottom variant="h5">
                {currentReview.name}
              </Typography>
              <Rating
                value={currentReview.rating}
                precision={0.5}
                readOnly
                sx={{ color: (theme) => theme.palette.secondary.main }}
              />
            </Box>
            <Typography variant="body2" color="text secondary">
              {currentReview.text}
            </Typography>
          </CardContent>
          <IconButton
            onClick={handlePrevious}
            sx={{
              position: 'absolute',
              left: 0,
              top: '50%',
              transform: 'translateY(-50%)',
            }}
          >
            <ArrowBackIos />
          </IconButton>
          <IconButton
            onClick={handleNext}
            sx={{
              position: 'absolute',
              right: 0,
              top: '50%',
              transform: 'translateY(-50%)',
            }}
          >
            <ArrowForwardIos />
          </IconButton>
        </Card>
      </Grid>
    </Grid>
  </Box>
);
}

export default Reviews;