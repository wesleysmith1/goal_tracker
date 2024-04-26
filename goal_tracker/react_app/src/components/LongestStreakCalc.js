import React from 'react';
import { useSelector } from 'react-redux';
import { Paper, Typography } from '@mui/material';
import moment from 'moment';

const LongestMeditationStreak = () => {
  // Access the meditations list from Redux state
  const meditations = useSelector(state => state.meditations.meditationsList);

  const sortedData = meditations.map(meditation => ({
    ...meditation,
    date: moment(meditation.timestamp).startOf('day')
  })).sort((a, b) => a.date.diff(b.date));

  let currentStreak = 0;
  let longestStreak = 0;
  let lastDate = null;

  sortedData.forEach((item, index) => {
    if (index === 0) {
      currentStreak = 1;
      longestStreak = 1;
      lastDate = item.date;
    } else {
      if (item.date.diff(lastDate, 'days') === 1) {
        currentStreak++;
        longestStreak = Math.max(longestStreak, currentStreak);
      } else if (item.date.diff(lastDate, 'days') > 1) {
        currentStreak = 1; // Reset streak if there's a gap of more than one day
      }
      lastDate = item.date;
    }
  });

  return (
    <Paper style={{ padding: '20px', margin: '20px', textAlign: 'center' }}>
      <Typography variant="h6">
        Your longest meditation streak is
      </Typography>
      <Typography variant="h4" style={{ fontWeight: 'bold', fontSize: '24px' }}>
        {longestStreak}
      </Typography>
      <Typography variant="h6">
        days in a row
      </Typography>
    </Paper>
  );
}

export default LongestMeditationStreak;
