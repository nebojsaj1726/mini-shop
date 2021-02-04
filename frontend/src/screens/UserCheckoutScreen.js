import "./UserCheckoutScreen.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../components/CartItem";
import {
  addToCart,
  removeFromCart,
  emptyCart,
} from "../redux/actions/cartActions";
import { addOrder } from "../redux/actions/orderActions";

const UserCheckoutScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const count = getCartCount();

  const getCartTotal = () => {
    return cartItems
      .reduce((price, item) => price + item.price * item.qty, 0)
      .toFixed(2);
  };

  const total = getCartTotal();

  const addOrderHandler = () => {
    dispatch(addOrder(name, email, count, total));
    dispatch(emptyCart());
  };

  return (
    <div className="cartscreen">
      <div className="cartscreen-left">
        <h2>User Checkout</h2>

        {cartItems.length === 0 ? (
          <div>Your Cart Is Empty</div>
        ) : (
          cartItems.map((item) => (
            <CartItem
              key={item.product}
              item={item}
              qtyChangeHandler={qtyChangeHandler}
              removeHandler={removeFromCartHandler}
            />
          ))
        )}
      </div>
      <div className="cartscreen-right">
        <div className="cartscreen-info">
          <p>Total ({count}) items</p>
          <p>{total}$</p>
        </div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="button" onClick={addOrderHandler}>
          Confirm Order
        </button>
      </div>
    </div>
  );
};

export default UserCheckoutScreen;
