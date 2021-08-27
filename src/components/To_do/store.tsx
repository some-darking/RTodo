import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../../../counter/counterSlice';

import { reducers, todosReducers } from './ToDoReduce';
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

//export const store = createStore(todosReducers);// AddTodoItemReducer, //reducer
export const store = createStore(reducers, applyMiddleware(thunk));

export interface storeType {
    storeDispatch: AppDispatch;
    storeState: RootState
}

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default storeType;
//export type AppDispatch = typeof store.dispatch



