import React from "react";
import { useState, useEffect } from "react";
import adminForm from "./css/adminForm.module.css";
import api from "../../api";
import { useNavigate } from "react-router-dom";
export default function Form() {
  const [userData, setuserData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchData() {
      const result = await api
        .getUser()
        .then(function (res) {
          setuserData(result.data);
        })
        .catch(function (err) {
          navigate("/login");
        });
    }
    fetchData();
  }, []);

  return (
    <>
      <div className={adminForm.container}>
        <div className={adminForm.navbar}>
          <div className={adminForm.icon}>后台管理系统</div>
          <div></div>
        </div>
        <div className={adminForm.tableContainer}>
          <div></div>
          <table border={1} className={adminForm.table}>
            <thead>
              <tr>
                <th>Uid</th>
                <th>名称</th>
                <th>性别</th>
                <th>账号可用</th>
                <th>权限</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((user, index) => (
                <tr key={index}>
                  <td>{user.uid}</td>
                  <td>{user.username}</td>
                  <td>{user.password}</td>
                  <td>{user.enabled ? "可用" : "不可用"}</td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
