import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import axios from "axios";
const Orders = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    setInterval(() => fetchData(), 1000);
  }, []);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        "http://hamd.loko.uz/api/operator/orders"
      );
      setOrders(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // const deleteId = async (id) => {
  //   try {
  //     const { data } = await axios.delete(
  //       `http://hamd.loko.uz/api/operator/orders/${id}`
  //     );
  //     setOrders(data.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <>
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
                  {item.product.name} ... {item.count} ... {item.product.price}
                  сум
                </p>
              ))}
            {
              <p className="itog">
                <span>Итог......</span>
                <span>{item.product_total_sum} сум</span>
              </p>
            }
          </>
        ))}
        <div className="loading">
          {isLoading && (
            <ReactLoading
              className="loadingFoods"
              width={80}
              type="spinningBubbles"
              color={"#849ec8"}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Orders;
