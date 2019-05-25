import React from "react";

function Item({text, id, completed, handleItemOnClick, handleDeleteItem, isLoadingDeleteID}){
  return(
    <li  className={completed?'completed':''}>
      <div  onClick={handleItemOnClick(id)}>
      {text}
      </div>
      <button onClick={handleDeleteItem(id)}>{isLoadingDeleteID===id ? 'loading' : 'delete'}</button>
    </li>
  )
}

export default Item ;