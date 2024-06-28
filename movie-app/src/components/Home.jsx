import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchTrendingMovies,
  fetchPopularMoviesAndTVShows,
  fetchTopRatedMoviesAndTVShows,
} from "../slice";
import Search from "./Search";
import MoviesDisplay from "./MoviesDisplay";

export default function Home() {
  const dispatch = useDispatch();
  const {
    trendingMovieByDay,
    trendingMovieByWeek,
    popularMovies,
    popularTVShows,
    topRatedMovies,
    topRatedTVShows,
  } = useSelector((state) => {
    return state.movieReducer;
  });

  useEffect(() => {
    dispatch(fetchTrendingMovies());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchPopularMoviesAndTVShows());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchTopRatedMoviesAndTVShows());
  }, [dispatch]);

  // console.log(
  //   trendingMovieByDay,
  //   trendingMovieByWeek,
  //   popularMovies,
  //   popularTVShows,
  //   topRatedMovies,
  //   topRatedTVShows
  // );

  return (
    <div className="p-10">
      <Search />
      <MoviesDisplay
        heading="Trending"
        option1={trendingMovieByDay}
        option2={trendingMovieByWeek}
        choice1="Day"
        choice2="Week"
      />
      <MoviesDisplay
        heading="Popular"
        option1={popularMovies}
        option2={popularTVShows}
        choice1="Movies"
        choice2="TV Shows"
      />
      <MoviesDisplay
        heading="Top Rated"
        option1={topRatedMovies}
        option2={topRatedTVShows}
        choice1="Movies"
        choice2="TV Shows"
      />
    </div>
  );
}
