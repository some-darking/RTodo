import React, { useContext } from 'react';
import TodoItem from './TodoItem ';
//import { TodoContex } from './ToDoReduce';
import { TodoItemModel } from './type';
import { connect } from 'react-redux';
//import {TodoItem, TodoItemProps} from './TodoItem ';

/*export interface TodoListComp {//old
  todoItems: Array<Todo> //!  type  TodoState
  toggleTodo: ToggleTodo
}*/
/*
//?<TodoListComp>
export const TodoList: React.FC = () => {
 // const { state } = useContext(TodoContex);


  return (
    <div>
      <ul className="squaredThere">
        {state.TodoItems.map((todoItem: TodoItemModel, index: number) => (
          <TodoItem key={index} id={todoItem.id} text={todoItem.text} complete={todoItem.complete} />//ключ для точного текста, чтобы текст был и на погружение отправлял на создание массива
        ))}
      </ul>
    </div >
  );
};

export default connect()(TodoList);*/