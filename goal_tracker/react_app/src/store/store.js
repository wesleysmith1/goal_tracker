import { configureStore } from '@reduxjs/toolkit';
import meditationsReducer from '../reducers/meditationsSlice';
import authReducer from '../reducers/authSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    meditations: meditationsReducer,
  },
});

export default store