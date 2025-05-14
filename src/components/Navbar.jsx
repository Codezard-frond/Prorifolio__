import React from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Navbar() {
  return (
    <nav className="px-5 bg-black/30 shadow flex justify-between items-center py-5">
      <Link to="/">
       <img className="w-[200px] h-[70px] object-cover" src="./images/photo_2025-05-05_23-49-40-Photoroom.png" alt="" />
      </Link>

      <ul className="flex gap-4 items-center">
        <li>
          <Link className="btn btn-neutral bg-black/20 border-none" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link
            className="btn btn-neutral  bg-black/20 border-none"
            to="/about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="btn btn-neutral  bg-black/20 border-none"
            to="/contact"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            className="btn btn-neutral  bg-black/20 border-none"
            to="/projects"
          >
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
