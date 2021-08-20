import React, { ChangeEvent, useState, FormEvent } from 'react'
import { AddTodo } from './type';

export interface AddTodoFormComp {
addTodo:AddTodo //(newTodo:string)=>void объявили 2раз
}

export const AddTodoForm: React.FC<AddTodoFormComp> = ({addTodo}) => {
    const [newTodo, setNewtodo] = useState("");
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {//push event different
        setNewtodo(e.target.value);//точное значение
    };
    const hundleSumbit=(e: FormEvent<HTMLButtonElement>)=>{//обработчик отправки 
    e.preventDefault();//in app
    addTodo(newTodo); 
    setNewtodo("");
    };

    return (
        <form>
            <label>TODO:  </label>
            <input type="text" value={newTodo} onChange={handleChange} />
            <button type="submit" onClick={hundleSumbit}>+</button>
        </form>
    );
};