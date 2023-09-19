import React, { useEffect } from "react";
import Home from "./css/Home.module.css";
import Menu from "./Menu";
import Form from "./Form";

function Admin() {
  return (
    <>
      <div className={Home.container}>
        <div>
          <Menu />
        </div>
        <div>
          <Form />
        </div>
      </div>
    </>
  );
}

export default Admin;
