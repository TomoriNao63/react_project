import React, { useEffect, useState } from "react";
import api from "../api";
import bodyCSS from "./css/body.module.css";

function Body() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {}
    fetchData();
  }, []);

  return (
    <>
      <div className={bodyCSS.container}>
        <div className={bodyCSS.head}></div>
        <div className={bodyCSS.body}></div>
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
