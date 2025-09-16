import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Typography,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  Divider,
  Container,
} from '@mui/material';
import { 
  StyledAppBar,
  StyledToolbar,
  LogoSection,
  StyledButton
} from '../theme/styledComponents';
import { themeUtils } from '../theme';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import DashboardIcon from '@mui/icons-material/Dashboard';

const Navbar = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    // Get user info from localStorage
    const storedName = localStorage.getItem('userName');
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    
    // Redirect to login page
    navigate('/login');
  };

  const handleDashboard = () => {
    handleClose();
    navigate('/dashboard');
  };

  return (
    <StyledAppBar position="static">
      <Container maxWidth="lg">
        <StyledToolbar>
          <LogoSection onClick={() => navigate('/')}>
            <FitnessCenterIcon sx={{ fontSize: 28 }} />
            <Typography 
              variant="h6" 
              component="div" 
              sx={{ 
                flexGrow: 0,
                fontWeight: 700,
                fontSize: '1.25rem'
              }}
            >
              Fit-Track-Pro
            </Typography>
          </LogoSection>

          {userName ? (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography 
                variant="body1" 
                sx={{ 
                  mr: 2,
                  fontWeight: 500,
                  opacity: 0.9
                }}
              >
                Welcome, {userName}
              </Typography>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                sx={{
                  transition: 'transform 0.2s ease',
                  '&:hover': {
                    transform: 'scale(1.1)',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  }
                }}
              >
                <Avatar sx={{ 
                  width: 36, 
                  height: 36,
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  border: '2px solid rgba(255, 255, 255, 0.3)'
                }}>
                  <AccountCircleIcon />
                </Avatar>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
                PaperProps={{
                  sx: {
                    borderRadius: 3,
                    marginTop: 1,
                    minWidth: 200,
                    boxShadow: '0px 8px 32px rgba(0, 0, 0, 0.12)',
                    border: '1px solid rgba(0, 0, 0, 0.05)',
                  }
                }}
              >
                <MenuItem 
                  onClick={handleDashboard}
                  sx={{ 
                    py: 1.5,
                    '&:hover': {
                      backgroundColor: 'rgba(102, 126, 234, 0.1)',
                    }
                  }}
                >
                  <DashboardIcon sx={{ mr: 1.5, color: 'primary.main' }} /> 
                  Dashboard
                </MenuItem>
                <Divider sx={{ my: 0.5 }} />
                <MenuItem 
                  onClick={handleLogout}
                  sx={{ 
                    py: 1.5,
                    '&:hover': {
                      backgroundColor: 'rgba(245, 0, 87, 0.1)',
                    }
                  }}
                >
                  <LogoutIcon sx={{ mr: 1.5, color: 'secondary.main' }} /> 
                  Logout
                </MenuItem>
              </Menu>
            </Box>
          ) : (
            <Box>
              <StyledButton 
                onClick={() => navigate('/login')}
                sx={{ color: 'white' }}
              >
                Sign In
              </StyledButton>
              <StyledButton 
                variant="outlined"
                sx={{
                  borderColor: 'white',
                  color: 'white',
                  '&:hover': {
                    borderColor: 'white',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  }
                }}
                onClick={() => navigate('/register')}
              >
                Get Started
              </StyledButton>
            </Box>
          )}
        </StyledToolbar>
      </Container>
    </StyledAppBar>
  );
};

export default Navbar;