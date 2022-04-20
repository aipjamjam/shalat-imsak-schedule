import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { expoLogger } from 'expo-redux-logger'
import rootReducer from './sagas/rootReducer'

const midleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(midleware, expoLogger))

export default store