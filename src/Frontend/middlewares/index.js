import thunkMiddleware from 'redux-thunk' ;
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';


export const middleware = [
  promise(), thunkMiddleware, logger
];
