import React, { useEffect } from 'react'; // useEffect comes from react
import { useDispatch } from 'react-redux'; // useDispatch comes from react-redux
import { fetchMeditations } from '../reducers/meditationsSlice'; // Adjust the path to where you defined fetchMeditations
import SimpleLineChart from '../components/SimpleLineChart'; 
import MeditationMinutesCalc from '../components/MeditationMinutesCalc'; 
import MeditationStreakCalc from '../components/MeditationStreakCalc'; 
import AvgMoodCalc from '../components/AvgMoodCalc'; 
import LongestMeditationStreak from '../components/LongestStreakCalc';
import AverageMeditationTime from '../components/AvgMeditationTimeCalc';
import MeditationHeatmap from '../components/HeatMap';


// ... other imports


function Metrics() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMeditations()); // Dispatch action to fetch meditations
  }, [dispatch]);

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
      
      <MeditationHeatmap />
    </div>
  );
}

export default Metrics;
