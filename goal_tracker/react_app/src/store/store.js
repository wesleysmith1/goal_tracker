import { configureStore } from '@reduxjs/toolkit';
import inputsReducer from '../reducers/inputsSlice';
// Other reducers

const store = configureStore({
  reducer: {
    inputs: inputsReducer,
    // Add other slices as needed
  },
});

export default store