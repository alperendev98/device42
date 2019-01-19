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
} from './types';

/**
 * Redux Action To Sign in User Success
 * @param {*boolean} isBoxLayout 
 */
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

export const logoutUser = () => ({
    type: LOGOUT_USER
})

export const logoutUserSuccess = () => ({
    type: LOGOUT_USER_SUCCESS
})

export const logoutUserFailure = () => ({
    type: LOGOUT_USER_FAILURE
})
