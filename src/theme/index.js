import { createTheme } from '@mui/material/styles';

// Define the theme colors
const colors = {
  primary: {
    main: '#667eea',
    light: '#9bb5ff',
    dark: '#3f51b5',
    contrastText: '#ffffff',
  },
  secondary: {
    main: '#764ba2',
    light: '#a478d1',
    dark: '#4a2c73',
    contrastText: '#ffffff',
  },
  background: {
    default: '#f8fafc',
    paper: '#ffffff',
  },
  text: {
    primary: '#1a202c',
    secondary: '#4a5568',
  },
  gradients: {
    primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    primaryHover: 'linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%)',
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    hero: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  status: {
    success: 'linear-gradient(135deg, #2ecc71 0%, #27ae60 100%)',
    error: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)',
    warning: 'linear-gradient(135deg, #f39c12 0%, #e67e22 100%)',
    info: 'linear-gradient(135deg, #3498db 0%, #2980b9 100%)',
  }
};

// Create the main theme
export const theme = createTheme({
  palette: {
    primary: colors.primary,
    secondary: colors.secondary,
    background: colors.background,
    text: colors.text,
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 600,
      fontSize: '2rem',
      lineHeight: 1.3,
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.4,
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 1.4,
    },
    h5: {
      fontWeight: 500,
      fontSize: '1.125rem',
      lineHeight: 1.5,
    },
    h6: {
      fontWeight: 500,
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
  },
  shape: {
    borderRadius: 12,
  },
  shadows: [
    'none',
    '0px 2px 4px rgba(0, 0, 0, 0.1)',
    '0px 4px 8px rgba(0, 0, 0, 0.1)',
    '0px 8px 16px rgba(0, 0, 0, 0.1)',
    '0px 12px 24px rgba(0, 0, 0, 0.15)',
    '0px 16px 32px rgba(0, 0, 0, 0.15)',
    '0px 20px 40px rgba(0, 0, 0, 0.15)',
    '0px 24px 48px rgba(0, 0, 0, 0.15)',
    '0px 28px 56px rgba(0, 0, 0, 0.15)',
    '0px 32px 64px rgba(0, 0, 0, 0.15)',
    '0px 36px 72px rgba(0, 0, 0, 0.15)',
    '0px 40px 80px rgba(0, 0, 0, 0.15)',
    '0px 44px 88px rgba(0, 0, 0, 0.15)',
    '0px 48px 96px rgba(0, 0, 0, 0.15)',
    '0px 52px 104px rgba(0, 0, 0, 0.15)',
    '0px 56px 112px rgba(0, 0, 0, 0.15)',
    '0px 60px 120px rgba(0, 0, 0, 0.15)',
    '0px 64px 128px rgba(0, 0, 0, 0.15)',
    '0px 68px 136px rgba(0, 0, 0, 0.15)',
    '0px 72px 144px rgba(0, 0, 0, 0.15)',
    '0px 76px 152px rgba(0, 0, 0, 0.15)',
    '0px 80px 160px rgba(0, 0, 0, 0.15)',
    '0px 84px 168px rgba(0, 0, 0, 0.15)',
    '0px 88px 176px rgba(0, 0, 0, 0.15)',
    '0px 92px 184px rgba(0, 0, 0, 0.15)',
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: 8,
          padding: '10px 24px',
          boxShadow: 'none',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
            transform: 'translateY(-2px)',
          },
        },
        contained: {
          background: colors.gradients.primary,
          '&:hover': {
            background: colors.gradients.primaryHover,
            boxShadow: '0px 6px 16px rgba(0, 0, 0, 0.2)',
          },
        },
        outlined: {
          borderColor: colors.primary.main,
          color: colors.primary.main,
          '&:hover': {
            borderColor: colors.primary.dark,
            backgroundColor: 'rgba(102, 126, 234, 0.1)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.08)',
          border: '1px solid rgba(0, 0, 0, 0.05)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0px 8px 32px rgba(0, 0, 0, 0.12)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12,
            '&:hover': {
              '& .MuiOutlinedInput-notchedOutline': {
                borderColor: colors.primary.main,
              },
            },
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: colors.gradients.primary,
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
        },
      },
    },
  },
});

// Export theme utilities
export const themeUtils = {
  colors,
  gradients: colors.gradients,
  status: colors.status,
  
  // Helper functions
  getGradientText: (gradient = colors.gradients.primary) => ({
    background: gradient,
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  }),
  
  getIconWrapper: (size = 40, gradient = colors.gradients.primary) => ({
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: size,
    height: size,
    borderRadius: '50%',
    background: gradient,
    boxShadow: '0px 4px 16px rgba(102, 126, 234, 0.3)',
  }),
  
  getCardHover: () => ({
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0px 8px 32px rgba(0, 0, 0, 0.12)',
    },
  }),
  
  getButtonHover: () => ({
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0px 6px 16px rgba(0, 0, 0, 0.2)',
    },
  }),
};

export default theme;
