import React, { useEffect, useState } from "react";
import MovieForm from "../components/MovieForm";

const MovieDetail = (props) => {
  const [movie, setMovie] = useState({
    title: "",
    rating: "",
    medium_cover_image: "",
    summary: "",
  });

  function movieFetch(id) {
    fetch("http://10.100.102.2:8000/api/movie/" + id)
      .then((res) => res.json())
      .then((res) => {
        setMovie(res);
      });
  }

  useEffect(() => {
    movieFetch(props.match.params.id);
  }, []);

  const inputChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  const movieUpdate = (e) => {
    e.preventDefault();
    fetch("http://10.100.102.2:8000/api/movie/" + movie.id, {
      method: "put",
      body: JSON.stringify(movie),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.text())
      .then((res) => {
        if (res === "ok") {
          alert("영화수정 성공");
          props.history.push("/");
        }
      });
  };
  return (
    <div>
      <MovieForm
        inputChange={inputChange}
        movieSaveOrUpdate={movieUpdate}
        movie={movie}
        path="movieDetail"
      />
    </div>
  );
};

export default MovieDetail;
