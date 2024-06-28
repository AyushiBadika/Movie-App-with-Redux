import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const fetchTrendingMovies = createAsyncThunk(
  "fetchTrendingMovies",
  async () => {
    try {
      const [day, week] = await Promise.all([
        axios.get(
          "https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=" +
            import.meta.env.VITE_TMDB_API_KEY
        ),
        axios.get(
          "https://api.themoviedb.org/3/trending/movie/week?language=en-US&api_key=" +
            import.meta.env.VITE_TMDB_API_KEY
        ),
      ]);
      return {
        trendingMovieByDay: day.data.results,
        trendingMovieByWeek: week.data.results,
      };
    } catch (error) {
      return error;
    }
  }
);
export const fetchPopularMoviesAndTVShows = createAsyncThunk(
  "fetchPopular",
  async () => {
    try {
      const [movie, tv] = await Promise.all([
        axios.get(
          "https://api.themoviedb.org/3/movie/popular?language=en-US&api_key=" +
            import.meta.env.VITE_TMDB_API_KEY
        ),
        axios.get(
          "https://api.themoviedb.org/3/tv/popular?language=en-US&api_key=" +
            import.meta.env.VITE_TMDB_API_KEY
        ),
      ]);
      return {
        popularMovies: movie.data.results,
        popularTVShows: tv.data.results,
      };
    } catch (error) {
      return error;
    }
  }
);
export const fetchTopRatedMoviesAndTVShows = createAsyncThunk(
  "fetchTopRated",
  async () => {
    try {
      const [movie, tv] = await Promise.all([
        axios.get(
          "https://api.themoviedb.org/3/movie/top_rated?language=en-US&api_key=" +
            import.meta.env.VITE_TMDB_API_KEY
        ),
        axios.get(
          "https://api.themoviedb.org/3/tv/top_rated?language=en-US&api_key=" +
            import.meta.env.VITE_TMDB_API_KEY
        ),
      ]);
      return {
        topRatedMovies: movie.data.results,
        topRatedTVShows: tv.data.results,
      };
    } catch (error) {
      return error;
    }
  }
);

export const fetchSearchedMovies = createAsyncThunk(
  "searchMovie",
  async (searchTerm) => {
    try {
      const result = await axios.get(
        "https://api.themoviedb.org/3/search/movie?query= " +
          searchTerm +
          "&include_adult=false&language=en-US&api_key=" +
          import.meta.env.VITE_TMDB_API_KEY
      );

      return result.data.results;
    } catch (error) {
      return error;
    }
  }
);

const slice = createSlice({
  name: "movieSlice",
  initialState: {
    trendingMovieByDay: [],
    trendingMovieByWeek: [],
    popularMovies: [],
    popularTVShows: [],
    topRatedMovies: [],
    topRatedTVShows: [],
    searchMovie: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // eslint-disable-next-line no-unused-vars
      .addCase(fetchTrendingMovies.pending, (state, action) => {
        state.status = "Loading...";
      })
      .addCase(fetchTrendingMovies.fulfilled, (state, action) => {
        state.trendingMovieByDay = action.payload.trendingMovieByDay;
        state.trendingMovieByWeek = action.payload.trendingMovieByWeek;
      })
      .addCase(fetchTrendingMovies.rejected, (state, action) => {
        state.status = "There is an error";
        state.error = action.payload;
      })
      .addCase(fetchPopularMoviesAndTVShows.pending, (state, action) => {
        state.status = "Loading...";
      })
      .addCase(fetchPopularMoviesAndTVShows.fulfilled, (state, action) => {
        state.popularMovies = action.payload.popularMovies;
        state.popularTVShows = action.payload.popularTVShows;
      })
      .addCase(fetchPopularMoviesAndTVShows.rejected, (state, action) => {
        state.status = "There is an error";
        state.error = action.payload;
      })
      .addCase(fetchTopRatedMoviesAndTVShows.pending, (state, action) => {
        state.status = "Loading...";
      })
      .addCase(fetchTopRatedMoviesAndTVShows.fulfilled, (state, action) => {
        state.topRatedMovies = action.payload.topRatedMovies;
        state.topRatedTVShows = action.payload.topRatedTVShows;
      })
      .addCase(fetchTopRatedMoviesAndTVShows.rejected, (state, action) => {
        state.status = "There is an error";
        state.error = action.payload;
      })
      .addCase(fetchSearchedMovies.pending, (state, action) => {
        state.status = "Loading...";
      })
      .addCase(fetchSearchedMovies.fulfilled, (state, action) => {
        state.searchMovie = action.payload;
      })
      .addCase(fetchSearchedMovies.rejected, (state, action) => {
        state.status = "There is an error";
        state.error = action.payload;
      });
  },
});

export const sliceReducer = slice.reducer;
