import React, { useEffect, useState } from "react";
import bodyCSS from "./css/body.module.css";
import api from "../api/index.js";
import Pinglun from "./commons/Pinglun.jsx";

function Body() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      await api
        .getIndex()
        .then(function (res) {
          setData(res.data);
        })
        .catch(function (err) {
          console.log(err);
        });
    }
    fetchData();
  }, []);

  return (
    <>
      <div className={bodyCSS.container}>
        <div className={bodyCSS.left_sider}></div>
        <div className={bodyCSS.body}>
          {data.map((item, index) => (
            <div className={bodyCSS.item} key={index}>
              <h2 className={bodyCSS.title}>{item.name}</h2>
              <h3 className={bodyCSS.typename}>{item.typename} </h3>
              <span className={bodyCSS.context}>{item.text}</span>
              <img className={bodyCSS.image} src={item.img}></img>
            </div>
          ))}
        </div>
        <div className={bodyCSS.right_sider}></div>
      </div>
    </>
  );
}

export default Body;

{
  /* <div className={movieCSS.lists}>
{data.map((movie, index) => (
  <div className={movieCSS.list} key={index}>
    <img className={movieCSS.list_img} src={movie.img} />
    <div className={movieCSS.list_content}>
      <a className={movieCSS.list_header}>{movie.name}</a>
      <div className={movieCSS.list_text}>
        <span className={movieCSS.list_text}>{movie.director}</span>
      </div>
      <div className={movieCSS.list_text}>{movie.text}</div>
    </div>
    <div className={movieCSS.list_content}>
      <a>
        <i className={movie.icon}></i>
        {movie.rate}
      </a>
    </div>
  </div>
))}
</div> */
}
