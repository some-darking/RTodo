import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../../counter/counterSlice';
import { createStore } from 'redux';
import { todosReducers } from './ToDoReduce';

export const store = createStore(todosReducers);// AddTodoItemReducer, //reducer

export interface storeType {
    storeDispatch: AppDispatch;
    storeState: RootState
}

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default storeType;
//export type AppDispatch = typeof store.dispatch



