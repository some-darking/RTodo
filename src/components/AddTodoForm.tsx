import React, { FC, ChangeEvent, useState, useContext } from 'react'
import { AddTodoItem } from './Action';
import { TodoContex } from './ToDoReduce';


/*export interface AddTodoFormComp {
    addTodo: AddTodo //(newTodo:string)=>void объявили 2раз
}
<AddTodoFormComp></AddTodoFormComp>*/
export const AddTodoForm: FC = () => {
    const { dispatch } = useContext(TodoContex);
    const [inputValue, updateInputValue] = useState("");
    //?const [newTodo, setNewtodo] = useState("");

    const handleEditInputValu = (e: ChangeEvent<HTMLInputElement>) => { //! addForm handleChange
        updateInputValue(e.target.value);
    };
    //?const handleChange = (e: ChangeEvent<HTMLInputElement>) => {//push event different
    //    setNewtodo(e.target.value);};//точное значение
    const addNewTodoItem = () => {//обработчик отправки 
        if (inputValue) {
            dispatch(AddTodoItem(inputValue));
            updateInputValue("");
        }
    }
    const handleEnterButton = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            e.preventDefault();
            addNewTodoItem();
        }
    }
    //? const hundleSumbit = (e: FormEvent<HTMLButtonElement>) => {//обработчик отправки 
    //    e.preventDefault(); addTodo(newTodo);setNewtodo("");};
    //console.log('render')
    return (

        <div className="todo__form">
            <label>TODO:</label>
            <input type="text" value={inputValue} onChange={handleEditInputValu} onKeyDown={handleEnterButton} />
            <button type="submit" onClick={addNewTodoItem}>+</button>
        </div>

    );
    /*return ( //?
        <form>
            <label>TODO:  </label>
            <input type="text" value={newTodo} onChange={handleChange} />
            <button type="submit" onClick={hundleSumbit}>+</button>
        </form>
    );*/
};

export default AddTodoForm;