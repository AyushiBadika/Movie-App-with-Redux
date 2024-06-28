import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSearchedMovies } from "../slice";
import noPoster from "../assets/no-poster.png";
import { useEffect } from "react";
import "../movies.css";

export default function SearchResult() {
  const { searchTerm } = useParams;

  function formatDate(dateString) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  }
  const img_base_path = "https://image.tmdb.org/t/p/original/";

  const dispatch = useDispatch();

  const { searchMovie } = useSelector((state) => {
    return state.movieReducer;
  });

  console.log(searchMovie);
  useEffect(() => {
    dispatch(fetchSearchedMovies(searchTerm));
  }, [dispatch, searchTerm]);
  return (
    <>
      <h2>{`Searched Result for ${searchTerm}`}</h2>

      <div id="movieDisplay">
        {searchMovie &&
          searchMovie.map((movie, index) => {
            return (
              <div className="movie" key={index}>
                <div className="image-container">
                  <img
                    src={
                      movie.poster_path
                        ? img_base_path + movie.poster_path
                        : noPoster
                    }
                    alt={movie.title || movie.original_title}
                  />
                </div>
                <div className="info">
                  <h3>
                    {movie.title ||
                      movie.original_title ||
                      movie.name ||
                      movie.original_name}
                  </h3>
                  <p>
                    {movie.release_date
                      ? formatDate(movie.release_date)
                      : formatDate(movie.first_air_date) &&
                        "No Release Date Available"}
                  </p>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}
