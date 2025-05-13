import React from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Paper,
  Chip,
  Avatar,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import PoolIcon from '@mui/icons-material/Pool';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(3),
}));

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
    <StyledPaper elevation={2}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <FitnessCenterIcon sx={{ mr: 1, color: 'primary.main' }} />
        <Typography variant="h6">Recent Workouts</Typography>
      </Box>
      <List>
        {workouts.map((workout, index) => (
          <React.Fragment key={workout.id}>
            <ListItem alignItems="flex-start">
              <ListItemIcon>
                <Avatar sx={{ bgcolor: 'primary.light' }}>
                  {getWorkoutIcon(workout.type)}
                </Avatar>
              </ListItemIcon>
              <ListItemText
                primary={
                  <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                    <Typography component="span" variant="subtitle1" sx={{ mr: 1 }}>
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
    </StyledPaper>
  );
};

export default WorkoutHistory; 