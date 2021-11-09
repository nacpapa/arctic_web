import React, { Component } from "react";
import { Button } from "./Button";
import "./HeroSection.css";
import "../App.css";
import { ExternalButton } from "./Externalbutton";

function HeroSection() {
  return (
    <div className="hero-container">
      <img src="./img-1.jpg" alt="fondo" />
      <h1>IT'S THE STAR TREATMENT </h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          page="sign-up"
        >
          GET STARTED
        </Button>
        <ExternalButton
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          link="https://www.youtube.com/watch?v=f_2rM8A_1-w"
        >
          WATCH NOW
          <i className="far fa-play-circle" />
        </ExternalButton>
      </div>
    </div>
  );
}

export default HeroSection;
