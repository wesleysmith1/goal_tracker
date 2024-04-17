import { configureStore } from '@reduxjs/toolkit';
import goalsReducer from '../reducers/goalsSlice';
// Other reducers

const store = configureStore({
  reducer: {
    goals: goalsReducer,
    // Add other slices as needed
  },
});

export default store