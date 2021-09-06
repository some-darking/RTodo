import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from "redux";
//import { Provider } from "./components/todosStore";//"react-redux";//
//import thunk from "redux-thunk";
//import { createStore } from "redux";
//import { todosReducer, reducers } from './components/To_do/ToDoReduce';
import { useStore, reducer, initialState, Provider } from './components/To_do/store';
import Header from "./components/Headers/Header"
import { BrowserRouter } from 'react-router-dom';
import { State } from './components/To_do/store';

export const [state, dispatch] = useReducer(reducer, initialState); //, initialState

export interface TodoContexModel {
  state: State;
  dispatch: any
}
export const TodoContex: React.Context<TodoContexModel> = React.createContext({
  state: initialState,
  dispatch: null
});

ReactDOM.render(// store={store}
  <React.StrictMode>
    <Provider >
      <BrowserRouter>
        <div>
          <App />
        </div>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

/*
ReactDOM.render(// store={store}
  <React.StrictMode>
    <TodoContex.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <div>
          <App />
        </div>
      </BrowserRouter>
    </TodoContex.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);*/