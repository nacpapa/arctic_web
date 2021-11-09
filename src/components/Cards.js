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
              src="./shows/brasil.jpeg"
              text="Lollapolooza Brazil"
              label="05.04.19"
              path="/royal-albert-hall"
            />
            <CardItem
              src="./shows/colombia.jpg"
              text="Estereo Picnic Festival"
              label="05.04.19"
              path="/tranquility-base"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="./shows/chile.jpg"
              text="Lollapolooza Chile"
              label="31.03.19"
              path="/am"
            />
            <CardItem
              src="./shows/argentina.jpg"
              text="Lollapolooza Argentina"
              label="30.03.19"
              path="/argentina-show"
            />
            <CardItem
              src="./shows/paraguay.jpg"
              text="Asunciónico"
              label="28.03.19"
              path="/records"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
