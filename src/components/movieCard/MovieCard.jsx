import React from "react";
import { Link } from "react-router-dom";
import "./movieCard.scss";

const MovieCard = ({ data }) => {
  return (
    <div className="card-item">
      <Link to={`movie/${data.imdbID}`} className="link-a">
        <div className="card-inner">
          <div className="card-top">
            <img
              src={data.Poster !== "N/A" ? data.Poster : "/default.jpeg"}
              alt="poster image"
            />
          </div>
          <div className="card-bottom">
            <div className="card-info">
              <h4>
                {data.Title} ({data.Year})
              </h4>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
