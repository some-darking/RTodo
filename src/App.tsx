import React, { useState } from 'react';
import { AddTodoForm } from './components/AddTodoForm';
//import TodoItem from './components/TodoItem ';
import TodoList from './components/TodoList';
import { AddTodo, Todo, ToggleTodo } from './components/type';


const initialTodos: Array<Todo> = [
  { text: "task 1", complete: true },
  { text: "task 2", complete: false }
];

const App: React.FC = () => {
  const [todoItems, setTodos]=useState(initialTodos);
  //function on/off 
  const toggleTodo:ToggleTodo=selectedTodo=> {//ref on task до const toggleTodo=(selectedTodo:Todo)=> {
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
  };//<TodoItem todo={todoItems[0]} toggleTodo={toggleTodo}/> on list
  
  const addTodo:AddTodo=newTodo=>{//(newTodo:string) type
    newTodo.trim()!=="" &&//проверка на пустой ввод
    setTodos([...todoItems, {text:newTodo, complete:false}])
  }
  return (
    <div className="list">
      <React.Fragment>
        <AddTodoForm addTodo={addTodo}/>
      <TodoList todoItems={todoItems} toggleTodo={toggleTodo}/>
      </React.Fragment>
    </div>
  );
};

export default App;