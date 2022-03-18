import React, { useState } from "react";
import ReactLoading from "react-loading";
import axios from "axios";
import "./LoginPage.scss";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button } from "antd";
import { setProfile, setToken } from "../../store/profileSlice";

const Auth = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const login = async (values) => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        "http://hamd.loko.uz/api/operator/sign-in",
        values
      );
      localStorage.setItem("token", data.data.token);
      axios.defaults.headers["Authorization"] = `Bearer ${data.data.token}`;
      dispatch(setToken(null));
      navigate("/main/first");
    } catch (e) {
      console.log({ e });
    } finally {
      setIsLoading(false);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <h1>
        r<span>_</span>keeper
      </h1>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        onFinish={login}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          // label="login"

          name="login"
          // rules={[
          //   {
          //     type: "text",
          //     required: true,
          //     message: "Please input your username!",
          //   },
          // ]}
        >
          <Input placeholder="Логин" />
        </Form.Item>
        <Form.Item
          // label="Password"
          name="password"
          // rules={[
          //   {
          //     required: false,
          //     message: "Please input your password!",
          //   },
          // ]}
        >
          <Input.Password placeholder="Пароль" />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button className="button" type="primary" htmlType="submit">
            {isLoading ? (
              <div className="loading">
                <ReactLoading
                  width={40}
                  type="spinningBubbles"
                  color={"white"}
                />
              </div>
            ) : (
              "Войти"
            )}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Auth;
