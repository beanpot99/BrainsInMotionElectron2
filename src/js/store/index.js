import { configureStore, applyMiddleware,combineReducers } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import clinicFormReducer from '../reducers/clinicForm';
import eiFormReducer from '../reducers/eiForm';
// const reducer = combineReducers({
//   // here we will be adding reducers
// })
const middlewares=[thunkMiddleware];
const store = configureStore(
  
    educers({
    clinicforms: clinicFormReducer,
    eiForms:eiFormReducer
  })
  ,applyMiddleware(...middlewares))

export default store;