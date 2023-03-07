import { createStore, applyMiddleware, compose } from 'redux';

import reducer from '../reducers';

import auth from '../middlewares/auth';

const middlewares = applyMiddleware(
  auth,
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(middlewares);

const store = createStore(reducer, enhancers);

export default store;
