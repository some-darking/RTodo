import React from 'react'
import { Todo } from './type';

export interface TodoItemProps {
    todo: Todo
    /*то есть
     label: string
    complete: boolean */
}

export const TodoItem: React.FC<TodoItemProps> = (props) => {
    const { todo } = props;
    return (
        <div>
            {todo.text}
            <input type="checkbox" checked={todo.complete}></input>
        </div>
    )
}
export default TodoItem 