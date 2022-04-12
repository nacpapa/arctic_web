import React, { useState, useEffect } from "react";
import Show from "./Show";
import showsInfo from "./data/data.js";

const data = showsInfo;

function ShowRender() {
  const [tittle, setTittle] = useState("");
  const [src, setSrc] = useState("");

  const render = () => {
    data.map(function (d) {
      if (d.id == localStorage.getItem("id")) {
        setTittle(d.tittle);
        setSrc(d.src);
      } else {
      }
    });
  };

  useEffect(() => {
    render();
  }, []);
  return (
    <>
      <Show src={src} tiitle={tittle} />
    </>
  );
}

export default ShowRender;
