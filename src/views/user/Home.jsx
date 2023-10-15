import api from "../../api";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function User() {
  const navigate = useNavigate();

  const [userData, setuserData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await api
        .getUserInfo()
        .then(function (res) {
          setuserData(res.data);
        })
        .catch(function (err) {
          console.log(err);
          navigate("/login");
        });
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="container">
        <div>
          <p>{userData.uid}</p>
          <p>{userData.name}</p>
          <p>{userData.sex}</p>
          <p>{userData.email}</p>
          <p>{userData.sign_time}</p>
          <p>{typeof userData.user_img}</p>
          <img src={userData.user_img}></img>
        </div>
      </div>
    </>
  );
}
