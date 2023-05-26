import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "../button/Button";
import ModalComponent from "../modalComponent/ModalComponent";
import "./card.style.css";

const Card = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onClickShowModal = () => {
    setIsModalOpen(true);
  };

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
          <Button
            text="Open"
            className="btn"
            type="button"
            onClick={onClickShowModal}
          />
        </div>
      </p>
      {isModalOpen && (
        <ModalComponent
          onClick={() => setIsModalOpen(false)}
          title={name}
          image={picture}
          description={description}
          hobby={hobby}
          name={name}
        />
      )}
    </div>
  );
};

Card.propTypes = {
  cardData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    picture: PropTypes.string.isRequired,
    hobby: PropTypes.string,
  }),
};

export default Card;
