import api from "../../api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function User() {
  const user = JSON.parse(localStorage.getItem("users"));
  const navigate = useNavigate();

  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await api
        .getUserInfo()
        .then(function (res) {
          console.log(res);
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
        <div></div>
      </div>
    </>
  );
}
