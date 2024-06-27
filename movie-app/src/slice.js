import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const fetchtrendingMoviesByDay = createAsyncThunk(
  "fetchTrendingMoviesByDay",
  async () => {
    try {
      const result = await axios.get(
        "https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=" +
          import.meta.env.VITE_TMDB_API_KEY
      );
      return result.data.results;
    } catch (error) {
      return error;
    }
  }
);

export const fetchtrendingMoviesByWeek = createAsyncThunk(
  "fetchTrendingMoviesBYWeek",
  async () => {
    try {
      const result = await axios.get(
        "https://api.themoviedb.org/3/trending/movie/week?language=en-US&api_key=" +
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
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchtrendingMoviesByDay.pending, (state, action) => {
        state.status = "Loading...";
      })
      .addCase(fetchtrendingMoviesByDay.fulfilled, (state, action) => {
        state.trendingMovieByDay = action.payload;
      })
      .addCase(fetchtrendingMoviesByDay.rejected, (state, action) => {
        state.status = "There is an error";
        state.error = action.payload;
      })
      .addCase(fetchtrendingMoviesByWeek.pending, (state, action) => {
        state.status = "Loading...";
      })
      .addCase(fetchtrendingMoviesByWeek.fulfilled, (state, action) => {
        state.trendingMovieByWeek = action.payload;
      })
      .addCase(fetchtrendingMoviesByWeek.rejected, (state, action) => {
        state.status = "There is an error";
        state.error = action.payload;
      });
  },
});

export const sliceReducer = slice.reducer;
