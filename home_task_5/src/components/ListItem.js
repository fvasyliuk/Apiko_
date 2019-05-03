import React from "react";
import Item from "./Item";
import T from 'prop-types';

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

ListItem.propTypes = {
  items: T.arrayOf(T.shape({
    text: T.string,
    id: T.number,
    completed:T.bool
  })),
  handleItemOnClick:T.func,
}

export default ListItem;
