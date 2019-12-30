import React from "react";
import { actors } from "../data";

const Actors = () => {
  return (
    <React.Fragment>
      <h1>Actors Page</h1>
      {actors.map(actor => (
        <div>
          <p>
            <strong>Name: {actor.name}</strong>
          </p>
          <p>
            Movies:
            <ul>
              {actor.movies.map(movie => (
                <li>{movie}</li>
              ))}
            </ul>
          </p>
        </div>
      ))}
    </React.Fragment>
  );
};

export default Actors;
