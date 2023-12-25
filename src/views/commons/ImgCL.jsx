import { useState,useEffect } from "react";
import api from "../../api";

export default function ImgCL() {
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

  return (
    <>
      <img id="captchaImg" src="" style={{ cursor: "pointer" }} />
    </>
  );
}
