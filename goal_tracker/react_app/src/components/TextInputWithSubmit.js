import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ListItem from './ListItem'; // Adjust the path as necessary
import { addInput, editInput, deleteInput } from './actions'; // Adjust the path as necessary

function TextInputWithSubmit() {
  const [inputValue, setInputValue] = useState('');
  const inputsList = useSelector(state => state.inputsList); // Access Redux state
  const dispatch = useDispatch(); // To dispatch actions

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!inputValue.trim()) return;
    dispatch(addInput(inputValue)); // Dispatch an action to add input
    setInputValue('');
  };

  // Note: The `ListItem` component should also be adjusted to handle Redux actions if it's not already.

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter food here..."
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {inputsList.map((input, index) => (
          <li key={index}>
            <ListItem
              item={input}
              onEdit={(newValue) => dispatch(editInput(index, newValue))}
              onDelete={() => dispatch(deleteInput(index))}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TextInputWithSubmit;
