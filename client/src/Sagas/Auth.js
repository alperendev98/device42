/**
 * Auth Sagas
 */
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import {history} from '../history'

import {
    LOGIN_USER,
    LOGOUT_USER,
    SIGNUP_USER,
    LOAD_INSTANCES,
    ADD_INSTANCES,
    DEL_INSTANCES,
} from 'Actions/types';

import {
    loadInstanceSuccess,
    signinUserSuccess,
    signinUserFailure,
    logoutUserSuccess,
    logoutUserFailure,
    loadData,
} from 'Actions';

import {
    doAuth,
    doLoadInstance,
    doDelInstance,
    doRegister,
    doAddInstance,
} from 'api/Auth'

/**
 * Signin User With Email & Password
 */
function* signInUserWithEmailPassword({ payload }) {
    try {
        const data = yield call(doAuth, payload.email, payload.password)
        const instances = yield call(doLoadInstance, data.user_id)
        yield all ([
            localStorage.setItem('user_id', data.user_id),
            yield put(signinUserSuccess(data)),
            yield put(loadInstanceSuccess(instances)),
            history.push('/')
        ])
        
    } catch (error) {
        
        yield put(signinUserFailure(error.response.data.message))
    }
}

function* loadInstances({ payload }) {
    try {
        let user_id = localStorage.getItem('user_id')
        const instances = yield call(doLoadInstance, user_id)
        yield all ([
            yield put(loadInstanceSuccess(instances)),
            yield put(loadData(instances, payload.type)),
        ])
        
    } catch (error) {
        
        yield put(signinUserFailure(error.response.data.message))
    }
}

function* addInstnace({ payload }) {
    try {
        let user_id = localStorage.getItem('user_id')
        yield call(doAddInstance, user_id, payload.newInstance)
        yield all ([
            yield put( {type: LOAD_INSTANCES, payload:{}}),
        ])
        
    } catch (error) {
        
        yield put(signinUserFailure(error.response.data.message))
    }
}

function* deleteInstance({ payload }) {
    try {
        let user_id = localStorage.getItem('user_id')
        yield call(doDelInstance, user_id, payload.instance_id)
        yield all ([
            yield put( {type: LOAD_INSTANCES, payload:{}}),
        ])
        
    } catch (error) {
        
        yield put(signinUserFailure(error.response.data.message))
    }
}

/**
 * Signout User
 */
function* signOut() {
    try {
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
    try {
        yield call(doRegister, payload.email, payload.password)
        yield all ([
            yield put( {type: LOGIN_USER, payload:payload}),
        ])
        
    } catch (error) {
        
        yield put(signinUserFailure(error.response.data.message))
    }
}

/**
 * Signout User From Firebase
 */
export function* signOutUser() {
    yield takeEvery(LOGOUT_USER, signOut);
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
        takeEvery(SIGNUP_USER, createUserWithEmailPassword),
        takeEvery(LOAD_INSTANCES, loadInstances),
        takeEvery(ADD_INSTANCES, addInstnace),
        takeEvery(DEL_INSTANCES, deleteInstance),
    ]);
}