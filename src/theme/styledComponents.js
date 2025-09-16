import { styled } from '@mui/material/styles';
import { Box, Button, Card, CardContent, TextField, AppBar, Toolbar, Container, Grid, Typography } from '@mui/material';
import { themeUtils } from './index';

// Container Components
export const StyledContainer = styled(Container)(({ theme }) => ({
  maxWidth: '1200px',
  padding: theme.spacing(2),
}));

export const GradientContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  background: themeUtils.gradients.primary,
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2),
}));

export const AuthGradientContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2),
}));

export const HeroContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  background: themeUtils.gradients.hero,
  color: 'white',
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2),
}));

// Card Components
export const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: 16,
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.08)',
  border: '1px solid rgba(0, 0, 0, 0.05)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0px 8px 32px rgba(0, 0, 0, 0.12)',
  },
}));

export const FeatureCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: 16,
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.08)',
  border: '1px solid rgba(0, 0, 0, 0.05)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0px 12px 40px rgba(0, 0, 0, 0.15)',
  },
}));

export const StatsCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: 16,
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.08)',
  border: '1px solid rgba(0, 0, 0, 0.05)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0px 8px 32px rgba(0, 0, 0, 0.12)',
  },
}));

// Button Components
export const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: 12,
  padding: theme.spacing(1.5, 3),
  fontSize: '1.1rem',
  fontWeight: 600,
  textTransform: 'none',
  background: themeUtils.gradients.primary,
  boxShadow: '0px 8px 24px rgba(102, 126, 234, 0.3)',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: themeUtils.gradients.primaryHover,
    boxShadow: '0px 12px 32px rgba(102, 126, 234, 0.4)',
    transform: 'translateY(-2px)',
  },
  '&:disabled': {
    background: 'rgba(0, 0, 0, 0.12)',
    color: 'rgba(0, 0, 0, 0.26)',
  },
}));

export const TabButton = styled(Button)(({ theme, active }) => ({
  borderRadius: 12,
  padding: theme.spacing(1, 2),
  marginRight: theme.spacing(1),
  marginBottom: theme.spacing(1),
  textTransform: 'none',
  fontWeight: 600,
  fontSize: '0.95rem',
  background: active 
    ? themeUtils.gradients.primary
    : 'transparent',
  color: active ? 'white' : theme.palette.text.primary,
  border: active ? 'none' : `2px solid ${theme.palette.primary.main}`,
  transition: 'all 0.3s ease',
  '&:hover': {
    background: active 
      ? themeUtils.gradients.primaryHover
      : 'rgba(102, 126, 234, 0.1)',
    transform: 'translateY(-2px)',
    boxShadow: active 
      ? '0px 8px 24px rgba(102, 126, 234, 0.3)'
      : '0px 4px 12px rgba(102, 126, 234, 0.2)',
  },
}));

export const ActionButton = styled(Button)(({ theme }) => ({
  borderRadius: 12,
  padding: theme.spacing(1.5, 3),
  textTransform: 'none',
  fontWeight: 600,
  background: themeUtils.gradients.primary,
  boxShadow: '0px 4px 16px rgba(102, 126, 234, 0.3)',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: themeUtils.gradients.primaryHover,
    boxShadow: '0px 8px 24px rgba(102, 126, 234, 0.4)',
    transform: 'translateY(-2px)',
  },
}));

// Form Components
export const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 1)',
    },
    '&.Mui-focused': {
      backgroundColor: 'rgba(255, 255, 255, 1)',
    },
  },
  '& .MuiInputLabel-root': {
    fontWeight: 500,
  },
}));

// Navigation Components
export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: themeUtils.gradients.primary,
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
  backdropFilter: 'blur(10px)',
}));

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: theme.spacing(1, 0),
}));

// Layout Components
export const LogoSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  cursor: 'pointer',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

export const IconWrapper = styled(Box)(({ theme, size = 40, gradient }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: size,
  height: size,
  borderRadius: '50%',
  background: gradient || themeUtils.gradients.primary,
  boxShadow: '0px 4px 16px rgba(102, 126, 234, 0.3)',
}));

// Text Components
export const GradientText = styled(Box)(({ theme, gradient }) => ({
  background: gradient || themeUtils.gradients.primary,
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontWeight: 700,
}));

// Section Components
export const SectionHeader = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(4),
}));

export const EmptyState = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(4),
  color: theme.palette.text.secondary,
}));

// --- Form Components ---
export const FormContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

