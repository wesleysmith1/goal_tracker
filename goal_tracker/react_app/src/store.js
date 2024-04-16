import { createStore } from 'redux';
import inputsReducer from './inputsReducer';

const store = createStore(inputsReducer);

export default store;
