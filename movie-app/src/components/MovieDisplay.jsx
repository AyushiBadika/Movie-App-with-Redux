/* eslint-disable react/prop-types */
export default function MovieDisplay({ data }) {
  const img_base_path = "https://image.tmdb.org/t/p/original/";
  return (
    <>
      {data.map((movie, index) => {
        return (
          <div className="movieBlock" key={index}>
            <img
              src={img_base_path + movie.poster_path}
              alt={movie.title}
              className="w-1/2 h-10"
            />
            <h3>{movie.title || movie.original_title}</h3>
          </div>
        );
      })}
    </>
  );
}
