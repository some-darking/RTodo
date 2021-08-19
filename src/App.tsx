import React, { useState } from 'react';
import TodoItem from './components/TodoItem ';
import { Todo, TogleTodo } from './components/type';


const initialTodos: Array<Todo> = [
  { text: "task 1", complete: true },
  { text: "task 2", complete: false }
];

const App: React.FC = () => {
  const [todoItems, setTodos]=useState(initialTodos);
  //function on/off 
  const togleTodo:TogleTodo=selectedTodo=> {//ref on task до const toggleTodo=(selectedTodo:Todo)=> {
    const newTodos = todoItems.map(todo =>{
      if(todo===selectedTodo){
        return {//return new element
          ...todo,
          complete: !todo.complete //opposed todo
        };
      }
      return todo;
    }); //array todos
    setTodos(newTodos);
  };
  return (
    <div className="tree">
      <React.Fragment>
      <TodoItem todo={todoItems[0]} togleTodo={togleTodo}/>
      <TodoItem todo={todoItems[1]} togleTodo={togleTodo}/>
      </React.Fragment>
    </div>
  );
};

export default App;
