import { UserActionsTypes as constants } from './constants'

export function saveUser(data: any) {
    return { type: constants.SAVE_USER, payload: data };
}
export function setLoading(data: boolean) {
    return { type: constants.SET_LOADING, payload: data };
}