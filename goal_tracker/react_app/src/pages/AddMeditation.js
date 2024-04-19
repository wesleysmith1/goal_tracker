import React from 'react';
import MeditationsList from '../components/MeditationsList';
import MeditationForm from '../components/MeditationForm';

function AddMeditation() {
  return (
    <div>
      <MeditationForm />
      <MeditationsList />
    </div>
  );
}

export default AddMeditation;