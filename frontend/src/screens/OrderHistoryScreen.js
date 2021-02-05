import OrderItem from "../components/OrderItem";
import "./OrderHistoryScreen.css";
import { useSelector } from "react-redux";

const OrderHistoryScreen = () => {
  const history = useSelector((state) => state.history);
  const { orders } = history;

  return (
    <div className="orderhistory-screen">
      <h2>Order History</h2>
      {orders.length === 0 ? (
        <div>No Orders</div>
      ) : (
        orders.map((order, index) => <OrderItem key={index} order={order} />)
      )}
    </div>
  );
};

export default OrderHistoryScreen;
