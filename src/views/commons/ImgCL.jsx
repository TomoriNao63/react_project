<<<<<<< HEAD
import { useEffect, useState } from "react";
=======
import { useState,useEffect } from "react";
>>>>>>> 238b8cb3b7a64d3d17ca40b3da8b945f415f3d3c
import api from "../../api";
import styles from "../css/login.module.css";
export default function ImgCL() {
<<<<<<< HEAD
  const [captchaImg, setcaptchaImg] = useState();
  const [imgUrl, setImgUrl] = useState();

  const getCaptcha = async () => {
    await api
      .captcha({
        responseType: "blob",
      })
      .then(function (res) {
        const blob = new Blob([res.data], { type: "img/jpeg" });
        setcaptchaImg(URL.createObjectURL(blob));
      })
      .catch(function (err) {
        console.log(err.blob);
      });
  };
=======
  const [captchaImg,setCaptchaImg] = useState();
  useEffect(() => {
    async function getCaptcha() {
      await api
        .captcha({
          responseType: "blob",
        })
        .then(function (res) {
          let blob = new Blob([res.data], { type: "img/jpeg" });
          let url = URL.createObjectURL(blob);
          setCaptchaImg(document.getElementById("captchaImg"));
          if (captchaImg) {
            captchaImg.src = url;
            captchaImg.onload = function () {
              URL.revokeObjectURL(url);
            };
          }
          console.log(res.data);
        })
        .catch(function (err) {
          console.log(err.blob);
        });
    }
    getCaptcha();
  }, [captchaImg]);
>>>>>>> 238b8cb3b7a64d3d17ca40b3da8b945f415f3d3c

  return (
    <>
      <img
        className={styles.captchaImg}
        id="captchaImg"
        src={"/api/captcha/captcha"}
      />
    </>
  );
}
