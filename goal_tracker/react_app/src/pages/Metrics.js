import React from 'react';
import SimpleLineChart from '../components/SimpleLineChart'; 
import MeditationMinutesCalc from '../components/MeditationMinutesCalc'; 
import MeditationStreakCalc from '../components/MeditationStreakCalc'; 
import AvgMoodCalc from '../components/AvgMoodCalc'; 
import LongestMeditationStreak from '../components/LongestStreakCalc';
import AverageMeditationTime from '../components/AvgMeditationTimeCalc';



function Metrics() {
  return (
    <div>
      <h2>Mindfulness Metrics</h2>
      <p>These are insights about your meditation journey :)</p>
      
      <SimpleLineChart />
      
      <MeditationMinutesCalc />
      
      <AverageMeditationTime />
      
      <MeditationStreakCalc />
      
      <LongestMeditationStreak />
      
      <AvgMoodCalc />
    </div>
  );
}

export default Metrics;
