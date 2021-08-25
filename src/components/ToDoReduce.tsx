import React, { useReducer, ReactPropTypes, Component } from "react";
//import { AddTodoItemAction, ADD_TODO_ITEM, deleteTodoAction } from "./Action";
import { TodoContexModel, TodoItemModel } from "./type";//ToggleTodoItemAction TOGGLE_TODO_ITEM
//import PropTypes from "prop-types";
import { connect } from "react-redux";
import { combineReducers, Reducer } from "redux";
import { AppDispatch } from "./store";
import { AddTodoAction } from "./Action";


import { Todo, ActionTypes, Action } from "./Action";


export const todosReducers = (state: Todo[] = [], action: Action) => {
    switch (action.type) {
        case ActionTypes.fetchTodos:
            return action.payload;
        case ActionTypes.deleteTodo:
            return [...state.filter((todo) => todo.id !== action.payload)]
        //state.filter((todo: Todo) => todo.id !== action.payload); // action: DeleteTodoAction
        case ActionTypes.addTodos:
            return [...state.concat(action.payload.todo)];

        default:
            return [...state];
    }
}
export interface TodoState {
    TodoItems: TodoItemModel[]//! TodoListComp
}
export const initialState: TodoState = {//начальное состояние списка
    TodoItems: []
}
export const AddTodoItemReducer = (state: Todo[], action: AddTodoAction) => {

    return {

    }
}/*
reducer: (state, action: PayloadAction<TodoItemModel>) => {
    state.push(action.payload);
},
    prepare: (text: string) => ({//text=Description
        payload: {
            id: uuidv4(),
            text,
            complete: false,
        } as TodoItemModel,
    }),*/

export interface StoreState {
    todos: Todo[];
};
export const reducers = combineReducers<StoreState>({
    todos: todosReducers
});
/*


//import storeDisp
export interface TodoStateModel {
    state: { TodoItems: TodoItemModel[] },
    dispatch: any
}
export const initialState = {//начальное состояние списка
    TodoItems: []
}
export const TodoStates: React.FC<TodoStateModel> =
    Reducer({
        state: initialState,
        dispatch: null
    })
export const TodoState = useReducer(state, dispatch)=> {
    TodoItems: TodoItemModel[]//! TodoListComp
}
export type reducerType = string[];//type complete and TodoState

/*
export type completee = string[];
const initialStatee: string[] = [];

export const completeReducer: Reducer<completee,
    deleteTodoAction> =
    (state = initialStatee, action) => {
        switch (action.type) {
            /* case "ADD_TODO_ITEM":
                 return [...state, action.todo];
             case "TOGGLE_TODO_ITEM":
                 return;*/
/*   case "DELETE_TODO":
return [...state.filter((todo) => todo !== action.todo)];
   default:
return;
}
};
export default completeReducer;
//?
export const counterReducer: Reducer<complete,
//action ToggleTodoItemAction
AddTodoItemAction> = (state = initialState, action) => {
switch (action.type) {
   case "ADD_TODO_ITEM":
       return;
   case "TOGGLE_TODO_ITEM":
       return;
   case "DELETE_TODO":
       return;
   default:
       return;
}
};
export const TodoContex: React.Context<TodoContexModel> = React.createContext({
state: initialState,
dispatch: null
});
export const AddTodoItemReducer = (state: TodoState, action: AddTodoItemAction) => {
return {
...state, TodoItems: [...state.TodoItems, action.payload.newTodo]
}
}
//переключатель
export const ToggleTodoItemReducer = (state: TodoState, action: ToggleTodoItemAction) => {//!app toggleTodo 50%50
return {
...state, TodoItems: state.TodoItems.map((TodoItem: TodoItemModel) =>
   (TodoItem.id == action.payload.removeTodoItem) ? { ...TodoItem, complete: !TodoItem.complete } : TodoItem)
}
}

export function TodoReducer(state: TodoState, action: Action): TodoState {//root корневой
switch (action.type) {
case ADD_TODO_ITEM:
   return AddTodoItemReducer(state, action);
case TOGGLE_TODO_ITEM:
   return ToggleTodoItemReducer(state, action);
default: return state;
}
}
export default combineReducers({ counterReducer });*/