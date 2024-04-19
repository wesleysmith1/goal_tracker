import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Paper, Typography } from '@mui/material';
import moment from 'moment'; // Import moment for date formatting

const data = [
  { timestamp: '2023-04-01T12:00:00Z', minutes: 30, mood: 4 },
  { timestamp: '2023-04-02T12:00:00Z', minutes: 45, mood: 3 },
  { timestamp: '2023-04-03T12:00:00Z', minutes: 800, mood: 5 },
  { timestamp: '2023-04-04T12:00:00Z', minutes: 60, mood: 2 },
  { timestamp: '2023-04-05T12:00:00Z', minutes: 35, mood: 4 },
  { timestamp: '2023-04-06T12:00:00Z', minutes: 50, mood: 5 },
  { timestamp: '2023-04-07T12:00:00Z', minutes: 40, mood: 3 },
];

const emojiKey = {
  1: '😟', // very unsatisfied
  2: '😕', // unsatisfied
  3: '😐', // neutral
  4: '😊', // satisfied
  5: '😁'  // very satisfied
};

const CustomDot = (props) => {
  const { payload, cx, cy } = props;
  return (
    <text x={cx} y={cy} dy={0} textAnchor="middle" style={{ fontSize: '20px' }}>
      {emojiKey[payload.mood]}
    </text>
  );
};

const EmojiKey = () => (
  <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
    {Object.entries(emojiKey).map(([key, emoji]) => (
      <div style={{ marginRight: '10px', textAlign: 'center' }}>
        <div>{emoji}</div>
        <div style={{ fontSize: '12px' }}>{key}</div>
      </div>
    ))}
  </div>
);

const SimpleLineChart = () => {
  return (
    <Paper style={{ padding: '20px', margin: '20px' }}>
      <Typography variant="h5" style={{ textAlign: 'center' }}>Mood & Minutes</Typography>
      <EmojiKey />
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" tickFormatter={(unixTime) => moment(unixTime).format('MMM DD')} />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip formatter={(value, name) => [value, name === 'mood' ? 'Mood' : 'Minutes']} labelFormatter={(label) => moment(label).format('MMMM DD, YYYY')} />
          <Legend />
          <Line yAxisId="left" type="monotone" dataKey="minutes" stroke="#8884D8" activeDot={{ r: 8 }} />
          <Line yAxisId="right" type="monotone" dataKey="mood" stroke="#82CA9D" dot={<CustomDot />} />
        </LineChart>
      </ResponsiveContainer>
    </Paper>
  );
}

export default SimpleLineChart;
