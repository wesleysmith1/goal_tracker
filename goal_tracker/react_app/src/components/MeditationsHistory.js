import React, { useState, useEffect } from 'react';

const MeditationsHistory = () => {
    const [goals, setGoals] = useState([]);

    useEffect(() => {
        fetch('api/goals/') // Adjust the URL based on your Django server's URL
          .then(response => response.json())
          .then(data => {
              setGoals(data);
          })
          .catch(error => console.error('Error fetching data: ', error));
    }, []);

    return (
        <div>
            <h1>Your Meditation History</h1>
            <ul>
                {goals.map(goal => (
                    <li key={goal.id}>
                        <h2>{goal.title}</h2>
                        <p>Duration: {goal.duration} minutes</p>
                        <p>Created At: {new Date(goal.created_at).toLocaleDateString()}</p>
                        <p>Satisfaction: {['Not Effective', 'Slightly Effective', 'Moderately Effective', 'Effective', 'Highly Effective'][goal.satisfaction - 1]}</p>
                        <p>Notes: {goal.notes || 'No notes provided'}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MeditationsHistory;