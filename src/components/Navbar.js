import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/login">login</Link>
        </li>
        <li>
          <Link to="/register">register</Link>
        </li>
        <li>
          <Link to="/welcome">welcome</Link>
        </li>
        <li>
          <Link to="/info">info</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
