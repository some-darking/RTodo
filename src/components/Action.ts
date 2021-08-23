import { TodoItemModel } from "./type";

export interface Action {
    readonly type: string,
    readonly payload: any
}

export const ADD_TODO_ITEM = "ADD_TODO_ITEM";//const action type
export const TOGGLE_TODO_ITEM = "TOGGLE_TODO_ITEM";

let nextTodoID: number = 0;//count simple itteration

export interface AddTodoItemAction extends Action {//?<!add item
    payload: {
        newTodo: TodoItemModel//(todo)
    }
}

export interface ToggleTodoItemAction extends Action {//
    payload: {
        removeTodoItem: number
    }
}

export const AddTodoItem = (newTodo: string): AddTodoItemAction => ({
    type: ADD_TODO_ITEM,
    payload: {
        newTodo: {
            id: nextTodoID++,
            text: newTodo,
            complete: false
        }
    }
});//app-31 addTodo

export const ToggleTodoItem = (idTodoItem: number): ToggleTodoItemAction => ({
    type: TOGGLE_TODO_ITEM,
    payload: {
        removeTodoItem: idTodoItem
    }
});



