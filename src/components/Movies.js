import React from "react";
import { movies } from "../data";

const Movies = () => {
  const showMovies = () => {
    return movies.map(m => {
      return (
        <div>
          <h3>{m.title}</h3>
          <p>Time: {m.time} minutes</p>
          <ul>
            {m.genres.map(g => (
              <li>{g}</li>
            ))}
          </ul>
        </div>
      );
    });
  };
  return (
    <div>
      <h1>Movies Page</h1>
      <span>{showMovies()}</span>
    </div>
  );
};

export default Movies;
