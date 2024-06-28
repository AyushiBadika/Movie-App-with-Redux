import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/search/" + searchTerm);
  }

  return (
    <section className="search">
      <div className="search-component">
        <h1>Welcome.</h1>
        <p>Millions of movies, TV shows and people to discover. Explore now.</p>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search for a movie or TV show..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </section>
  );
}
