import { call, put, takeLatest } from 'redux-saga/effects'
import { GET_CITIES, GET_SCHEDULER } from './configs'
import { api, endpoint } from '../../services'
import { publicAction } from '../sagas/publicAction'

function* getCities() {
    try {
        const { status, data } = yield call(api.get, endpoint._getCities)
        if (status == 200) {
            yield put(publicAction(GET_CITIES.SUCCESS, data.data))
        }
        else yield put(publicAction(GET_CITIES.FAILED, data.message))
    } catch (error) {
        console.log('error === ', error)
    }
}

function* getScheduler(payload: any) {
    try {
        const { status, data } = yield call(api.post, endpoint._getImsak, payload.payload)
        if (status == 200) {
            yield put(publicAction(GET_SCHEDULER.SUCCESS, data.data))
        }
        else yield put(publicAction(GET_SCHEDULER.FAILED, data.message))
    } catch (error) {
        console.log('error === ', error)
    }
}

export const userSaga = [
    takeLatest(GET_CITIES.FETCH, getCities),
    takeLatest(GET_SCHEDULER.FETCH, getScheduler),
]