/**
 * Chat App Actions
 */
import {
    LOAD_DATA,
    LOAD_DATA_SUCCESS,
    LOAD_DATA_FAILURE,
} from './types';

/**
 * Redux Action To Device List
 */
export const loadData = (instances, type) => ({
    type: LOAD_DATA,
    payload: { instances, type }
})

export const loadDataSuccess = () => ({
    type: LOAD_DATA_SUCCESS
})

export const loadDataFailure = () => ({
    type: LOAD_DATA_FAILURE
})
