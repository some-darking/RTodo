import React, { useCallback } from 'react';
import TodoItem from './TodoItem ';
import { onDelete, Todo, ToggleTodo } from './type';
import '../styles/main.scss';

export interface TodoListComp {
  todoItems: Array<Todo>
  toggleTodo: ToggleTodo
  onDelete: onDelete
}//todoItems.map(({ id, label }: todoItems{ TodoItemProps }) => <TodoItem key={id} label={label} />)
export const TodoList: React.FC<TodoListComp> = ({ todoItems, toggleTodo, onDelete }) => {

  return (
    <ul className="squaredThere">
      <li>
        {todoItems.map(todo => {
          return (
            <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} onDelete={onDelete} />//ключ для точного текста, чтобы текст был и на погружение отправлял на создание массива
          )
        })}
      </li>
    </ul>)
}

export default TodoList