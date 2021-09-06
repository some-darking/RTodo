import * as React from 'react';
import { useState, useRef } from 'react';

import { useDispatch } from './store';
import { useFlasher } from './utils';
import { statement } from '@babel/template';
import { numericLiteral } from '@babel/types';


const NewTodo: React.FC = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState('');
    //num.def
    const addTodo = () => {
        if (parseInt(count.current.value) > 0) {
            for (let i = 0; i < parseInt(count.current.value); i++)
                dispatch({ type: 'ADD_TODO', title: text });
            setText('');
        } else {
            dispatch({ type: 'ADD_TODO', title: text });
            setText('');
        }
    };
    const count = React.useRef<HTMLInputElement>(null)

    const setRef = (inputElement: HTMLInputElement) => {
        count.current = inputElement;//parseInt(inputElement.placeholder)
    }
    return (
        <div ref={useFlasher()} className="todo__form">
            <input
                value={text}
                placeholder="Enter text..."
                onChange={e => setText(e.target.value)}
            />
            <input
                ref={setRef}
                className='myCount'
                type="number"
                //value=
                min='1'
                max='10'
            // placeholder={count}
            ></input>
            <button onClick={addTodo}>+</button>
        </div>
    );
};

export default React.memo(NewTodo);
