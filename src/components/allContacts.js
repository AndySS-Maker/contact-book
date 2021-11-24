import React from "react";
import { Component } from "react";
import axios from "axios";

import Navbar from "./navBar";
import AllContactsCard from "./allContactsCard";
import SearchContact from './searchContact';

class AllContacts extends Component {
  state = {
    allContacts: [],
    filtered: [],
  };

  updataState = (value) => {
    this.setState({...this.state, filtered: value})
  }

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        "https://ironrest.herokuapp.com/contactBook"
      );

      const { data } = response;
      const orderedData = [...data];
      orderedData.sort((a, b) => {
        const aName = a.name.toLowerCase();
        const bName = b.name.toLowerCase();

        if (aName > bName) {
          return 1;
        }
        if (aName < bName) {
          return -1;
        }
        return 0;
      });

      this.setState({
        allContacts: orderedData,
        filtered: orderedData,
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className="allContacts">
        <Navbar />
        <SearchContact state={this.state} updataState={this.updataState} />

        <div>
          <h1 className="allContacts-title">Contatos</h1>

          <div className="allContacts-content">
            {this.state.filtered.map((contact) => (
              <AllContactsCard key={contact._id} {...contact} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default AllContacts;
