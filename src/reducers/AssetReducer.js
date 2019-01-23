/**
 * Auth User Reducers
 */
import { NotificationManager } from 'react-notifications';
import {
    LOAD_ASSET,
    LOAD_ASSET_SUCCESS,
    LOAD_ASSET_FAILURE,
} from 'Actions/types';

/**
 * initial auth user
 */
const INIT_STATE = {
    assets: [],
    loading: false
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case LOAD_ASSET:
            return { ...state, loading: true };

        case LOAD_ASSET_SUCCESS:
            return { ...state, loading: false, assets: action.payload.data };

        case LOAD_ASSET_FAILURE:
            NotificationManager.error(action.payload);
            return { ...state, loading: false };

        default: return { ...state };
    }
}
