import React, { useState } from 'react';

function ListItem({ item, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(item);

  const handleEditChange = (event) => {
    setEditValue(event.target.value);
  };

  const handleSave = () => {
    onEdit(editValue);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <input type="text" value={editValue} onChange={handleEditChange} />
      ) : (
        <span>{item}</span>
      )}
      {isEditing ? (
        <button onClick={handleSave}>Save</button>
      ) : (
        <button onClick={() => setIsEditing(true)}>Edit</button>
      )}
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default ListItem;
