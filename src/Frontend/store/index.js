import { createStore ,applyMiddleware } from 'redux'
import { rootReducer } from '../reducer'
import { middleware } from  '../middlewares'

const Middleware = applyMiddleware(...middleware);
const store = createStore(rootReducer,Middleware );

export default store;