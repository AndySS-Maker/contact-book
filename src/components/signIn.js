import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./navBar";
import TextInput from "./textInput";

function SignIn() {
  const [state, setState] = useState({
    name: "",
    password: "",
  });

  function handleChange(event) {
    if (event.target.files) {
      return setState({
        ...state,
        [event.currentTarget.name]: event.currentTarget.files[0],
      });
    }

    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  return (
    <div>
      <Navbar />

      <div className="signIn-form fadeInDown">
        <form className="signIn-form-content">
          <h1 className="signIn-form-title">Sign In</h1>

          <TextInput
            label="Name"
            type="text"
            name="name"
            id="signInFormName"
            value={state.name}
            onChange={handleChange}
          />

          <TextInput
            label="Password"
            type="password"
            name="password"
            id="signInFormPassword"
            value={state.password}
            onChange={handleChange}
          />

          <div style={{ backgroundColor: "white" }}>
            <Link to={"/allContacts"} style={{ backgroundColor: "white" }}>
              <button className="signIn-form-button">Send</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
