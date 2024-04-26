import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk for fetching meditations from the server
export const fetchMeditations = createAsyncThunk('meditations/fetchMeditations', async (_, { rejectWithValue }) => {
  try {
    const response = await fetch('/api/meditations/', {
      headers: {
        'Accept': 'application/json'
      }
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

// Async thunk for adding a new meditation
export const addMeditation = createAsyncThunk(
    'meditations/addMeditation',
    async (meditationData, { rejectWithValue }) => {
        try {
            const response = await fetch('/api/meditations/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
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

// Async thunk for updating a mediation
export const updateMeditationAPI = createAsyncThunk(
    'meditations/updateMeditation',
    async ({ meditationId, updates }, { rejectWithValue }) => {
        try {
            const response = await fetch(`/api/meditations/${updates.meditationId}/`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
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

// Async thunk for deleting a meditation
export const deleteMeditation = createAsyncThunk(
    'meditations/deleteMeditation',
    async (meditationId, { rejectWithValue }) => {
        try {
            const response = await fetch(`/api/meditations/${meditationId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) throw new Error('Network response was not ok');
            return meditationId;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

// Initial state
const initialState = {
  meditationsList: [],
  loading: false,
  error: null,
};

// Slice definition
const meditationsSlice = createSlice({
  name: 'meditations',
  initialState,
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
        const index = state.meditationsList.findIndex(meditation => meditation.id === action.payload);
        if (index !== -1) {
          state.meditationsList.splice(index, 1);
        }
      })
      .addCase(deleteMeditation.rejected, (state, action) => {
        state.error = action.error.message;
      });
  }
});

export default meditationsSlice.reducer;
