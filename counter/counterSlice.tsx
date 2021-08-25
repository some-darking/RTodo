import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodoItemModel } from '../src/components/type';
import { v4 as uuidv4 } from "uuid";

interface CounterState {
    value: number
}
const initialState = [] as TodoItemModel[];

export const counterSlice = createSlice({//todoSlice
    name: 'counter',//todos
    initialState,
    reducers: {
        /*addTodo: {
            reducer: (state, action: PayloadAction<TodoItemModel>) => {
                state.push(action.payload);
            },
            prepare: (text: string) => ({//text=Description
                payload: {
                    id: uuidv4(),
                    text,
                    complete: false,
                } as TodoItemModel,
            }),
        },
        removeTodo(state, action: PayloadAction<string>) {
            const index = state.findIndex((TodoItem) => TodoItem.id === action.payload);
            state.splice(index, 1);
        },*/
        setTodoStatus(
            state,
            action: PayloadAction<{ complete: boolean; id: string }>
        ) {
            // const index = state.findIndex((TodoItem) => TodoItem.id === action.payload.id);
            //state[index].complete = action.payload.complete;
        },
    },
});

export const { setTodoStatus } = counterSlice.actions;
export default counterSlice.reducer;