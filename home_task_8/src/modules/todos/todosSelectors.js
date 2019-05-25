import { createSelector } from 'reselect';

const todos = (state, filterTodos)=> {
    let filterFunc;
    switch (filterTodos) {
        case '/':
            filterFunc = (it)=> it;
            break;
        case '/new':
            filterFunc = (it)=> it.completed===false;
            break;
        case '/completed':
            filterFunc = (it)=> it.completed===true;
            break;
    }

    return state.todos.todos.filter(filterFunc);    
};
export const getTodos = createSelector(
    todos,
    (state) => state
);

const isLoading = (state)=> state.todos.isLoading;
export const getLoadingStatus = createSelector(
    isLoading,
    (state) => state
);
const isLoadingDeleteID = (state)=> state.todos.isLoadingDeleteID;
export const getLoadingDeleteIDStatus = createSelector(
    isLoadingDeleteID,
    (state) => state
);
