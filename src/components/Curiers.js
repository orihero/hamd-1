import React, { useState, useEffect } from "react";
import axios from "axios";
import CurierImg from "../assets/img/courier.svg";
const Curiers = () => {
  const [curiers, setCuriers] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "http://hamd.loko.uz/api/operator/couriers-way"
      );
      setCuriers(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="couriers">
      <p className="curier-title">Курьеры</p>
      <div className="all_curier">
        {curiers.map((item, index) => (
          <div className="courier" key={index}>
            <img src={CurierImg} alt="" />
            <div className="courier-info">
              <p>
                <span>Курьер:</span>
                {item.courier.name}
              </p>
              <p>
                <span>ID заказа:</span>#{item.courier.id}
              </p>
              <p>
                <span>Маршрут:</span>
                {item.address}
              </p>
            </div>
          </div>
        ))}
        <div className="courier">
          <img src={CurierImg} alt="" />
          <div className="courier-info">
            <p>
              <span>Курьер:</span>Ройтман Рафаэль
            </p>
            <p>
              <span>ID заказа:</span>#27
            </p>
            <p>
              <span>Маршрут:</span>Ташкент - Фергана
            </p>
          </div>
        </div>
        <div className="courier">
          <img src={CurierImg} alt="" />
          <div className="courier-info">
            <p>
              <span>Курьер:</span>Ройтман Рафаэль
            </p>
            <p>
              <span>ID заказа:</span>#27
            </p>
            <p>
              <span>Маршрут:</span>Ташкент - Фергана
            </p>
          </div>
        </div>
        <div className="courier">
          <img src={CurierImg} alt="" />
          <div className="courier-info">
            <p>
              <span>Курьер:</span>Ройтман Рафаэль
            </p>
            <p>
              <span>ID заказа:</span>#27
            </p>
            <p>
              <span>Маршрут:</span>Ташкент - Фергана
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curiers;
