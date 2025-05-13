import React from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Navbar() {
  return (
    <nav className="px-5 bg-black/30 shadow flex justify-between items-center py-5">
      <Link to='/'>
        
        <i className="fa-solid fa-house text-2xl"></i>
      </Link>

      <ul className="flex gap-4 items-center">
      <li>
          <Link className="btn btn-neutral" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="btn btn-neutral" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="btn btn-neutral" to="/contact">
            Contact
          </Link>
        </li>
        <li>
          <Link className="btn btn-neutral" to="/projects">
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
