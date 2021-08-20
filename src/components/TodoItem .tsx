import React, { useState, FormEvent, ChangeEvent, useCallback } from 'react'
import { onDelete, Todo, ToggleTodo } from './type';
import '../styles/main.scss';

export interface TodoItemProps {
    todo: Todo;
    toggleTodo: ToggleTodo;//до этого (selectedTodo:Todo)=>void //in app неявно поэтому указываем переключатель указав действие возвращает от правляем в типы
    /*то есть      label: string     complete: boolean */
    onDelete: onDelete;//!
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo, onDelete }) => {//onRemoveTodo
    /* const handleChange = (e: ChangeEvent<HTMLInputElement>) => {//push event different
         removeTodo(e.target.value);//точное значение
     };
     const hundleRemove = (useCallback) => {//обработчик отправки 
         const 
         e.preventDefault();//in app
         addTodo(newTodo);
         const removeTodo=useCallback(onRemoveTodo(id),[id,onRemoveTodo]);
     };*/
    /* private handleDelete = () => {
        const { onDelete, todo } = this.props;
        onDelete(todo.value.id);
      };*/

    const handleDelete = () => {

        const [onDelete, deleteTodo] = useState("");

        const hundleSumbit = (e: FormEvent<HTMLButtonElement>) => {
            e.preventDefault();
            // onDelete(deleteTodo);
            deleteTodo(todo.id);
        };
    }

    return (//<button type="submit" onClick={hundleRemove}>-</button>
        <div className={todo.complete ? "complete" : undefined} >
            <label className="check">
                <input type="checkbox" className="check__input" checked={todo.complete}
                    onChange={() => toggleTodo(todo)}></input>
                {todo.text}
                <button type="submit" onClick={handleDelete}>X</button>
            </label>
        </div >
    )
}
export default TodoItem