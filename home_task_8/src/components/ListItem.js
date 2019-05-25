import React from "react";
import { connect } from 'react-redux';
import { todosOperations, todosSelectors } from '../modules/todos';
import { compose, withHandlers } from 'recompose';
import Item from "./Item";

function ListItem({ list, handleItemOnClick, handleDeleteItem, isLoadingDeleteID }) {

  return (
    <ul>
      {list.map(item => (
        <Item
          key={item.id}
          text={item.text}
          id={item.id}
          completed={item.completed}
          handleItemOnClick={handleItemOnClick}
          handleDeleteItem={handleDeleteItem}
          isLoadingDeleteID={isLoadingDeleteID}
        />
      ))}
    </ul>
  );
}

// ListItem.propTypes = {
//   handleItemOnClick: T.func,
// }

const mapDispatchToProps = {
  clickOnTodo: todosOperations.clickOnTodo,
  deleteTodo: todosOperations.deleteTodo,
}
const mapStateToProps = (state, props)=> {
  const filterTodos = props.match.path;
  return {
    list: todosSelectors.getTodos(state, filterTodos),
    isLoadingDeleteID: todosSelectors.getLoadingDeleteIDStatus(state),
  }
}

const enhancer = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    handleItemOnClick: (props)=>(id)=>()=>props.clickOnTodo(id),
    handleDeleteItem: (props)=>(id)=>()=>props.deleteTodo(id),
  })

)

export default enhancer(ListItem);
