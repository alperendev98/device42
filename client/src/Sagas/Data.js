/**
 * Device Sagas
 */
import { all, call, put, takeEvery } from 'redux-saga/effects';

import {
    LOAD_DATA,
    LOAD_DATA_SUCCESS,
    LOAD_DATA_FAILURE,    
} from 'Actions/types';

import {
    doLoadData
} from 'api/Data'
/**
 * Load All Device
 */

import {getDoql} from 'Util/TableColumn'

function* loadData({ payload }) {
    try {
        let doql = getDoql(payload.type)
        
        const responses  = yield payload.instances.map(p => call(doLoadData, p, doql))
        
        let data = [] 
        for (let i = 0; i < payload.instances.length; i++) {
            let item = responses[i]
            for (let j = 0; j < item.length; j ++) {
                let subitem = Object.values(item[j])
                
                let subdata =[]

                subdata.push(payload.instances[i].name, payload.instances[i].server_url)

                subdata = subdata.concat(subitem)

                data.push(subdata)
            }
        }

        yield all ([
            yield put( {type: LOAD_DATA_SUCCESS, payload:{data}}),
        ])

    } catch (error) {
        let message = 'Something went wrong'
        yield put( {type: LOAD_DATA_FAILURE, payload: message})
    }
}

/**
 * Auth Root Saga
 */
export default function* rootSaga() {
    yield all([
        takeEvery(LOAD_DATA, loadData),
    ]);
}
