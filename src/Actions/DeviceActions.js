/**
 * Chat App Actions
 */
import {
    LOAD_DEVICE,
    LOAD_DEVICE_SUCCESS,
    LOAD_DEVICE_FAILURE,
} from './types';

/**
 * Redux Action To Device List
 */
export const loadDevice = () => ({
    type: LOAD_DEVICE,
    payload: {}
})

export const loadDeviceSuccess = () => ({
    type: LOAD_DEVICE_SUCCESS
})

export const loadDeviceFailure = () => ({
    type: LOAD_DEVICE_FAILURE
})
