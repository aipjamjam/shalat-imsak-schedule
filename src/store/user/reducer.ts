import {
    UserActionsTypes as constants,
    UserActions as action
} from './constants'
import { GET_CITIES } from './configs'

const INITIAL_STATE = {
    user: null,
    loading: true,
    cities: [],
    loadingCities: false,
    scheduler: [],
    loadingScheduler: false,
    citySelected: 'kota-jakarta',
}

const userReducer = (state = INITIAL_STATE, action: action) => {
    switch (action.type) {
        case constants.SAVE_USER: return { ...state, user: action.payload, loading: false, }
        case constants.SET_LOADING: return { ...state, loading: action.payload }

        case GET_CITIES.FETCH: return { ...state, loadingCities: true }
        case GET_CITIES.FAILED: return { ...state, loadingCities: false }
        case GET_CITIES.SUCCESS: return { ...state, loadingCities: false, cities: action.payload }

        default: return state
    }
}

export default userReducer