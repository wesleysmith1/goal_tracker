import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button, MenuItem } from '@mui/material';
import { addGoal } from '../reducers/goalsSlice';

function MeditationForm() {
  const initialState = {
    title: '',
    duration: '',
    satisfaction: 3, // Default satisfaction level
    notes: ''
  };
  const [formState, setFormState] = useState(initialState);
  const dispatch = useDispatch();

  const handleChange = (prop) => (event) => {
    setFormState({ ...formState, [prop]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { title, duration, satisfaction, notes } = formState;
    if (!title.trim()) return;
    dispatch(addGoal({
      title,
      duration: parseInt(duration, 10) || 0,
      satisfaction,
      notes
    }));
    setFormState(initialState);
  };

  return (
    <div>
      <h1>Add a New Meditation</h1>
      <form onSubmit={handleSubmit}>
        <TextField label="Title" variant="outlined" value={formState.title} onChange={handleChange('title')} fullWidth margin="normal" />
        <TextField label="Duration (minutes)" variant="outlined" type="number" value={formState.duration} onChange={handleChange('duration')} fullWidth margin="normal" />
        <TextField label="Satisfaction" select value={formState.satisfaction} onChange={handleChange('satisfaction')} fullWidth margin="normal">
          {[
            { value: 1, label: 'Not Effective' },
            { value: 2, label: 'Slightly Effective' },
            { value: 3, label: 'Moderately Effective' },
            { value: 4, label: 'Effective' },
            { value: 5, label: 'Highly Effective' }
          ].map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField label="Notes" variant="outlined" value={formState.notes} onChange={handleChange('notes')} fullWidth margin="normal" multiline rows={4} />
        <Button variant="contained" color="primary" type="submit">Add Goal</Button>
      </form>
    </div>
  );
}

export default MeditationForm;
