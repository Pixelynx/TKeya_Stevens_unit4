import React, { Component } from 'react';
import { Route } from "react-router-dom";
import './App.css';

import { NavBar } from "./components/navBar";
import { Home } from "./components/home";
import Movies from "./components/movies/movies";
import People from "./components/people/people";
import Locations from "./components/locations/locations";

class App extends Component {
  render() {
    return(
      <>
        <div>
          <NavBar className="navBar"/>
          <Route exact path="/" component={Home} />
          <Route path="/movies" component={Movies} />
          <Route path="/people" component={People} />
          <Route path="/locations" component={Locations} />
        </div>
      </>
    )
  }
}

export default App;
