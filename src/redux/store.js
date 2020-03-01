import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist'; //allows the breowser to cache the store depending on certain configuration
import logger from 'redux-logger';
import rootReducer from './root-reducer';

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));
const persistor = persistStore(store); //is a persisted version of the store

export { store, persistor };
