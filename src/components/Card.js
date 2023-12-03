import React, { useState, useEffect } from "react";
import "../css/card.css";
import image from "../assets/1.jpg";

function Card(props) {
  console.log(props.image);

  const [image, setImage] = useState(null);

  useEffect(() => {
    import(`../assets/${props.image}`)
      .then((image) => setImage(image.default))
      .catch((error) => console.error(error));
  }, [props.image]);
  
  return (
    <div className="card">
      <div className="img-logo-details">
        <div className="img-container">
          <img
            className="img-logo"
            // src={require(`${props.image}`)}
            src={image}
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
