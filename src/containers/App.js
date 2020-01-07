import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import Home from "../components/Home";
import Actors from "../components/Actors";
import Directors from "../components/Directors";
import Movies from "../components/Movies";

const App = props => {
  return (
    <div>
      <Router>
        <NavBar />
        <Router exact path="/" component={Home} />
        <Router exact path="/actors" component={Actors} />
        <Router exact path="/directors" component={Directors} />
        <Router exact path="/movies" component={Movies} />
      </Router>
    </div>
  )
};

export default App;
