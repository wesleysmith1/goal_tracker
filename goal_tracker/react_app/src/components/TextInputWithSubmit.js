import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ListItem from './ListItem'; // Adjust the path as necessary
import { addGoal, updateGoalAPI, deleteGoal, fetchGoals } from '../reducers/goalsSlice'; // Ensure imports are correct

function TextInputWithSubmit() {
  const [goalValue, setGoalValue] = useState(''); // State for the input field value
  const goalsList = useSelector(state => state.goals.goalsList); // Accessing goals list from the Redux store
  const dispatch = useDispatch(); // Hook to dispatch actions

  useEffect(() => {
    dispatch(fetchGoals()); // Fetch goals when the component mounts
  }, [dispatch]);

  const handleInputChange = (event) => {
    setGoalValue(event.target.value); // Handle input changes
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!goalValue.trim()) return; // Don't submit if empty or only whitespace
    dispatch(addGoal({ title: goalValue })); // Dispatch action to add a new goal
    setGoalValue(''); // Clear the input field after submission
  };

  return (
    <div>
      <h1>Add a New Goal</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={goalValue}
          onChange={handleInputChange}
          placeholder="Enter goal description..."
        />
        <button type="submit">Add Goal</button>
      </form>
      <ul>
        {goalsList.map((goal) => (
          <li key={goal.id}>
            <ListItem
              item={goal.title} // Assuming the goal object has a 'title' attribute
              onEdit={(newValue) => dispatch(updateGoalAPI({ goalId: goal.id, updates: { title: newValue } }))}
              onDelete={() => dispatch(deleteGoal(goal.id))}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TextInputWithSubmit;
