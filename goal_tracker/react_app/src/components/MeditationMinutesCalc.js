import React from 'react';
import { Paper, Typography } from '@mui/material';
import { data } from './DummyData'; // Import data from DummyData.js

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
