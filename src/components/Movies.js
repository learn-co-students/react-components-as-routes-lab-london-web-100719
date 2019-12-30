import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <React.Fragment>
      <h1>Movies Page</h1>
      {movies.map(movie => (
        <div>
          <p>
            <strong>Name: {movie.title}</strong>
          </p>
          <p>Time: {movie.time}</p>
          <p>
            Genres:
            <ul>
              {movie.genres.map(genre => (
                <li>{genre}</li>
              ))}
            </ul>
          </p>
        </div>
      ))}
    </React.Fragment>
  );
}

export default Movies;
