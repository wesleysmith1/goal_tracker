import React from 'react';
import { useSelector } from 'react-redux';
import { Paper, Typography } from '@mui/material';

const AverageMeditationTime = () => {
  // Access the meditations list from Redux state
  const meditations = useSelector(state => state.meditations.meditationsList);

  // Calculate the total minutes and average minutes if meditations are available
  const totalMinutes = meditations.reduce((total, current) => total + current.duration, 0);
  const averageMinutes = meditations.length > 0 ? totalMinutes / meditations.length : 0;

  return (
    <Paper style={{ padding: '20px', margin: '20px', textAlign: 'center' }}>
      <Typography variant="h6">
        Average meditation time
      </Typography>
      <Typography variant="h4" style={{ fontWeight: 'bold', fontSize: '24px' }}>
        {Math.round(averageMinutes)} 
      </Typography>
      <Typography variant="h6">
        minutes
      </Typography>
    </Paper>
  );
}

export default AverageMeditationTime;