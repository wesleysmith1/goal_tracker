import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import MuiListItem from '@mui/material/ListItem';
import ListItem from './ListItem'; // Adjust the path as necessary
import { addGoal, updateGoalAPI, deleteGoal, fetchGoals } from '../reducers/goalsSlice'; // Ensure imports are correct

function TextInputWithSubmit() {
  const [goalValue, setGoalValue] = useState('');
  const goalsList = useSelector(state => state.goals.goalsList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGoals());
  }, [dispatch]);

  const handleInputChange = (event) => {
    setGoalValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!goalValue.trim()) return;
    dispatch(addGoal({ title: goalValue }));
    setGoalValue(''); // Clear the input field after submission
  };

  return (
    <div>
      <h1>Add a New Goal</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Goal"
          variant="outlined"
          value={goalValue}
          onChange={handleInputChange}
          placeholder="Enter goal description..."
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" type="submit">
          Add Goal
        </Button>
      </form>
      <List>
        {goalsList.map((goal) => (
          <MuiListItem key={goal.id}>
            <ListItem
              item={goal.title}
              onEdit={(newValue) => dispatch(updateGoalAPI({ goalId: goal.id, updates: { title: newValue } }))}
              onDelete={() => dispatch(deleteGoal(goal.id))}
            />
          </MuiListItem>
        ))}
      </List>
    </div>
  );
}

export default TextInputWithSubmit;
