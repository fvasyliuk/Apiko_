import { handleActions } from '@letapp/redux-actions';
import * as actions from './todosActions';

const initialState = {
    todos:[],
    isLoading: false,
    isError: false,
    isLoadingDeleteID: undefined,
    isErrorDelete: false,
};

export default handleActions({
    [actions.addTodo.start]: (state)=>({
        ...state,
        isError: false,
        isLoading: true,
    }),
    [actions.addTodo.success]: (state, actions)=>({
        ...state,
        isLoading: false,
        todos: state.todos.concat(actions.payload),
    }),
    [actions.addTodo.error]: (state)=>({
        ...state,
        isLoading: false,
        isError: true,
    }),
    [actions.deleteTodo.start]: (state, actions)=>({
        ...state,
        isErrorDelete: false,
        isLoadingDeleteID: actions.payload,
    }),
    [actions.deleteTodo.success]: (state, actions)=>({
        ...state,
        isLoadingDeleteID: undefined,
        todos: state.todos.filter((it)=>it.id!==actions.payload),
    }),
    [actions.deleteTodo.error]: (state)=>({
        ...state,
        isLoadingDeleteID: undefined,
        isErrorDelete: true,
    }),    
    [actions.clickOnTodo.start]: (state, actions)=>{    
        const newTodos = [...state.todos];        
        newTodos.find((it)=>it.id===actions.payload).completed = !newTodos.find((it)=>it.id===actions.payload).completed;
        return ({
            ...state,
            todos: newTodos, 
        })            
    },
    [actions.clickOnTodo.success]: (state, actions)=>({
        ...state,       
    }),
    [actions.clickOnTodo.error]: (state)=>({
        ...state,            
    }),
   
}, initialState);