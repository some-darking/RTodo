import { useReducer } from 'react';
import { createContainer } from 'react-tracked';
import { connect } from 'react-redux';
import { createStore } from 'redux'
//import { type } from ;

export type TodoType = {
    id: number;
    title: string;
    completed?: boolean;
};


export type State = {
    todos: TodoType[];
    query: string;
    pageSize: number;
    totalTodoCount: number;
    currentPage: number;

};

type Action =
    | { type: 'ADD_TODO'; title: string }
    | { type: 'DELETE_TODO'; id: number }
    | { type: 'TOGGLE_TODO'; id: number }
    | { type: 'SET_QUERY'; query: string }
    | { type: 'SET_CURRENT_PAGES'; currentPage: number };

export const initialState: State = {
    todos: [],
    query: '',
    pageSize: 5,
    totalTodoCount: 21,
    currentPage: 1,
};

let nextId = 1;

export const reducer = (state = initialState, action: Action): State => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, { id: nextId++, title: action.title, completed: false }],
            };
        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.id),
            };
        case 'TOGGLE_TODO':
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
                ),
            };
        case 'SET_QUERY':
            return {
                ...state,
                query: action.query,
            };
        case 'SET_CURRENT_PAGES':
            return {
                ...state,
                currentPage: action.currentPage,
            }
        default:
            return state;
    }
};

export const useStore = () => useReducer(reducer, initialState);

export const {
    Provider, useTrackedState, useUpdate: useDispatch,
} = createContainer(useStore);

export const setCurrentPageAC = (currentPage: number) => ({ type: 'SET_CURRENT_PAGES', currentPage: currentPage })
export const deleteTodoAC = (todos: TodoType) => ({ type: 'DELETE_TODO', todos })
export const addTodoAC = (todos: TodoType) => ({ type: 'ADD_TODO', todos })
export const toggleTododAc = (todos: TodoType) => ({ type: 'TOGGLE_TODO', todos })

export default reducer;

/*
import * as React from 'react';
const DispatchContext = React.createContext((a: Action) => {});
const StateContext = React.createContext(initialState);
export const Provider: React.FC = ({ children }) => {
  const [state, dispatch] = useValue();
  return React.createElement(
    DispatchContext.Provider,
    {
      value: dispatch,
    },
    React.createElement(
      StateContext.Provider,
      {
        value: state,
      },
      children
    )
  );
};
export const useDispatch = () => React.useContext(DispatchContext);
export const useTrackedState = () => React.useContext(StateContext);
*/
