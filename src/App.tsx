// React App 
import React, { createRef } from "react";
import { connect } from "react-redux";
// Material-UI Imports
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
// Other Imports
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./components/store";
//import { addTodo, removeTodo, setTodoStatus } from "./components/counter/counterSlice";
//import { TodoList } from "./components/TodoList";
import { deleteTodo, Todo, fetchTodos, addTodos } from "./components/Action";
import storeType from "./components/type";
import { StoreState } from './components/ToDoReduce'
import { useRef } from "react";
import "./styles/main.scss";

const input = createRef() as React.MutableRefObject<HTMLInputElement | null>;//(null);


interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
  addTodos: typeof addTodos
}

interface AppState {
  fetching: boolean;
}
class _App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = { fetching: false };
  }

  componentDidUpdate(prevProps: AppProps): void {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({ fetching: false });
    }
  }
  DispathToggleTodoItem = () => {
    // ToggleTodoItem(todo.id)
  }


  renderList = (): JSX.Element[] => {
    return (
      this.props.todos.map((todo: Todo) => {//onChange={DispathToggleTodoItem}
        return (
          <div >
            <input type="checkbox" className={todo.completed ? "complete" : undefined} checked={todo.completed}></input>
            <label onClick={() => this.onTodoClick(todo.id)} key={todo.id} >
              {todo.text}
              <button >x</button>
            </label>

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
        <button onClick={this.onButtonClick}>Fetch</button>
        {this.state.fetching ? 'LOADING' : null}

      </div>
    )
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos }
}

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo, addTodos })(_App);
/*
interface AppPropType {
  //complete: complete;
  //incomplete: incomplete;
  deleteTodo: deleteTodoActionCreator;
  addTodo: AddTodoItemAction
  //	markComplete: markCompleteActionCreator;
  //markIncomplete: markIncompleteActionCreator;
}

const App: React.FC<AppPropType> = ({ deleteTodo, addTodo }) => {
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
export default connect()(App);




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

const App: React.FC = () => {
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