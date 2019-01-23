/**
 * App Reducers
 */
import { combineReducers } from 'redux';
import settings from './settings';
import authUserReducer from './AuthUserReducer';
import deviceReducer from './DeviceReducer'
import AssetReducer from './AssetReducer';

const reducers = combineReducers({
  settings,
  authUser: authUserReducer,
  allDevice: deviceReducer,
  allAsset:AssetReducer, 
});

export default reducers;
