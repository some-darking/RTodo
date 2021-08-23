import React from 'react'
import { useContext } from 'react';
import { TodoItemModel } from './type';
import '../styles/main.scss';
import { ToggleTodoItem } from './Action';
import { TodoContex } from './ToDoReduce';
//import { dispatch } from './TodoInput';

/*export interface TodoItemProps {
    todo: Todo;
    toggleTodo: ToggleTodo//до этого (selectedTodo:Todo)=>void //in app неявно поэтому указываем переключатель указав действие возвращает от правляем в типы
    //то есть      label: string     complete: boolean 
}*/
export const TodoItem: React.FC<TodoItemModel> = (todoItem: TodoItemModel) => {//! TodoItemProps
    const { dispatch } = useContext(TodoContex);
    function DispathToggleTodoItem() {
        dispatch(ToggleTodoItem(todoItem.id))
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
export default TodoItem