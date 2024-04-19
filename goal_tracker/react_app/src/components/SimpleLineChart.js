import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Paper, Typography } from '@mui/material';

const data = [
  { day: 'Day 1', minutes: 30, mood: 4 },
  { day: 'Day 2', minutes: 45, mood: 3 },
  { day: 'Day 3', minutes: 20, mood: 5 },
  { day: 'Day 4', minutes: 60, mood: 2 },
  { day: 'Day 5', minutes: 35, mood: 4 },
  { day: 'Day 6', minutes: 50, mood: 5 },
  { day: 'Day 7', minutes: 40, mood: 3 },
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
    <text x={cx} y={cy} dy={-10} textAnchor="middle" style={{ fontSize: '20px' }}>
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
          <XAxis dataKey="day" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Legend />
          <Line yAxisId="left" type="monotone" dataKey="minutes" stroke="#8884D8" activeDot={{ r: 8 }} />
          <Line yAxisId="right" type="monotone" dataKey="mood" stroke="#82CA9D" dot={<CustomDot />} />
        </LineChart>
      </ResponsiveContainer>
    </Paper>
  );
}

export default SimpleLineChart;
