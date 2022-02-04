import {combineReducers} from 'redux';
import trainerReducer from './TrainerReducer';

const rootReducer = combineReducers({todos: trainerReducer});

export default rootReducer;