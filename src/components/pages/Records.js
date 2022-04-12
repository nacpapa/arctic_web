import React from "react";
import "../../App.css";
import CardItem from "../CardItem";

function Records() {
  return (
    <>
      <h1>RECORDS</h1>
      <div className="cards">
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                id="7"
                src="./records/royal.jpg"
                text="Live at the Royal Albert Hall"
                label="2020"
                path="/record"
              />
              <CardItem
                id="6"
                src="./records/tranquility.png"
                text="Tranquility Base Hotel & Casino"
                label="2018"
                path="/record"
              />
            </ul>
            <ul className="cards__items">
              <CardItem
                id="5"
                src="./records/am.jpg"
                text="AM"
                label="2013"
                path="/record"
              />
              <CardItem
                id="4"
                src="./records/suckit.jpg"
                text="Suck It and See"
                label="2011"
                path="/record"
              />
            </ul>
            <ul className="cards__items">
              <CardItem
                id="3"
                src="./records/humbug.jpg"
                text="Humbug"
                label="2009"
                path="/record"
              />
              <CardItem
                id="2"
                src="./records/favoriteworse.jpeg"
                text="Favorite Worst Nightmare"
                label="2007"
                path="/record"
              />
            </ul>
            <ul className="cards__items">
              <CardItem
                id="1"
                src="./records/whatever.jpeg"
                text="Whatever People Say I Am, That's What I'm Not"
                label="2006"
                path="/record"
              />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Records;
