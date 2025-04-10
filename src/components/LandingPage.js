import React from 'react';
import { 
  Box, 
  Button, 
  Container, 
  Typography, 
  Paper,
  Grid,
  Card,
  CardContent,
  CardMedia
} from '@mui/material';
import { styled } from '@mui/material/styles';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import TimelineIcon from '@mui/icons-material/Timeline';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  margin: theme.spacing(4, 0),
  background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
  color: 'white',
}));

const FeatureCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const LandingPage = () => {
  return (
    <Box>
      {/* Hero Section */}
      <StyledPaper elevation={3}>
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom align="center">
            Welcome to Fit-Track-Pro
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom align="center">
            Your Personal Fitness Journey Starts Here
          </Typography>
          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', gap: 2 }}>
            <Button 
              variant="contained" 
              color="secondary" 
              size="large"
              href="/login"
            >
              Login
            </Button>
            <Button 
              variant="outlined" 
              color="inherit" 
              size="large"
              href="/register"
            >
              Sign Up
            </Button>
          </Box>
        </Container>
      </StyledPaper>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" gutterBottom align="center" sx={{ mb: 6 }}>
          Why Choose Fit-Track-Pro?
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <FeatureCard>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                  <FitnessCenterIcon sx={{ fontSize: 60, color: 'primary.main' }} />
                </Box>
                <Typography variant="h5" component="h3" gutterBottom align="center">
                  Track Workouts
                </Typography>
                <Typography align="center">
                  Log your exercises, sets, and reps with our intuitive interface. Monitor your progress over time.
                </Typography>
              </CardContent>
            </FeatureCard>
          </Grid>
          <Grid item xs={12} md={4}>
            <FeatureCard>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                  <TimelineIcon sx={{ fontSize: 60, color: 'primary.main' }} />
                </Box>
                <Typography variant="h5" component="h3" gutterBottom align="center">
                  Progress Analytics
                </Typography>
                <Typography align="center">
                  Visualize your fitness journey with detailed charts and progress tracking.
                </Typography>
              </CardContent>
            </FeatureCard>
          </Grid>
          <Grid item xs={12} md={4}>
            <FeatureCard>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                  <EmojiEventsIcon sx={{ fontSize: 60, color: 'primary.main' }} />
                </Box>
                <Typography variant="h5" component="h3" gutterBottom align="center">
                  Achieve Goals
                </Typography>
                <Typography align="center">
                  Set personal fitness goals and celebrate your achievements along the way.
                </Typography>
              </CardContent>
            </FeatureCard>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default LandingPage; 