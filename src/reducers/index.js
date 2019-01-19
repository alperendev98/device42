/**
 * App Reducers
 */
import { combineReducers } from 'redux';
import settings from './settings';
import authUserReducer from './AuthUserReducer';
import deviceReducer from './DeviceReducer'

const reducers = combineReducers({
  settings,
  authUser: authUserReducer,
  allDevice: deviceReducer,
});

export default reducers;
