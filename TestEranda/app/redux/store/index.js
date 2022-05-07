import {persistStore, persistReducer} from 'redux-persist';
import {configureStore} from '@reduxjs/toolkit';
import { combineReducers } from 'redux'
import authReducer from '../reducers/authReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger';
import sagas from '../sagas';

///DEFINE ALL REDUCERS HERE
const reducers = combineReducers({
  auth: authReducer,
});

///PERSIST CONFIGURATION
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
  blacklist: [],
};

///CREATE STORE
const middleware = [];
const sagaMiddleware = createSagaMiddleware();

middleware.push(sagaMiddleware);

// middleware.push(createLogger()); //NOTE Remove redux logger in live release
if (__DEV__) {
  middleware.push(createLogger());
}

const cReducers = persistReducer(persistConfig, reducers);
const enhancers = [...middleware];
const store  = configureStore({
  reducer: cReducers,
  middleware: enhancers,
  
});

const persistor = persistStore(store);

sagaMiddleware.run(sagas);
export {store, persistor};

