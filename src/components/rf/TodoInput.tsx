import React, { FC, useState, useContext } from 'react';
//import { useContext } from 'react-router/node_modules/@types/react';
//?import { AddTodoItem } from '../Action';
//?import { initialState, TodoContex, TodoReducer } from '../ToDoReduce';
//!addForm

export const TodoInput: FC = () => {
    // const { dispatch } = useContext(TodoContex);
    const [inputValue, updateInputValue] = useState("");


    const handleEditInputValu = (e: React.ChangeEvent<HTMLInputElement>) => { //! addForm handleChange
        updateInputValue(e.target.value);
    }
    const addNewTodoItem = () => {
        if (inputValue) {
            //  dispatch(AddTodoItem(inputValue));
            updateInputValue("");
        }
    }
    const handleEnterButton = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            e.preventDefault();
            addNewTodoItem();
        }
    }
    return (
        <div>
            <form>
                <label>TODO:</label>
                <input type="text" value={inputValue} onChange={handleEditInputValu} onKeyDown={handleEnterButton} />
                <button type="submit" onClick={addNewTodoItem}> +</button>
            </form>
            <span hidden={inputValue !== ""}></span>
        </div>
    )
};
export default TodoInput;