/**
 * Auth User Reducers
 */
import { NotificationManager } from 'react-notifications';
import {
    LOAD_DEVICE,
    LOAD_DEVICE_SUCCESS,
    LOAD_DEVICE_FAILURE,
} from 'Actions/types';

/**
 * initial auth user
 */
const INIT_STATE = {
    devices: [],
    loading: false
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case LOAD_DEVICE:
            return { ...state, loading: true };

        case LOAD_DEVICE_SUCCESS:
            return { ...state, loading: false, devices: action.payload.responses };

        case LOAD_DEVICE_FAILURE:
            NotificationManager.error(action.payload);
            return { ...state, loading: false };

        default: return { ...state };
    }
}
