import React from "react";
import adminForm from "./css/adminForm.module.css";

export default function Form() {
  return (
    <>
      <div className={adminForm.container}>
        <table border={1} className={adminForm.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>用户名</th>
              <th>权限</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>2</td>
              <td>1</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
