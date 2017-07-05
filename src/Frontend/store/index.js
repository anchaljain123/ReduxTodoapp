import { createStore ,applyMiddleware } from 'redux'
import { rootReducer } from '../reducer'
import { middleware } from  '../middlewares'
const Middleware = applyMiddleware(...middleware);


const initialState = {
  intl: {
    locale: 'en',
    messages: {
      'Hello': 'Welcome',
    },
  },

  // ...other initialState
};


const store = createStore(rootReducer,Middleware );

/*
store.dispatch(updateIntl({
  locale,
  messages,
}))
*/

export default store;