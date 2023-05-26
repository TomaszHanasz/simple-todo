import React from "react";
import PropTypes from "prop-types";
import Button from "../button/Button";
import "./card.style.css";

const Card = (props) => {
  const { name, description, hobby, picture } = props.cardData;
  return (
    <div className="single-car">
      <img src={picture} className="car-photo" alt="car" />
      <p className="car-info">
        {name} <br />
        <div className="description">
          {description}
          {hobby}
          <br />
          <Button />
        </div>
      </p>
    </div>
  );
};

Card.propTypes = {
  cardData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    hobby: PropTypes.string,
  }),
};

export default Card;
