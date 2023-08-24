import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import movieApi from "../api/movieApi";
import KEY from "../api/movieApiKey";

const randomN = Math.floor(Math.random() * 8);
const randomN2 = Math.floor(Math.random() * 22);
const randomS = [
  "game",
  "rick",
  "life",
  "earth",
  "alien",
  "break",
  "bad",
  "dark",
  "land",
];
const randomM = [
  "game",
  "after",
  "life",
  "earth",
  "alien",
  "bad",
  "dark",
  "hope",
  "x men",
  "The",
  "Man",
  "Day",
  "World",
  "Story",
  "War",
  "American",
  "Return",
  "last",
  "dead",
  "king",
  "time",
  "messi",
  "ronaldo",
];

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (inputValue) => {
    const resp = await movieApi.get(
      `?apikey=${KEY}&s=${
        inputValue ? inputValue : randomM[randomN2]
      }&type=movie`
    );
    return resp.data;
  }
);

export const fetchAsyncSeries = createAsyncThunk(
  "series/fetchAsyncSeries",
  async (inputSValue) => {
    const resp = await movieApi.get(
      `?apikey=${KEY}&s=${
        inputSValue ? inputSValue : randomS[randomN]
      }&type=series`
    );
    return resp.data;
  }
);

export const fetchAsyncDetail = createAsyncThunk(
  "movies/fetchAsyncDetail",
  async (id) => {
    const resp = await movieApi.get(`?apikey=${KEY}&i=${id}&Plot=full`);
    return resp.data;
  }
);

const initialState = {
  movies: {},
  series: {},
  selectMorS: {},
};
export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMorS: (state) => {
      return initialState;
    },
  },

  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, action) => {
      console.log("fetched successfully");
      return { ...state, movies: action.payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("req rejected");
    },
    [fetchAsyncSeries.fulfilled]: (state, action) => {
      console.log("fetched successfully");
      return { ...state, series: action.payload };
    },
    [fetchAsyncDetail.fulfilled]: (state, action) => {
      console.log("fetched successfully");
      return { ...state, selectMorS: action.payload };
    },
  },
});

export const { removeSelectedMorS } = movieSlice.actions;

export const getAllMovies = (state) => state.movies.movies;
export const getAllSeries = (state) => state.movies.series;
export const getSelectedMorS = (state) => state.movies.selectMorS;

export default movieSlice.reducer;
