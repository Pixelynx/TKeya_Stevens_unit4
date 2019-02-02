import React, { Component } from "react";
import axios from "axios";
import { RenderMovieList } from "./renderMovieList";
import "../../css/movies.css";
import "../../App.css";

class Movies extends Component {
  constructor() {
    super();
    this.state = {
      allMovies: [],
      selectedMovie: null
    }
  }

  componentDidMount = () => {
    axios.get("https://ghibliapi.herokuapp.com/films")
    .then(res => {
      this.setState({ allMovies: res.data })
    }).catch(err => console.log(err))
  }

  handleClick = (event) => {
    this.setState({ selectedMovie: event.target.value })
  }


  render() {

    let mapMovies = this.state.allMovies.map(film => {
      if(this.state.selectedMovie === film.title) {
        return(
              <>
                <div className="film_info">
                  <h3 className="film_title">{film.title}</h3>
                  <span className="release">Release Date:</span> <span className="date">{film.release_date}</span>
                    <br />
                    <br />
                  <span className="summary">Summary:</span>
                    <br />
                  <p className="description">
                    {film.description}
                  </p>
                </div>
              </>
            )
      }
      return mapMovies;
    })


    return(
      <>
        <div className="movies">
          <h1 className="select_movie">Select a Movie:</h1>
          <div className="movies_">
          <select className="movie_list" onClick={this.handleClick}>
            <option value=""></option>
            <RenderMovieList movies={this.state.allMovies}/>
          </select>
          <div className="movie_info">
            {mapMovies}
          </div>
        </div>
        </div>
      </>
    )
  }
}

export default Movies;
