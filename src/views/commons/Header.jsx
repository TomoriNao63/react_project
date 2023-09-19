import React from "react";
import { useNavigate } from "react-router-dom";

import header from "./css/header.module.css";
function Header() {
  const user = localStorage.getItem("token");
  const navigate = useNavigate();
  function goLogin() {
    navigate("/login");
  }
  function goHome() {
    navigate("/user/home");
  }
  function logOut() {
    localStorage.removeItem("token");
    navigate("/");
  }
  return (
    <div className={header.nav}>
      <div className={header.item}>
        <a className={header.a} href="/">
          首页
        </a>
        <a className={header.a} href="/">
          攻略
        </a>
        <a className={header.a} href="/">
          社区
        </a>
        <a className={header.a} href="/">
          社区
        </a>
      </div>
      <div className={header.item}>
        <input className={header.input} placeholder="搜索"></input>
      </div>
      <div className={header.item}>
        <div className="">
          {user ? (
            <>
              <span className={header.dropdown}>
                <img
                  className={header.userImg}
                  src={require("../img/1.jpg")}
                ></img>
                <div className={header.dropdown_content}>
                  <p onClick={goHome}>用户中心</p>
                  <p>用户信息</p>
                  <p>用户信息</p>
                  <p>用户信息</p>
                  <p className={header.p} onClick={logOut}>
                    退出
                  </p>
                </div>
              </span>
            </>
          ) : (
            <a className={header.a} href="/login">
              登录
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
