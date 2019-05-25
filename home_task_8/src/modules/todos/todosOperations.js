import * as actions from './todosActions';
import Api from '../../api/Api';


export function addTodo(todo) {
    return async function addTodoThunk(dispatch, getState) {
        try{
            dispatch(actions.addTodo.start());

            const res = await Api.add(todo);

            dispatch(actions.addTodo.success(res))  
        } catch (err) {
            dispatch(actions.addTodo.error(err))
        }
    }
}

export function deleteTodo(id) {
    return async function deleteTodoThunk(dispatch) {
        try{
            dispatch(actions.deleteTodo.start(id));
            await Api.remove(id);     
            dispatch(actions.deleteTodo.success(id))
        } catch (err) {
            dispatch(actions.deleteTodo.error(err))
        }
    }
}

export function clickOnTodo(id) {
    return async function clickOnTodoThunk(dispatch) {
        try{
            dispatch(actions.clickOnTodo.start(id));
            await Api.update(id);
            //dispatch.success(id)           
        } catch (err) {
            dispatch(actions.clickOnTodo.error(err))
        }
    }
}


export { actions };