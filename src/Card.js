import React, { useState, useEffect } from "react";
import "./App.css";
import data from "./data.json";

function Card(props) {
  console.log(props.image);
  return (
    <div className="card">
      <div className="img-logo-details">
        <div className="img-container">
          <img
            className="img-logo"
            src={require(`${props.image}`)}
            alt={props.name}
          />
        </div>
        <div className="details">
          <h2 className="name">{props.name}</h2>
          <p className="age">{props.age} years old</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
