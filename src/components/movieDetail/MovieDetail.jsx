import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchAsyncDetail,
  getSelectedMorS,
  removeSelectedMorS,
} from "../../features/movies";
import "./movieDetail.scss";
const MovieDetail = () => {
  const dispatch = useDispatch();
  const { omdbId } = useParams();
  const data = useSelector(getSelectedMorS);

  useEffect(() => {
    dispatch(fetchAsyncDetail(omdbId));
    return () => {
      dispatch(removeSelectedMorS());
    };
  }, [dispatch, omdbId]);

  return (
    <div className="movie-section">
      {Object.keys(data).length === 0 ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="left-section">
            <div className="movie-title">
              <h2>{data.Title}</h2>
            </div>
            <div className="movie-details">
              <p>
                <span className="span-start">IMDB Rating:</span>{" "}
                {data.imdbRating === "N/A" ? (
                  "No Rating"
                ) : (
                  <span className="span-blue">{data.imdbRating}</span>
                )}
              </p>
              <p>
                <span className="span-start">IMDB Votes:</span>{" "}
                {data.imdbVotes === "N/A" ? "No Votes" : data.imdbVotes}
              </p>
              {data.Runtime === "N/A" ? (
                ""
              ) : (
                <p>
                  <span className="span-start">Run time:</span> {data.Runtime}{" "}
                </p>
              )}
              <p>
                {" "}
                <span className="span-start">Year:</span> {data.Year}{" "}
              </p>
              <div className="movie-plot">
                <p>{data.Plot} </p>
              </div>
              <div className="movie-info">
                <p>
                  <span className="span-start">Genres:</span>{" "}
                  <span className="span-blue">{data.Genre}</span>
                </p>
                <p>
                  <span className="span-start">Main Actors:</span> {data.Actors}
                </p>
                {data.Director === "N/A" ? (
                  ""
                ) : (
                  <p>
                    <span className="span-start">Director:</span>{" "}
                    {data.Director}{" "}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="img-section">
            <img src={data.Poster} alt="Poster of the movie" />
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetail;
