import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Grid, CardContent } from '@mui/material';
import { 
  DashboardCard,
  TabButton,
  ActionButton,
  IconWrapper,
  GradientText,
  SectionHeader
} from '../theme/styledComponents';
import { themeUtils } from '../theme';
import AddIcon from '@mui/icons-material/Add';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import Navbar from './Navbar';

// Import components
import DashboardStats from './DashboardStats';
import WorkoutHistory from './WorkoutHistory';
import MealPlan from './MealPlan';
import UserProfileForm from './UserProfileForm';


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
          <DashboardCard>
            <CardContent sx={{ p: 4 }}>
              <SectionHeader>
                <IconWrapper size={48} gradient={themeUtils.gradients.primary} sx={{ mr: 2 }}>
                  <FitnessCenterIcon sx={{ fontSize: 24, color: 'white' }} />
                </IconWrapper>
                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                  Workout Plan
                </Typography>
              </SectionHeader>
              <Typography variant="body1" paragraph sx={{ color: 'text.secondary', mb: 3 }}>
                Your personalized workout plan will be generated based on your profile information.
                {!userProfile && " Please complete your profile first."}
              </Typography>
              {userProfile ? (
                <Box>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
                    Your Workout Plan
                  </Typography>
                  <Typography variant="body2" paragraph sx={{ color: 'text.secondary', mb: 3 }}>
                    Based on your goals and fitness level, we recommend the following workout routine:
                  </Typography>
                  <ActionButton
                    variant="contained"
                    startIcon={<AddIcon />}
                  >
                    Add New Workout
                  </ActionButton>
                  {/* Workout plan details would go here */}
                </Box>
              ) : (
                <ActionButton
                  variant="contained"
                  onClick={() => setActiveTab('profile')}
                >
                  Complete Your Profile
                </ActionButton>
              )}
            </CardContent>
          </DashboardCard>
        );
      case 'meal':
        return (
          <DashboardCard>
            <CardContent sx={{ p: 4 }}>
              <SectionHeader>
                <IconWrapper size={48} gradient={themeUtils.gradients.primary} sx={{ mr: 2 }}>
                  <RestaurantIcon sx={{ fontSize: 24, color: 'white' }} />
                </IconWrapper>
                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                  Meal Plan
                </Typography>
              </SectionHeader>
              <Typography variant="body1" paragraph sx={{ color: 'text.secondary', mb: 3 }}>
                Your personalized meal plan will be generated based on your profile information.
                {!userProfile && " Please complete your profile first."}
              </Typography>
              {userProfile ? (
                <Box>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
                    Your Meal Plan
                  </Typography>
                  <Typography variant="body2" paragraph sx={{ color: 'text.secondary', mb: 3 }}>
                    Based on your goals and dietary preferences, we recommend the following meal plan:
                  </Typography>
                  <ActionButton
                    variant="contained"
                    startIcon={<AddIcon />}
                  >
                    Add New Meal
                  </ActionButton>
                  {/* Meal plan details would go here */}
                </Box>
              ) : (
                <ActionButton
                  variant="contained"
                  onClick={() => setActiveTab('profile')}
                >
                  Complete Your Profile
                </ActionButton>
              )}
            </CardContent>
          </DashboardCard>
        );
      case 'grocery':
        return (
          <DashboardCard>
            <CardContent sx={{ p: 4 }}>
              <SectionHeader>
                <IconWrapper size={48} gradient={themeUtils.gradients.primary} sx={{ mr: 2 }}>
                  <ShoppingCartIcon sx={{ fontSize: 24, color: 'white' }} />
                </IconWrapper>
                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                  Grocery List
                </Typography>
              </SectionHeader>
              <Typography variant="body1" paragraph sx={{ color: 'text.secondary', mb: 3 }}>
                Your grocery list will be generated based on your meal plan.
                {!userProfile && " Please complete your profile first."}
              </Typography>
              {userProfile ? (
                <Box>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
                    Your Grocery List
                  </Typography>
                  <Typography variant="body2" paragraph sx={{ color: 'text.secondary', mb: 3 }}>
                    Here are the ingredients you need for your meal plan:
                  </Typography>
                  <ActionButton
                    variant="contained"
                    startIcon={<AddIcon />}
                  >
                    Add Item to List
                  </ActionButton>
                  {/* Grocery list details would go here */}
                </Box>
              ) : (
                <ActionButton
                  variant="contained"
                  onClick={() => setActiveTab('profile')}
                >
                  Complete Your Profile
                </ActionButton>
              )}
            </CardContent>
          </DashboardCard>
        );
      default:
        return null;
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: 'white' }}>
      <Navbar />
      <Container maxWidth="lg" sx={{ pt: 4, pb: 4 }}>
        {/* Welcome Section */}
        <SectionHeader>
          <GradientText variant="h3" component="h1" gutterBottom>
            Welcome, {userName || 'User'}!
          </GradientText>
          <Typography 
            variant="h6" 
            sx={{ 
              color: 'text.secondary',
              maxWidth: '600px',
              mx: 'auto',
              opacity: 0.8
            }}
          >
            Track your fitness journey and achieve your goals with Fit-Track-Pro.
          </Typography>
        </SectionHeader>

        {/* Navigation Tabs */}
        <Box sx={{ mb: 4 }}>
          <Box sx={{ 
            display: 'flex', 
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 1
          }}>
            <TabButton
              active={activeTab === 'overview'}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </TabButton>
            <TabButton
              active={activeTab === 'profile'}
              onClick={() => setActiveTab('profile')}
              startIcon={<PersonIcon />}
            >
              Profile
            </TabButton>
            <TabButton
              active={activeTab === 'workout'}
              onClick={() => setActiveTab('workout')}
              startIcon={<FitnessCenterIcon />}
            >
              Workout Plan
            </TabButton>
            <TabButton
              active={activeTab === 'meal'}
              onClick={() => setActiveTab('meal')}
              startIcon={<RestaurantIcon />}
            >
              Meal Plan
            </TabButton>
            <TabButton
              active={activeTab === 'grocery'}
              onClick={() => setActiveTab('grocery')}
              startIcon={<ShoppingCartIcon />}
            >
              Grocery List
            </TabButton>
          </Box>
        </Box>

        {/* Tab Content */}
        {renderTabContent()}
      </Container>
    </Box>
  );
};

export default Dashboard; 