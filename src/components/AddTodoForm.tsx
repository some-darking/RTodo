import React, { ChangeEvent, useState, FormEvent } from 'react'

export interface AddTodoFormComp {

}

export const AddTodoForm: React.FC = () => {
    const [newTodo, setNewtodo] = useState<string>();
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {//push event different
        setNewtodo(e.target.value);//точное значение
    };
    const hundleSumbit=(e: FormEvent<HTMLButtonElement>)=>{//обработчик отправки 
    e.preventDefault();//in app
    }
    return (
        <form>
            <input type="text" value={newTodo} onChange={handleChange} />
            <button type="submit">+</button>
        </form>
    );
};