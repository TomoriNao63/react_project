import React from "react";

import { Link, Outlet, useNavigate } from "react-router-dom";

import styles from "./css/login.module.css";

export default function LoginIndex() {
  return (
    <>
      <div className={styles.navbar}></div>
      <div className={styles.container}>
        <div className={styles.picture}></div>
        <div className={styles.right}>
          <div className={styles.loginForm}>
            <span className={styles.nav}>
              <nav className={styles.loginNav}>
                <Link className={styles.loginLink} to="/login">
                  登录
                </Link>
              </nav>
              <nav>
                <Link className={styles.loginLink} to="/login/reg">
                  注册
                </Link>
              </nav>
            </span>
            <div>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
