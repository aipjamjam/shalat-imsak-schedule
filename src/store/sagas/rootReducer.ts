import { combineReducers } from 'redux'
import userReducer from '../user/reducer';

const reducers = {
    user: userReducer,
}

const rootReducer = combineReducers(reducers)

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer