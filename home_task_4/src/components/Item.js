import React from "react";

function Item({text, id, completed, handleItemOnClick}){
  return(
    <li 
      className={completed
        ?'completed'
        :''
      }
      onClick={handleItemOnClick(id)}
    >
      {text}
    </li>
  )
}

export default Item ;