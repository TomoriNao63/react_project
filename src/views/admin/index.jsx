import React from "react";
import index from "./css/Home.module.css";
import Menu from "./Menu";
import Form from "./Form";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import adminMenu from "./css/adminMenu.module.css";
import api from "../../api";

export default function AdminIndex() {
  const navigate = useNavigate();
  const logOut = () => {
    {
      api
        .logout()
        .then(function (res) {
          console.log(res);
        })
        .catch(function (err) {
          console.log(err);
        });
      localStorage.removeItem("token");
    }
    navigate("/");
  };
  const menuList = [
    {
      id: 1,
      title: "用户管理",
      href: "/admin/userManage",
    },
    {
      id: 2,
      title: "网页管理",
      href: "/admin/pageManage",
    },
    {
      id: 3,
      title: "用户管理",
      href: "",
    },
  ];

  return (
    <>
      <div className={index.container}>
        <div className={adminMenu.form_background}>
          <div className={adminMenu.nav}>
            <div className={adminMenu.menu}>
              {menuList.map((list, index) => (
                <ul key={index}>
                  <li className={adminMenu.li}>
                    <Link className={adminMenu.a} to={list.href}>
                      {" "}
                      {list.title}
                    </Link>
                  </li>

                  <div className={adminMenu.line}></div>
                </ul>
              ))}
            </div>

            <div className={adminMenu.li} onClick={logOut}>
              退出
            </div>
          </div>
        </div>

        <Routes>
          <Route path="/admin/userMagage" element={<Form />} />
        </Routes>
      </div>
    </>
  );
}
