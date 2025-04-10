import { CssBaseline, ThemeProvider, createTheme, Container, Box, Tabs, Tab } from '@mui/material';
import { useState } from 'react';
import Navbar from './components/Navbar';
import UserProfileForm from './components/UserProfileForm';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2e7d32', // Green color for fitness theme
    },
    secondary: {
      main: '#ff5722',
    },
    background: {
      default: '#f5f5f5',
    },
  },
});

function App() {
  const [tabValue, setTabValue] = useState(0);
  const [userProfile, setUserProfile] = useState(null);

  const handleProfileSubmit = (profile) => {
    setUserProfile(profile);
    // Here we'll add logic to generate meal and workout plans
    console.log('Profile submitted:', profile);
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1, minHeight: '100vh' }}>
        <Navbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            centered
            sx={{ mb: 4 }}
          >
            <Tab label="Profile" />
            <Tab label="Meal Plan" disabled={!userProfile} />
            <Tab label="Workout Plan" disabled={!userProfile} />
            <Tab label="Grocery List" disabled={!userProfile} />
          </Tabs>

          {tabValue === 0 && (
            <UserProfileForm onSubmit={handleProfileSubmit} />
          )}
          {tabValue === 1 && (
            <Box>Meal Plan (Coming Soon)</Box>
          )}
          {tabValue === 2 && (
            <Box>Workout Plan (Coming Soon)</Box>
          )}
          {tabValue === 3 && (
            <Box>Grocery List (Coming Soon)</Box>
          )}
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;