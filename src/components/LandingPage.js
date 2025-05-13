import React from 'react';
import { 
  Box, 
  Button, 
  Container, 
  Typography, 
  Paper,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  margin: theme.spacing(4, 0),
  background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
  color: 'white',
}));

const HeroImage = styled('img')({
  width: '100%',
  maxWidth: '500px',
  height: 'auto',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
})


const LandingPage = () => {
  return (
    <Box>
      <StyledPaper elevation={3}>
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom align="center">
            Welcome to Fit-Track-Pro
          </Typography>
          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', gap: 2 }}>
            <Button 
              variant="contained" 
              color="secondary" 
              size="large"
              href="/login"
            >
              Login
            </Button>
            <Button 
              variant="outlined" 
              color="inherit" 
              size="large"
              href="/register"
            >
              Sign Up
            </Button>
          </Box>
        </Container>
      </StyledPaper>
    </Box>
  );
};

export default LandingPage; 