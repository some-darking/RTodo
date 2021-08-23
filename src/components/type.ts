export type Todo = {
  text: string;
  complete: boolean;
};
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
