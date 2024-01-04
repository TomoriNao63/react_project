import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, Outlet, useNavigate } from "react-router-dom";
import api from "../api";
import styles from "./css/login.module.css";
import ImgCL from "./commons/ImgCL";

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
          localStorage.setItem("uid", res.data.uid);
          navigate("/");
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  };
  return (
    <>
      <div>
        <form onSubmit={handleSubmit(onsubmit)}>
          <span className={styles.LoginGroup}>
            <div className={styles.inputGroup}>
              <h2></h2>
              <input
                name="username"
                placeholder="账号"
                type="text"
                {...register("firstName", {
                  required: true,
                  maxLength: 8,
                })}
              ></input>
              <input
                name="password"
                placeholder="密码"
                type="password"
                {...register("lastName", { required: true })}
              />
              <input name="captcha" type="text" placeholder="验证码" />
            </div>
            <div>
              <ImgCL></ImgCL>
            </div>

            <button type="submit" className={styles.submitButton}>
              登录
            </button>
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
