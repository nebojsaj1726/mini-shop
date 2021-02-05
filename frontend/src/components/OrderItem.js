import "./OrderItem.css";

const OrderItem = ({ order }) => {
  return (
    <div>
      <div className="orderitems">
        <div className="orderitem">
          <p>{order.name}</p>
        </div>
        <div className="orderitem">
          <p>{order.email}</p>
        </div>
        <div className="orderitem">
          <p>Total: {order.items} items</p>
        </div>
        <div className="orderitem">
          <p>Total price: {order.price}$</p>
        </div>
      </div>
      <div>
        <hr />
      </div>
    </div>
  );
};

export default OrderItem;
