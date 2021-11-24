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
    <div className="signIn-container">
      <Navbar />

      <div className="signIn-form fadeInDown">
        <form className="signIn-form-content">
          <h1 className="signIn-form-title">Sign In</h1>

          <div className="signIn-form-input">
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
          </div>

          <div>
            <Link to={"/allContacts"}>
              <button className="signIn-form-button" type='submit'>Send</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
