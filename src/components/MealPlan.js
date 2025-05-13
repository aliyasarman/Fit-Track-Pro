import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Tabs,
  Tab,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Chip,
  Divider,
  Button,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import DinnerIcon from '@mui/icons-material/Dining';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(3),
}));

const MealCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const MealPlan = () => {
  const [selectedDay, setSelectedDay] = useState(0);

  // Days of the week
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
  // Initialize empty meals object
  const meals = {
    breakfast: null,
    lunch: null,
    dinner: null,
    snack: null,
  };

  const handleDayChange = (event, newValue) => {
    setSelectedDay(newValue);
  };

  const getMealIcon = (mealType) => {
    switch (mealType) {
      case 'breakfast':
        return <LocalCafeIcon />;
      case 'lunch':
        return <LunchDiningIcon />;
      case 'dinner':
        return <DinnerIcon />;
      case 'snack':
        return <LocalDiningIcon />;
      default:
        return <RestaurantIcon />;
    }
  };

  return (
    <StyledPaper elevation={2}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <RestaurantIcon sx={{ mr: 1, color: 'primary.main' }} />
        <Typography variant="h6">Meal Plan</Typography>
      </Box>
      
      <Tabs
        value={selectedDay}
        onChange={handleDayChange}
        variant="scrollable"
        scrollButtons="auto"
        sx={{ mb: 3, borderBottom: 1, borderColor: 'divider' }}
      >
        {days.map((day, index) => (
          <Tab key={day} label={day} id={`meal-tab-${index}`} />
        ))}
      </Tabs>
      
      <Typography variant="subtitle1" gutterBottom>
        {days[selectedDay]}'s Meals
      </Typography>
      
      <Grid container spacing={3}>
        {Object.entries(meals).map(([mealType, meal]) => (
          <Grid item xs={12} sm={6} md={3} key={mealType}>
            <MealCard>
              <CardMedia
                component="img"
                height="140"
                image={meal?.image}
                alt={meal?.name}
              />
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  {getMealIcon(mealType)}
                  <Typography variant="h6" component="div" sx={{ ml: 1 }}>
                    {mealType.charAt(0).toUpperCase() + mealType.slice(1)}
                  </Typography>
                </Box>
                <Typography variant="subtitle1" gutterBottom>
                  {meal?.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  {meal?.calories} calories
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, mb: 1 }}>
                  <Chip size="small" label={`P: ${meal?.protein}`} />
                  <Chip size="small" label={`C: ${meal?.carbs}`} />
                  <Chip size="small" label={`F: ${meal?.fat}`} />
                </Box>
                <Divider sx={{ my: 1 }} />
                <Typography variant="body2" color="text.secondary">
                  Ingredients: {meal?.ingredients?.join(', ')}
                </Typography>
                <Button 
                  variant="outlined" 
                  size="small" 
                  sx={{ mt: 2 }}
                  fullWidth
                >
                  View Recipe
                </Button>
              </CardContent>
            </MealCard>
          </Grid>
        ))}
      </Grid>
    </StyledPaper>
  );
};

export default MealPlan; 