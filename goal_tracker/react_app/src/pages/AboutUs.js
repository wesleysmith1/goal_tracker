import React from 'react';
import meditationImage1 from '../images/meditation1.png';
import wesImage from '../images/wes.png';
import drakeImage from '../images/drake.jpg';

function AboutUs() {
  return (
    <div>
      <h2>About Meditation Zone</h2>
      <p>Welcome to Meditation Zone, your serene sanctuary dedicated to nurturing mindfulness and personal growth. Our platform encourages you to dive deep into the transformative practice of meditation and record your experiences along the way. By tracking your journey, you gain invaluable insights into your evolving relationship with mindfulness, helping you identify patterns and progress. Whether you're a beginner or a seasoned practitioner, Meditation Zone offers a reflective space to explore, expand, and express your meditation experiences. Join us in this tranquil corner of the web, and embark on a fulfilling path to inner peace and self-discovery.</p>
      <img src={meditationImage1} alt="Meditation Scene" style={{ width: '100%', height: 'auto' }} />
      <h2>Our Founders</h2>
      <div>
        <img src={wesImage} alt="Wes Smith" style={{ width: '150px', height: 'auto', marginRight: '20px' }} />
        <p>Wes Smith is known for his infectious humor and love for Dunkin' Donuts. Wes brings his creative spark and jovial spirit to every aspect of Meditation Zone, ensuring that the platform is not only useful but also engaging.</p>
      </div>
      <div>
        <img src={drakeImage} alt="Drake Carlston" style={{ width: '150px', height: 'auto', marginRight: '20px' }} />
        <p>Drake Carlston is an avid runner with a penchant for spicy food. His energy and determination fuel our mission to provide a robust tool that assists users in tracking their meditation progress and gaining deeper insights into their mindfulness journey.</p>
      </div>
    </div>
  );
}

export default AboutUs;
