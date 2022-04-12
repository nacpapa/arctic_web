import React, { Component } from "react";
import "../../HeroSection.css";
import "../../../App.css";

function Show(props) {
  return (
    <div className="show-container">
      <iframe
        width="660"
        height="415"
        src={props.src}
        title={props.tittle}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default Show;
