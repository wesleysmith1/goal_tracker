import React from 'react';
import { useSelector } from 'react-redux';
import { Paper, Typography } from '@mui/material';

// Component to calculate total minutes meditated
const TotalMeditationMinutes = ({ meditationData }) => {
  const totalMinutes = meditationData.reduce((total, current) => total + current.duration, 0);

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
};

const MeditationStats = () => {
  // Accessing the meditations list from Redux state
  const meditations = useSelector(state => state.meditations.meditationsList);

  return (
    <div>
      <TotalMeditationMinutes meditationData={meditations} />
    </div>
  );
};

export default MeditationStats;
