import React, { useEffect, useState } from "react";

import api from "../api";

import "semantic-ui-css/semantic.min.css";
import "./css/movies.css";

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
      <div className="container">
        <div className="ui eight cards">
          {data.map((movie, index) => (
            <div className="card" key={index}>
              <img className="image" src={movie.img} />
              <div className="content">
                <a className="header">{movie.name}</a>
                <div className="meta">
                  <span className="date">{movie.director}</span>
                </div>
                <div className="description">{movie.text}</div>
              </div>
              <div className="extra content">
                <a>
                  <i className="user icon"></i>
                  {movie.rate}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Movies;
