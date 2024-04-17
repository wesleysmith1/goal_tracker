import React from 'react';
import GoalComponent from '../components/GoalComponent'; // Adjust the path as necessary
import SimpleLineChart from '../components/SimpleLineChart'; 

function Goals() {
  return (
    <div>
      <h2>Your Goals</h2>
      <GoalComponent />
      <SimpleLineChart />
    </div>
  );
}

export default Goals;
