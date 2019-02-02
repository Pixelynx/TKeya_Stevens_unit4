import React from "react";
import "../../css/locations.css";

export const DisplayLocations = ({ isShowing, locations }) => {
  return(
    <>
    {locations.map(location => {
        return (
              <>
                <h3>{location.name}</h3>
                  <span className="climate">Climate: </span>
                  <span className="climate_info">
                    {location.climate === "TODO" ? "Unknown" : location.climate}
                  </span>
                <br />
                <span className="terrain">Terrain: </span>
                  <span className="terrain_info">
                    {location.terrain === "TODO" ? "Unknown" : location.terrain}
                  </span>
              </>
            )
    })}
    </>
  )
}
