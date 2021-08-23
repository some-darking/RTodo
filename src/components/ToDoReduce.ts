import React from "react";
import { Action, AddTodoItemAction, ADD_TODO_ITEM, ToggleTodoItemAction, TOGGLE_TODO_ITEM } from "./Action";
import { TodoContexModel, TodoItemModel, TodoState } from "./type";


export const initialState: TodoState = {//начальное состояние списка
    TodoItems: []
}

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
    /*...state,.TodoItems.map((TodoItem: TodoItemModel)=>{
        if (TodoItem.id === action.payload.removeTodoItem) {
            return{
                ...TodoItem, complete: !TodoItem.complete 
            };
            return TodoItem;
        }
    }
    )*/
    return {
        ...state, TodoItems: state.TodoItems.map((TodoItem: TodoItemModel) =>
            (TodoItem.id === action.payload.removeTodoItem) ? { ...TodoItem, complete: !TodoItem.complete } : TodoItem)
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