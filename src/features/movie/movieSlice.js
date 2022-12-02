import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: [],
  featured: [],
  watchlist: [],
  isLoading: false,
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setFeatured: (state, action) => {
      state.featured = action.payload;
    },
    setWatchlist: (state, action) => {
      state.watchlist = [...state.watchlist, action.payload];
    },
    addRemoveToWatchlist: (state, action) => {
      if (state.watchlist.find((film) => film.id === action.payload)) {
        const newWatchlist = state.watchlist.filter((film) => film.id !== action.payload);
        state.watchlist = newWatchlist;
      } else {
        const selectedMovie = state.movies.find((film) => film.id === action.payload);
        state.watchlist = [...state.watchlist, selectedMovie];
      }
    },

  },
});

export default movieSlice.reducer;
export const {
  setMovies,
  setIsLoading,
  setFeatured,
  addRemoveToWatchlist
} = movieSlice.actions;
