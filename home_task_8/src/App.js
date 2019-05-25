import React from "react";
import ListItem from './components/ListItem';
import T from 'prop-types';
import uuid from 'uuid/v4'
import { todosOperations, todosSelectors } from './modules/todos';
import { Link, Route } from 'react-router-dom';
import { compose, withState, withHandlers } from 'recompose';
import { connect } from 'react-redux';

function App({
  isLoading,
  setInputState,
  inputState,
  handleOnClick,
}) {
  return (
    <div className="App">
      <input onChange={(evt)=>setInputState(evt.target.value)} value={inputState} />
      <button onClick={handleOnClick}>{isLoading? 'loading' : 'Add'}</button>
      <div>
        <Link to='/'>Всі</Link>
        <Link to='/new'>Нові</Link>
        <Link to='/completed'>Виконані</Link>
      </div>
      <Route exact  path='/' component={ListItem} />
      <Route path='/new' component={ListItem} />
      <Route path='/completed' component={ListItem} />      
    </div>
  );
}

App.propTypes = {
  isLoading: T.bool,
  inputState: T.string,
  handleOnClick: T.func,
  setInputState: T.func,
}

const mapDispatchToProps = {
  addTodo: todosOperations.addTodo,
}
const mapStateToProps = (state)=> ({
  isLoading: todosSelectors.getLoadingStatus(state),
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withState('inputState', 'setInputState', ''),
  withHandlers({
    handleOnClick: (props)=>()=>{
      const newTodo = {
        text:props.inputState,
        id: uuid(),
        completed: false,
      };
      props.addTodo(newTodo);
      props.setInputState('');
    },
  })
)(App);