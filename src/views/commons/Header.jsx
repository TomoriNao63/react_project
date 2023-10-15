import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api";

import header from "./css/header.module.css";
function Header() {
  const user = localStorage.getItem("token");
  const navigate = useNavigate();

  const [navItem, setnavItem] = useState([]);
  useEffect(() => {
    api
      .getHeaderItem()
      .then(function (res) {
        setnavItem(res.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);

  function goHome() {
    navigate("/user/home");
  }
  function logOut() {
    api
      .logout()
      .then(function (res) {
        console.log(res);
        localStorage.removeItem("token");
        navigate("/");
      })
      .catch(function (err) {
        console.log(err);
      });
  }
  return (
    <div className={header.nav}>
      <div className={header.item}>
        {navItem.map((item, index) => (
          <a key={index} href={item.href}>
            <li className={header.a}>{item.name}</li>
          </a>
        ))}
      </div>
      <div className={header.item}>
        <input className={header.search} placeholder="搜索"></input>
      </div>
      <div className={header.item}>
        <div className="">
          {user ? (
            <>
              <span className={header.dropdown}>
                <img
                  onClick={goHome}
                  className={header.userImg}
                  src={require("../img/1.jpg")}
                ></img>
                <div className={header.dropdown_content}>
                  <p className={header.p}>待定信息</p>
                  <p className={header.p}>用户信息</p>
                  <p className={header.p}>用户信息</p>
                  <p className={header.p} onClick={logOut}>
                    退出登录
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
