import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk for fetching goals from the server
export const fetchGoals = createAsyncThunk('goals/fetchGoals', async (_, { rejectWithValue }) => {
  try {
    const response = await fetch('/api/goals/', {
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

// Async thunk for adding a new goal
export const addGoal = createAsyncThunk(
    'goals/addGoal',
    async (goalData, { rejectWithValue }) => {
        try {
            const response = await fetch('/api/goals/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(goalData)
            });
            if (!response.ok) throw new Error('Network response was not ok');
            return await response.json();
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

// Async thunk for updating a goal
export const updateGoalAPI = createAsyncThunk(
    'goals/updateGoal',
    async ({ goalId, updates }, { rejectWithValue }) => {
        try {
            const response = await fetch(`/api/goals/${goalId}`, {
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

// Async thunk for deleting a goal
export const deleteGoal = createAsyncThunk(
    'goals/deleteGoal',
    async (goalId, { rejectWithValue }) => {
        try {
            const response = await fetch(`/api/goals/${goalId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) throw new Error('Network response was not ok');
            return goalId;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

// Initial state
const initialState = {
  goalsList: [],
  loading: false,
  error: null,
};

// Slice definition
const goalsSlice = createSlice({
  name: 'goals',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGoals.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchGoals.fulfilled, (state, action) => {
        state.goalsList = action.payload;
        state.loading = false;
      })
      .addCase(fetchGoals.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(addGoal.fulfilled, (state, action) => {
        state.goalsList.push(action.payload);
      })
      .addCase(addGoal.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(updateGoalAPI.fulfilled, (state, action) => {
        const index = state.goalsList.findIndex(goal => goal.id === action.payload.id);
        if (index !== -1) {
          state.goalsList[index] = action.payload;
        }
      })
      .addCase(updateGoalAPI.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(deleteGoal.fulfilled, (state, action) => {
        const index = state.goalsList.findIndex(goal => goal.id === action.payload);
        if (index !== -1) {
          state.goalsList.splice(index, 1);
        }
      })
      .addCase(deleteGoal.rejected, (state, action) => {
        state.error = action.error.message;
      });
  }
});

export default goalsSlice.reducer;
