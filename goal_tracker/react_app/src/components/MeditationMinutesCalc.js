import React from 'react';
import { Paper, Typography } from '@mui/material';

const data = [
  { day: 'Day 1', minutes: 30, rating: 4 },
  { day: 'Day 2', minutes: 45, rating: 3 },
  { day: 'Day 3', minutes: 20, rating: 5 },
  { day: 'Day 4', minutes: 60, rating: 2 },
  { day: 'Day 5', minutes: 35, rating: 4 },
  { day: 'Day 6', minutes: 50, rating: 5 },
  { day: 'Day 7', minutes: 40, rating: 3 },
];

// Component to calculate total minutes meditated
const TotalMeditationMinutes = ({ meditationData }) => {
  const totalMinutes = meditationData.reduce((total, current) => total + current.minutes, 0);

  return (
    <Paper style={{ padding: '20px', margin: '20px', textAlign: 'center' }}>
      <Typography variant="h6">
        You've been in the Meditation Zone for
      </Typography>
      <Typography variant="h4" style={{ fontWeight: 'bold', fontSize: '24px' }}>
        {totalMinutes}
      </Typography>
      <Typography variant="h6">
        minutes
      </Typography>
    </Paper>
  );
}

const MeditationStats = () => {
  return (
    <div>
      <TotalMeditationMinutes meditationData={data} />
    </div>
  );
}

export default MeditationStats;
