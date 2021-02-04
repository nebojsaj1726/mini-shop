import CartItem from "../components/CartItem";
import "./CartScreen.css";

const CartScreen = () => {
  return (
    <div className="cartscreen">
      <div className="cartscreen-left">
        <h2>User Checkout</h2>

        <CartItem />
      </div>
      <div className="cartscreen-right"></div>
    </div>
  );
};

export default CartScreen;
