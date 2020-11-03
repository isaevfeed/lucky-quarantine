import {combineReducers} from 'redux';
import eventReducer from './events';
import colorReducer from './colors';
import imageReducer from './images';

const reducers = combineReducers({
    evarr: eventReducer,
    colors: colorReducer,
    images: imageReducer,
    tasks: [],
});

export default reducers;