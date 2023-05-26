import React from "react";
import Button from "../button/Button";
import PropTypes from "prop-types";
import "./modalComponent.style.css";

const ModalComponent = (props) => {
  console.log(props);
  return (
    <div className="overlay">
      <div className="modal">
        <img src={props.image} className="modal-img" alt="modal" />
        <div className="right-side">
          <h2>{props.name}</h2>
          <div class="content">
            {props.description}
            {props.hobby}
          </div>
          <div onClick={props.onClick}>
            <Button text="Close" className="btn" />
          </div>
        </div>
      </div>
    </div>
  );
};

ModalComponent.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  description: PropTypes.string,
  hobby: PropTypes.string,
};

export default ModalComponent;
