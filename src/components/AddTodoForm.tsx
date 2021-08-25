import React, { FC, ChangeEvent, useState, useContext } from 'react'
import { Todo } from './Action';//AddTodoItem
//import { TodoContex } from './ToDoReduce';
import { connect } from 'react-redux';


/*export interface AddTodoFormComp {
    addTodo: AddTodo //(newTodo:string)=>void объявили 2раз
}
<AddTodoFormComp></AddTodoFormComp>*/
export const AddTodoForm: FC = () => {
    //  const { dispatch } = useContext(TodoContex);// dispatch между store  и action, перенаправляет action
    const [inputValue, updateInputValue] = useState("");
    //?const [newTodo, setNewtodo] = useState("");

    const handleEditInputValu = (e: ChangeEvent<HTMLInputElement>) => { //! addForm handleChange
        updateInputValue(e.target.value);
    };
    //?const handleChange = (e: ChangeEvent<HTMLInputElement>) => {//push event different
    //    setNewtodo(e.target.value);};//точное значение
    const addNewTodoItem = () => {//обработчик отправки 
        if (inputValue) {
            // dispatch(Todo(inputValue));
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
        <div>
            <form>
                <label>TODO:</label>
                <input type="text" value={inputValue} onChange={handleEditInputValu} onKeyDown={handleEnterButton} />
                <button type="submit" onClick={addNewTodoItem}>+</button>
            </form>
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

export default connect()(AddTodoForm);//todo: