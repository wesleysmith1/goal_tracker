import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
import { Paper, Typography } from '@mui/material';
import moment from 'moment';
import { useSelector } from 'react-redux';

function MeditationHeatmap() {
  const meditations = useSelector(state => state.meditations.meditationsList);

  const startDate = moment().subtract(3, 'months');
  const endDate = moment();
  const meditationCount = {};

  meditations.forEach(item => {
    const day = moment(item.created_at).format('YYYY-MM-DD'); // changed to created_at to match your data
    if (!meditationCount[day]) {
      meditationCount[day] = 0;
    }
    meditationCount[day]++;
  });

  const heatmapValues = Object.keys(meditationCount).map(date => ({
    date,
    count: meditationCount[date]
  }));

  // Inline style for the heatmap container to ensure it is tall enough
  const heatmapStyle = {
    height: '140px', // Example height, adjust as needed
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden', // Prevent the container from clipping contents
    height: 'auto', // Allow the container to grow as tall as it needs
  };

  return (
    <Paper style={{ padding: '20px', margin: '20px', textAlign: 'center' }}>
      <Typography variant="h6" style={{ marginBottom: '20px' }}>
        Recent Activity
      </Typography>
      <Typography component="p">
        Last 3 months
      </Typography>
      <div style={heatmapStyle}>
        <CalendarHeatmap
          startDate={startDate.toDate()}
          endDate={endDate.toDate()}
          values={heatmapValues}
          classForValue={(value) => {
            if (!value) {
              return 'color-empty';
            }
            return `color-scale-${Math.min(value.count, 4)}`;
          }}
          showWeekdayLabels
          tooltipDataAttrs={value => ({
            'data-tip': `${value.date} has ${value.count || 0} meditations`
          })}
        />
      </div>
    </Paper>
  );
}

export default MeditationHeatmap;
