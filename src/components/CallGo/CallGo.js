import React from "react";
import Phone from "../../assets/img/phone.svg";
import "./CallGo.scss";
const CallGo = () => {
  return (
    <a href="#" className="div">
      <img src={Phone} alt="" />
      <p>
        <span className="span">+998 93 555 55 55</span>
        <span>
          Идет звонок...<span>0:05</span>
        </span>
      </p>
    </a>
  );
};

export default CallGo;
