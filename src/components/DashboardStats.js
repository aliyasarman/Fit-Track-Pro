import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  LinearProgress,
  Divider,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import ScaleIcon from '@mui/icons-material/Scale';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 48,
  height: 48,
  borderRadius: '50%',
  marginBottom: theme.spacing(2),
}));

const DashboardStats = ({ userProfile }) => {
  // Initialize empty stats object
  const stats = {
    workoutsCompleted: 0,
    caloriesBurned: 0,
    weightProgress: 0,
    streakDays: 0,
  };

  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" gutterBottom>
        Your Fitness Stats
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <StyledCard>
            <CardContent>
              <IconWrapper sx={{ bgcolor: 'primary.light', color: 'primary.contrastText' }}>
                <FitnessCenterIcon />
              </IconWrapper>
              <Typography variant="h4" component="div">
                {stats.workoutsCompleted}
              </Typography>
              <Typography color="text.secondary" gutterBottom>
                Workouts Completed
              </Typography>
              <Divider sx={{ my: 1 }} />
              <Typography variant="body2" color="text.secondary">
                This Month
              </Typography>
            </CardContent>
          </StyledCard>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StyledCard>
            <CardContent>
              <IconWrapper sx={{ bgcolor: 'error.light', color: 'error.contrastText' }}>
                <LocalFireDepartmentIcon />
              </IconWrapper>
              <Typography variant="h4" component="div">
                {stats.caloriesBurned}
              </Typography>
              <Typography color="text.secondary" gutterBottom>
                Calories Burned
              </Typography>
              <Divider sx={{ my: 1 }} />
              <Typography variant="body2" color="text.secondary">
                This Week
              </Typography>
            </CardContent>
          </StyledCard>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StyledCard>
            <CardContent>
              <IconWrapper sx={{ bgcolor: 'success.light', color: 'success.contrastText' }}>
                <ScaleIcon />
              </IconWrapper>
              <Typography variant="h4" component="div">
                {stats.weightProgress}%
              </Typography>
              <Typography color="text.secondary" gutterBottom>
                Weight Goal Progress
              </Typography>
              <LinearProgress 
                variant="determinate" 
                value={stats.weightProgress} 
                sx={{ mt: 1, mb: 1, height: 8, borderRadius: 4 }}
              />
              <Typography variant="body2" color="text.secondary">
                {userProfile?.weightGoal || 'Goal not set'}
              </Typography>
            </CardContent>
          </StyledCard>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StyledCard>
            <CardContent>
              <IconWrapper sx={{ bgcolor: 'warning.light', color: 'warning.contrastText' }}>
                <TrendingUpIcon />
              </IconWrapper>
              <Typography variant="h4" component="div">
                {stats.streakDays}
              </Typography>
              <Typography color="text.secondary" gutterBottom>
                Day Streak
              </Typography>
              <Divider sx={{ my: 1 }} />
              <Typography variant="body2" color="text.secondary">
                Keep it up!
              </Typography>
            </CardContent>
          </StyledCard>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardStats; 