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
                src="./records/royal.jpg"
                text="Live at the Royal Albert Hall"
                label="2020"
                path="/royal-albert-hall"
              />
              <CardItem
                src="./records/tranquility.png"
                text="Tranquility Base Hotel & Casino"
                label="2018"
                path="/tranquility-base"
              />
            </ul>
            <ul className="cards__items">
              <CardItem
                src="./records/am.jpg"
                text="AM"
                label="2013"
                path="/am"
              />
              <CardItem
                src="./records/suckit.jpg"
                text="Suck It and See"
                label="2011"
                path="/suck-it"
              />
            </ul>
            <ul className="cards__items">
              <CardItem
                src="./records/humbug.jpg"
                text="Humbug"
                label="2009"
                path="/humbug"
              />
              <CardItem
                src="./records/favoriteworse.jpeg"
                text="Favorite Worst Nightmare"
                label="2007"
                path="/favorite-worst"
              />
            </ul>
            <ul className="cards__items">
              <CardItem
                src="./records/whatever.jpeg"
                text="Whatever People Say I Am, That's What I'm Not"
                label="2006"
                path="/whatever"
              />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Records;
