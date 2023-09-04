import React from "react";
import { useNavigate } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

function Header() {
  const user = localStorage.getItem("users");
  const navigate = useNavigate();
  function goLogin() {
    navigate("/login");
  }
  function logOut() {
    localStorage.removeItem("users");
    navigate("/");
  }
  return (
    <div className="ui secondary  menu">
      <a className="item" href="/">
        首页
      </a>

      <a className="item">攻略</a>
      <a className="item" href="/">
        社区
      </a>

      <div className="right menu">
        <div className=" ui simple dropdown">
          {user ? (
            <>
              <img
                className="ui mini image"
                src={require("../img/1.jpg")}
              ></img>

              <div className="menu">
                <a className="item" href={"/user/home"}>
                  用户中心
                </a>
                <a className="item" onClick={logOut}>
                  退出
                </a>
              </div>
            </>
          ) : (
            <span className="" onClick={goLogin}>
              登录
            </span>
          )}
        </div>

        <div className="item"></div>
      </div>
    </div>
  );
}

export default Header;
