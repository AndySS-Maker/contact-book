import React from "react";
import { Link } from "react-router-dom";
function AllContactsCard(props) {
  return (
    <div>
      <Link to={`/contactBook/${props._id}`} title="All Contacts">
        <h2 className="allContact-card">{props.name}</h2>
      </Link>
    </div>
  );
}

export default AllContactsCard;
