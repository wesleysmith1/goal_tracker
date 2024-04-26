import React from 'react';
import meditationImage2 from '../images/meditation2.png';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Welcome to the Meditation Zone</h2>
      <p>Welcome to Meditation Zone, your serene sanctuary dedicated to nurturing mindfulness and personal growth. Our platform encourages you to dive deep into the transformative practice of meditation and record your experiences along the way. By tracking your journey, you gain invaluable insights into your evolving relationship with mindfulness, helping you identify patterns and progress. Whether you're a beginner or a seasoned practitioner, Meditation Zone offers a reflective space to explore, expand, and express your meditation experiences. Join us in this tranquil corner of the web, and embark on a fulfilling path to inner peace and self-discovery.</p>
      <Button component={Link} to="/meditations" style={{ margin: '20px 0', backgroundColor: '#1976d2', color: 'white' }}>
        Meditations
      </Button>
      <img src={meditationImage2} alt="Meditation Scene" style={{ width: '100%', height: 'auto' }} />
    </div>
  );
}

export default Home;
