import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMeditations } from '../reducers/meditationsSlice';
import { Button, CircularProgress, List, ListItem, ListItemText, Typography, Paper } from '@mui/material';

const MeditationsHistory = () => {
    const dispatch = useDispatch();
    const meditations = useSelector(state => state.meditations.meditationsList);
    const loading = useSelector(state => state.meditations.loading);
    const error = useSelector(state => state.meditations.error);

    useEffect(() => {
        dispatch(fetchMeditations());
    }, [dispatch]);

    const handleRefresh = () => {
        dispatch(fetchMeditations());
    };

    if (loading) return <CircularProgress />;
    if (error) return (
        <div>
            <Typography color="error">Error: {error}</Typography>
            <Button onClick={handleRefresh}>Retry</Button>
        </div>
    );

    return (
        <Paper style={{ padding: '20px', margin: '20px' }}>
            <Typography variant="h4" gutterBottom>
                Your Meditation History
            </Typography>
            <Button variant="contained" color="primary" onClick={handleRefresh}>
                Refresh
            </Button>
            <List>
                {meditations.map(meditation => (
                    <ListItem key={meditation.id} divider>
                        <ListItemText
                            primary={meditation.title}
                            secondary={`Duration: ${meditation.duration} minutes - Created At: ${new Date(meditation.created_at).toLocaleDateString()}`}
                        />
                        <Typography variant="body2">
                            Satisfaction: {['Not Effective', 'Slightly Effective', 'Moderately Effective', 'Effective', 'Highly Effective'][meditation.satisfaction - 1]}
                        </Typography>
                        <Typography variant="body2">
                            Notes: {meditation.notes || 'No notes provided'}
                        </Typography>
                    </ListItem>
                ))}
            </List>
        </Paper>
    );
};

export default MeditationsHistory;
