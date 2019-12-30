import React from "react";
import { directors } from "../data";

const Directors = () => {
  return (
    <React.Fragment>
      <h1>Directors Page</h1>
      {directors.map(director => (
        <div>
          <p>
            <strong>Name: {director.name}</strong>
          </p>
          <p>
            Movies:
            <ul>
              {director.movies.map(movie => (
                <li>{movie}</li>
              ))}
            </ul>
          </p>
        </div>
      ))}{" "}
    </React.Fragment>
  );
};

export default Directors;
