import React from "react";
import { Component } from "react";
import axios from "axios";

import Navbar from "./navBar";
import AllContactsCard from "./allContactsCard";
// import SearchContact from './searchContact';

class AllContacts extends Component {
  state = {
    allContacts: [],
    filtered: [],
  };
  componentDidMount = async () => {
    try {
      const response = await axios.get(
        "https://ironrest.herokuapp.com/contactBook"
      );

      const { data } = response;
      const filteredData =[...data]
        filteredData.sort((a, b) => {
        const aName = a.name.toLowerCase()
        const bName = b.name.toLowerCase()

        if (aName > bName) {
          return 1;
        }
        if (aName < bName) {
          return -1;
        }
        return 0;
      });
      
      console.log({ data, filteredData });

      this.setState({
        allContacts: data,
        filtered: filteredData,
      });
    } catch (error) {
      console.log(error);
    }
  };

  filterContact = (input) => {
    const filtered = this.state.allContacts.filter((contact) =>
      contact.name.toLowerCase().includes(input.toLowerCase())
    );
    this.setState({ filtered });
  };

  render() {
    return (
      <div>
        <Navbar />
        {/* <SearchContact filterContact={this.filterContact} /> */}

        <div>
          <h1 className="allContacts-title">Contatos</h1>

          <div>
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
