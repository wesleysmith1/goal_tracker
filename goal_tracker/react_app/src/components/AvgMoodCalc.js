import React from 'react';
import { useSelector } from 'react-redux';
import { Paper, Typography } from '@mui/material';
import { emojiKey } from './DummyData'; // Ensure the path to your emojiKey is correct

const AverageMood = () => {
  // Access the meditations list from Redux state
  const meditations = useSelector(state => state.meditations.meditationsList);

  // Calculate the average satisfaction
  const averageSatisfaction = meditations.reduce((acc, { satisfaction }) => {
    if (typeof satisfaction === 'number') {
      acc.total += satisfaction;
      acc.count += 1;
    }
    return acc;
  }, { total: 0, count: 0 });

  // Determine the average and rounded values
  const avg = averageSatisfaction.count > 0 ? averageSatisfaction.total / averageSatisfaction.count : null;
  const roundedAverage = avg !== null ? Math.round(avg) : null;

  // Use emojiKey to map the rounded average satisfaction to an emoji
  const emoji = roundedAverage !== null ? emojiKey[roundedAverage] : '🤔'; // Default emoji if no valid data

  return (
    <Paper style={{ padding: '20px', margin: '20px', textAlign: 'center' }}>
      <Typography variant="h2" style={{ fontSize: '65px', fontWeight: 'bold' }}>
        {emoji}
      </Typography>
      <Typography variant="h6">
        Average satisfaction
      </Typography>
    </Paper>
  );
}

export default AverageMood;
