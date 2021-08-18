import React from 'react-dom/node_modules/@types/react';
import './App.css';
//import './styles/main';
import TodoItem from './components/TodoItem ';
import { Todo } from './components/type';


const todoItems: Array<Todo> = [
  { text: "task 1", complete: true },
  { text: "task 2", complete: false }
];

const App: React.FC = () => {
  return (
    <div>
      <React.Fragment>
        <TodoItem todo={todoItems[0]} />
        <TodoItem todo={todoItems[1]} />
      </React.Fragment>
    </div>

  );
};

export default App;
