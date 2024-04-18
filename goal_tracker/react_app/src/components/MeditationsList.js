import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { List, ListItem as MuiListItem } from '@mui/material';
import ListItem from './ListItem';
import { fetchGoals, updateGoalAPI, deleteGoal } from '../reducers/goalsSlice';

function MeditationsList() {
  const goalsList = useSelector(state => state.goals.goalsList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGoals());
  }, [dispatch]);

  return (
    <List>
      {goalsList.map(goal => (
        <MuiListItem key={goal.id}>
          <ListItem
            item={goal}
            onEdit={newValue => dispatch(updateGoalAPI({ goalId: goal.id, updates: newValue }))}
            onDelete={() => dispatch(deleteGoal(goal.id))}
          />
        </MuiListItem>
      ))}
    </List>
  );
}

export default MeditationsList;
