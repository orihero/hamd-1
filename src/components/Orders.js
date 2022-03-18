import React, { useEffect, useState } from "react";
import axios from "axios";
const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setInterval(() => fetchData(), 1000);
  }, []);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "http://hamd.loko.uz/api/operator/orders"
      );
      setOrders(data.data);
      console.log(orders);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="main_bottom_orders">
      {orders.map((item) => (
        <>
          <div className="main_bottom_items">
            <div className="main_bottom_border"></div>
            <p>#{item.id}</p>
            <div className="main_bottom_border"></div>
          </div>
          {item.orderProducts &&
            item.orderProducts.map((item) => (
              <p className="gamburger">
                {item.count} {item.product.name}
              </p>
            ))}
        </>
      ))}
    </div>
  );
};

export default Orders;
