import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
const logger = createLogger();

import registerFormReducer from './reducers/registerFormReducer';


const store = createStore(registerFormReducer,applyMiddleware(logger));

export default store;
