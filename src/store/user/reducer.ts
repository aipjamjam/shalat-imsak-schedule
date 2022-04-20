import {
    UserActionsTypes as constants,
    UserActions as action
} from './constants'

const INITIAL_STATE = {
    user: null,
    loading: true,
    cities: [],
    loadingCities: false,
    scheduler: [],
    loadingScheduler: false,
}

const userReducer = (state = INITIAL_STATE, action: action) => {
    switch (action.type) {
        case constants.SAVE_USER:
            return Object.assign({}, state, {
                user: action.payload,
                loading: false,
            })
        case constants.SET_LOADING:
            return Object.assign({}, state, {
                loading: action.payload
            })
        case constants.GET_CITIES:
            return Object.assign({}, state, {
                cities: action.payload
            })
        case constants.SET_LOADING_GET_CITIES:
            return Object.assign({}, state, {
                loadingCities: action.payload
            })
        case constants.GET_SCHEDULER:
            return Object.assign({}, state, {
                scheduler: action.payload
            })
        case constants.SET_LOADING_GET_SCHEDULER:
            return Object.assign({}, state, {
                loadingScheduler: action.payload
            })
        default: return state
    }
}

export default userReducer