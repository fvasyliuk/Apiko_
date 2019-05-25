import { createAsyncActions } from '@letapp/redux-actions';

export const addTodo = createAsyncActions('todos/ADD_TODO');
export const deleteTodo = createAsyncActions('todos/DELETE_TODO');
export const clickOnTodo = createAsyncActions('todos/CLICK_ON_TODO');
