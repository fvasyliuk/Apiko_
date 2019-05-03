import React from "react";
import T from "prop-types";

function Item({ text, id, completed, handleItemOnClick }) {
  return (
    <li
      className={completed ? "completed" : ""}
      onClick={handleItemOnClick(id)}
    >
      {text}
    </li>
  );
}

Item.propTypes = {
  text: T.string,
  id: T.number,
  completed: T.bool,
  handleItemOnClick: T.func
};

export default Item;
