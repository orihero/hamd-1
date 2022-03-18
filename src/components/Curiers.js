import React, { useState, useEffect } from "react";
import axios from "axios";
import CurierImg from "../assets/img/courier.svg";
import { useDispatch, useSelector } from "react-redux";
import { getCuriers } from "../store/kurierSlice";
import ReactLoading from "react-loading";

const Curiers = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    const st = state.curier;
    return {
      curiers: st.curiers,
      isLoading: st.isLoading,
    };
  });

  useEffect(() => {
    dispatch(getCuriers());
  }, []);

  // if (data.isLoading) {
  //   return (
  //     <ReactLoading
  //       className="loadingFoods"
  //       width={80}
  //       type="spinningBubbles"
  //       color={"#849ec8"}
  //     />
  //   );
  // }

  return (
    <>
      <div className="couriers">
        <p className="curier-title">Курьеры</p>
        <div className="loading">
          {data.isLoading && (
            <ReactLoading
              className="loadingFoods"
              width={40}
              type="spinningBubbles"
              color={"#849ec8"}
            />
          )}
        </div>
        <div className="all_curier">
          {data.curiers.map((item, id) => (
            <div className="courier" key={id}>
              <img src={CurierImg} alt="" />
              <div className="courier-info">
                <p>
                  <span>Курьер:</span>
                  {item.courier.name ?? "NE UKAZANO"}
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
        </div>
      </div>
    </>
  );
};

export default Curiers;
