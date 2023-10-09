import React, { useEffect, useState } from "react";
import api from "../api";
import movieCSS from "./css/movies.module.css";

function MovieDetail() {}

function Movies() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const result = await api.getMovie();
      setData(result.data);
    }
    fetchData();
  }, []);

  return (
    <>
      <div className={movieCSS.container}>
        <div className={movieCSS.head}></div>
        <div className={movieCSS.body}>
          <div className={movieCSS.lists}>
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Movies;
