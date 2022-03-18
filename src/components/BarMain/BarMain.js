import React from "react";
import "./BarMain.scss";
import { Outlet, useNavigate } from "react-router-dom";
import Curiers from "../Curiers";
import Orders from "../Orders";
import AllCurierMap from "../Map";
import { NavLink } from "react-router-dom";
import { LogoutOutlined } from "@ant-design/icons";

const BarMain = () => {
  const navigate = useNavigate();
  const logout = async () => {
    console.log("logging out");
    try {
      localStorage.removeItem("token");
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <div className="bar-main">
        <div className="bar-main-left">
          <div className="left-header">
            <div className="left-header-name">r_k</div>
            <div onClick={logout} className="logout">
              <LogoutOutlined style={{ fontSize: "30px", color: "black" }} />
            </div>
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
