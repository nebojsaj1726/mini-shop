import "./CartItem.css";

const CartItem = ({ item, qtyChangeHandler, removeHandler }) => {
  return (
    <div className="cartitem">
      <div className="cartitem-image">
        <img src={item.imageUrl} alt={item.name} />
      </div>
      <div className="cartitem-name">
        <p>{item.name}</p>
      </div>
      <div className="cartitem-price">
        <p>{item.price}$</p>
      </div>
      <select
        value={item.qty}
        onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
        className="cartitem-select"
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>

      <button
        className="cartitem-deletebtn"
        onClick={() => removeHandler(item.product)}
      >
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default CartItem;
