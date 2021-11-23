import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./navBar";
import TextInput from "./textInput";

function SignUp() {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
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

      <div className="signUp-form fadeInDown">
        <form className="signUp-form-content">
          <h1 className="signUp-form-title">Register</h1>

          <TextInput
            label="Name"
            type="text"
            name="name"
            id="signupFormName"
            value={state.name}
            onChange={handleChange}
          />

          <TextInput
            label="E-mail"
            type="email"
            name="email"
            id="signupFormEmail"
            value={state.email}
            onChange={handleChange}
          />

          <TextInput
            label="Password"
            type="password"
            name="password"
            id="signupFormPassword"
            value={state.password}
            onChange={handleChange}
          />

          <TextInput
            label="Phone Number"
            type="text"
            name="phoneNumber"
            id="signupFormphoneNumber"
            value={state.phoneNumber}
            onChange={handleChange}
          />

          <div style={{ backgroundColor: "white" }}>
            <Link to={"/"} style={{ backgroundColor: "white" }}>
              <button className="signUp-form-button">Send</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
