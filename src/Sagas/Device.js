/**
 * Device Sagas
 */
import { all, call, put, takeEvery } from 'redux-saga/effects';

import {
    LOAD_DEVICE,
    LOAD_DEVICE_SUCCESS,
    LOAD_DEVICE_FAILURE,
} from 'Actions/types';

import {
    doLoadDevice
} from 'api/Device'
/**
 * Load All Device
 */

function* loadDevice({ payload }) {
    try {
        
        const responses  = yield payload.instances.map(p => call(doLoadDevice, p))
        let data = { 'instances': payload.instances, 'data': responses}

        yield all ([
            yield put( {type: LOAD_DEVICE_SUCCESS, payload:{data}}),
        ])

    } catch (error) {
        let message = 'Something went wrong'
        yield put( {type: LOAD_DEVICE_FAILURE, payload: message})
    }
}

/**
 * Auth Root Saga
 */
export default function* rootSaga() {
    yield all([
        takeEvery(LOAD_DEVICE, loadDevice),
    ]);
}
