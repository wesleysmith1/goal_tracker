import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Paper, Typography } from '@mui/material';
import moment from 'moment';
import { fetchMeditations } from '../reducers/meditationsSlice';

const SimpleLineChart = () => {
  const dispatch = useDispatch();
  // Access the meditations list from Redux state
  const meditations = useSelector(state => state.meditations.meditationsList);

  useEffect(() => {
    dispatch(fetchMeditations()); // Dispatch action to fetch meditations
  }, [dispatch]);

  // Ensure the data is in the correct format for recharts
  const formattedData = meditations.map(meditation => ({
    ...meditation,
    timestamp: moment(meditation.created_at).format('MMM DD'), // Formatting the date
    minutes: meditation.duration, // Assuming the 'duration' is the correct property
    satisfaction: meditation.satisfaction, // Satisfaction should be a numerical value
  }));

  return (
    <Paper style={{ padding: '20px', margin: '20px' }}>
      <Typography variant="h5" style={{ textAlign: 'center' }}>Satisfaction & Minutes</Typography>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={formattedData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" />
          <YAxis yAxisId="left" label={{ value: 'Minutes', angle: -90, position: 'insideLeft' }} />
          <YAxis yAxisId="right" orientation="right" label={{ value: 'Satisfaction', angle: 90, position: 'insideRight' }} domain={[1, 5]} />
          <Tooltip 
            formatter={(value, name) => [value, name === 'satisfaction' ? 'Satisfaction' : 'Minutes']} 
            labelFormatter={(label) => moment(label, 'MMM DD').format('MMMM DD, YYYY')}
          />
          <Legend />
          <Line yAxisId="left" type="monotone" dataKey="minutes" stroke="#8884D8" activeDot={{ r: 8 }} />
          <Line yAxisId="right" type="monotone" dataKey="satisfaction" stroke="#82CA9D" />
        </LineChart>
      </ResponsiveContainer>

    </Paper>
  );
}

export default SimpleLineChart;
