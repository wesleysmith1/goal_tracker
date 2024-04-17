import React, { useState, useEffect } from 'react';

const GoalComponent = () => {
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
            <h1>Goals</h1>
            <ul>
                {goals.map(goal => (
                    <li>{goal.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default GoalComponent;