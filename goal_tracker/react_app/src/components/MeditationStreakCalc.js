import React from 'react';
import { Paper, Typography } from '@mui/material';
import moment from 'moment';
import { data } from './DummyData';  // Import data from DummyData.js

const MeditationStreak = () => {
  const sortedData = data.map(d => ({
    ...d,
    date: moment(d.timestamp).startOf('day')
  })).sort((a, b) => a.date.diff(b.date));

  let currentStreak = 0;
  let lastDate = null;

  sortedData.forEach((item, index) => {
    if (index === 0) {
      currentStreak = 1;
      lastDate = item.date;
    } else {
      if (item.date.diff(lastDate, 'days') === 1) {
        currentStreak++;
      } else if (item.date.diff(lastDate, 'days') > 1) {
        currentStreak = 1; // Reset streak if there's a gap of more than one day
      }
      lastDate = item.date;
    }
  });

  return (
    <Paper style={{ padding: '20px', margin: '20px', textAlign: 'center' }}>
      <Typography variant="h6">
        You've meditated
      </Typography>
      <Typography variant="h4" style={{ fontWeight: 'bold', fontSize: '24px' }}>
        {currentStreak}
      </Typography>
      <Typography variant="h6">
        days in a row
      </Typography>
    </Paper>
  );
}

export default MeditationStreak;
