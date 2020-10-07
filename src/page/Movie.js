import React, { useState } from "react";
import MovieForm from "../components/MovieForm";

const Movie = (props) => {
  const [movie, setMovie] = useState({
    title: "",
    rating: "",
    medium_cover_image: "",
    summary: "",
  });

  const inputChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  const movieSave = (e) => {
    e.preventDefault();
    fetch("http://10.100.102.2:8000/api/movie", {
      method: "post",
      body: JSON.stringify(movie),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.text())
      .then((res) => {
        if (res === "ok") {
          alert("영화등록 성공");
          props.history.push("/");
        }
      });
  };
  return (
    <div className="container">
      <MovieForm
        inputChange={inputChange}
        movieSaveOrUpdate={movieSave}
        movie={movie}
        path="movie"
      />
    </div>
  );
};

export default Movie;
