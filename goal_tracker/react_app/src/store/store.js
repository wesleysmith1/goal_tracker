import { configureStore } from '@reduxjs/toolkit';
import meditationsReducer from '../reducers/meditationsSlice';
// Other reducers

const store = configureStore({
  reducer: {
    meditations: meditationsReducer,
    // Add other slices as needed
  },
});

export default store