import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "../features/movies";

const store = configureStore({
  reducer: {
    movies: movieSlice,
  },
});

export default store;
