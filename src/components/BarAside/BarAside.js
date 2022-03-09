import React, { useState } from "react";
import "./BarAside.scss";
import succes from "../../assets/img/check-succes.svg";
import xclosesvg from "../../assets/img/Xclosesvg.svg";

const BarAside = () => {
  const [value, setValue] = ["+998"];
  return (
    <div className="bar-aside">
      <div className="bar-aside-head">
        <input
          className="mt-1"
          value={value}
          type="text"
          onChange={(event) => {
            setValue(event.target.value);
            console.log(value);
          }}
        />
      </div>
      <div className="calc-center">
        <div className="calc-numb">
          <button>7</button>
        </div>
        <div className="calc-numb">
          <button>8</button>
        </div>
        <div className="calc-numb">
          <button>9</button>
        </div>
        <div className="calc-numb">
          <button>4</button>
        </div>
        <div className="calc-numb">
          <button>5</button>
        </div>
        <div className="calc-numb">
          <button>6</button>
        </div>
        <div className="calc-numb">
          <button>1</button>
        </div>
        <div className="calc-numb">
          <button>2</button>
        </div>
        <div className="calc-numb">
          <button>3</button>
        </div>
        <div className="calc-numb">
          <button>0</button>
        </div>
        <div className="calc-numb">
          <button>.</button>
        </div>
        <div className="calc-numb">
          <button>Удл</button>
        </div>
      </div>
      <div className="calc-bottom">
        <div className="calc-action">Позвонить</div>
      </div>
      <div className="bar-aside-bottom">
        <div className="bar-total">Оплатить Сум: 0.00</div>
      </div>
      <div className="bar-aside-bottom-img">
        <div className="img-1">
          <img src={succes} alt="" />
        </div>
        <div className="img-2">
          <img src={xclosesvg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default BarAside;
