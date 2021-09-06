import * as React from 'react';
import { useRef, useState, useEffect } from 'react';
import { useDispatch, useTrackedState, State, setCurrentPageAC, deleteTodoAC, addTodoAC, toggleTododAc, TodoType } from './store';
import TodoItem from './TodoItem';
import NewTodo from './NewTodo';
import './main.scss';
import { connect } from 'react-redux';

const TodoList: React.FC = () => {
  const dispatch = useDispatch();
  const state = useTrackedState();
  const setQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'SET_QUERY', query: event.target.value });
  };

  const [totalPages, setTotalPages] = useState(10);

  /*const Pages: React.FC = () => {
      return (
          componentDidMount(){

      }
      )
  }*/


  let pageCount = Math.ceil(state.totalTodoCount / state.pageSize);//count page
  let pages = [];
  for (let i = 1; i <= pageCount; i++) { pages.push(i); }

  const onPageChanged = (pagesNumber: any) => {
    setCurrentPageAC(pagesNumber)
    state.currentPage = pagesNumber;
  }
  /* const fetchData = async () => {
       // const response= await fetch(`https://api.coingecko.com/api/v3/coins/markets? 
       //vs_currency=usd&order=market_cap_desc&?${page}&per_page=10&sparkline=false`)
       const response = await fetch(`http://localhost:3000/`)
       const result = await response.json()
       setCoinsData(result);
       setTotalPages(totalTodoCount);
   }
   useEffect(() => {
       fetchData()
   }, [page])
  */
  return (
    <div className="todo">
      <div>
        <div>
          Highlight Query for incomplete items:
          <input value={state.query} onChange={setQuery} />
        </div>

        <div>
          <NewTodo />
          <div className="todo__pages">
            {pages.map(p =>
              <button className={p == state.currentPage ? "selectedPageAction" : "selectedPage"}
                onClick={(p) => onPageChanged(p)}
              >{p} </button>
            )}
          </div>
          {state.todos.map(({ id, title, completed }) => (
            <TodoItem key={id} id={id} title={title} completed={completed} />
          ))}

        </div>
      </div>
    </div >
  );
};

export const mapStateToProps = (state: State) => {
  return {
    todos: state.todos,
    page: state.pageSize,
    totalTodoCount: state.totalTodoCount,
    currentPage: state.currentPage,
  }
}//прокинули
export const mapDispatchToProps = (state: any) => {
  return {

    setCurrentPage: (pageNumber: number) => {
      state(setCurrentPageAC(pageNumber))//диспатч action
    },
    deleteTodo: (todos: TodoType) => {
      state(deleteTodoAC(todos))
    },
    addTodo: (todos: TodoType) => {
      state(addTodoAC(todos))
    },
    toggleTodod: (todos: TodoType) => {
      state(toggleTododAc(todos))
    },
  }
}

export default TodoList;
//export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
