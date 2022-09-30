import { API_ACTION } from "../sagas/apiActionSaga";
import { UserActionsTypes as constants } from './constants'

export const GET_CITIES = API_ACTION(constants.GET_CITIES)
export const GET_SCHEDULER = API_ACTION(constants.GET_SCHEDULER)