import React from 'react'
import { Todo, TogleTodo } from './type';
import '../styles/main.scss';


export interface TodoItemProps {
    todo: Todo
    togleTodo: TogleTodo//до этого (selectedTodo:Todo)=>void //in app неявно поэтому указываем переключатель указав действие возвращает от правляем в типы
    /*то есть
     label: string
    complete: boolean */
}

export const TodoItem: React.FC<TodoItemProps> = (todo,togleTodo) => {
   
    return (
        <div className={todo.complete ? "complete" : undefined}>
            {todo.text}
            <input type="checkbox" checked={todo.complete} 
            onChange={() => togleTodo(todo)}></input>
        </div>
    )
}
export default TodoItem