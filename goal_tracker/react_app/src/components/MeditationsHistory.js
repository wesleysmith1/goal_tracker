import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMeditations } from '../reducers/meditationsSlice';

const MeditationsHistory = () => {
    const dispatch = useDispatch();
    const meditations = useSelector(state => state.meditations.meditationsList);
    const loading = useSelector(state => state.meditations.loading);
    const error = useSelector(state => state.meditations.error);

    useEffect(() => {
        dispatch(fetchMeditations());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

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