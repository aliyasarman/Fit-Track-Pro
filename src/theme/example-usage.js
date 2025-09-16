// Example: How to refactor existing components to use the new theme system

import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { 
  StyledCard, 
  StyledButton, 
  IconWrapper, 
  GradientText,
  SectionHeader 
} from './styledComponents';
import { themeUtils } from './index';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

// BEFORE: Component with inline styling
const OldComponent = () => {
  return (
    <Box sx={{ 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: 4,
      borderRadius: 16,
      boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.08)'
    }}>
      <Typography variant="h4" sx={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent'
      }}>
        Old Component
      </Typography>
    </Box>
  );
};

// AFTER: Component using theme system
const NewComponent = () => {
  return (
    <StyledCard sx={{ 
      background: themeUtils.gradients.primary,
      padding: 4 
    }}>
      <SectionHeader>
        <IconWrapper size={60} gradient={themeUtils.gradients.primary}>
          <FitnessCenterIcon sx={{ fontSize: 30, color: 'white' }} />
        </IconWrapper>
        <GradientText variant="h4" component="h1">
          New Component
        </GradientText>
        <Typography variant="body1" sx={{ color: 'text.secondary', mt: 2 }}>
          This component uses the centralized theme system
        </Typography>
      </SectionHeader>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <StyledCard>
            <Box sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Feature 1
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Description of feature 1
              </Typography>
              <StyledButton sx={{ mt: 2 }}>
                Learn More
              </StyledButton>
            </Box>
          </StyledCard>
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledCard>
            <Box sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Feature 2
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Description of feature 2
              </Typography>
              <StyledButton sx={{ mt: 2 }}>
                Learn More
              </StyledButton>
            </Box>
          </StyledCard>
        </Grid>
      </Grid>
    </StyledCard>
  );
};

export { OldComponent, NewComponent };
