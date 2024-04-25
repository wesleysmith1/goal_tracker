import React, { useState, useEffect } from 'react';

const MeditationsHistory = () => {
    const [meditations, setMeditations] = useState([]);

    useEffect(() => {
        fetch('api/meditations/') // Adjust the URL based on your Django server's URL
          .then(response => response.json())
          .then(data => {
              setMeditations(data);
          })
          .catch(error => console.error('Error fetching data: ', error));
    }, []);

    return (
        <div>
            <h1>Your Meditation History</h1>
            <ul>
                {meditations.map(meditation => (
                    <li key={meditation.id}>
                        <h2>{meditation.title}</h2>
                        <p>Duration: {meditation.duration} minutes</p>
                        <p>Created At: {new Date(meditation.created_at).toLocaleDateString()}</p>
                        <p>Satisfaction: {['Not Effective', 'Slightly Effective', 'Moderately Effective', 'Effective', 'Highly Effective'][meditation.satisfaction - 1]}</p>
                        <p>Notes: {meditation.notes || 'No notes provided'}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MeditationsHistory;