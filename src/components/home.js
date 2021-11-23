import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="homePage">
      <h1 className="homePage-title">Welcome to Contact Book !</h1>

      <div className="homePage-icon">
        <i className="far fa-user"></i>
      </div>

      <div>
        <div className="homePage-button-signIn">
          <Link to={"/signIn"}>
            <button className="homePage-button-title">Sign in</button>
          </Link>
        </div>
        <div className="homePage-button-signUp">
          <Link to={"/signUp"}>
            <button className="homePage-button-title">Sign up</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
