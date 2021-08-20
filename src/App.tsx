import React, { FormEvent, useCallback, useState } from 'react';
import { AddTodoForm } from './components/AddTodoForm';
//import TodoItem from './components/TodoItem ';
import TodoList from './components/TodoList';
import { AddTodo, onDelete, Todo, ToggleTodo } from './components/type';
import './styles/main.scss';

const initialTodos: Array<Todo> = [
  { id: Date.now().toString(), text: "task 1", complete: true }
];

const App: React.FC = () => {
  const [todoItems, setTodos] = useState(initialTodos);
  //function on/off 
  const toggleTodo: ToggleTodo = selectedTodo => {//ref on task до const toggleTodo=(selectedTodo:Todo)=> {
    const newTodos = todoItems.map(todo => {
      if (todo === selectedTodo) {
        return {//return new element
          ...todo,
          complete: !todo.complete //opposed todo
        };
      }
      return todo;
    }); //array todos
    setTodos(newTodos);
  };//<TodoItem todo={todoItems[0]} toggleTodo={toggleTodo}/> on list

  const addTodo: AddTodo = newTodo => {//(newTodo:string) type
    newTodo.trim() !== "" &&//проверка на пустой ввод
      setTodos([...todoItems, { id: Date.now().toString(), text: newTodo, complete: false }])
  }
  /* const onDelete: onDelete = (todoItems) => {
     const [onDelete, todo] = useState("");
     const hundleSumbit = (e: FormEvent<HTMLButtonElement>) => {
       e.preventDefault();
       onDelete(todo.value.id);
     };*/
  return (
    <div className="App">
      <div className="todo">
        <React.Fragment>
          <AddTodoForm addTodo={addTodo} />
          <TodoList todoItems={todoItems} toggleTodo={toggleTodo} onDelete={todoItem} />
        </React.Fragment>
      </div>
    </div>
  );
};

export default App;