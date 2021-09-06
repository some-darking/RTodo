import React from "react";
import "./styleheader.scss";
//import { BrowserRouter, Route, Switch } from "react-router-dom"
//import {Lin//import NavLink from "react-router-dom";
import { NavLink } from "react-router-dom";
import NewComp from "../counttotalizer/NewComp";
import TodoList from "../To_do/TodoList";
//import { addTodos } from "../To_do/Action";

const Header = () => {//button
    return (//activeClassName={a.active}
        <div className="header">
            <NavLink to="/About">About</NavLink>
            <NavLink to="/NewComp">NewComp</NavLink>
            <NavLink to="/TodoList">ToDo</NavLink>
        </div >
    )
}// no <NavLink to="/NewComp">NewComp</NavLink>

export default Header;