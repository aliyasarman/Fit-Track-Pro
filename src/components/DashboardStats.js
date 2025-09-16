import React from 'react';
import {
  Box,
  CardContent,
  Typography,
  Grid,
  LinearProgress,
  Divider,
} from '@mui/material';
import { 
  StatsCard,
  IconWrapper,
  GradientText
} from '../theme/styledComponents';
import { themeUtils } from '../theme';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import ScaleIcon from '@mui/icons-material/Scale';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';


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
      <GradientText 
        variant="h4" 
        gutterBottom
        sx={{ 
          fontWeight: 700,
          mb: 3,
          textAlign: 'center',
        }}
      >
        Your Fitness Stats
      </GradientText>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <StatsCard>
            <CardContent sx={{ textAlign: 'center', p: 3 }}>
              <IconWrapper 
                size={56} 
                gradient={themeUtils.gradients.primary} 
                sx={{ mx: 'auto', mb: 2 }}
              >
                <FitnessCenterIcon sx={{ fontSize: 28 }} />
              </IconWrapper>
              <Typography variant="h3" component="div" sx={{ fontWeight: 700, mb: 1 }}>
                {stats.workoutsCompleted}
              </Typography>
              <Typography color="text.secondary" gutterBottom sx={{ fontWeight: 600 }}>
                Workouts Completed
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Typography variant="body2" color="text.secondary">
                This Month
              </Typography>
            </CardContent>
          </StatsCard>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatsCard>
            <CardContent sx={{ textAlign: 'center', p: 3 }}>
              <IconWrapper 
                size={56} 
                gradient={themeUtils.status.error} 
                sx={{ mx: 'auto', mb: 2 }}
              >
                <LocalFireDepartmentIcon sx={{ fontSize: 28 }} />
              </IconWrapper>
              <Typography variant="h3" component="div" sx={{ fontWeight: 700, mb: 1 }}>
                {stats.caloriesBurned}
              </Typography>
              <Typography color="text.secondary" gutterBottom sx={{ fontWeight: 600 }}>
                Calories Burned
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Typography variant="body2" color="text.secondary">
                This Week
              </Typography>
            </CardContent>
          </StatsCard>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatsCard>
            <CardContent sx={{ textAlign: 'center', p: 3 }}>
              <IconWrapper 
                size={56} 
                gradient={themeUtils.status.success} 
                sx={{ mx: 'auto', mb: 2 }}
              >
                <ScaleIcon sx={{ fontSize: 28 }} />
              </IconWrapper>
              <Typography variant="h3" component="div" sx={{ fontWeight: 700, mb: 1 }}>
                {stats.weightProgress}%
              </Typography>
              <Typography color="text.secondary" gutterBottom sx={{ fontWeight: 600 }}>
                Weight Goal Progress
              </Typography>
              <LinearProgress 
                variant="determinate" 
                value={stats.weightProgress} 
                sx={{ 
                  mt: 2, 
                  mb: 2, 
                  height: 8, 
                  borderRadius: 4,
                  backgroundColor: 'rgba(0,0,0,0.1)',
                  '& .MuiLinearProgress-bar': {
                    borderRadius: 4,
                    background: 'linear-gradient(135deg, #2ecc71 0%, #27ae60 100%)',
                  }
                }}
              />
              <Typography variant="body2" color="text.secondary">
                {userProfile?.weightGoal || 'Goal not set'}
              </Typography>
            </CardContent>
          </StatsCard>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatsCard>
            <CardContent sx={{ textAlign: 'center', p: 3 }}>
              <IconWrapper 
                size={56} 
                gradient={themeUtils.status.warning} 
                sx={{ mx: 'auto', mb: 2 }}
              >
                <TrendingUpIcon sx={{ fontSize: 28 }} />
              </IconWrapper>
              <Typography variant="h3" component="div" sx={{ fontWeight: 700, mb: 1 }}>
                {stats.streakDays}
              </Typography>
              <Typography color="text.secondary" gutterBottom sx={{ fontWeight: 600 }}>
                Day Streak
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Typography variant="body2" color="text.secondary">
                Keep it up!
              </Typography>
            </CardContent>
          </StatsCard>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DashboardStats; 