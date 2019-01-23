/**
 * Root Sagas
 */
import { all } from 'redux-saga/effects';

// sagas
import authSagas from './Auth';
import dataSagas from './Data'

export default function* rootSaga(getState) {
    yield all([
        authSagas(),
        dataSagas(),
    ]);
}