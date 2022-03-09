import React, { useState, useEffect } from "react";
import Phone from "../../assets/img/phone.svg";
import axios from "axios";
import Back from "../Back";
import "./Call.scss";
const Call = () => {
  const [call, setCall] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        "http://hamd.loko.uz/api/operator/last-calls"
      );
      setCall(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="back">
        <Back />
      </div>
      <div className="main_call">
        <h2>Последние звонки:</h2>
        {call.map((item, i) => (
          <div key={i} className="main-right-center">
            <p className="d-flex">
              <p>
                {item.id}.<span>{item.phone}</span>
              </p>
              <span className="time">{item.date}</span>
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Call;
