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
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';


const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
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
      // Validate form
      if (!formData.firstName || !formData.lastName || !formData.email || !formData.password) {
        setError('Please fill in all required fields');
        setLoading(false);
        return;
      }
      
      if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match');
        setLoading(false);
        return;
      }
      
      // TODO: Replace with actual registration logic
      // For now, we'll simulate a successful registration
      console.log('Registration attempt with:', formData);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Store user info in localStorage or context
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userEmail', formData.email);
      localStorage.setItem('userName', `${formData.firstName} ${formData.lastName}`);
      
      // Redirect to dashboard
      navigate('/dashboard');
    } catch (err) {
      setError('Registration failed. Please try again.');
      console.error('Registration error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthGradientContainer>
      <Container maxWidth="md">
        <AuthCard>
          {/* Header */}
          <FormHeader>
            <IconWrapper size={60} gradient={themeUtils.gradients.primary}>
              <FitnessCenterIcon sx={{ fontSize: 30, color: 'white' }} />
            </IconWrapper>
            <FormTitle variant="h4" component="h1">
              Join Fit-Track-Pro
            </FormTitle>
            <FormSubtitle variant="body1">
              Start your fitness journey today
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
                  id="firstName"
                  label="First Name"
                  name="firstName"
                  autoComplete="given-name"
                  value={formData.firstName}
                  onChange={handleChange}
                  disabled={loading}
                  InputProps={{
                    startAdornment: <PersonIcon sx={{ mr: 1, color: 'text.secondary' }} />
                  }}
                />
              </FormGridItem>
              <FormGridItem item xs={12}>
                <StyledTextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={formData.lastName}
                  onChange={handleChange}
                  disabled={loading}
                  InputProps={{
                    startAdornment: <PersonIcon sx={{ mr: 1, color: 'text.secondary' }} />
                  }}
                />
              </FormGridItem>
              <FormGridItem item xs={12}>
                <StyledTextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
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
                  autoComplete="new-password"
                  value={formData.password}
                  onChange={handleChange}
                  disabled={loading}
                  InputProps={{
                    startAdornment: <LockIcon sx={{ mr: 1, color: 'text.secondary' }} />
                  }}
                />
              </FormGridItem>
              <FormGridItem item xs={12}>
                <StyledTextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  autoComplete="new-password"
                  value={formData.confirmPassword}
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
              {loading ? <CircularProgress size={24} color="inherit" /> : 'Create Account'}
            </FullWidthButton>
            <FormHeader>
              <FormSubtitle variant="body2">
                Already have an account?{' '}
                <Link 
                  component="button" 
                  variant="body2" 
                  onClick={() => navigate('/login')}
                  sx={{ 
                    color: 'primary.main',
                    textDecoration: 'none',
                    fontWeight: 600,
                    '&:hover': {
                      textDecoration: 'underline'
                    }
                  }}
                >
                  Sign in here
                </Link>
              </FormSubtitle>
            </FormHeader>
          </FormContainer>
        </AuthCard>
      </Container>
    </AuthGradientContainer>
  );
};

export default Register; 