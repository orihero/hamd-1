import React, { useState, useEffect } from "react";
import axios from "axios";
import CurierImg from "../assets/img/courier.svg";
import { useDispatch, useSelector } from "react-redux";
import { getCuriers } from "../store/kurierSlice";
import ReactLoading from "react-loading";
import { addModal } from "../store/kurierSlice";

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

  const curierAdd = (product) => {
    const curier = {
      id: product.id,
      name: product.name,
      addres: product.address,
      map_location: product.map_location,
    };
    dispatch(addModal(curier));
  };
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
            <div className="courier" key={id} onClick={() => curierAdd(item)}>
              <img src={CurierImg} alt="" />
              <div className="courier-info">
                <p>
                  <span>Курьер:</span>
                  {item.courier.name ?? "NE UKAZANO"}
                </p>
                <p>
                  <span>ID заказа:</span>#{item.id}
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
