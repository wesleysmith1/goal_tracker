import React, { useState } from 'react';
import { TextField, Button, Card, CardActions, CardContent, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';

function ListItem({ item, index, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(item);

  const handleEditChange = (event) => {
    setEditValue(event.target.value);
  };

  const handleSave = () => {
    onEdit(editValue); // Dispatch the update action
    setIsEditing(false); // Exit editing mode
  };

  return (
    <Card variant="outlined" style={{ margin: '10px' }}>
      {isEditing ? (
        <CardContent>
          <TextField
            fullwidth="true"
            variant="outlined"
            value={editValue}
            onChange={handleEditChange}
            size="small"
          />
        </CardContent>
      ) : (
        <CardContent>
          <span>{item}</span>
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
        <IconButton onClick={onDelete} aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default ListItem;
