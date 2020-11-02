import {combineReducers} from 'redux';
import eventReducer from './events';

const reducers = combineReducers({
    evarr: eventReducer,
    tasks: [],
});

export default reducers;