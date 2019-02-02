import React, { Component } from "react";
import axios from "axios";
import "../../css/people.css";

class People extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: "",
      searchedChar: "",
      allChars: []
    }
  }

  componentDidMount = () => {
    this.getAllCharacters();
  }

  getAllCharacters = () => {
    axios.get("https://ghibliapi.herokuapp.com/people")
    .then(res => {
      this.setState({ allChars: res.data })
    }).catch(err => console.log(err))
  }

  handleChange = (event) => {
    this.setState({ searchInput: event.target.value })
  }

  handleSubmit = (event) => {
    const { searchInput, allChars, searchedChar } = this.state;
    if(searchInput) {
        let searched = searchInput.toLowerCase();

        {allChars.map(char => {
          let lowerChar = char.name.toLowerCase();
          if(lowerChar.includes(searched)) {
            this.setState({ searchedChar: searched })
          }
        })}
    }
  }

  displayInfo = () => {
    const { searchInput, searchedChar, allChars } = this.state;

    allChars.find(char => {
      let lowerName = char.name.toLowerCase()
      return searchInput.toLowerCase() === lowerName
    })
  }

  render() {
    const info = this.displayInfo();

    return(
      <>
          <h1 className="person_head">Search for a Person:</h1>
          <div className="search">
            <input className="input" type="text" value={this.state.searchInput} onChange={this.handleChange} />
            <input type="submit" value="Search" onClick={this.handleSubmit} />
          </div>
          <div>{info}</div>
      </>
    )
  }
}

export default People;
