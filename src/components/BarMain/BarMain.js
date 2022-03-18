import React from "react";
import "./BarMain.scss";
import { Outlet } from "react-router-dom";
import Curiers from "../Curiers";
import Orders from "../Orders";
import AllCurierMap from "../Map";
import { NavLink } from "react-router-dom";

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
          <AllCurierMap />
          <Curiers />
          <div className="left-bottom">
            <NavLink to={"/main/bar"}>Кухня</NavLink>
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
