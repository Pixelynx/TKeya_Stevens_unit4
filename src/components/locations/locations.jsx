import React, { Component } from "react";
import axios from "axios";
import "../../css/locations.css";
import { DisplayLocations } from "./displayLocations";

class Locations extends Component {
  constructor() {
    super();
    this.state = {
      allLocations: [],
      isShowing: false
    }
  }

  componentDidMount = () => {
    axios.get("https://ghibliapi.herokuapp.com/locations")
    .then(res => {
      this.setState({ allLocations: res.data })
    })
  }

  handleClick = () => {
    this.setState(prevState => ({
      isShowing: !prevState.isShowing
    }))
  }

  render() {
    return(
      <>
        <div className="locations">
          <h1 className="locate_head">List of Locations</h1>
          <div className="button_container">
            <button id="location_button" onClick={this.handleClick}>
              {!this.state.isShowing ? "Show Locations" : "Hide Locations"}
            </button>
          </div>
        <div className="locations_info">
          {this.state.isShowing ? <DisplayLocations locations={this.state.allLocations}/> : null}
        </div>
        </div>
      </>
    )
  }
}

export default Locations;
