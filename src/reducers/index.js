/**
 * App Reducers
 */
import { combineReducers } from 'redux';
import settings from './settings';
import authUserReducer from './AuthUserReducer';
import DataReducer from './DataReducer';

const reducers = combineReducers({
  settings,
  authUser: authUserReducer,
  allData: DataReducer,
});

export default reducers;
