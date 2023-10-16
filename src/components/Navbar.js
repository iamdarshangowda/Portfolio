import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar(props) {
  const location = useLocation();

  return (
    <div className="navbar">
      <Link
        to="/"
        className="nav"
        style={
          location.pathname === "/" ? { borderBottom: "3px solid #606c38" } : {}
        }
      >
        Home
      </Link>
      <Link
        to="/Projects"
        className="nav"
        style={
          location.pathname === "/Projects"
            ? { borderBottom: "3px solid #606c38" }
            : {}
        }
      >
        Projects
      </Link>
      <Link
        to="/Skills"
        className="nav"
        style={
          location.pathname === "/Skills"
            ? { borderBottom: "3px solid #606c38" }
            : {}
        }
      >
        Skills
      </Link>
      <Link
        to="/Blogs"
        className="nav"
        style={
          location.pathname === "/Blogs"
            ? { borderBottom: "3px solid #606c38" }
            : {}
        }
      >
        Blogs
      </Link>
      <Link
        to="/About"
        className="nav"
        style={
          location.pathname === "/About"
            ? { borderBottom: "3px solid #606c38" }
            : {}
        }
      >
        About
      </Link>
    </div>
  );
}
