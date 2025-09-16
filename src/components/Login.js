import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Alert,
  CircularProgress,
  Link,
} from '@mui/material';
import { 
  AuthGradientContainer,
  AuthCard,
  FormContainer,
  FormGrid,
  FormGridItem,
  FormHeader,
  FormTitle,
  FormSubtitle,
  StyledTextField,
  FullWidthButton,
  IconWrapper
} from '../theme/styledComponents';
import { themeUtils } from '../theme';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';


const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    try {
      // TODO: Replace with actual authentication logic
      // For now, we'll simulate a successful login
      console.log('Login attempt with:', formData);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, accept any non-empty email/password
      if (formData.email && formData.password) {
        // Store user info in localStorage or context
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userEmail', formData.email);
        
        // Redirect to dashboard
        navigate('/dashboard');
      } else {
        setError('Please enter both email and password');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
      console.error('Login error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthGradientContainer>
      <Container maxWidth="sm">
        <AuthCard>
          {/* Header */}
          <FormHeader>
            <IconWrapper size={60} gradient={themeUtils.gradients.primary}>
              <FitnessCenterIcon sx={{ fontSize: 30, color: 'white' }} />
            </IconWrapper>
            <FormTitle variant="h4" component="h1">
              Welcome Back
            </FormTitle>
            <FormSubtitle variant="body1">
              Sign in to continue your fitness journey
            </FormSubtitle>
          </FormHeader>

          {/* Error Alert */}
          {error && (
            <Alert severity="error" sx={{ mb: 3, borderRadius: 2 }}>
              {error}
            </Alert>
          )}

          {/* Form */}
          <FormContainer component="form" onSubmit={handleSubmit}>
            <FormGrid container spacing={2}>
              <FormGridItem item xs={12}>
                <StyledTextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={formData.email}
                  onChange={handleChange}
                  disabled={loading}
                  InputProps={{
                    startAdornment: <EmailIcon sx={{ mr: 1, color: 'text.secondary' }} />
                  }}
                />
              </FormGridItem>
              <FormGridItem item xs={12}>
                <StyledTextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={formData.password}
                  onChange={handleChange}
                  disabled={loading}
                  InputProps={{
                    startAdornment: <LockIcon sx={{ mr: 1, color: 'text.secondary' }} />
                  }}
                />
              </FormGridItem>
            </FormGrid>
            <FullWidthButton
              type="submit"
              variant="contained"
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} color="inherit" /> : 'Sign In'}
            </FullWidthButton>
            <FormHeader>
              <FormSubtitle variant="body2">
                Don't have an account?{' '}
                <Link 
                  component="button" 
                  variant="body2" 
                  onClick={() => navigate('/register')}
                  sx={{ 
                    color: 'primary.main',
                    textDecoration: 'none',
                    fontWeight: 600,
                    '&:hover': {
                      textDecoration: 'underline'
                    }
                  }}
                >
                  Create an account
                </Link>
              </FormSubtitle>
            </FormHeader>
          </FormContainer>
        </AuthCard>
      </Container>
    </AuthGradientContainer>
  );
};

export default Login; 