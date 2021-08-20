import React from 'react'
import { Todo, ToggleTodo } from './type';
import '../styles/main.scss';

export interface TodoItemProps {
    todo: Todo;
    toggleTodo: ToggleTodo//до этого (selectedTodo:Todo)=>void //in app неявно поэтому указываем переключатель указав действие возвращает от правляем в типы
    /*то есть      label: string     complete: boolean */
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo }) => {

    return (
        <div className={todo.complete ? "complete" : undefined} >
            <label className="check">
                <input type="checkbox" className="check__input" checked={todo.complete}
                    onChange={() => toggleTodo(todo)}></input>
                {todo.text}
            </label>
        </div >
    )
}
export default TodoItem