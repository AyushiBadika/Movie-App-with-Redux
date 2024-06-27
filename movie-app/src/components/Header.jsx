import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div>
      <h1>MovieX</h1>
      <ul>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/tv">TV Shows</Link>
        </li>
      </ul>
    </div>
  );
}
