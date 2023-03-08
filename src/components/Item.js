import React from "react";
import { useContext } from "react";
import { cartContext } from "./Context";

function Item(props) {
  const context = useContext(cartContext);
  const products = [
    { name: "item1" },
    { name: "item2" },
    { name: "item3" },
    { name: "item4" },
    { name: "item5" },
    { name: "item6" }
  ];
  const ren = products.map((item) => {
    return (
      <div>
        {item.name}
        <button
          onClick={() => {
            handleClick(item);
          }}
        >
          +
        </button>
      </div>
    );
  });
  function handleClick(value) {
    context.setCart([...context.Cart, value]);
  }
  return <div>{ren}</div>;
}

export default Item;
