export interface Todo {
  id: number;
  text: string;
  complete: boolean;
}
export type ToggleTodo = (selectedTodo: Todo) => void;
export type AddTodo = (newTodo: string) => void;

export type TodoItemModel = {//! = Todo
  id: number;
  text: string;
  complete: boolean;
}
export interface TodoState {
  TodoItems: TodoItemModel[]//! TodoListComp
}

export interface TodoContexModel {
  state: TodoState;
  dispatch: any
}
//new
//store
export type complete = string[];
export type incomplete = string[];

interface storeType {
  complete: complete;
  incomplete: incomplete;
}
export interface Action {//*
  readonly type: string,
  readonly value: any//payload
}

export default storeType;

//action

//-
export interface deleteTodoAction {
  type: "DELETE_TODO";
  todo: string;
}

//createaction
/*
import {
  deleteTodoAction,
  markIncompleteAction,
  markCompleteAction,
} from "./actionsType";

export type markCompleteActionCreator = (todo: string) => markCompleteAction;

export type markIncompleteActionCreator = (
  todo: string
) => markIncompleteAction;

export type deleteTodoActionCreator = (todo: string) => deleteTodoAction;
*/