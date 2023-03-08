import Cart from "./Cart";
import { cartContext } from "./Context";
import Item from "./Item";
import { useState } from "react";
function CartProvider() {
  const [cart, setCart] = useState([]);
  return (
    <cartContext.Provider value={{ Cart: cart, setCart: setCart }}>
      <Cart />
      <Item />
    </cartContext.Provider>
  );
}
export default CartProvider;
