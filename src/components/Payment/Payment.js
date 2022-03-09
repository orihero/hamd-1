import React from "react";
import Back from "../Back";
import "./Payment.scss";
const Payment = () => {
  return (
    <div className="payment_all">
      <Back />
      <div>Безналичный расчет</div>
      <div>Наличность</div>
    </div>
  );
};

export default Payment;
