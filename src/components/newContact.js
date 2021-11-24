import React from "react";
import { Component } from "react";
import axios from "axios";

import TextInput from "./textInput";
import Navbar from "./navBar";

class NewContact extends Component {
  state = {
    name: "",
    cep: "",
    address: "",
    phoneNumber: "",
    email: "",
    note: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  
  handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "https://ironrest.herokuapp.com/contactBook",
      this.state
    );

    console.log({ response });

    this.setState({
      name: "",
      cep: "",
      address: "",
      phoneNumber: "",
      email: "",
      note: "",
    });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });

    const value = e.target.value
    if(value.length === 8){
      axios.get(
     `https://viacep.com.br/ws/${value}/json/` 
    ).then(
      res => {
        this.setState({
          ...this.state , address: res.data.logradouro
        })
      }
    )
    }
  }

  render() {
    
    return (
      <div className="newContact-container">
        <Navbar />
        <div className="newContact-form fadeInDown">
          <form className="newContact-form-content">
            <h1 className="newContact-form-title">New Contact</h1>
            
            <div className='newContact-form-input'>
              <TextInput
              label="Name"
              type="text"
              name="name"
              id="newContact-name"
              value={this.state.name}
              onChange={this.handleChange}
            />

            <TextInput
              label="Phone Number"
              type="text"
              name="phoneNumber"
              id="newContact-phoneNumber"
              value={this.state.phoneNumber}
              onChange={this.handleChange}
            />

            <TextInput
              label="E-mail"
              type="email"
              name="email"
              id="newContact-email"
              value={this.state.email}
              onChange={this.handleChange}
            />

            <TextInput
              label="Search by CEP"
              type="number"
              name="cep"
              id="newContact-cep"
              value={this.state.cep}
              onChange={this.onChange}
            />
            
            <TextInput
              label="Address"
              type="text"
              name="address"
              id="newContact-address"
              value={this.state.address}
              onChange={this.handleChange}
            />

            <TextInput
              label="Note"
              type="text"
              name="note"
              id="newContact-note"
              value={this.state.note}
              onChange={this.handleChange}
            />
            </div>

            <div>
              <button
                onClick={this.handleSubmit}
                className="newContact-form-button"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default NewContact;
