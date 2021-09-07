import React from "react";
import { Link } from "react-router-dom";

const Navbar = ()=>{

  return (
    <nav>
      <Link to="/">
        <a>Home</a>
      </Link>
      <Link to="/Computers">
        <a>Computers</a>
      </Link>
    </nav>
  );

}

export default Navbar