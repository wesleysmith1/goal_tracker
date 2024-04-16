const initialState = {
    inputsList: [],
  };
  
  // Reducer function
  function inputsReducer(state = initialState, action) {
    switch (action.type) {
      case 'ADD_INPUT':
        return {
          ...state,
          inputsList: [...state.inputsList, action.payload],
        };
      case 'DELETE_INPUT':
        return {
          ...state,
          inputsList: state.inputsList.filter((_, index) => index !== action.payload),
        };
      case 'EDIT_INPUT':
        const updatedInputsList = [...state.inputsList];
        updatedInputsList[action.payload.index] = action.payload.value;
        return {
          ...state,
          inputsList: updatedInputsList,
        };
      default:
        return state;
    }
  }
  
  export default inputsReducer;
  