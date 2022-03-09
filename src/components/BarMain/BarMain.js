import React from "react";
import ArrowLeft from "../../assets/img/arrow-left.svg";
import "./BarMain.scss";
import BarKuxnya from "../BarKuxnya/BarKuxnya";
import Foods from "../Foods/Foods";
import Payment from "../Payment/Payment";
import Call from "../Call/Call";
import CallGo from "../CallGo/CallGo";
import FirstBar from "../FirstBar/FirstBar";
import { Outlet, Route, Routes } from "react-router-dom";
import Curiers from "../Curiers";
import Orders from "../Orders";

const BarMain = () => {
  return (
    <>
      <div className="bar-main">
        <div className="bar-main-left">
          <div className="left-header">
            <div className="left-header-name">r_k</div>
          </div>
          <div className="left-maptop">
            <span>15.03.2021 16:02</span>
            <span>Основная</span>
            <span>Администратор</span>
          </div>
          <div className="map">
            <iframe
              className="map_F"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11990.25631430392!2d69.2758336!3d41.2965909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1645271881771!5m2!1sru!2s"
            ></iframe>
          </div>
          <Curiers />
          <div className="left-bottom">
            <a href="#">Бар</a>
            <a href="#">Кухня</a>
          </div>
        </div>
        <div className="bar-main-right">
          <Outlet />
          <Orders />
        </div>
        <div className="bar-main-bottom">Меню</div>
      </div>
    </>
  );
};

export default BarMain;

{
  /* <a href="#" className="div">
								<img src="assets/img/phone.svg" alt=""/>
								<p className="px-3">
									<span className="mb-1 d-block">+998 93 555 55 55</span>
									<span className="d-block">Идет звонок...<span>0:05</span></span>
								</p>
						</a>  */
}
