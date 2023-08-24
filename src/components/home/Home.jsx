import React, { useEffect, useState } from "react";
import MovieListing from "../movieListing/MovieListing";
import "./home.scss";
import { fetchAsyncMovies, fetchAsyncSeries } from "../../features/movies";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncSeries());
  }, []);

  return (
    <div className="home">
      <div className="banner-image"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
