import * as React from 'react';

import { useDispatch, useTrackedState, TodoType } from './store';
import { useFlasher } from './utils';

const renderHighlight = (title: string, query: string) => {
    if (!query) return title;
    const index = title.indexOf(query);
    if (index === -1) return title;
    return (
        <>
            {title.slice(0, index)}
            <b>{query}</b>
            {title.slice(index + query.length)}
        </>
    );
};

type Props = TodoType;

const TodoItem: React.FC<Props> = ({ id, title, completed }) => {
    const dispatch = useDispatch();
    const state = useTrackedState();
    const delTodo = () => {
        dispatch({ type: 'DELETE_TODO', id });
    };
    return (
        <div ref={useFlasher()} className="todo__list">
            <input
                type="checkbox"
                checked={!!completed}
                onChange={() => dispatch({ type: 'TOGGLE_TODO', id })}
            />
            <span
                style={{
                    textDecoration: completed ? 'line-through' : 'none',
                }}
            >
                {title}
            </span>
            <button onClick={delTodo}>Del</button>
        </div>
    );//                {completed ? title : renderHighlight(title, state.query)}
};

export default React.memo(TodoItem);
