import TodoList from "./components/To_do/TodoList"
import Header from "./components/Headers/Header";
import NewComp from "./components/counttotalizer/NewComp";
import Error404 from "./components/Errors/Error";

import { BrowserRouter, Route, Switch, Router } from "react-router-dom";

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
//import thunk from "redux-thunk";
//import { createStore } from "redux";
//import { useTodosReducer } from './components/todosStore';
import { useStore } from './components/To_do/store';

const App = () => {     // const [count, setCount] = useState<number>(0)
    return (
        <div>
            <Header />
            <Switch>
                <Route path='/TodoApp' component={TodoList} />ToDo
                <Route path='/NewComp' component={NewComp} />NewComp
                <Route path='/About' component={NewComp} />NewComp
                <Route Redirect component={Error404} />hh
            </Switch>
        </div >
    )
}

export default (App);
/*
      <Header />

      <Switch>
        <Route exact path='/' component={NewComp} />
        <TodoApp/>
        <Route path='/todo' component={TodoApp} />
        <Route path='/newpage' component={NewComp} />



      </Switch>

    )// ! Router react,  Redirect& new (счетчик )до пт
        .//!переписать все на хуки и функциональный (useDispath, useStore, useSelector) до пн
      .//!доп HoC, хуки , createStore, fetch, React Hook Form
      */