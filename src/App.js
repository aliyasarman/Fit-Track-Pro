import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container, Box, Tabs, Tab, CircularProgress } from '@mui/material';

// Import components
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import UserProfileForm from './components/UserProfileForm';

// Create a theme instance
const theme = createTheme({
  palette: {
    primary: {
      main: '#2196F3',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

// Protected Route component
const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Check if user is logged in
    const checkAuth = () => {
      const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
      setIsAuthenticated(loggedIn);
      setLoading(false);
    };

    checkAuth();
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!isAuthenticated) {
    // Redirect to login page with return url
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

// Dashboard component that contains the tab-based navigation
const Dashboard = () => {
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
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;