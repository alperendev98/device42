
/**
 * Chat App Actions
 */
import {
    LOAD_ASSET,
    LOAD_ASSET_SUCCESS,
    LOAD_ASSET_FAILURE,
} from './types';

/**
 * Redux Action To Device List
 */
export const loadAsset = (instances) => ({
    type: LOAD_ASSET,
    payload: {instances}
})

export const loadAssetSuccess = () => ({
    type: LOAD_ASSET_SUCCESS
})

export const loadAssetFailure = () => ({
    type: LOAD_ASSET_FAILURE
})
