import { UserActionsTypes as constants } from './constants'
import schedulerServices from '../../services/scheduler';

export function saveUser(data: any) {
    return { type: constants.SAVE_USER, payload: data };
}
export function setLoading(data: boolean) {
    return { type: constants.SET_LOADING, payload: data };
}
export function setCities(data: any) {
    return { type: constants.GET_CITIES, payload: data };
}
export function setLoadingGetCities(data: boolean) {
    return { type: constants.SET_LOADING_GET_CITIES, payload: data };
}
export function setScheduler(data: any) {
    return { type: constants.GET_SCHEDULER, payload: data };
}
export function setLoadingGetScheduler(data: boolean) {
    return { type: constants.SET_LOADING_GET_SCHEDULER, payload: data };
}

export function getCities() {
    return async (dispatch: any) => {
        dispatch(setLoadingGetCities(true))
        try{
            const response = await schedulerServices.getCities()
            dispatch(setCities(response.data))
        } catch (error) {
            console.log('error ===', error)
        }
        dispatch(setLoadingGetCities(false))
    }
}

export function getScheduler(payload: any) {
    return async (dispatch: any) => {
        dispatch(setLoadingGetScheduler(true))
        try{
            const response = await schedulerServices.getScheduler(payload)
            dispatch(setScheduler(response.data))
        } catch (error) {
            console.log('error ===', error)
        }
        dispatch(setLoadingGetScheduler(false))
    }
}