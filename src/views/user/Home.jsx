import { useState, useEffect } from "react";

import { Link, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import api from "../../api";
import userhome from "./css/userhome.module.css";
import UserInfo from "./UserInfo";
export default function User() {
  const navigate = useNavigate();
  const [userItem, setuserItem] = useState([]);

  useEffect(() => {
    api
      .getUserItem()
      .then(function (res) {
        setuserItem(res.data);
      })
      .catch(function (err) {
        navigate("/");
      });
  }, []);

  return (
    <>
      <section>
        <div className={userhome.container}>
          <div className={userhome.left_sider}></div>
          <div className={userhome.body}>
            <div className={userhome.form}>
              <ul className={userhome.ul}>
                {userItem.map((item, index) => (
                  <Link className={userhome.li} key={index} to={item.href}>
                    <li className={userhome.a}>{item.name}</li>
                  </Link>
                ))}
              </ul>
              <Outlet />
              <div className={userhome.right_sider}></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
