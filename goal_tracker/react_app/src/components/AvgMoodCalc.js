import React from 'react';
import { Paper, Typography } from '@mui/material';
import { data, emojiKey } from './DummyData';  // Import data and emojiKey from DummyData.js

const AverageMood = () => {
  // Calculate the average mood from the imported data
  const averageMood = data.reduce((total, current) => total + current.mood, 0) / data.length;
  const roundedAverage = Math.round(averageMood);

  return (
    <Paper style={{ padding: '20px', margin: '20px', textAlign: 'center' }}>
      <Typography variant="h2" style={{ fontSize: '65px', fontWeight: 'bold' }}>
        {emojiKey[roundedAverage]}
      </Typography>
      <Typography variant="h6">
        Average mood
      </Typography>
    </Paper>
  );
}

export default AverageMood;
