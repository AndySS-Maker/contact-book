import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link to={"/"}>
        <i className="fas fa-home"></i>
      </Link>

      <Link to={"/allContacts"}>
        <i className="far fa-user"></i>
      </Link>

      <Link to={"/newContact"}>
        <i className="far fa-plus-square"></i>
      </Link>
    </div>
  );
}

export default Navbar;
