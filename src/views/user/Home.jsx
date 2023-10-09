import api from "../../api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function User() {
  const user = JSON.parse(localStorage.getItem("users"));
  const navigate = useNavigate();

  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await api.getUserInfo();
      setData(result);
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
