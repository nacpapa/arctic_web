import React, { useState } from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>LASTEST SHOWS</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              id="105"
              src="./shows/brasil.jpeg"
              text="Lollapolooza Brazil"
              label="05.04.19"
              path="/show"
            />
            <CardItem
              id="104"
              src="./shows/colombia.jpg"
              text="Estereo Picnic Festival"
              label="05.04.19"
              path="/show"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              id="103"
              src="./shows/chile.jpg"
              text="Lollapolooza Chile"
              label="31.03.19"
              path="/show"
            />
            <CardItem
              id="102"
              src="./shows/argentina.jpg"
              text="Lollapolooza Argentina"
              label="30.03.19"
              path="/show"
            />
            <CardItem
              id="101"
              src="./shows/paraguay.jpg"
              text="Asunciónico"
              label="28.03.19"
              path="/show"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
