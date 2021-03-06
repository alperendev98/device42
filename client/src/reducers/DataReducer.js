/**
 * Auth User Reducers
 */
import { NotificationManager } from 'react-notifications';
import {
    LOAD_DATA,
    LOAD_DATA_SUCCESS,
    LOAD_DATA_FAILURE,
} from 'Actions/types';

/**
 * initial auth user
 */
const INIT_STATE = {
    data: [],
    loading: false,
    columns: [],
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case LOAD_DATA:
            return { ...state, loading: true, data: null, columns: null };

        case LOAD_DATA_SUCCESS:
            return { ...state, loading: false, data: action.payload.data, columns: action.payload.columns };

        case LOAD_DATA_FAILURE:
            NotificationManager.error(action.payload);
            return { ...state, loading: false };

        default: return { ...state };
    }
}
