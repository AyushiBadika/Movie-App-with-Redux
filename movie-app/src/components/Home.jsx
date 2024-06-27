import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchtrendingMoviesByDay, fetchtrendingMoviesByWeek } from "../slice";
import Search from "./Search";
import MovieDisplay from "./MovieDisplay";

export default function Home() {
  const dispatch = useDispatch();
  const { trendingMovieByDay, trendingMovieByWeek } = useSelector((state) => {
    return state.movieReducer;
  });

  useEffect(() => {
    dispatch(fetchtrendingMoviesByDay());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchtrendingMoviesByWeek());
  }, [dispatch]);

  console.log(trendingMovieByDay, trendingMovieByWeek);

  return (
    <div>
      <Search />
      <MovieDisplay data={trendingMovieByDay} />
      <MovieDisplay data={trendingMovieByWeek} />
    </div>
  );
}
