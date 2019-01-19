/**
 * Root Sagas
 */
import { all } from 'redux-saga/effects';

// sagas
import authSagas from './Auth';
import deviceSagas from './Device'

export default function* rootSaga(getState) {
    yield all([
        authSagas(),
        deviceSagas(),
    ]);
}