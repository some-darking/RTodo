import React, { useReducer, useState } from 'react';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import { initialState, TodoContex, TodoReducer } from './components/ToDoReduce';
import './styles/main.scss';


/*const initialTodos: Array<Todo> = [
  { text: "task 1", complete: true }
];*/

const App: React.FC = () => {
  const [state, dispatch] = useReducer(TodoReducer, initialState);
  //? const [todoItems, setTodos] = useState(initialTodos);
  return (
    <TodoContex.Provider value={{ state, dispatch }}>
      <div className="todo">
        <AddTodoForm />
        <TodoList />
      </div>
    </TodoContex.Provider>
  )
  /*
  const toggleTodo: ToggleTodo = selectedTodo => {//ref on task до const toggleTodo=(selectedTodo:Todo)=> {
    const newTodos = todoItems.map(todo => {//! Todoreduce  ToggleTodoItemReducer 50%50
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

  const addTodo: AddTodo = newTodo => {//?<!(newTodo:string) action AddTodoItemAction
    newTodo.trim() !== "" &&//проверка на пустой ввод
      setTodos([...todoItems, { text: newTodo, complete: false }])
  }
  return (
    <div className="App">
      <div className="todo">
        <React.Fragment>
          <TodoW />
        </React.Fragment>
      </div>
    </div>
  );//    ! todoW      <AddTodoForm addTodo={addTodo} />
  // <TodoList todoItems={todoItems} toggleTodo={toggleTodo} />
*///?

};

export default App;