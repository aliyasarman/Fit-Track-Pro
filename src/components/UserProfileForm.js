import { useState } from 'react';
import {
  Typography,
  MenuItem,
  Grid,
  Box,
  FormControl,
  InputLabel,
  Select,
  CardContent,
} from '@mui/material';
import { 
  StyledCard,
  StyledTextField,
  FullWidthButton,
  IconWrapper,
  GradientText,
  SectionHeader
} from '../theme/styledComponents';
import { themeUtils } from '../theme';
import PersonIcon from '@mui/icons-material/Person';


function UserProfileForm({ onSubmit }) {
  const [profile, setProfile] = useState({
    age: '',
    weight: '',
    height: '',
    bodyFat: '',
    activityLevel: '',
    goal: '',
    dietaryRestrictions: '',
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(profile);
  };

  return (
    <StyledCard>
      <CardContent sx={{ p: 4 }}>
        {/* Header */}
        <SectionHeader>
          <IconWrapper size={60} gradient={themeUtils.gradients.primary} sx={{ mb: 2 }}>
            <PersonIcon sx={{ fontSize: 30, color: 'white' }} />
          </IconWrapper>
          <GradientText 
            variant="h4" 
            component="h1" 
            gutterBottom
            sx={{ 
              fontWeight: 700,
              mb: 1
            }}
          >
            Personal Profile
          </GradientText>
          <Typography 
            variant="body1" 
            sx={{ 
              color: 'text.secondary',
              opacity: 0.8
            }}
          >
            Tell us about yourself to get personalized recommendations
          </Typography>
        </SectionHeader>

        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <StyledTextField
                fullWidth
                label="Age"
                name="age"
                type="number"
                value={profile.age}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledTextField
                fullWidth
                label="Weight (kg)"
                name="weight"
                type="number"
                value={profile.weight}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledTextField
                fullWidth
                label="Height (cm)"
                name="height"
                type="number"
                value={profile.height}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledTextField
                fullWidth
                label="Body Fat %"
                name="bodyFat"
                type="number"
                value={profile.bodyFat}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Activity Level</InputLabel>
                <Select
                  name="activityLevel"
                  value={profile.activityLevel}
                  onChange={handleChange}
                  label="Activity Level"
                  required
                  sx={{ borderRadius: 2 }}
                >
                  <MenuItem value="sedentary">Sedentary</MenuItem>
                  <MenuItem value="light">Lightly Active</MenuItem>
                  <MenuItem value="moderate">Moderately Active</MenuItem>
                  <MenuItem value="very">Very Active</MenuItem>
                  <MenuItem value="extreme">Extremely Active</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel>Goal</InputLabel>
                <Select
                  name="goal"
                  value={profile.goal}
                  onChange={handleChange}
                  label="Goal"
                  required
                  sx={{ borderRadius: 2 }}
                >
                  <MenuItem value="lose">Weight Loss</MenuItem>
                  <MenuItem value="maintain">Maintain Weight</MenuItem>
                  <MenuItem value="gain">Build Muscle</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <StyledTextField
                fullWidth
                label="Dietary Restrictions"
                name="dietaryRestrictions"
                multiline
                rows={3}
                value={profile.dietaryRestrictions}
                onChange={handleChange}
                placeholder="Enter any dietary restrictions or preferences (e.g., vegetarian, gluten-free, allergies)"
              />
            </Grid>
            <Grid item xs={12} sx={{ textAlign: 'center', mt: 2 }}>
              <FullWidthButton
                type="submit"
                variant="contained"
                size="large"
              >
                Generate My Plan
              </FullWidthButton>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </StyledCard>
  );
}

export default UserProfileForm;