import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  CardContent,
} from '@mui/material';
import { 
  HeroContainer,
  FeatureCard,
  IconWrapper,
  GradientText,
  SectionHeader,
  HeroTitle,
  HeroSubtitle,
  HeroButtonContainer,
  HeroButton,
  HeroButtonOutlined,
  FeatureIcon,
  FeaturesContainer,
  FeaturesGrid,
  FeatureGridItem
} from '../theme/styledComponents';
import { themeUtils } from '../theme';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PeopleIcon from '@mui/icons-material/People';

const LandingPage = () => {
  const features = [
    {
      icon: <FeatureIcon><FitnessCenterIcon /></FeatureIcon>,
      title: 'Track Workouts',
      description: 'Log your exercises, sets, reps, and track your progress over time with detailed workout history.',
    },
    {
      icon: <FeatureIcon><RestaurantIcon /></FeatureIcon>,
      title: 'Meal Planning',
      description: 'Plan your meals, track nutrition, and maintain a balanced diet to support your fitness goals.',
    },
    {
      icon: <FeatureIcon><TrendingUpIcon /></FeatureIcon>,
      title: 'Progress Analytics',
      description: 'Visualize your fitness journey with charts and analytics to stay motivated and on track.',
    },
    {
      icon: <FeatureIcon><PeopleIcon /></FeatureIcon>,
      title: 'Community Support',
      description: 'Connect with like-minded fitness enthusiasts and share your achievements and challenges.',
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <HeroContainer>
        <Container maxWidth="lg">
          <SectionHeader>
            <HeroTitle variant="h2" component="h1" gutterBottom>
              Welcome to Fit Track Pro
            </HeroTitle>
            <HeroSubtitle variant="h5" component="p" >
              Your comprehensive fitness companion. Track workouts, plan meals, monitor progress, 
              and achieve your health goals with confidence.
            </HeroSubtitle>
            <HeroButtonContainer >
              <HeroButton size="large" href="/register">
                Get Started Free
              </HeroButton>
              <HeroButtonOutlined variant="outlined" size="large" href="/login">
                Sign In
              </HeroButtonOutlined>
            </HeroButtonContainer>
          </SectionHeader>
        </Container>
      </HeroContainer>

      {/* Features Section */}
      <FeaturesContainer maxWidth="lg">
        <SectionHeader>
          <GradientText variant="h3" component="h2">
            Everything You Need to Succeed
          </GradientText>
        </SectionHeader>
        <FeaturesGrid container spacing={4}>
          {features.map((feature, index) => (
            <FeatureGridItem item xs={12} sm={6} md={3} key={index}>
              <FeatureCard elevation={2}>
                <CardContent sx={{ flexGrow: 1, textAlign: 'center', p: 3 }}>
                  <IconWrapper size={60} gradient={themeUtils.gradients.primary} sx={{ mb: 2, mx: 'auto' }}>
                    {feature.icon}
                  </IconWrapper>
                  <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </FeatureCard>
            </FeatureGridItem>
          ))}
        </FeaturesGrid>
      </FeaturesContainer>
    </Box>
  );
};

export default LandingPage; 