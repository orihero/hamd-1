import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// import Back from "../Back";
// import Call from "../Call/Call";
const FirstBar = () => {
  return (
    <>
      <div className="main-right-top">
        <div className="first-bar">
          <div>
            <NavLink to={"/main/bar"}>Новый заказ</NavLink>
          </div>
          <div>
            <NavLink to={"/main/call"}>Информация о звонке</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstBar;
