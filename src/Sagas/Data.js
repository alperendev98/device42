/**
 * Device Sagas
 */
import config from 'config.json';
import { all, call, put, takeEvery } from 'redux-saga/effects';

import {
    LOAD_DEVICE,
    LOAD_DEVICE_SUCCESS,
    LOAD_DEVICE_FAILURE,
    LOAD_ASSET,
    LOAD_ASSET_SUCCESS,
    LOAD_ASSET_FAILURE,
} from 'Actions/types';

import {
    doLoadData
} from 'api/Data'
/**
 * Load All Device
 */

function* loadDevice({ payload }) {
    try {
        
        const responses  = yield payload.instances.map(p => call(doLoadData, p, config.doql_divice_all))
        let data = { 'instances': payload.instances, 'data': responses}

        yield all ([
            yield put( {type: LOAD_DEVICE_SUCCESS, payload:{data}}),
        ])

    } catch (error) {
        let message = 'Something went wrong'
        yield put( {type: LOAD_DEVICE_FAILURE, payload: message})
    }
}

function* loadAsset({ payload }) {
    try {
        
        const responses  = yield payload.instances.map(p => call(doLoadData, p, config.doql_assets))
        let data = { 'instances': payload.instances, 'data': responses}

        yield all ([
            yield put( {type: LOAD_ASSET_SUCCESS, payload:{data}}),
        ])

    } catch (error) {
        let message = 'Something went wrong'
        yield put( {type: LOAD_ASSET_FAILURE, payload: message})
    }
}

/**
 * Auth Root Saga
 */
export default function* rootSaga() {
    yield all([
        takeEvery(LOAD_DEVICE, loadDevice),
        takeEvery(LOAD_ASSET, loadAsset),
    ]);
}
