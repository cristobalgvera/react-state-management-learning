import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { counterReducer } from './counter/counterReducer';

const reducer = combineReducers({
  counter: counterReducer,
});

const store = createStore(reducer, devToolsEnhancer({}));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
