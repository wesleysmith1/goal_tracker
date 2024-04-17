import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchInputs = createAsyncThunk('inputs/fetchInputs', async () => {
  const response = await fetch('/api/category', {
    headers: {
      'Accept': 'application/json'
    }
  });
  
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  
  return await response.json(); // Assuming your server responds with the list of entries
});

export const addItem = createAsyncThunk(
    'items/addItem',
    async (itemData, { rejectWithValue }) => {
        try {
            const response = await fetch('/api/items/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(itemData)
            });
            if (!response.ok) throw new Error('Network response was not ok');
            return await response.json();
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const initialState = {
  inputsList: [],
  loading: false,
  error: null,
};

const inputsSlice = createSlice({
  name: 'inputs',
  initialState,
  reducers: {
    addInput: (state, action) => {
      state.inputsList.push(action.payload);
      console.log('New state:', state.inputsList); // Check the updated state
    },
    deleteInput: (state, action) => {
      state.inputsList.splice(action.payload, 1);
    },
    editInput: (state, action) => {
      const { index, newValue } = action.payload;
      console.log('Editing index', index, 'with value', newValue);  // Check the values received
      if (index >= 0 && index < state.inputsList.length) {
        state.inputsList[index] = newValue;  // Correctly update the specific index with the new value
      }
    },
  
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchInputs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchInputs.fulfilled, (state, action) => {
        state.inputsList = action.payload;
        state.loading = false;
      })
      .addCase(fetchInputs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

// Export the actions
export const { addInput, deleteInput, editInput } = inputsSlice.actions;

// Export the reducer
export default inputsSlice.reducer;
