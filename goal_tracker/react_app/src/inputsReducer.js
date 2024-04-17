const initialState = {
    goalsList: [],
  };
  
  // Reducer function
  function goalsReducer(state = initialState, action) {
    switch (action.type) {
      case 'ADD_GOAL':
        return {
          ...state,
          goalsList: [...state.goalsList, action.payload],
        };
      case 'DELETE_GOAL':
        return {
          ...state,
          goalsList: state.goalsList.filter((_, index) => index !== action.payload),
        };
      case 'EDIT_GOAL':
        const updatedGoalsList = [...state.goalsList];
        updatedGoalsList[action.payload.index] = action.payload.value;
        return {
          ...state,
          goalsList: updatedGoalsList,
        };
      default:
        return state;
    }
  }
  
  export default goalsReducer;
  