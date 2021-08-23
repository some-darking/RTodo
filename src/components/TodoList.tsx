import React, { useContext } from 'react';
import TodoItem from './TodoItem ';
import { TodoContex } from './ToDoReduce';
import { TodoItemModel } from './type';
//import {TodoItem, TodoItemProps} from './TodoItem ';

/*export interface TodoListComp {//old
  todoItems: Array<Todo> //!  type  TodoState
  toggleTodo: ToggleTodo
}*/
// -todoItems.map(({ id, label }: todoItems{ TodoItemProps }) => <TodoItem key={id} label={label} />)
//?<TodoListComp>
export const TodoList: React.FC = () => {
  const { state } = useContext(TodoContex);

  return (
    <div>
      <ul className="squaredThere">
        {state.TodoItems.map((todoItem: TodoItemModel, index: number) => (
          <TodoItem key={index} id={todoItem.id} text={todoItem.text} complete={todoItem.complete} />
        ))}
      </ul>
    </div>
  )/*

  return (
    <ul className="squaredThere">
      <li>
        {todoItems.map(todo => {
          return (
            <TodoItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />//ключ для точного текста, чтобы текст был и на погружение отправлял на создание массива
          )
        })}
      </li>
    </ul>)*/
}


export default TodoList