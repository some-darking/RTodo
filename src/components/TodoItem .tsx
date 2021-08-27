import React from 'react'
import { useContext } from 'react';
import { TodoItemModel } from './To_do/type';
import '../styles/main.scss';
//import { ToggleTodoItem } from './Action';
//import { TodoContex } from './ToDoReduce';
//import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';

/*export interface TodoItemProps {
    todo: Todo;
    toggleTodo: ToggleTodo//до этого (selectedTodo:Todo)=>void //in app неявно поэтому указываем переключатель указав действие возвращает от правляем в типы
    //то есть      label: string     complete: boolean 
}*/
export const TodoItem: React.FC<TodoItemModel> = (todoItem: TodoItemModel) => {//! TodoItemProps
    //  const { dispatch } = useContext(TodoContex);
    const DispathToggleTodoItem = () => {
        //  dispatch(ToggleTodoItem(todoItem.id))
    }


    return (//! todoItem==todo   toggleTodo(todo)
        <div className={todoItem.complete ? "complete" : undefined} >
            <label className="check">
                <input type="checkbox" className="check__input" checked={todoItem.complete}
                    onChange={DispathToggleTodoItem}></input>
                {todoItem.text}
            </label>
        </div >
    )

}
export default connect()(TodoItem);