import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { List, ListItem as MuiListItem } from '@mui/material';
import ListItem from './ListItem';
import { fetchMeditations, updateMeditationAPI, deleteMeditation } from '../reducers/meditationsSlice';

function MeditationsList() {
  const meditationsList = useSelector(state => state.meditations.meditationsList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMeditations());
  }, [dispatch]);

  return (
    <List>
      {meditationsList.map(meditation => (
        <MuiListItem key={meditation.id}>
          <ListItem
            item={meditation}
            onEdit={newValue => dispatch(updateMeditationAPI({ meditationId: meditation.id, updates: newValue }))}
            onDelete={() => dispatch(deleteMeditation(meditation.id))}
          />
        </MuiListItem>
      ))}
    </List>
  );
}

export default MeditationsList;
