import React from "react";
import Card from "../card/Card";
import { cars } from "./carsData";
import "./carsList.style.css";

const CarsList = () => {
  const showCars = cars.map((el, index) => {
    return <Card key={index} cardData={el} />;
  });

  return (
    <>
      <div className="list-box">
        <span className="title">
          <h1>List of cars:</h1>
        </span>
        {showCars}
      </div>
    </>
  );
};

export default CarsList;
