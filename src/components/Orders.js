import React, { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "http://hamd.loko.uz//api/operator/current-orders"
      );
      setOrders(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="main_bottom_orders">
      {orders.map((item, ind) => (
        <>
          <div key={ind} className="main_bottom_items">
            <div className="main_bottom_border"></div>
            <p>#{item.id}</p>
            <div className="main_bottom_border"></div>
          </div>
          <p className="gamburger">
            {item.products[0].count} {item.products[0].name}
          </p>
        </>
      ))}
    </div>
  );
};

export default Orders;
