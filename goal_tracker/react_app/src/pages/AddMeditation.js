import React from 'react';
import MeditationsList from '../components/MeditationsList';
import MeditationForm from '../components/MeditationForm';

function AddMeditation({ onClose }) {
  return (
    <div>
      <MeditationForm onClose={onClose} />
      <MeditationsList />
    </div>
  );
}

export default AddMeditation;
