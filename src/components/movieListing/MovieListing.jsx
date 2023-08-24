import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import movies, { getAllMovies, getAllSeries } from "../../features/movies";
import MovieCard from "../movieCard/MovieCard";
import "./movieListing.scss";
import { fetchAsyncMovies, fetchAsyncSeries } from "../../features/movies";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const series = useSelector(getAllSeries);

  const renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => {
        return <MovieCard key={index} data={movie} />;
      })
    ) : (
      <div className="movie-error">
        <h3>No data to display.</h3>
      </div>
    );

  const renderSeries =
    series.Response === "True" ? (
      series.Search.map((show, index) => {
        return <MovieCard key={index} data={show} />;
      })
    ) : (
      <div className="movie-error">
        <h3>No data to display.</h3>
      </div>
    );
  //code dyali ///////////-------------------------------
  const [inputValue, setInputValue] = useState("");
  const [inputSValue, setInputSValue] = useState("");
  const dispatch = useDispatch();
  const handleFetchData = () => {
    dispatch(fetchAsyncMovies(inputValue));
    setInputValue("");
  };
  const handleFetchSData = () => {
    dispatch(fetchAsyncSeries(inputSValue));
    setInputSValue("");
  };
  const handleKeyMDown = (event) => {
    if (event.key === "Enter") {
      dispatch(fetchAsyncMovies(inputValue));
      setInputValue("");
    }
  };
  const handleKeySDown = (e) => {
    if (e.key === "Enter") {
      dispatch(fetchAsyncSeries(inputSValue));
      setInputSValue("");
    }
  };
  ///////////------------------------------------------

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <div className="movie-backgr">
          <h2> Movies </h2>
        </div>
        <div className="input-btn-con">
          <input
            type="text"
            placeholder="Enter Movie Name"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyMDown}
          />
          <button onClick={handleFetchData}>Search Now</button>
        </div>
        <div className="movie-container">{renderMovies}</div>
      </div>
      <div className="movie-list">
        <div className="movie-backgr">
          <h2> Series </h2>
        </div>
        <div className="input-btn-con">
          <input
            type="text"
            placeholder="Enter Serie Name"
            value={inputSValue}
            onChange={(e) => setInputSValue(e.target.value)}
            onKeyDown={handleKeySDown}
          />
          <button onClick={handleFetchSData}>Search Now</button>
        </div>
        <div className="movie-container">{renderSeries}</div>
      </div>
    </div>
  );
};

export default MovieListing;
