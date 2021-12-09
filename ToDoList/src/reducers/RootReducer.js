import {combineReducers} from 'redux';
import todoReducer from './ToDoReducer';

const rootReducer = combineReducers({todos: todoReducer});

export default rootReducer;