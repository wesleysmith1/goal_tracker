import React, { useState } from 'react';
import { TextField, Card, CardActions, CardContent, IconButton, MenuItem } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';

function ListItem({ item, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValues, setEditValues] = useState({
    meditationId: item.id,
    title: item.title,
    duration: item.duration,
    satisfaction: item.satisfaction || 3,  // Default to 3 if undefined
    notes: item.notes,
    created_at: item.created_at  // Include created_at date
  });

  const handleEditChange = (field) => (event) => {
    const newValue = event.target.value;
    setEditValues(prev => ({ ...prev, [field]: newValue }));
  };

  const handleSave = () => {
    onEdit(editValues);
    setIsEditing(false);
  };

  // Helper to convert satisfaction number to emoji label
  const satisfactionToLabel = {
    1: 'Very Unsatisfied 😟',
    2: 'Unsatisfied 😕',
    3: 'Neutral 😐',
    4: 'Satisfied 😊',
    5: 'Very Satisfied 😁'
  };

  return (
    <Card variant="outlined" style={{ margin: '10px' }}>
      {isEditing ? (
        <CardContent>
          <TextField
            label="Title"
            fullWidth
            variant="outlined"
            value={editValues.title}
            onChange={handleEditChange('title')}
            margin="normal"
          />
          <TextField
            label="Duration (minutes)"
            fullWidth
            type="number"
            variant="outlined"
            value={editValues.duration}
            onChange={handleEditChange('duration')}
            margin="normal"
          />
          <TextField
            label="Satisfaction"
            select
            value={editValues.satisfaction}
            onChange={handleEditChange('satisfaction')}
            fullWidth
            margin="normal"
          >
            {Object.entries(satisfactionToLabel).map(([value, label]) => (
              <MenuItem key={value} value={value}>
                {label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label="Notes"
            fullWidth
            multiline
            rows={3}
            variant="outlined"
            value={editValues.notes}
            onChange={handleEditChange('notes')}
            margin="normal"
          />
          <TextField
            label="Created Date"
            fullWidth
            type="date"
            variant="outlined"
            value={editValues.created_at.slice(0, 10)} // Ensure date format compatibility
            onChange={handleEditChange('created_at')}
            margin="normal"
          />
        </CardContent>
      ) : (
        <CardContent>
          <h3>{item.title}</h3>
          <p>Duration: {item.duration} minutes</p>
          <p>Satisfaction: {satisfactionToLabel[item.satisfaction]}</p>
          <p>Notes: {item.notes}</p>
          <p>Date: {new Date(item.created_at).toLocaleDateString()}</p>
        </CardContent>
      )}
      <CardActions>
        {isEditing ? (
          <IconButton onClick={handleSave} aria-label="save">
            <SaveIcon />
          </IconButton>
        ) : (
          <IconButton onClick={() => setIsEditing(true)} aria-label="edit">
            <EditIcon />
          </IconButton>
        )}
        <IconButton onClick={() => onDelete(item.id)} aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default ListItem;
