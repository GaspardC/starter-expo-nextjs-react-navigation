
import { combineReducers } from 'redux'

import rootReducer from './rootReducer';

// REDUCERS
const reducers = { rootReducer }
const combinedReducers = combineReducers(reducers);
export default combinedReducers