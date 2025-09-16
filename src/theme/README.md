# Fit-Track-Pro Theme System

This directory contains the centralized theme system for Fit-Track-Pro, providing consistent styling across the entire application.

## 📁 File Structure

```
src/theme/
├── index.js              # Main theme configuration
├── styledComponents.js   # Reusable styled components
└── README.md            # This documentation
```

## 🎨 Theme Configuration (`index.js`)

### Colors
- **Primary**: `#667eea` (Purple-blue gradient)
- **Secondary**: `#764ba2` (Deep purple)
- **Background**: `#f8fafc` (Light gray)
- **Text**: `#1a202c` (Dark gray)

### Gradients
- **Primary**: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
- **Primary Hover**: `linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%)`
- **Background**: `linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)`

### Status Colors
- **Success**: `linear-gradient(135deg, #2ecc71 0%, #27ae60 100%)`
- **Error**: `linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)`
- **Warning**: `linear-gradient(135deg, #f39c12 0%, #e67e22 100%)`
- **Info**: `linear-gradient(135deg, #3498db 0%, #2980b9 100%)`

## 🧩 Styled Components (`styledComponents.js`)

### Container Components
- `StyledContainer` - Standard container with max-width
- `GradientContainer` - Container with gradient background
- `HeroContainer` - Full-height hero section container

### Card Components
- `StyledCard` - Standard card with hover effects
- `FeatureCard` - Enhanced card for feature sections
- `StatsCard` - Card optimized for statistics display

### Button Components
- `StyledButton` - Primary button with gradient
- `TabButton` - Tab navigation button
- `ActionButton` - Action-specific button styling

### Form Components
- `StyledTextField` - Enhanced text input field

### Navigation Components
- `StyledAppBar` - Navigation bar with gradient
- `StyledToolbar` - Toolbar with proper spacing

### Layout Components
- `LogoSection` - Logo container with hover effects
- `IconWrapper` - Circular icon container
- `GradientText` - Text with gradient color
- `SectionHeader` - Standardized section headers
- `EmptyState` - Empty state container

## 🚀 Usage Examples

### Basic Theme Usage
```jsx
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* Your app content */}
    </ThemeProvider>
  );
}
```

### Using Styled Components
```jsx
import { StyledCard, StyledButton, IconWrapper } from '../theme/styledComponents';
import { themeUtils } from '../theme';

function MyComponent() {
  return (
    <StyledCard>
      <IconWrapper size={60} gradient={themeUtils.gradients.primary}>
        <MyIcon />
      </IconWrapper>
      <StyledButton>Click me</StyledButton>
    </StyledCard>
  );
}
```

### Using Theme Utilities
```jsx
import { themeUtils } from '../theme';

function MyComponent() {
  return (
    <Box sx={themeUtils.getGradientText()}>
      Gradient Text
    </Box>
  );
}
```

### Custom Styling with Theme
```jsx
import { useTheme } from '@mui/material/styles';
import { themeUtils } from '../theme';

function MyComponent() {
  const theme = useTheme();
  
  return (
    <Box sx={{
      background: themeUtils.gradients.primary,
      borderRadius: theme.shape.borderRadius,
      padding: theme.spacing(2),
    }}>
      Content
    </Box>
  );
}
```

## 🎯 Best Practices

1. **Use the theme consistently** - Always import from the theme files
2. **Leverage styled components** - Use pre-built components when possible
3. **Follow the color system** - Use defined colors and gradients
4. **Maintain spacing consistency** - Use theme.spacing() for margins/padding
5. **Keep animations smooth** - Use the defined transition durations

## 🔧 Customization

To modify the theme:

1. **Colors**: Update the `colors` object in `index.js`
2. **Typography**: Modify the `typography` section
3. **Components**: Adjust the `components` overrides
4. **New Components**: Add to `styledComponents.js`

## 📱 Responsive Design

The theme includes responsive breakpoints:
- `xs`: 0px
- `sm`: 600px
- `md`: 900px
- `lg`: 1200px
- `xl`: 1536px

Use these in your components for responsive behavior.

## 🎨 Design Tokens

All design tokens are centralized in the theme:
- Colors
- Typography scales
- Spacing units
- Border radius
- Shadows
- Transitions

This ensures consistency across the entire application.
