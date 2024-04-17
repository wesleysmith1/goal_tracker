import React, { useState, useEffect } from 'react';

function ListItem({ item, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(item);

  useEffect(() => {
    setEditValue(item);  // Ensure editValue is reset when item changes
  }, [item]);

  const handleEditChange = (event) => {
    setEditValue(event.target.value);
  };

  const handleSave = () => {
    console.log('Saving with value:', editValue);  // Ensure this logs the expected value
    onEdit(editValue);
    setIsEditing(false);
  }

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
