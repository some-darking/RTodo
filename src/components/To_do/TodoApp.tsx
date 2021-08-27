// React TodoApp 
import React, { createRef } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { deleteTodo, Todo, fetchTodos, addTodos } from "./Action";
import storeType from "./type";
import { StoreState } from './ToDoReduce'
import { useRef } from "react";
import "./main.scss";
import { Switch } from "@material-ui/core";
import { useState } from "react";

const input = createRef() as React.MutableRefObject<HTMLInputElement | null>;//(null);

interface TodoAppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
  addTodos: typeof addTodos
}

interface TodoApppState {
  fetching: boolean;
}


class _TodoApp extends React.Component<TodoAppProps, TodoApppState> {
  constructor(props: TodoAppProps) {
    super(props);
    //  this.state = { fetching: false };
  }
  /*componentDidUpdate(prevProps: AppProps): void {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({ fetching: false });
    }
  }*/
  DispathToggleTodoItem = (todo: Todo) => {
    todo.completed = !todo.completed;
    // ToggleTodoItem(todo.id) 
  }

  renderList = (): JSX.Element[] => {//разделение
    return (
      this.props.todos.map((todo: Todo) => {//onChange={DispathToggleTodoItem}  style="textDecoration:line-through"
        return (
          <div >
            <div>
              <p onClick={() => this.DispathToggleTodoItem(todo)} className={todo.completed == true ? "complete" : undefined} key={todo.id} >
                <input type="checkbox" checked={todo.completed} />
                <label onClick={() => this.onTodoClick(todo.id)} key={todo.id} >
                  {todo.text}
                  <button >x</button>
                </label></p>
            </div>
          </div>
        );
      })
    );
  }

  onTodoClick = (id: number): void => {
    this.props.deleteTodo(id);
  };
  onButtonClick = (): void => {
    this.props.fetchTodos();
    this.setState({ fetching: true });
  }
  addT = () => {
    if (input.current) {
      const val = input.current.value;
      input.current.value = "";
      this.props.addTodos(val);
    }
  }  // onKeyDown={handleEnterButton}
  render() {
    return (//|
      <div>
        <div className="todo">
          <div className="todo__form">
            <label >TODO:</label>
            <input type="text" ref={input} />
            <button type="submit" onClick={() => this.addT()}>+</button></div>
          <ul className="squaredThere">
            {this.renderList()}
          </ul>
        </div>
      </div>
    )
  }
}//<button onClick={this.onButtonClick}>Fetch</button>
//{this.state.fetching ? 'LOADING' : null}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos }
}

/*
const TodoApp = () => {
  const [count, setCount] = useState<number>(0)

  return (
    <Header />
  
    <Switch>
      <Route exact path='/' component={NewComp} />
      <Route path='/todo' component={Todo} />
      <Route path='/newpage' component={NewComp} />
      
      

    </Switch>

  )// ! Router react,  Redirect& new (счетчик )до пт
    .//!переписать все на хуки и функциональный (useDispath, useStore, useSelector) до пн
    .//!доп HoC, хуки , createStore, fetch, React Hook Form
}*/
export const TodoApp = connect(mapStateToProps, { fetchTodos, deleteTodo, addTodos })(_TodoApp);

export default connect()(TodoApp);
/*
interface AppPropType {
  //complete: complete;
  //incomplete: incomplete;
  deleteTodo: deleteTodoActionCreator;
  addTodo: AddTodoItemAction
  //	markComplete: markCompleteActionCreator;
  //markIncomplete: markIncompleteActionCreator;
}

const TodoApp: React.FC<AppPropType> = ({ deleteTodo, addTodo }) => {
  //React Hooks
  const input = useRef<HTMLInputElement>(null);


  const [todoDescription, setTodoDescription] = useState("");

  //React Redux Hooks
  const todoList = useSelector((state: RootState) => state);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Container>
      <TodoList />
    </Container>
  );
}
const mapStateToProps = (state: storeType) => {
  return (
    <div></div>
  )
}*/

/*
  //Rendering
  return (
    <Container maxWidth="xs">
      <Typography style={{ textAlign: "center" }} variant="h3">
        Redux List App
      </Typography>
      <TextField
        variant="outlined"
        label="To Do Item"
        fullWidth
        onChange={(e) => setTodoDescription(e.target.value)}
        value={todoDescription}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={() => {
          dispatch(addTodo(todoDescription));
          setTodoDescription("");
        }}
      >
        Add Item
      </Button>
      <List>
        {todoList.map((todoItem) => (
          <ListItem key={todoItem.id}>
            <ListItemText
              style={{
                textDecoration: todoItem.complete ? "line-through" : "none",
              }}
            >
              {todoItem.text}
            </ListItemText>
            <ListItemSecondaryAction>
              <IconButton
                onClick={() => {
                  dispatch(removeTodo(todoItem.id));
                }}
              >
                <DeleteIcon />
              </IconButton>
              <Checkbox
                edge="end"
                value={todoItem.complete}
                onChange={() => {
                  dispatch(
                    setTodoStatus({ complete: !todoItem.complete, id: todoItem.id })
                  );
                }}
              />
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
*/




/*

import React, { useReducer, useState } from 'react';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import { initialState, TodoContex, TodoReducer } from './components/ToDoReduce';
import './styles/main.scss';
import connect from 'react-redux';

/*const initialTodos: Array<Todo> = [
  { text: "task 1", complete: true }
];//?  *

const TodoApp: React.FC = () => {
  const []
  const [state, dispatch] = useReducer(TodoReducer, initialState);
  //? const [todoItems, setTodos] = useState(initialTodos);
  return (
    <TodoContex.Provider value={{ state, dispatch }}>
      <div className="todo">
        <AddTodoForm />
        <TodoList />
      </div>
    </TodoContex.Provider>
  )
  /*
  const toggleTodo: ToggleTodo = selectedTodo => {//ref on task до const toggleTodo=(selectedTodo:Todo)=> {
    const newTodos = todoItems.map(todo => {//! Todoreduce  ToggleTodoItemReducer 50%50
      if (todo === selectedTodo) {
        return {//return new element
          ...todo,
          complete: !todo.complete //opposed todo
        };
      }
      return todo;
    }); //array todos
    setTodos(newTodos);
  };//<TodoItem todo={todoItems[0]} toggleTodo={toggleTodo}/> on list

  const addTodo: AddTodo = newTodo => {//?<!(newTodo:string) action AddTodoItemAction
    newTodo.trim() !== "" &&//проверка на пустой ввод
      setTodos([...todoItems, { text: newTodo, complete: false }])
  }
  return (
    <div className="App">
      <div className="todo">
        <React.Fragment>
          <TodoW />
        </React.Fragment>
      </div>
    </div>
  );//    ! todoW      <AddTodoForm addTodo={addTodo} />
  // <TodoList todoItems={todoItems} toggleTodo={toggleTodo} />
//? *

};

export default connect(state, dispatch)(App);*/