/**
 * Auth Sagas
 */
import { all, fork, put, takeEvery } from 'redux-saga/effects';

import {
    LOGIN_USER,
    LOGOUT_USER,
    SIGNUP_USER
} from 'Actions/types';

import {
    signinUserSuccess,
    signinUserFailure,
    logoutUserSuccess,
    logoutUserFailure,
} from 'Actions';

// import {
//     doAuth
// } from 'api/Auth'

/**
 * Signin User With Email & Password
 */
function* signInUserWithEmailPassword({ payload }) {
    try {
        // const signInUser = yield call(doAuth, email, password);
        const user = '11'
        yield all ([
        localStorage.setItem('user_id', user),
        yield put(signinUserSuccess(user)),
        window.location.replace('/')
        ])
        
        
    } catch (error) {
        yield put(signinUserFailure(error))
    }
}

/**
 * Signout User
 */
function* signOut() {
    try {
        // yield call(doAuth, 'test', 'test');
        localStorage.removeItem('user_id');
        yield put(logoutUserSuccess())
    } catch (error) {
        yield put(logoutUserFailure())
    }
}

/**
 * Create User In Firebase
 */
function* createUserWithEmailPassword({ payload }) {
   
}

/**
 * Signout User From Firebase
 */
export function* signOutUser() {
    yield takeEvery(LOGOUT_USER, signOut);
}

/**
 * Create User
 */
export function* createUserAccount() {
    yield takeEvery(SIGNUP_USER, createUserWithEmailPassword);
}

/**
 * Login User 
 */
export function* signInUser() {
    yield takeEvery(LOGIN_USER, signInUserWithEmailPassword);
}

/**
 * Auth Root Saga
 */
export default function* rootSaga() {
    yield all([
        fork(signInUser),
        fork(signOutUser),
        fork(createUserAccount)
    ]);
}