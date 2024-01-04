import { useEffect, useState } from "react";
import api from "../../api";
import styles from "../css/login.module.css";
export default function ImgCL() {
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
