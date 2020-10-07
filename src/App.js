import React from "react";
import "./App.css";
import Movie from "./page/Movie";
import Header from "./components/Header";
import { Route } from "react-router-dom";
import MovieList from "./page/MovieList";
import MovieDetail from "./page/MovieDetail";

function App() {
  return (
    <div>
      <Header />
      <Route path="/movie" exact={true} component={Movie} />
      <Route path="/" exact={true} component={MovieList} />
      <Route path="/movie/:id" exact={true} component={MovieDetail} />
    </div>
  );
}

export default App;
