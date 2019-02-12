/**
 * Chat App Actions
 */
import {
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    LOGOUT_USER_SUCCESS,
    LOGOUT_USER_FAILURE,
    LOGOUT_USER,
    LOAD_INSTANCE_SUCCESS,
    LOAD_INSTANCES,
    ADD_INSTANCES,
    SIGNUP_USER,
    DEL_INSTANCES,
} from './types';

/**
 * Redux Action To Sign in User Success
 * @param {*boolean} isBoxLayout 
 */

export const loadInstanceSuccess = (instances) => ({
    type: LOAD_INSTANCE_SUCCESS,
    payload: instances
})
 
export const signinUserSuccess = (user) => ({
    type: LOGIN_USER_SUCCESS,
    payload: user
});

export const signinUserFailure = (error) => ({
    type: LOGIN_USER_FAILURE,
    payload: error
});

export const signinUser = (email, password) => ({
    type: LOGIN_USER,
    payload: {email, password}
})

export const signupUser = (email, password) => ({
    type: SIGNUP_USER,
    payload: {email, password}
})

export const logoutUser = () => ({
    type: LOGOUT_USER
})

export const logoutUserSuccess = () => ({
    type: LOGOUT_USER_SUCCESS
})

export const logoutUserFailure = () => ({
    type: LOGOUT_USER_FAILURE
})

export const loadInstances = () => ({
    type: LOAD_INSTANCES
})

export const addNewInstance = (newInstance) => ({
    type: ADD_INSTANCES,
    payload: { newInstance }
})

export const deleteInstance = (instance_id) => ({
    type: DEL_INSTANCES,
    payload: { instance_id }
})

