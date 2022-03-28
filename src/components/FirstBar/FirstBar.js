import React from "react";
import { useNavigate } from "react-router-dom";

// import Back from "../Back";
// import Call from "../Call/Call";
const FirstBar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="main-right-top">
        <div className="first-bar">
          <div onClick={() => navigate("/main/bar")}>Новый заказ</div>
          <div onClick={() => navigate("/main/bar")}>Информация о звонке</div>
        </div>
      </div>
    </>
  );
};

export default FirstBar;
