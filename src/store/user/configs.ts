import { API_ACTION } from "../sagas/apiActionSaga";
import { UserActionsTypes as constants } from './constants'

export const getCities = API_ACTION(constants.GET_CITIES, `get-cities`) 