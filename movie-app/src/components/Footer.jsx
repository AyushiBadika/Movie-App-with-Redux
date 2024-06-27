import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer>
        <ul>
          <li>
            <Link to="">Terms Of Use</Link>
          </li>
          <li>
            <Link to="">Privacy Policy</Link>
          </li>
          <li>
            <Link to="">About</Link>
          </li>
          <li>
            <Link to="">Blog</Link>
          </li>
          <li>
            <Link to="">FAQ</Link>
          </li>
        </ul>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <ul>
          <li>
            <Link to="">Facebook</Link>
          </li>
          <li>
            <Link to="">Instagram</Link>
          </li>
          <li>
            <Link to="">Twitter</Link>
          </li>
          <li>
            <Link to="">Linkedin</Link>
          </li>
        </ul>
      </footer>
    </>
  );
}

export default Footer;
