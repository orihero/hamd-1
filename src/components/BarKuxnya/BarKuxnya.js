import React from "react";
import { NavLink } from "react-router-dom";
import ArrowLeft from "../../assets/img/arrow-left.svg";
import Back from "../Back";
import "./BarKuxnya.scss";
function BarKuxnya() {
  return (
    <>
      <div className="allBar">
        <Back />
        <div className="div">
          <NavLink to={"/main/bar"}>Бар</NavLink>
        </div>
        <div className="div">
          <NavLink to={"/main/foods"}>Кухня</NavLink>
        </div>
      </div>
    </>
  );
}

export default BarKuxnya;
{
  /* <a href="#" className="div">
                                     <img src="assets/img/phone.svg" alt=""/>
                                     <p className="px-3">
                                         <span className="mb-1 d-block">+998 93 555 55 55</span>
                                         <span className="d-block">Идет звонок...<span>0:05</span></span>
                                     </p>
                             </a>  */
}
