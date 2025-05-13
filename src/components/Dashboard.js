import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Paper, Grid, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';

// Import components
import DashboardStats from './DashboardStats';
import WorkoutHistory from './WorkoutHistory';
import MealPlan from './MealPlan';
import UserProfileForm from './UserProfileForm';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginBottom: theme.spacing(3),
}));

const ActionButton = styled(Button)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const Dashboard = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [userName, setUserName] = useState('');

  useEffect(() => {
    // Get user info from localStorage
    const storedName = localStorage.getItem('userName');
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  const handleProfileSubmit = (profile) => {
    setUserProfile(profile);
    // Here we'll add logic to generate meal and workout plans
    console.log('Profile submitted:', profile);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <>
            <DashboardStats userProfile={userProfile} />
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <WorkoutHistory />
              </Grid>
              <Grid item xs={12} md={6}>
                <MealPlan />
              </Grid>
            </Grid>
          </>
        );
      case 'profile':
        return <UserProfileForm onSubmit={handleProfileSubmit} />;
      case 'workout':
        return (
          <StyledPaper elevation={2}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <FitnessCenterIcon sx={{ mr: 1, color: 'primary.main' }} />
              <Typography variant="h6">Workout Plan</Typography>
            </Box>
            <Typography variant="body1" paragraph>
              Your personalized workout plan will be generated based on your profile information.
              {!userProfile && " Please complete your profile first."}
            </Typography>
            {userProfile ? (
              <Box>
                <Typography variant="subtitle1" gutterBottom>
                  Your Workout Plan
                </Typography>
                <Typography variant="body2" paragraph>
                  Based on your goals and fitness level, we recommend the following workout routine:
                </Typography>
                <ActionButton
                  variant="contained"
                  color="primary"
                  startIcon={<AddIcon />}
                >
                  Add New Workout
                </ActionButton>
                {/* Workout plan details would go here */}
              </Box>
            ) : (
              <Button
                variant="contained"
                color="primary"
                onClick={() => setActiveTab('profile')}
              >
                Complete Your Profile
              </Button>
            )}
          </StyledPaper>
        );
      case 'meal':
        return (
          <StyledPaper elevation={2}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <RestaurantIcon sx={{ mr: 1, color: 'primary.main' }} />
              <Typography variant="h6">Meal Plan</Typography>
            </Box>
            <Typography variant="body1" paragraph>
              Your personalized meal plan will be generated based on your profile information.
              {!userProfile && " Please complete your profile first."}
            </Typography>
            {userProfile ? (
              <Box>
                <Typography variant="subtitle1" gutterBottom>
                  Your Meal Plan
                </Typography>
                <Typography variant="body2" paragraph>
                  Based on your goals and dietary preferences, we recommend the following meal plan:
                </Typography>
                <ActionButton
                  variant="contained"
                  color="primary"
                  startIcon={<AddIcon />}
                >
                  Add New Meal
                </ActionButton>
                {/* Meal plan details would go here */}
              </Box>
            ) : (
              <Button
                variant="contained"
                color="primary"
                onClick={() => setActiveTab('profile')}
              >
                Complete Your Profile
              </Button>
            )}
          </StyledPaper>
        );
      case 'grocery':
        return (
          <StyledPaper elevation={2}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <ShoppingCartIcon sx={{ mr: 1, color: 'primary.main' }} />
              <Typography variant="h6">Grocery List</Typography>
            </Box>
            <Typography variant="body1" paragraph>
              Your grocery list will be generated based on your meal plan.
              {!userProfile && " Please complete your profile first."}
            </Typography>
            {userProfile ? (
              <Box>
                <Typography variant="subtitle1" gutterBottom>
                  Your Grocery List
                </Typography>
                <Typography variant="body2" paragraph>
                  Here are the ingredients you need for your meal plan:
                </Typography>
                <ActionButton
                  variant="contained"
                  color="primary"
                  startIcon={<AddIcon />}
                >
                  Add Item to List
                </ActionButton>
                {/* Grocery list details would go here */}
              </Box>
            ) : (
              <Button
                variant="contained"
                color="primary"
                onClick={() => setActiveTab('profile')}
              >
                Complete Your Profile
              </Button>
            )}
          </StyledPaper>
        );
      default:
        return null;
    }
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome, {userName || 'User'}!
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Track your fitness journey and achieve your goals with Fit-Track-Pro.
        </Typography>
      </Box>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Box sx={{ display: 'flex', overflowX: 'auto' }}>
          <Button
            variant={activeTab === 'overview' ? 'contained' : 'text'}
            onClick={() => setActiveTab('overview')}
            sx={{ mr: 1 }}
          >
            Overview
          </Button>
          <Button
            variant={activeTab === 'profile' ? 'contained' : 'text'}
            onClick={() => setActiveTab('profile')}
            sx={{ mr: 1 }}
            startIcon={<PersonIcon />}
          >
            Profile
          </Button>
          <Button
            variant={activeTab === 'workout' ? 'contained' : 'text'}
            onClick={() => setActiveTab('workout')}
            sx={{ mr: 1 }}
            startIcon={<FitnessCenterIcon />}
          >
            Workout Plan
          </Button>
          <Button
            variant={activeTab === 'meal' ? 'contained' : 'text'}
            onClick={() => setActiveTab('meal')}
            sx={{ mr: 1 }}
            startIcon={<RestaurantIcon />}
          >
            Meal Plan
          </Button>
          <Button
            variant={activeTab === 'grocery' ? 'contained' : 'text'}
            onClick={() => setActiveTab('grocery')}
            startIcon={<ShoppingCartIcon />}
          >
            Grocery List
          </Button>
        </Box>
      </Box>

      {renderTabContent()}
    </Container>
  );
};

export default Dashboard; 