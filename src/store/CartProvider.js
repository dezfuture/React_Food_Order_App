import CartContext from "./cart-context";

const CartProvider = (props) => {
  const addItemToCartHandler = (items) => {};

  const removeItemFromCartHandler = (id) => {};

  const cartContext = {
    items: [],
    total: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
