export type Todo = {
    text: string;
    complete: boolean;
  };
  export type TogleTodo=(selectedTodo:Todo)=>void