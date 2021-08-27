import axios from "axios";
import { Dispatch } from "redux";

import { AddTodo, complete, TodoItemModel } from "./type";
let nextTodoID: number = 0;//count simple itteration


export interface Todo {
    id: number;
    text: string;
    completed: boolean;
  }
export enum ActionTypes {
    fetchTodos,
    deleteTodo,
    addTodos,
    toggleTodos
  }
 
  export interface FetchTodosAction {
    type: ActionTypes.fetchTodos;
    payload: Todo[];
  }
  
  export interface DeleteTodoAction {//temp
    type: ActionTypes.deleteTodo;
    payload: number;
  }
  export type Action = FetchTodosAction | DeleteTodoAction|AddTodoAction;

//action
  export const deleteTodo = (id: number): DeleteTodoAction => {
    return {
        type: ActionTypes.deleteTodo,
        payload: id
    }
}
export interface AddTodoAction  {
    type:ActionTypes.addTodos;
    payload:{todo: Todo};
}


export const addTodos=(todo:string)=>{
    return {
        type: ActionTypes.addTodos,
        payload: {todo: {
            id: nextTodoID++,
                text: todo,
                complete: false
            }
        }
    }
}
export interface ToggleTodoAction {
    type: ActionTypes.toggleTodos
}
export const toggleTodos=(todo:boolean)=>{
    return{
        type: ActionTypes.toggleTodos
    }
}


const url = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = () => {
    return async (dispatch: Dispatch) => {
        const response = await fetch(url, {method : "GET"})//await axios.get<Todo[]>(url);
       
           
        dispatch<FetchTodosAction>({
            type: ActionTypes.fetchTodos,
            payload: (response as any).data
        });
    };
};

  /*
  export interface Action {
    readonly type: string,
    readonly payload: any
}

//export interface deleteTodoAction {}
export interface deleteTodoAction {
    type: "DELETE_TODO";
    todo: string;
  }
export type deleteTodoActionCreator = (todo: string) => deleteTodoAction
export const deleteTodo: deleteTodoActionCreator = (todo) => {
    return {
        type: "DELETE_TODO",
        todo,
    };
};

export const ADD_TODO_ITEM = "ADD_TODO_ITEM";//const action type
export interface AddTodoItemAction extends Action {//temp
    //type: "ADD_TODO_ITEM",
    payload: {
        todo: TodoItemModel
    }
};
export const addTodo = (todo: string): AddTodoItemAction => {
    return {
        type: "ADD_TODO_ITEM",
        payload: {
            todo: {
                id: "" + nextTodoID,
                text: todo,
                complete: false
            }
        }
    }
}
export const AddTodoItem=addTodo;



    /*
    
        export const ADD_TODO_ITEM = "ADD_TODO_ITEM";//const action type
    
    
        export interface AddTodoItemAction extends Action {//?<!add item
            payload: {
                newTodo: TodoItemModel//(todo)
            }
        }
    }
    export const AddTodoItem = (newTodo: string): AddTodoItemAction => ({
        type: ADD_TODO_ITEM,
        payload: {
            newTodo: {
                id: "" + nextTodoID,
                text: newTodo,
                complete: false
            }
        }
    });//app-31 addTodo
    export const TOGGLE_TODO_ITEM = "TOGGLE_TODO_ITEM";

    export interface ToggleTodoItemAction extends Action {//
        payload: {
            removeTodoItem: string//number
        }

export const ToggleTodoItem = (idTodoItem: string): ToggleTodoItemAction => ({
        type: TOGGLE_TODO_ITEM,
        payload: {
            removeTodoItem: idTodoItem + ""
        }
    });*/
