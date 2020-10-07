import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  const FlexStyle = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  `;

  const ImgStyle = styled.img`
    width: 100%;
    height: 300px;
  `;
  const TextStyle = styled.div`
    text-align: center;
  `;
  const CardStyle = styled.div`
    margin: 10px;
    padding: 5px;
    height: 400px;
    width: 300px;
    border: 1px solid rgb(197, 197, 197);
    border-radius: 10px;
    box-shadow: 1px 1px 0px 0px rgb(54, 53, 53);
  `;
  function movieListFetch() {
    fetch("http://10.100.102.2:8000/api/movie")
      .then((res) => res.json())
      .then((res) => {
        setMovies(res);
      });
  }

  useEffect(() => {
    movieListFetch();
  }, []);

  const deleteById = (id) => {
    fetch("http://10.100.102.2:8000/api/movie/" + id, {
      method: "delete",
    })
      .then((res) => res.text())
      .then((res) => {
        if (res === "ok") {
          setMovies(movies.filter((movie) => movie.id !== id));
        }
      });
  };
  return (
    <FlexStyle>
      {movies.map((movie) => (
        <CardStyle key={movie.id}>
          <ImgStyle src={movie.medium_cover_image} />
          <TextStyle>
            <h4>{movie.title}</h4>
            <button className="button1">
              <Link movie={movie} to={"/movie/" + movie.id}>
                상세보기
              </Link>
            </button>
            <button className="button1" onClick={() => deleteById(movie.id)}>
              삭제
            </button>
          </TextStyle>
        </CardStyle>
      ))}
    </FlexStyle>
  );
};

export default MovieList;
