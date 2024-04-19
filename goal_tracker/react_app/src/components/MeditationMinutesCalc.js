import React from 'react';
import { Paper, Typography } from '@mui/material';

const data = [
  { timestamp: '2023-04-01T12:00:00Z', minutes: 30, rating: 4 },
  { timestamp: '2023-04-02T12:00:00Z', minutes: 45, rating: 3 },
  { timestamp: '2023-04-03T12:00:00Z', minutes: 540, rating: 5 },
  { timestamp: '2023-04-04T12:00:00Z', minutes: 60, rating: 2 },
  { timestamp: '2023-04-05T12:00:00Z', minutes: 35, rating: 4 },
  { timestamp: '2023-04-06T12:00:00Z', minutes: 50, rating: 5 },
  { timestamp: '2023-04-07T12:00:00Z', minutes: 40, rating: 3 },
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
