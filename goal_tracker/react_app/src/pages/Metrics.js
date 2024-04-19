import React from 'react';
import SimpleLineChart from '../components/SimpleLineChart'; 
import MeditationMinutesCalc from '../components/MeditationMinutesCalc'; 


function Metrics() {
  return (
    <div>
      <h2>Mindfulness Metrics</h2>
      <p>These are insights about your meditation journey :)</p>
      
      <SimpleLineChart />
      
      <MeditationMinutesCalc />
      
      
    </div>
  );
}

export default Metrics;
