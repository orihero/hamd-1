import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import danger from "../../assets/img/danger.svg";
import axios from "axios";
import "./Modal.scss";
import { clearOrder } from "../../store/orderSlice";
import { useNavigate } from "react-router-dom";

const Modal = ({ closeModal }) => {
  const meals = useSelector((state) => state.order.meals);
  const navigate = useNavigate();
  const products_id = meals.map((item) => item.id);
  console.log(products_id);
  const products_amount = meals.map((item) => item.amount);
  const dispatch = useDispatch();
  const fetchData = async () => {
    const payload = {
      name: "Texron",
      phone: "998993693424",
      address: "slkdfjsal",
      map_location: "41.323311, 69.304796",
      comment: "comment",
      products_id: products_id,
      products_amount: products_amount,
      payment_type_id: 16,
      delivery_type_id: 12,
    };
    dispatch(clearOrder());
    navigate("/main/bar");
    try {
      const { data } = await axios.post(
        "http://hamd.loko.uz/api/operator/order-new",
        payload
      );

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="i-modal">
        <div onClick={() => closeModal(true)} className="i-modal-box">
          <img src={danger} alt="" />
          <p className="mb-3">Подтвердить</p>
          <p className="mb-3">Вы хотите оплатить чек с помощью “ Сум “?</p>
          <p className="d-flex">
            <a onClick={fetchData} href="#">
              Да
            </a>
            <a href="#">Нет</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Modal;
