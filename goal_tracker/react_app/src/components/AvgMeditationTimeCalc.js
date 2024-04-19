import React from 'react';
import { Paper, Typography } from '@mui/material';
import { data } from './DummyData';  // Import data from DummyData.js

const AverageMeditationTime = () => {
  const totalMinutes = data.reduce((total, current) => total + current.minutes, 0);
  const averageMinutes = totalMinutes / data.length;

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
