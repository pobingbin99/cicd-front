import {configureStore, createSlice} from '@reduxjs/toolkit'

const mockData = [
    { id: 0, isDone: false, content: "React study", date: new Date().getTime() },
    { id: 1, isDone: false, content: "친구만나기", date: new Date().getTime() },
    { id: 2, isDone: false, content: "낮잠자기", date: new Date().getTime() }
];

const todoSlice = createSlice({
    name: "todos",
    initialState: {
        items: mockData,
        nextId: 3
    },
    reducers: {
        addTodo: (state, action) => {
            state.items.push({
                id: state.nextId++,
                isDone: false,
                content: action.payload,
                date: new Date().getTime()
            });
        },
        updateTodo: (state, action) => {
            const todo = state.items.find(
                (item) => item.id === action.payload
            );

            if (todo) {
                todo.isDone = !todo.isDone;
            }
        },
        deleteTodo: (state, action) => {
            state.items = state.items.filter(
                (item) => item.id !== action.payload
            );
        }
    }
});

export const {addTodo, updateTodo, deleteTodo} = todoSlice.actions;

export default configureStore({
    reducer: {
        todo: todoSlice.reducer
    }
});