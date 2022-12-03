import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/" className="nav">
        Home
      </Link>
      <Link to="/Projects" className="nav">
        Projects
      </Link>
      <Link to="/Skills" className="nav">
        Skills
      </Link>
      <Link to="/Blogs" className="nav">
        Blogs
      </Link>
      <Link to="/About" className="nav">
        About
      </Link>
    </div>
  );
}
