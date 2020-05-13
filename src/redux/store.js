import { applyMiddleware, combineReducers, compose, createStore } from 'redux';

import carsReducer from './carsRedux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  cars: carsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
