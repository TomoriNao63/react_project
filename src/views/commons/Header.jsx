import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../api";

import header from "./css/header.module.css";
function Header() {
  const navigate = useNavigate();
  const user = localStorage.getItem("token");
  const [headImg, setheadImg] = useState();

  const [navItem, setnavItem] = useState([]);
  useEffect(() => {
    api
      .getHeaderItem()
      .then(function (res) {
        setnavItem(res.data);
        getHeadImg();
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);

  function getHeadImg() {
    api
      .getUserInfo()
      .then(function (res) {
        setheadImg(res.data.user_img);
      })
      .catch(function (err) {});
  }

  function goHome() {
    window.open("/user/home", "_blank");
  }
  function logOut() {
    api
      .logout()
      .then(function (res) {
        localStorage.clear();
        navigate("/");
      })
      .catch(function (err) {
        console.log(err);
      });
  }
  return (
    <>
      <div className={header.nav}>
        <div className={header.item}>
          {navItem.map((item, index) => (
            <Link key={index} to={item.href}>
              <li className={header.a}>{item.name}</li>
            </Link>
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
                    src={headImg}
                  ></img>
                  <div className={header.dropdown_content}>
                    <a className={header.userA} href="">
                      待定信息
                    </a>
                    <a className={header.userA} href="">
                      用户信息
                    </a>
                    <a className={header.userA} href="">
                      用户信息
                    </a>
                    <a className={header.userA} onClick={logOut}>
                      退出登录
                    </a>
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
      <div className={header.shadow}></div>
    </>
  );
}

export default Header;
