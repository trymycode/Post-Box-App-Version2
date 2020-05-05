import React from "react";
import logo from "../../img/profile-pic-logo.png";
const PersonDetails = (props) => {
  if (props) {
    return (
      <div className="container profile-container">
        <div className="card z-depth-0">
          <div className="cardContent">
            <img src={props.details.imageUrl == ""? logo: props.details.imageUrl} className="profilePic" />
            <div className="prof-details">
            <span className="cardDesc" id="nameColor">
              {props.firstName + " " + props.lastName}
            </span>
            <p className="cardDesc" id="emailColor">
              {props.emailId}
            </p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>loading....</div>;
  }
};
export default PersonDetails;
