import React from "react";
import { directors } from "../data";

const Directors = () => {
  const showDirectors = () => {
    return directors.map(d => {
      return (
        <div>
          <h3>{d.name}</h3>
          <ul>
            {d.movies.map(m => (
              <li>{m}</li>
            ))}
          </ul>
        </div>
      );
    });
  };
  return (
    <div>
      <h1>Directors Page</h1>
      <span>{showDirectors()}</span>
    </div>
  );
};

export default Directors;
