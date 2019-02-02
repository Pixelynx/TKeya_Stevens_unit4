import React from "react";
import { Link } from "react-router-dom";
import "../css/navBar.css";

export const NavBar = () => {

  return(
    <>
      <nav>
        <Link className="menu" to="/">
          <img
              id="home_gif" src="https://data.whicdn.com/images/199567951/original.gif"
              alt="shoot_in_mouth"
              />
        </Link>
        {" "}
        <Link className="menu" to="/movies">Movies</Link>
        {" "}
        <Link className="menu" to="/people">People</Link>
        {" "}
        <Link className="menu" to="/locations">Locations</Link>
      </nav>
    </>
  )
}
