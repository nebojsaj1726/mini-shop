import "./Product.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";

const Product = ({ imageUrl, name, price, productId }) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart(productId, 1));
  };

  return (
    <div className="product">
      <img src={imageUrl} alt={name} />

      <div className="product-info">
        <p className="product-name">{name}</p>
        <p className="product-price">{price}</p>
        <button className="product-button" onClick={addToCartHandler}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
