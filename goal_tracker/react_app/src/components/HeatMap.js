import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import { Paper, Typography } from '@mui/material';
import moment from 'moment';
import { data } from './DummyData'; // Ensure path is correct

function MeditationHeatmap() {
  // Create an object to count meditations per day
  const startDate = moment().subtract(3, 'months');
  const endDate = moment();
  const meditationCount = {};

  data.forEach(item => {
    const day = moment(item.timestamp).format('YYYY-MM-DD');
    if (!meditationCount[day]) {
      meditationCount[day] = 0;
    }
    meditationCount[day]++;
  });

  // Prepare values for the heatmap
  const heatmapValues = Object.keys(meditationCount).map(date => ({
    date,
    count: meditationCount[date]
  }));

  return (
    <Paper style={{ padding: '20px', margin: '20px', textAlign: 'center' }}>
      <Typography variant="h6" style={{ marginBottom: '20px' }}>
        Recent Activity
      </Typography>
      <Typography component="p">
        Last 3 months
      </Typography>
      <CalendarHeatmap
        startDate={startDate.toDate()}
        endDate={endDate.toDate()}
        values={heatmapValues}
        classForValue={(value) => {
          if (!value || value.count === 0) {
            return 'color-empty';
          } else if (value.count === 1) {
            return 'color-scale-1';
          } else if (value.count === 2) {
            return 'color-scale-2';
          } else if (value.count === 3) {
            return 'color-scale-3';
          } else {
            return 'color-scale-4'; // Consider this for all higher counts
          }
        }}
        showWeekdayLabels={true}
        tooltipDataAttrs={value => ({
          'data-tip': `${value.date} has ${value.count || 0} meditations`
        })}
      />
    </Paper>
  );
}

export default MeditationHeatmap;
