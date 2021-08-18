import React from 'react';
import TodoItem from './TodoItem ';
//import {TodoItem, TodoItemProps} from './TodoItem ';

export interface TodoListComp {
    //mockTodoItems: (id:string, label:string)=>void
    id: string
    label: string
}
export const TodoList: React.FC<TodoListComp> = (todoItems) => {
  const {label:string, id:TodoItem}=todoItems
  
  return (
  <ul>
    {
      
     
    }
  </ul>)
}

//todoItems.map(({ id, label }:todoItems{TodoItemProps}) => <TodoItem key={id} label={label} />)

export default TodoList 