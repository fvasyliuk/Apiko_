import React from "react";
import Item from "./Item";

function ListItem({ items, handleItemOnClick }) {
  return (
    <ul>
      {items.map(item => (
        <Item
          key={item.id}
          text={item.text}
          id={item.id}
          completed={item.completed}
          handleItemOnClick={handleItemOnClick}
        />
      ))}
    </ul>
  );
}

export default ListItem;
