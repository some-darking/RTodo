import React from 'react';
import TodoItem from './TodoItem ';
import { Todo, ToggleTodo } from './type';
//import {TodoItem, TodoItemProps} from './TodoItem ';

export interface TodoListComp {
  todoItems: Array<Todo>
  toggleTodo: ToggleTodo
}//todoItems.map(({ id, label }: todoItems{ TodoItemProps }) => <TodoItem key={id} label={label} />)
export const TodoList: React.FC<TodoListComp> = ({ todoItems, toggleTodo }) => {

  return (
    <ul>
      {todoItems.map(todo => {
        return (
          <TodoItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />//ключ для точного текста, чтобы текст был и на погружение отправлял на создание массива
        )
      })}
    </ul>)
}


export default TodoList