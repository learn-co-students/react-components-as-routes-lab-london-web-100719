import React from "react";
import { actors } from "../data";

const Actors = () => {
  const showActors = () => {
    return actors.map(a => {
      return (
        <div>
          <h3>{a.name}</h3>
          <ul>
            {a.movies.map(m => (
              <li>{m}</li>
            ))}
          </ul>
        </div>
      );
    });
  };
  return (
    <div>
      <h1>Actors Page</h1>
      {showActors()}
    </div>
  );
};

export default Actors;
