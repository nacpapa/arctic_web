import React, { useState, useEffect } from "react";
import "../../../App.css";
import Record from "./Record";
import recordsInfo from "./data/data.js";

const data = recordsInfo;

// ENTIENDO QUE ESTO LO PODRIAMOS HACER CON UN RENDERIZADO CONDICIONAL PERO: 1. ESTOY TRABAJANDO EN ESO 2. CREO QUE SE ENTIENDE BIEN EL CODIGO ASI
function RecordRender() {
  const [tittle, setTittle] = useState("");
  const [src, setSrc] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");

  const render = () => {
    data.map(function (d) {
      if (d.id == localStorage.getItem("id")) {
        console.log(localStorage.getItem("id"));
        setTittle(d.tittle);
        setSrc(d.src);
        setLink(d.link);
        setDescription(d.description);
      } else {
      }
    });
  };

  useEffect(() => {
    render();
  }, []);
  return (
    <>
      <Record tittle={tittle} src={src} link={link} description={description} />
    </>
  );
}

export default RecordRender;
