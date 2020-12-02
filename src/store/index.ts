import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import thunkMiddleware from 'redux-thunk';
import { authReducer } from '../reducers/auth';
import { userReducer } from '../reducers/user';

const rootReducer = combineReducers({
  auth: authReducer,
  userReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const middlewares = [thunkMiddleware, logger];
  const store = createStore(
    rootReducer, {}, applyMiddleware(...middlewares)
  );

  return store;
}
