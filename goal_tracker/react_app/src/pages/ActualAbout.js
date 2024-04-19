import React from 'react';
import meditationImage from '../images/meditation1.png';


function ActualAbout() {
  return (
    <div>
      <h2>About Meditation Zone</h2>
      <p>At Meditation Zone, we provide the tools to help you establish a consistent daily meditation practice. Research shows it takes repetition to turn any new behavior into an ingrained habit. Our platform allows you to easily track your meditation sessions, streaks, and progress over time. Set reminders to meditate at your preferred times each day to make it a routine. As you build consistency, our data visualizations and progress reports will motivate you by reflecting how frequent meditation improves focus, reduces stress, and promotes overall well-being. Whether you're a beginner or experienced meditator, [Website Name] keeps you accountable and encouraged on your journey to making meditation an everyday habit. Develop the clarity, calm, and self-awareness you've been seeking through the power of a rock-solid meditation practice.</p>
      <img src={meditationImage} alt="Meditation Scene" style={{ width: '100%', height: 'auto' }} />
    </div>
  );
}

export default ActualAbout;
