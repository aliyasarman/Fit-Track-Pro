import React from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Chip,
  Avatar,
} from '@mui/material';
import { 
  StyledCard,
  IconWrapper,
  EmptyState
} from '../theme/styledComponents';
import { themeUtils } from '../theme';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import PoolIcon from '@mui/icons-material/Pool';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const WorkoutHistory = () => {
  // Initialize empty workouts array
  const workouts = [];

  const getWorkoutIcon = (type) => {
    switch (type) {
      case 'Strength Training':
        return <FitnessCenterIcon />;
      case 'Cardio':
        return <DirectionsRunIcon />;
      case 'Swimming':
        return <PoolIcon />;
      case 'Basketball':
        return <SportsBasketballIcon />;
      default:
        return <FitnessCenterIcon />;
    }
  };

  const formatDate = (dateString) => {
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <StyledCard elevation={2}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <IconWrapper size={40} gradient={themeUtils.gradients.primary} sx={{ mr: 2 }}>
          <FitnessCenterIcon sx={{ fontSize: 20, color: 'white' }} />
        </IconWrapper>
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          Recent Workouts
        </Typography>
      </Box>
      {workouts.length > 0 ? (
        <List>
          {workouts.map((workout, index) => (
            <React.Fragment key={workout.id}>
              <ListItem alignItems="flex-start">
                <ListItemIcon>
                  <Avatar sx={{ 
                    bgcolor: 'primary.light',
                    boxShadow: '0px 2px 8px rgba(102, 126, 234, 0.3)'
                  }}>
                    {getWorkoutIcon(workout.type)}
                  </Avatar>
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                      <Typography component="span" variant="subtitle1" sx={{ mr: 1, fontWeight: 600 }}>
                        {workout.type}
                      </Typography>
                      <Chip 
                        size="small" 
                        icon={<CalendarTodayIcon />} 
                        label={formatDate(workout.date)} 
                        sx={{ mr: 1 }}
                      />
                      <Chip 
                        size="small" 
                        label={workout.duration} 
                        color="secondary" 
                        variant="outlined"
                      />
                    </Box>
                  }
                  secondary={
                    <Box sx={{ mt: 1 }}>
                      <Typography variant="body2" color="text.secondary">
                        Exercises: {workout.exercises.join(', ')}
                      </Typography>
                    </Box>
                  }
                />
              </ListItem>
              {index < workouts.length - 1 && <Divider variant="inset" component="li" />}
            </React.Fragment>
          ))}
        </List>
      ) : (
        <EmptyState>
          <FitnessCenterIcon sx={{ fontSize: 48, mb: 2, opacity: 0.3 }} />
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
            No workouts yet
          </Typography>
          <Typography variant="body2">
            Start your fitness journey by adding your first workout!
          </Typography>
        </EmptyState>
      )}
    </StyledCard>
  );
};

export default WorkoutHistory; 