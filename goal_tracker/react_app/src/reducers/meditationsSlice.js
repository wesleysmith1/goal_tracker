import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Fetching meditations with authentication
export const fetchMeditations = createAsyncThunk(
  'meditations/fetchMeditations', 
  async (_, { getState, rejectWithValue }) => {
    const token = getState().auth.token; // Assuming your auth state has the token
    try {
      const response = await fetch('/api/meditations/', {
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}` // Securely passing the token
        }
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Adding a new meditation with authentication
export const addMeditation = createAsyncThunk(
  'meditations/addMeditation',
  async (meditationData, { getState, rejectWithValue }) => {
    const token = getState().auth.token;
    try {
      const response = await fetch('/api/meditations/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(meditationData)
      });
      if (!response.ok) throw new Error('Network response was not ok');
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Updating a meditation
export const updateMeditationAPI = createAsyncThunk(
  'meditations/updateMeditation',
  async ({ meditationId, updates }, { getState, rejectWithValue }) => {
    const token = getState().auth.token;
    try {
      const response = await fetch(`/api/meditations/${meditationId}/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(updates)
      });
      if (!response.ok) throw new Error('Network response was not ok');
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Deleting a meditation
export const deleteMeditation = createAsyncThunk(
  'meditations/deleteMeditation',
  async (meditationId, { getState, rejectWithValue }) => {
    const token = getState().auth.token;
    try {
      const response = await fetch(`/api/meditations/${meditationId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      if (!response.ok) throw new Error('Network response was not ok');
      return meditationId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Meditations slice definition
const meditationsSlice = createSlice({
  name: 'meditations',
  initialState: {
    meditationsList: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMeditations.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMeditations.fulfilled, (state, action) => {
        state.meditationsList = action.payload;
        state.loading = false;
      })
      .addCase(fetchMeditations.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(addMeditation.fulfilled, (state, action) => {
        state.meditationsList.push(action.payload);
      })
      .addCase(addMeditation.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(updateMeditationAPI.fulfilled, (state, action) => {
        const index = state.meditationsList.findIndex(meditation => meditation.id === action.payload.id);
        if (index !== -1) {
          state.meditationsList[index] = action.payload;
        }
      })
      .addCase(updateMeditationAPI.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(deleteMeditation.fulfilled, (state, action) => {
        state.meditationsList = state.meditationsList.filter(meditation => meditation.id !== action.payload);
      })
      .addCase(deleteMeditation.rejected, (state, action) => {
        state.error = action.error.message;
      });
  }
});

export default meditationsSlice.reducer;