export const FormGrid = styled(Grid)(({ theme }) => ({
  width: '100%',
}));

export const FormGridItem = styled(Grid)(({ theme }) => ({
  width: '100%',
}));

export const FormHeader = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(3),
}));

export const FormTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  marginBottom: theme.spacing(1),
}));

export const FormSubtitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(2),
}));

// --- Layout Components ---
export const FullWidthContainer = styled(Box)(({ theme }) => ({
  width: '100%',
}));

export const CenteredContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
}));

export const FlexColumn = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
}));

export const FlexRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
}));

// --- Card Components ---
export const AuthCard = styled(StyledCard)(({ theme }) => ({
  padding: theme.spacing(4),
  maxWidth: 500,
  width: '100%',
  margin: '0 auto',
  background: 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
}));

export const DashboardCard = styled(StyledCard)(({ theme }) => ({
  padding: theme.spacing(3),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
}));

// --- Button Components ---
export const FullWidthButton = styled(StyledButton)(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(2),
}));

export const IconButton = styled(Button)(({ theme }) => ({
  minWidth: 'auto',
  padding: theme.spacing(1),
  borderRadius: '50%',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.1)',
    backgroundColor: 'rgba(102, 126, 234, 0.1)',
  },
}));

// --- Text Components ---
export const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  marginBottom: theme.spacing(2),
}));

export const CardTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  marginBottom: theme.spacing(1),
}));

export const MutedText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
}));

// --- Hero Components ---
export const HeroTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  marginBottom: theme.spacing(3),
  fontSize: '3.5rem',
  color: 'white',
  [theme.breakpoints.down('md')]: {
    fontSize: '2.5rem',
  },
}));

export const HeroSubtitle = styled(Typography)(({ theme }) => ({
  margin: `0 auto ${theme.spacing(6)} auto`,
  opacity: 0.9,
  maxWidth: '600px',
  fontSize: '1.3rem',
  color: 'white',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.1rem',
  },
}));

export const HeroButtonContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: theme.spacing(2),
  flexWrap: 'wrap',
}));

export const HeroButton = styled(StyledButton)(({ theme }) => ({
  padding: theme.spacing(1.5, 4),
  fontSize: '1.1rem',
  fontWeight: 'bold',
  background: 'linear-gradient(135deg, #ff6b9d 0%, #c44569 100%)',
  color: 'white',
  boxShadow: '0px 8px 24px rgba(255, 107, 157, 0.4)',
  '&:hover': {
    background: 'linear-gradient(135deg, #ff5a8a 0%, #b73e5a 100%)',
    boxShadow: '0px 12px 32px rgba(255, 107, 157, 0.6)',
    transform: 'translateY(-2px)',
  },
}));

export const HeroButtonOutlined = styled(StyledButton)(({ theme }) => ({
  padding: theme.spacing(1.5, 4),
  fontSize: '1.1rem',
  borderColor: 'white',
  color: 'white',
  background: 'transparent',
  '&:hover': {
    borderColor: 'white',
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
}));

// --- Feature Components ---
export const FeatureIcon = styled(Box)(({ theme }) => ({
  fontSize: 24,
  color: 'white',
}));

export const FeaturesContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
}));

export const FeaturesGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'stretch',
}));

export const FeatureGridItem = styled(Grid)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
}));

// Export all components
export default {
  // Layout & Containers
  StyledContainer,
  GradientContainer,
  AuthGradientContainer,
  HeroContainer,
  SectionHeader,
  FullWidthContainer,
  CenteredContainer,
  FlexColumn,
  FlexRow,
  
  // Cards
  StyledCard,
  FeatureCard,
  StatsCard,
  AuthCard,
  DashboardCard,
  
  // Buttons
  StyledButton,
  TabButton,
  ActionButton,
  FullWidthButton,
  IconButton,
  
  // Form Components
  FormContainer,
  FormGrid,
  FormGridItem,
  FormHeader,
  FormTitle,
  FormSubtitle,
  StyledTextField,
  
  // Navigation
  StyledAppBar,
  StyledToolbar,
  LogoSection,
  
  // Utilities
  IconWrapper,
  GradientText,
  EmptyState,
  
  // Text Components
  SectionTitle,
  CardTitle,
  MutedText,
  
  // Hero Components
  HeroTitle,
  HeroSubtitle,
  HeroButtonContainer,
  HeroButton,
  HeroButtonOutlined,
  FeatureIcon,
  FeaturesContainer,
  FeaturesGrid,
  FeatureGridItem,
};
