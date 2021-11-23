import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import Navbar from "./navBar";

const ContacDetails = (props) => {
  const [contactDetails, setContactDetails] = useState({
    name: "",
    address: "",
    phoneNumber: "",
    email: "",
    note: "",
  });

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://ironrest.herokuapp.com/contactBook/${id}`)
      .then((res) => setContactDetails({ ...res.data }))
      .catch((error) => console.error(error));
  });

  return (
    <div>
      <Navbar />

      <div className="contact-detail">
        <h1 className="contact-detail-name">{contactDetails.name}</h1>

        <h2 className="contact-detail-title">Phone number</h2>
        <p className="contact-detail-content">{contactDetails.phoneNumber}</p>

        <h2 className="contact-detail-title">Address</h2>
        <p className="contact-detail-content">{contactDetails.address}</p>

        <h2 className="contact-detail-title">E-mail</h2>
        <p className="contact-detail-content">{contactDetails.email}</p>

        <h2 className="contact-detail-title">Note</h2>
        <p className="contact-detail-content" style={{ height: "140px" }}>
          {contactDetails.note}
        </p>
      </div>
    </div>
  );
};

export default ContacDetails;
