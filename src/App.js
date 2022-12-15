import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);

  const moviesEventHandler = () => {
    fetch("https://swapi.dev/api/films")
      .then((response) => response.json())
      .then((data) => {
        const transformedMovies = data.results.map((dataMovie) => {
          return {
            id: dataMovie.episode_id,
            title: dataMovie.title,
            releaseDate: dataMovie.release_date,
            openingText: dataMovie.opening_crawl,
          };
        });
        setMovies(transformedMovies);
      });
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={moviesEventHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
