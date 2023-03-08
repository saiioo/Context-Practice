import React from "react";
import { useContext } from "react";
import { cartContext } from "./Context";

function Cart(props) {
  const context = useContext(cartContext);
  const ren = context.Cart;
  function getCartList() {
    const newList = {};
    const cartList = [];
    ren.map((item) => {
      if (newList[item.name]) {
        newList[item.name]++;
      } else {
        newList[item.name] = 1;
      }
    });
    for (let key in newList) {
      cartList.push(
        <div>
          {key}:{newList[key]}
        </div>
      );
    }
    return cartList;
  }

  console.log(context);
  return (
    <div>
      This is Cart Component
      {getCartList()}
    </div>
  );
}

export default Cart;
