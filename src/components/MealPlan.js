import React, { useState } from 'react';
import {
  Box,
  Typography,
  Tabs,
  Tab,
  CardContent,
  CardMedia,
  Grid,
  Chip,
  Divider,
  Button,
} from '@mui/material';
import { 
  StyledCard,
  IconWrapper,
  EmptyState
} from '../theme/styledComponents';
import { themeUtils } from '../theme';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import DinnerIcon from '@mui/icons-material/Dining';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';


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
    <StyledCard elevation={2}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <IconWrapper size={40} gradient={themeUtils.gradients.primary} sx={{ mr: 2 }}>
          <RestaurantIcon sx={{ fontSize: 20, color: 'white' }} />
        </IconWrapper>
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          Meal Plan
        </Typography>
      </Box>
      
      <Tabs
        value={selectedDay}
        onChange={handleDayChange}
        variant="scrollable"
        scrollButtons="auto"
        sx={{ 
          mb: 3, 
          borderBottom: 1, 
          borderColor: 'divider',
          '& .MuiTab-root': {
            textTransform: 'none',
            fontWeight: 600,
            borderRadius: 2,
            mx: 0.5,
          }
        }}
      >
        {days.map((day, index) => (
          <Tab key={day} label={day} id={`meal-tab-${index}`} />
        ))}
      </Tabs>
      
      <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
        {days[selectedDay]}'s Meals
      </Typography>
      
      {Object.values(meals).some(meal => meal !== null) ? (
        <Grid container spacing={3}>
          {Object.entries(meals).map(([mealType, meal]) => (
            <Grid item xs={12} sm={6} md={3} key={mealType}>
              <StyledCard>
                <CardMedia
                  component="img"
                  height="140"
                  image={meal?.image}
                  alt={meal?.name}
                />
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    {getMealIcon(mealType)}
                    <Typography variant="h6" component="div" sx={{ ml: 1, fontWeight: 600 }}>
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
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      ) : (
        <EmptyState>
          <RestaurantIcon sx={{ fontSize: 48, mb: 2, opacity: 0.3 }} />
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
            No meals planned yet
          </Typography>
          <Typography variant="body2">
            Complete your profile to get personalized meal recommendations!
          </Typography>
        </EmptyState>
      )}
    </StyledCard>
  );
};

export default MealPlan; 