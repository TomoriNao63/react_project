import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import api from "../api";
import styles from "./css/login.module.css";

function Login() {
  const defaultVaules = {
    firstName: "",
    lastName: "",
    email: "",
    agree: false,
  };

  const { register, handleSubmit, errors, watch, clearErrors } =
    useForm(defaultVaules);
  const navigate = useNavigate();

  const imgUrl = "http://localhost:8081/captcha/captcha.jpg";
  const onRefresh = () => {};

  const onsubmit = (values) => {
    const param = {
      username: values.firstName,
      password: values.lastName,
    };
    api
      .login(param)
      .then(function (res) {
        if (res.code === 0) {
          const token = res.data.token;
          localStorage.setItem("token", token);
          navigate("/");
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  return (
    <>
      <div className={styles.container}>
        <form className={styles.loginForm} onSubmit={handleSubmit(onsubmit)}>
          <h2>欢迎</h2>
          <span>
            <input
              name="username"
              placeholder="账号"
              type="text"
              {...register("firstName", {
                required: true,
                maxLength: 8,
              })}
            >
              {}
            </input>
            <input
              name="password"
              placeholder="密码"
              type="password"
              {...register("lastName", { required: true })}
            />
            <input name="captcha" type="text" placeholder="验证码" />
            <img src={imgUrl} />
            <button type="submit">登录</button>
            <section>
              <a href="/reg">注册</a>
            </section>
            <section>
              <a href="/">游客访问</a>
            </section>
          </span>
        </form>
      </div>
    </>
  );
}

export default Login;
