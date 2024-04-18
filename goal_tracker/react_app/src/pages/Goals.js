import React from 'react';
import MeditationsHistory from '../components/MeditationsHistory'; // Adjust the path as necessary
import SimpleLineChart from '../components/SimpleLineChart'; 

function Goals() {
  return (
    <div>
      <h2>Your Goals</h2>
      <MeditationsHistory />
      <SimpleLineChart />
    </div>
  );
}

export default Goals;
