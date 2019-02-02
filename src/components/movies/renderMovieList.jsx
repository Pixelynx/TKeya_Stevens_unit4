import React from "react";

export const RenderMovieList = ({ movies }) => {

return(
  <>
    {movies.map(film => {
      return <option key={film.id} value={film.title}>{film.title}</option>
    })}
  </>
)
}
