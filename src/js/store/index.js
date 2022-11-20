import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
const reducer = combineReducers({
  // here we will be adding reducers
})
const middlewares=[thunkMiddleware];
const store = configureStore({
  reducer,
},applyMiddleware(...middlewares))

export default store;