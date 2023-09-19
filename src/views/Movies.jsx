import React, { useEffect, useState } from "react";
import api from "../api";
import movie from "./css/movies.module.css";

function MovieDetail() {}

function Movies() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      console.log(localStorage.getItem("token"));
      const result = await api.getMovie();
      setData(result.data);
    }
    fetchData();
  }, []);

  return (
    <>
      <div className={movie.container}>
        <div className={movie.head}>
          <img
            className={movie.headImg}
            src={require("./img/background.png")}
          ></img>
        </div>
        <div className={movie.body}>
          <div className={movie.lists}>
            {data.map((movie, index) => (
              <div className={movie.list} key={index}>
                <img className={movie.listImg} src={movie.img} />
                <div className={movie.list_content}>
                  <a className={movie.list_header}>{movie.name}</a>
                  <div className={movie.list_text}>
                    <span className={movie.list_text}>{movie.director}</span>
                  </div>
                  <div className={movie.list_text}>{movie.text}</div>
                </div>
                <div className={movie.list_content}>
                  <a>
                    <i className={movie.icon}></i>
                    {movie.rate}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Movies;

// {data.map((movie, index) => (
//   <div className="card" key={index}>
//     <img className="image" src={movie.img} />
//     <div className="content">
//       <a className="header">{movie.name}</a>
//       <div className="meta">
//         <span className="date">{movie.director}</span>
//       </div>
//       <div className="description">{movie.text}</div>
//     </div>
//     <div className="extra content">
//       <a>
//         <i className="user icon"></i>
//         {movie.rate}
//       </a>
//     </div>
//   </div>
// ))}
