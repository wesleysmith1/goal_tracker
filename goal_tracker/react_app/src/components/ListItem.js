import React, { useState } from 'react';

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
    <div>
      {isEditing ? (
        <div>
          <input type="text" value={editValue} onChange={handleEditChange} />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <span>{item}</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default ListItem;
