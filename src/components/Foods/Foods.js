import React from "react";
import { NavLink } from "react-router-dom";
import ArrowLeft from "../../assets/img/arrow-left.svg";
import Back from "../Back";
import "./Foods.scss";

const foods = [
  "Гамбургер",
  "Лаваш",
  "Лаваш с сыром",
  "Хот дог королевский",
  "Хот дог",
  "Чизбургер",
];

const Foods = () => {
  return (
    <div className="allFoods">
      <Back />
      {foods.map((item) => (
        <div className="div">
          <NavLink to={"/main/payment"}>{item}</NavLink>
        </div>
      ))}
    </div>
  );
};

export default Foods;
