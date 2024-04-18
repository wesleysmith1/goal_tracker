import React, { useState } from 'react';
import { TextField, Button, Card, CardActions, CardContent, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';

function ListItem({ item, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValues, setEditValues] = useState({
    title: item.title,
    duration: item.duration,
    notes: item.notes
  });

  const handleEditChange = (field, value) => {
    setEditValues(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    onEdit(editValues); // Dispatch the update action
    setIsEditing(false); // Exit editing mode
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
            onChange={(e) => handleEditChange('title', e.target.value)}
            margin="normal"
          />
          <TextField
            label="Duration (minutes)"
            fullWidth
            type="number"
            variant="outlined"
            value={editValues.duration}
            onChange={(e) => handleEditChange('duration', e.target.value)}
            margin="normal"
          />
          <TextField
            label="Notes"
            fullWidth
            multiline
            rows={3}
            variant="outlined"
            value={editValues.notes}
            onChange={(e) => handleEditChange('notes', e.target.value)}
            margin="normal"
          />
        </CardContent>
      ) : (
        <CardContent>
          <h3>{item.title}</h3>
          <p>Duration: {item.duration} minutes</p>
          <p>Notes: {item.notes}</p>
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
