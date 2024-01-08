import { useState, useEffect } from "react";
import { Link, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import FileUploader from "../commons/FileUploaded";
import api from "../../api";
import userhome from "./css/userhome.module.css";
export default function UserInfo() {
  const navigate = useNavigate();

  const [userData, setuserData] = useState([]);

  const [selectedFile, setSelectedFile] = useState();

  function upLoadHeadImg() {
    console.log(selectedFile.size);
    api
      .uploadUserImg(selectedFile)
      .then(function (res) {
        console.log(res.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  useEffect(() => {
    api
      .getUserInfo()
      .then(function (res) {
        setuserData(res.data);
      })
      .catch(function (err) {
        console.log(err);
        navigate("/login");
      });
  }, []);

  return (
    <>
      <section>
        <div className={userhome.ul_right}>
          <div className={userhome.userInfo}>
            <div className={userhome.labelGroup}>
              <label>姓名：</label>
              <label>性别：</label>
              <label>邮箱：</label>
            </div>
            <div className={userhome.inputGroup}>
              <input
                className={userhome.input}
                defaultValue={userData.name}
              ></input>
              <input
                className={userhome.input}
                defaultValue={userData.sex}
              ></input>
              <input
                className={userhome.input}
                defaultValue={userData.email}
              ></input>
            </div>

            <div className={userhome.headImg}>
              <img src={userData.user_img} className={userhome.user_img}></img>

              <FileUploader
                onSelectedSuccess={(file) => {
                  setSelectedFile(file);
                  const imgData = URL.createObjectURL(file);
                }}
                onSelectedError={({ error }) => alert(error)}
              />
              <button className={userhome.uploadButton} onClick={upLoadHeadImg}>
                确认
              </button>
            </div>
          </div>
          <button className={userhome.userInfoButton}>确认</button>
        </div>
      </section>
    </>
  );
}
