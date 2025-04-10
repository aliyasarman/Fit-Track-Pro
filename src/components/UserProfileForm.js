import { useState } from 'react';
import {
  Paper,
  Typography,
  TextField,
  MenuItem,
  Button,
  Grid,
  Box,
  FormControl,
  InputLabel,
  Select,
} from '@mui/material';

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
    <Paper elevation={3} sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom>
        Personal Profile
      </Typography>
      <Box component="form" onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
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
            <TextField
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
            <TextField
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
            <TextField
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
              >
                <MenuItem value="lose">Weight Loss</MenuItem>
                <MenuItem value="maintain">Maintain Weight</MenuItem>
                <MenuItem value="gain">Build Muscle</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Dietary Restrictions"
              name="dietaryRestrictions"
              multiline
              rows={2}
              value={profile.dietaryRestrictions}
              onChange={handleChange}
              placeholder="Enter any dietary restrictions or preferences"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              fullWidth
            >
              Generate Plan
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}

export default UserProfileForm;