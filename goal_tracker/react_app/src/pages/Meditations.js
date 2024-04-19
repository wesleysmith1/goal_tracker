import React from 'react';
import MeditationsHistory from '../components/MeditationsHistory'; // Adjust the path as necessary
import MeditationMinutesCalc from '../components/MeditationMinutesCalc'; 


function Meditations() {
  return (
    <div>
      <MeditationsHistory />
      <MeditationMinutesCalc />
    </div>
  );
}

export default Meditations;
